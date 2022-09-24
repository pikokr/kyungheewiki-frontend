import { css } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

import { AuthMenu } from './AuthMenu'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          background: #fff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          padding: 8px;
          display: flex;
        `}
      >
        hi
        <div
          css={css`
            flex-grow: 1;
          `}
        />
        <AuthMenu />
      </div>

      <div
        css={css`
          display: flex;
          flex-grow: 1;
          height: 0;
        `}
      >
        <div
          css={css`
            border-right: 1px solid rgba(0, 0, 0, 0.2);
            background: #fff;
          `}
        >
          Sidebar
        </div>
        <div
          css={css`
            flex-grow: 1;
            height: 100%;
            width: 0;
            overflow-y: hidden;
          `}
        >
          <div
            css={css`
              width: 100%;
              padding: 0 24px;
            `}
          >
            <div
              css={css`
                margin-top: 24px;

                background: #f00;
                width: 100%;
                max-width: 960px;
                margin-left: auto;
                margin-right: auto;
              `}
            >
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
