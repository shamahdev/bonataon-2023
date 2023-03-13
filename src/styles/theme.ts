import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'extrabold',
    },
  ],
})

const inter = Inter({
  style: ['normal'],
  subsets: ['latin'],
})

export const theme = {
  boxShadow: {
    bottomBar: {
      sm: '0px -1px 3px rgba(16, 24, 40, 0.1), 0px -1px 2px rgba(16, 24, 40, 0.06)',
      xl: '0px -20px 24px -4px rgba(16, 24, 40, 0.08), 0px -8px 8px -4px rgba(16, 24, 40, 0.03)',
    },
    elevation: {
      xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    },
  },
  color: {
    neutral: {
      100: '#0F172A',
      90: '#1E293B',
      80: '#334155',
      70: '#475569',
      60: '#667372',
      50: '#808A8A',
      40: '#99A1A1',
      30: '#B3B9B9',
      20: '#CCD0D0',
      10: '#E6E8E8',
      0: '#FFFFFF',
    },
    brand: {
      110: '#18161D',
      100: '#18161D',
      90: '#18161D',
      10: '#18161D',
    },
    success: {
      110: '#66D15F',
      100: '#71E86A',
      10: '#F1FDF0',
    },
    alert: {
      100: '#FF3F49',
      90: '#FF525B',
      10: '#FFECED',
    },
  },
  font: {
    Satoshi: satoshi.style.fontFamily,
    Inter: inter.style.fontFamily,
  },
}
