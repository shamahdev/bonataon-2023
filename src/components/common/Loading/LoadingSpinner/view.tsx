import { ComponentPropsWithoutRef, FC } from 'react'
import LoadingSpinnerCss from './style'

const LoadingSpinner: FC<ComponentPropsWithoutRef<'svg'>> = (props) => {
  return (
    <svg
      css={LoadingSpinnerCss.self}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
      </g>
    </svg>
  )
}

export default LoadingSpinner
