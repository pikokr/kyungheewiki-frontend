import { css } from '@emotion/react'
import React from 'react'

export const LoginInput: React.FC<{
  placeholder: string
  value: string
  type: 'text' | 'password'
  icon: React.ReactNode
  onChange: (v: string) => void
}> = ({ icon, type, placeholder, value, onChange }) => {
  return (
    <div
      css={css`
        padding: 12px;
        background: #edeff2;
        border-radius: 8px;
        display: flex;
        gap: 16px;
        align-items: center;
      `}
    >
      <div
        css={{
          width: 24,
          height: 24,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
      </div>
      <input
        onChange={(e) => onChange(e.target.value)}
        css={css`
          flex-grow: 1;
          width: 0;
          border: none;
          background: transparent;
          font-size: 16px;
          font-weight: 300;
          &::placeholder {
            color: rgba(0, 0, 0, 0.3);
          }
          &:focus {
            outline: none;
          }
        `}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
