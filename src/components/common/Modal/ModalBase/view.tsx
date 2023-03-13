import { FC, PropsWithChildren } from 'react'
import ModalBaseCss from './style'

const ModalBase: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div css={ModalBaseCss.wrapper}>
      <div css={ModalBaseCss.container}>
        <div css={ModalBaseCss.self}>{children}</div>
      </div>
    </div>
  )
}

export default ModalBase
