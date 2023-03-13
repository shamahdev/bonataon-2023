import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Pesta Bona Taon Naiborhu Boru & Bere/Ibebere Se-Jabodetabek 2023"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <title>
        Pesta Bona Taon Naiborhu Boru & Bere/Ibebere Se-Jabodetabek 2023
      </title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
