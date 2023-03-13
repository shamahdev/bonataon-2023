import house from '@/assets/house.png'
import '@/styles/globals.css'
import { theme } from '@/styles/theme'
import { AppPropsWithLayout } from '@/types/global'

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((children) => <>{children}</>)
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${theme.font.Inter};
          --font-satoshi: ${theme.font.Satoshi};
        }
        html,
        body {
          font-family: var(--font-inter);
        }
      `}</style>
      <span
        css={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          background: `url("${house.src}") no-repeat bottom left`,
          width: '250px',
          height: '250px',
        }}
      />
      <span
        css={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          transform: 'scaleX(-1)',
          background: `url("${house.src}") no-repeat bottom left`,
          width: '250px',
          height: '250px',
        }}
      />
      {getLayout(<Component {...pageProps}></Component>)}
    </>
  )
}

export default App
