import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import React, { PropsWithChildren } from 'react'

import { LoginBox } from './LoginBox'

export const LoginLayout: React.FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <motion.div
      css={css`
        min-height: 100vh;
      `}
    >
      <div
        css={css`
          width: 100%;
          min-height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <LoginBox title={title}>{children}</LoginBox>
      </div>
    </motion.div>
  )
}
