import dynamic from 'next/dynamic'

const LoadingOverlay = dynamic(import('./view'), {
  ssr: false,
})

export default LoadingOverlay
