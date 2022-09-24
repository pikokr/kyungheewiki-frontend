import { Interpolation, Theme, css } from '@emotion/react'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

export const LoginButton: React.FC<
  PropsWithChildren<{
    onClick?: () => void
    submitting?: boolean
    className?: string
    link?: boolean
    href?: string
  }>
> = ({ onClick, children, submitting, className, link, href }) => {
  const Component = link ? 'a' : 'button'

  const content = (
    <Component
      href={href}
      className={className}
      type="submit"
      onClick={onClick}
      css={css`
        font-size: 18px;
        font-weight: 500;
        background: #30304b;
        color: #fff;
        cursor: ${submitting ? 'default' : 'pointer'};
        user-select: none;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        transition: background ease 0.2s;
        width: 100%;
        outline: none;
        border: none;

        filter: drop-shadow(4px 4px 40px rgba(0, 0, 0, 0.25));

        &:hover {
          color: #fff;
        }

        ${submitting
          ? css`
              background-color: #6a6aa5;
            `
          : css`
              &:hover {
                background: #4d4d77;
              }
            `}
      `}
    >
      {children}
    </Component>
  )

  return link ? <Link href={href!}>{content}</Link> : content
}
