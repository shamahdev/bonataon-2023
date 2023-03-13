import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'
import ButtonCss from './style'

export type ButtonVariants = 'Primary' | 'Secondary'
export type ButtonColors = 'Brand' | 'Neutral'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  color?: ButtonColors
  variant?: ButtonVariants
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color = 'Brand',
  variant = 'Primary',
  ...props
}) => {
  return (
    <button css={ButtonCss.self(color, variant)} {...props}>
      {children}
    </button>
  )
}

export default Button
