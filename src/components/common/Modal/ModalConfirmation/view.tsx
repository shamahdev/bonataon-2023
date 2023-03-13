import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'
import Button from '../../Button'
import ModalBase from '../ModalBase'
import ModalConfirmationCss from './style'

type ModalConfirmationProps = {
  title: string
  description: string
  dismissTitle?: string
  confirmTitle: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  onConfirm: MouseEventHandler<any>
  onDismiss?: MouseEventHandler<any>
}

const ModalConfirmation: FC<ModalConfirmationProps> = ({
  title,
  description,
  dismissTitle,
  confirmTitle,
  show,
  setShow,
  onConfirm,
  onDismiss = () => setShow(false),
}) => {
  if (!show) return <></>

  return (
    <ModalBase>
      <div css={ModalConfirmationCss.header}>
        <h2>{title}</h2>
        <button onClick={() => setShow(false)}>
          <svg
            fill="none"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.2857 15.714 11.429-11.429"
              stroke="#4D5B5B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="m15.714 15.714-11.429-11.429"
              stroke="#4D5B5B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      <p css={ModalConfirmationCss.description}>{description}</p>
      <div css={ModalConfirmationCss.buttonGroup}>
        {dismissTitle && (
          <Button color="Neutral" variant="Secondary" onClick={onDismiss}>
            {dismissTitle}
          </Button>
        )}
        <Button onClick={onConfirm} color="Neutral" variant="Primary">
          {confirmTitle}
        </Button>
      </div>
    </ModalBase>
  )
}

export default ModalConfirmation
