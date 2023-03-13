import { theme } from '@/styles/theme'
import { css } from '@emotion/react'
import { ButtonColors, ButtonVariants } from './view'

const getBgColor = (color: ButtonColors, variant: ButtonVariants) => {
  if (variant === 'Primary') {
    if (color === 'Brand') return theme.color.brand[100]
    if (color === 'Neutral') return theme.color.neutral[90]
  }
  if (variant === 'Secondary') {
    return '#ffffff'
  }
}

const getTextColor = (color: ButtonColors, variant: ButtonVariants) => {
  if (variant === 'Primary') {
    return '#ffffff'
  }
  if (variant === 'Secondary') {
    if (color === 'Brand') return theme.color.brand[100]
    if (color === 'Neutral') return theme.color.neutral[90]
  }
}

const getHoverBgColor = (color: ButtonColors, variant: ButtonVariants) => {
  if (variant === 'Primary') {
    if (color === 'Brand') return theme.color.brand[110]
    if (color === 'Neutral') return theme.color.neutral[100]
  }
  if (variant === 'Secondary') {
    return theme.color.neutral[10]
  }
}

const getBorderColor = (color: ButtonColors, variant: ButtonVariants) => {
  if (variant === 'Primary') {
    return ''
  }
  if (variant === 'Secondary') {
    if (color === 'Brand') return theme.color.brand[90]
    if (color === 'Neutral') return theme.color.neutral[40]
  }
}

const ButtonCss = {
  self: (color: ButtonColors, variant: ButtonVariants) =>
    css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px 20px',
      gap: '8px',
      width: '100%',
      height: '48px',
      borderRadius: '8px',
      fontSize: '14px',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      border: variant === 'Secondary' ? '1px solid' : 'null',
      borderColor: getBorderColor(color, variant),
      backgroundColor: getBgColor(color, variant),
      color: getTextColor(color, variant),
      '&:hover': {
        backgroundColor: getHoverBgColor(color, variant),
      },
      '&:disabled': {
        opacity: '33%',
        pointerEvents: 'none',
      },
    }),
}

export default ButtonCss
