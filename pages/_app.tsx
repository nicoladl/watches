import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";

import localFont from '@next/font/local'

const myFont = localFont({
    src: [
        {
            path: '../pages/font/ItalianPlateNo2-Demibold.woff2',
            weight: '700',
        },
        {
            path: '../pages/font/ItalianPlateNo2-Regular.woff2',
            weight: '400',
        },
        {
            path: '../pages/font/ItalianPlateNo2-Extralight.woff2',
        },
    ]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <style jsx global>{`
              :root {
                --watches-font: ${myFont.style.fontFamily};
              }
          `}</style>
          <ApolloProvider client={client}>
              <Component {...pageProps} />
          </ApolloProvider>
      </>
  )
}
