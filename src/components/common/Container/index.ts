import dynamic from 'next/dynamic'

const Container = dynamic(import('./view'), {
  ssr: false,
})

export default Container
