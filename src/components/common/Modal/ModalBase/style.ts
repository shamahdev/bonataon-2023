import { theme } from '@/styles/theme'
import { css } from '@emotion/react'

const ModalBaseCss = {
  wrapper: css({
    zIndex: '1002',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    display: 'flex',
  }),
  container: css({
    inset: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '512px',
    padding: '16px',
    margin: 'auto',
  }),
  self: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 16px',
    gap: '16px',
    width: '100%',
    height: 'auto',
    backgroundColor: '#ffffff',
    border: `1px solid ${theme.color.neutral[30]}`,
    boxShadow: theme.boxShadow.elevation.md,
    borderRadius: '12px',
  }),
}

export default ModalBaseCss
