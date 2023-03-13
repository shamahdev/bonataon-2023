import { theme } from '@/styles/theme'
import { css } from '@emotion/react'

const ModalConfirmationCss = {
  header: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '100%',
    '& > h2': {
      fontFamily: 'var(--font-satoshi)',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '120%',
      letterSpacing: '-0.02em',
      display: 'flex',
      width: '100%',
      color: theme.color.neutral[100],
    },
    '& > button': {
      width: '24px',
      height: '24px',
    },
  }),
  description: css({
    fontSize: '14px',
    lineHeight: '24px',
    color: theme.color.neutral[80],
  }),
  buttonGroup: css({
    display: 'flex',
    flexDirection: 'row',
    padding: '0px',
    width: '100%',
    gap: '8px',
  }),
}

export default ModalConfirmationCss
