import dynamic from 'next/dynamic'

const ModalConfirmation = dynamic(import('./view'), {
  ssr: false,
})

export default ModalConfirmation
