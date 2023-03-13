import { theme } from '@/styles/theme'
import { css } from '@emotion/react'

const InputCss = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '100%',
    gap: '8px',
    '& > p': {
      marginTop: '-8px',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: theme.color.neutral[50],
    },
    '& > label': {
      fontFamily: 'var(--font-satoshi)',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '120%',
      letterSpacing: '-0.02em',
      color: '#09090C',
    },
  }),
  label: css({
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '120%',
    fontFamily: 'var(--font-satoshi)',
    color: theme.color.neutral[80],
  }),
  self: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '100%',
    gap: '4px',
  }),
  input: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px 12px',
    gap: '8px',
    background: '#ffffff',
    border: `1px solid ${theme.color.neutral[30]}`,
    borderRadius: '8px',
    width: '100%',
    color: theme.color.neutral[70],
    '& input,select': {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
      backgroundColor: 'transparent',
      '::placeholder': {
        color: theme.color.neutral[40],
      },
      color: theme.color.neutral[100],
      height: '44px',
      width: '100%',
      outline: 'none',
      '&:focus': {
        outline: 'none !important',
      },
    },
    '&:focus-within': {
      outline: `${theme.color.brand[100]} solid 2px`,
    },
  }),
  error: css({
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '18px',
    color: theme.color.alert[90],
  }),
}

export default InputCss
