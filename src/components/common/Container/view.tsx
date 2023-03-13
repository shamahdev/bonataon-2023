import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'
import ContainerCss from './style'

const DEFAULT_CONTAINER_WIDTH = '512px'

type ContainerProps = {
  maxWidth?: string
  childProps?: ComponentPropsWithoutRef<'div'>
}
const Container: FC<
  PropsWithChildren<ContainerProps & ComponentPropsWithoutRef<'section'>>
> = ({
  children,
  maxWidth = DEFAULT_CONTAINER_WIDTH,
  childProps,
  ...props
}) => {
  return (
    <section css={ContainerCss.wrapper} {...props}>
      <div
        css={ContainerCss.box}
        style={{ maxWidth: maxWidth }}
        {...childProps}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
