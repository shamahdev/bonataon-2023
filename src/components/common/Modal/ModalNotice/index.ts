import dynamic from 'next/dynamic'

const ModalNotice = dynamic(import('./view'), {
  ssr: false,
})

export default ModalNotice
