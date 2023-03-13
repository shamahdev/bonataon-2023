import dynamic from 'next/dynamic'

const LoadingSpinner = dynamic(import('./view'), {
  ssr: false,
})

export default LoadingSpinner
