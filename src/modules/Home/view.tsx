import texture from '@/assets/texture.png'
import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import Input from '@/components/common/Input'
import LoadingOverlay from '@/components/common/Loading/LoadingOverlay'
import { STORAGE_KEY } from '@/lib/config'
import useLocalStorage from '@/lib/hooks/useLocalStorage'
import { appendSpreadsheet, readSpreadsheet } from '@/lib/sheet'
import { NextPageWithLayout } from '@/types/global'
import { yupResolver } from '@hookform/resolvers/yup'
import dayjs from 'dayjs'
import { Calendar, Location, Personalcard, Whatsapp } from 'iconsax-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import 'swiper/css'
import * as yup from 'yup'
import { HomeCss } from './style'

const phoneNumberRegExp =
  /^(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+$/

const schema = yup
  .object({
    name: yup.string().required('Wajib diisi'),
    address: yup.string().required('Wajib diisi'),
    phone: yup
      .string()
      .matches(phoneNumberRegExp, 'Nomor handphone tidak valid')
      .required('Wajib diisi'),
    date: yup.string().required('Wajib diisi'),
  })
  .required()

type FormData = yup.InferType<typeof schema>

const Home: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const { query } = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [lotteryNumber, setLotteryNumber, clearLotteryNumber] = useLocalStorage(
    STORAGE_KEY,
    undefined
  )

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const sheet = await readSpreadsheet()
      await sheet?.loadCells('H1')
      const lottery = sheet?.getCellByA1('H1').value
      const timestamp = dayjs(Date.now()).format('MM/DD/YY HH:mm:ss')

      await appendSpreadsheet({
        Timestamp: timestamp,
        Nama: data.name,
        Alamat: data.address,
        Whatsapp: data.phone,
        'Tanggal Lahir': data.date,
        Undian: Number(lottery) + 1,
        'Undian + Nama': `${Number(lottery) + 1} ${data.name}`,
      })
      await setLotteryNumber(Number(lottery) + 1)
    } catch (error) {
      toast.error('Terjadi kesalahan, silahkan coba kembali.')
      console.log(error)
    }
    setIsLoading(false)
  }
  return (
    <>
      <Toaster />
      {isLoading ? <LoadingOverlay /> : null}
      <main css={HomeCss.main}>
        {lotteryNumber ? (
          <>
            <div css={HomeCss.lottery}>
              <div css={HomeCss.lotteryHeader}>
                <span>Nomor Undian Anda</span>
                <p>Harap screenshot nomor undian dibawah</p>
              </div>
              <h1>{lotteryNumber}</h1>
              {query.flag && query.flag[0] === 'admin' ? (
                <Button
                  color="Brand"
                  style={{
                    backgroundImage: `url("${texture.src}")`,
                  }}
                  onClick={() => {
                    clearLotteryNumber()
                    reset()
                  }}
                >
                  Isi Lagi
                </Button>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <div css={HomeCss.title}>
              <h1>Pesta Bona Taon Naiborhu Boru & Bere/Ibebere</h1>
              <p>Se-Jabodetabek 2023</p>
            </div>
            <form css={HomeCss.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                icon={<Personalcard variant="Linear" />}
                name="Nama Lengkap"
                error={errors.name?.message}
                props={{
                  ...register('name', {
                    required: true,
                  }),
                  placeholder: 'Nama lengkap Anda',
                }}
              />
              <Input
                icon={<Location variant="Linear" />}
                name="Alamat Lengkap"
                error={errors.address?.message}
                props={{
                  ...register('address', {
                    required: true,
                  }),
                  placeholder: 'Alamat lengkap Anda',
                }}
              />
              <Input
                icon={<Whatsapp variant="Linear" />}
                name="Nomor Whatsapp"
                error={errors.phone?.message}
                props={{
                  ...register('phone', {
                    required: true,
                  }),
                  placeholder: 'Nomor Whatsapp aktif',
                }}
              />
              <Input
                icon={<Calendar variant="Linear" />}
                name="Tanggal Lahir"
                error={errors.date?.message}
                props={{
                  ...register('date', {
                    required: true,
                  }),
                  placeholder: 'DD/MM/YYYY',
                  type: 'date',
                }}
              />
              <Button
                color="Brand"
                type="submit"
                style={{
                  backgroundImage: `url("${texture.src}")`,
                }}
              >
                Daftar
              </Button>
            </form>
          </>
        )}
      </main>
    </>
  )
}

Home.getLayout = (page) => {
  return <Container>{page}</Container>
}

export default Home
