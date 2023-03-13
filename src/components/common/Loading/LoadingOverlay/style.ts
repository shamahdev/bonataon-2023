import { css } from '@emotion/react'

const LoadingOverlayCss = {
  self: css({
    zIndex: '999',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    opacity: '50%',
    position: 'fixed',
    display: 'flex',
  }),
}

export default LoadingOverlayCss
