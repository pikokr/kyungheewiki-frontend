import { css } from '@emotion/react'
import React from 'react'

export const LoginInput: React.FC<{
  placeholder: string
  value: string
  name?: string
  autoComplete?: string
  type: 'text' | 'password' | 'number'
  icon: React.ReactNode
  err?: string
  submitting?: boolean
  onChange: (v: string) => void
}> = ({ icon, type, placeholder, value, onChange, err, submitting, name, autoComplete }) => {
  return (
    <>
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
          disabled={submitting}
          name={name}
          autoComplete={autoComplete}
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
      {err && (
        <div
          css={css`
            color: #ff4343;
            margin-top: 4px;
            margin-left: 12px;
            font-size: 12px;
          `}
        >
          {err}
        </div>
      )}
    </>
  )
}
