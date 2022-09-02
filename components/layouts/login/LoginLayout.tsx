import { css } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

import { LoginBox } from './LoginBox'

export const LoginLayout: React.FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <div
      css={css`
        background: linear-gradient(270deg, #fae8ff 0%, #e2e8f0 49.85%, #ffffff 100%);
        width: 100vw;
        height: 100vh;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <LoginBox title={title}>{children}</LoginBox>
      </div>
    </div>
  )
}
