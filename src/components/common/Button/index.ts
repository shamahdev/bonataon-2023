import dynamic from 'next/dynamic'

const Button = dynamic(import('./view'), {
  ssr: false,
})

export default Button
