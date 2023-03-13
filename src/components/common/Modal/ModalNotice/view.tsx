import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'
import Button from '../../Button'
import ModalBase from '../ModalBase'
import ModaNoticeCss from './style'

type ModalNoticeProps = {
  title: string
  description: string
  buttonTitle: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  onDismiss?: MouseEventHandler<any>
}

const ModalNotice: FC<ModalNoticeProps> = ({
  title,
  description,
  buttonTitle,
  show,
  setShow,
  onDismiss,
}) => {
  if (!show) return <></>

  return (
    <ModalBase>
      <div css={ModaNoticeCss.header}>
        <h2>{title}</h2>
        <button onClick={() => setShow(false)}>
          <svg
            fill="none"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.2857 15.714 11.429-11.429"
              stroke="#4D5B5B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="m15.714 15.714-11.429-11.429"
              stroke="#4D5B5B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      <p css={ModaNoticeCss.description}>{description}</p>
      <div css={ModaNoticeCss.buttonGroup}>
        <Button color="Neutral" onClick={() => onDismiss || setShow(false)}>
          {buttonTitle}
        </Button>
      </div>
    </ModalBase>
  )
}

export default ModalNotice
