import { AnimatePresence, AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </LayoutGroup>
  )
}

export default MyApp
