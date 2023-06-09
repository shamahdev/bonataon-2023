import { theme } from '@/styles/theme'
import { css } from '@emotion/react'

export const HomeCss = {
  main: css({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 16px 168px',
    gap: '24px',
  }),
  lotteryContainer: css({
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '12px',
    '& > p': {
      fontFamily: 'var(--font-satoshi)',
      fontWeight: 500,
      textAlign: 'center',
    },
  }),
  lottery: css({
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 16px',
    gap: '16px',
    width: '100%',
    backgroundColor: '#ffffff',
    border: `1px solid ${theme.color.neutral[30]}`,
    boxShadow: theme.boxShadow.elevation.md,
    borderRadius: '12px',

    '& > h1': {
      padding: '32px 0',
      fontFamily: 'var(--font-satoshi)',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: '120%',
      letterSpacing: '-0.02em',
      color: '#050406',
    },
  }),
  lotteryHeader: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    '& > span': {
      fontFamily: 'var(--font-satoshi)',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '120%',
      letterSpacing: '-0.02em',
      color: '#09090C',
    },
    '& > p': {
      fontFamily: 'var(--font-satoshi)',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '120%',
      letterSpacing: '-0.02em',
      color: '#09090C',
      opacity: '0.7',
    },
  }),
  title: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '4px',
    '& > h1': {
      fontFamily: 'var(--font-satoshi)',
      fontWeight: 700,
      fontSize: '25px',
      lineHeight: '120%',
      letterSpacing: '-0.02em',
      color: '#050406',
    },
    '& > p': {
      fontFamily: 'var(--font-satoshi)',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
      color: '#131117',
    },
  }),
  form: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '16px',
  }),
}
