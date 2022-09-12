import { css } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

export const LoginButton: React.FC<PropsWithChildren<{ onClick?: () => void }>> = ({
  onClick,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      css={css`
        font-size: 18px;
        font-weight: 500;
        background: #30304b;
        color: #fff;
        cursor: pointer;
        user-select: none;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        transition: background ease 0.2s;

        filter: drop-shadow(4px 4px 40px rgba(0, 0, 0, 0.25));

        &:hover {
          background: #4d4d77;
        }
      `}
    >
      {children}
    </div>
  )
}
