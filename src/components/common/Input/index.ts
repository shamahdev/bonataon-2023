import dynamic from 'next/dynamic'

const Input = dynamic(import('./view'), {
  ssr: false,
})

export default Input
