import dynamic from 'next/dynamic'

const ModalBase = dynamic(import('./view'), {
  ssr: false,
})

export default ModalBase
