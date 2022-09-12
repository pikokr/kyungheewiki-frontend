import { css } from '@emotion/react'
import { AnimatePresence, AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'

import '../styles/globals.scss'
import { AuthContext, fetchCurrentUser } from '../utils/auth'
import { APIUser } from '../utils/types'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState<APIUser | null>(null)

  React.useMemo(async () => {
    if (typeof window === 'undefined') return

    if (!loading) return

    try {
      const user = await fetchCurrentUser()

      setUser(user)
    } finally {
      setLoading(false)
    }
  }, [loading])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          exit={{ opacity: 0 }}
          css={css`
            display: flex;
            width: 100vw;
            height: 100vh;
            justify-content: center;
            align-items: center;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 99999;
          `}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              type: 'tween',
            }}
            css={css`
              width: 64px;
              height: 64px;
              border-radius: 50%;

              border: 6px solid #d6d6d6;
              border-top: 6px solid #000;
            `}
          />
        </motion.div>
      ) : (
        <AuthContext.Provider value={user}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <LayoutGroup>
              <AnimatePresence mode="wait">
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </LayoutGroup>
          </motion.div>
        </AuthContext.Provider>
      )}
    </AnimatePresence>
  )
}

export default MyApp
