import { theme } from '@/styles/theme'
import { css, keyframes } from '@emotion/react'

const circleAnimation = keyframes({
  '0%': { strokeDasharray: '0 150', strokeDashoffset: 0 },
  '47.5%': { strokeDasharray: '42 150', strokeDashoffset: -16 },
  '95%, 100%': { strokeDasharray: '42 150', strokeDashoffset: -59 },
})

const svgAnimation = keyframes({
  '100%': { transform: 'rotate(360deg)' },
})

const LoadingSpinnerCss = {
  self: css({
    stroke: theme.color.brand[100],
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '12px',
    width: '56px',
    height: '56px',
    '& > g': {
      transformOrigin: 'center',
      animation: `${svgAnimation} 2s linear infinite`,
      '& > circle': {
        strokeLinecap: 'round',
        animation: `${circleAnimation} 1.5s ease-in-out infinite`,
      },
    },
  }),
}

export default LoadingSpinnerCss
