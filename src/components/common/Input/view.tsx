import { theme } from '@/styles/theme'
import { Interpolation, Theme } from '@emotion/react'
import { Eye as IconEye, InfoCircle as IconInfoCircle } from 'iconsax-react'
import {
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
  ReactNode,
  useRef,
} from 'react'
import InputCss from './style'

type InputVariant = 'Default' | 'Password' | 'Unlabeled'
type InputType = 'Default' | 'Select'

type InputProps = {
  icon?: ReactNode
  name: string
  description?: string
  error: string | undefined
  variant?: InputVariant
  as?: InputType
  props: ComponentPropsWithoutRef<'input'> &
    ComponentPropsWithoutRef<'select'> & {
      css?: Interpolation<Theme>
    }
}

const Input: FC<PropsWithChildren<InputProps>> = (props) => {
  const {
    name,
    icon,
    description,
    error,
    variant = 'Default',
    as = 'Default',
    props: inputProps,
    children,
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const handleToggleVisibility = () => {
    if (!ref.current) return
    const inputRef = ref.current.children.namedItem(
      inputProps.name!
    ) as HTMLInputElement

    if (!inputRef) return
    const type = inputRef.type
    if (type !== 'password') {
      inputRef.type = 'password'
      return
    }
    inputRef.type = 'text'
  }

  return (
    <div css={InputCss.container}>
      {variant !== 'Unlabeled' ? <label>{name}</label> : null}
      {description ? <p>{description}</p> : null}
      <div css={InputCss.self}>
        <div
          ref={ref}
          css={InputCss.input}
          style={{
            borderColor: error
              ? theme.color.alert[100]
              : theme.color.neutral[40],
          }}
        >
          {icon}
          {as === 'Default' ? (
            <label css={{ width: '100%' }}>
              <input {...inputProps} />
              {children}
            </label>
          ) : (
            <select {...inputProps}>{children}</select>
          )}
          {error ? (
            <IconInfoCircle
              css={{ color: theme.color.alert[100] }}
              variant="Linear"
            />
          ) : null}
          {variant === 'Password' ? (
            <button onClick={handleToggleVisibility} type="button">
              <IconEye variant="Linear" />
            </button>
          ) : null}
        </div>
        <span css={InputCss.error}>{error}</span>
      </div>
    </div>
  )
}

export default Input
