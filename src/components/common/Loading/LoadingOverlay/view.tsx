import { ComponentPropsWithoutRef, FC } from 'react'
import LoadingSpinner from '../LoadingSpinner'
import LoadingOverlayCss from './style'

const LoadingOverlay: FC<ComponentPropsWithoutRef<'svg'>> = () => {
  return (
    <div css={LoadingOverlayCss.self}>
      <LoadingSpinner style={{ stroke: '#ffffff' }} />
    </div>
  )
}

export default LoadingOverlay
