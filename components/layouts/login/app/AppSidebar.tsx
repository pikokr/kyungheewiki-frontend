import { css } from '@emotion/react'
import React from 'react'
import { MdAdd, MdRefresh } from 'react-icons/md'

import { Button } from '../../../Button'

export const AppSidebar: React.FC = () => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          .doc-link {
            color: #000;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 36px;
            gap: 12px;
            cursor: pointer;
            user-select: none;

            transition: all ease 0.2s;

            &:hover {
              background: rgba(0, 0, 0, 0.1);
            }
            &:active {
              background: rgba(0, 0, 0, 0.2);
            }
          }
        `}
      >
        <div
          css={css`
            display: flex;

            align-items: center;
            padding-left: 16px;

            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          `}
        >
          <div>문서</div>
          <div
            css={css`
              flex-grow: 1;
              width: 0;
            `}
          />
          <Button
            css={css`
              padding: 8px;

              height: 40px;
              width: 40px;
            `}
          >
            <MdRefresh size={24} />
          </Button>
        </div>
        <a className="doc-link">
          <MdAdd />

          <span>문서 추가하기</span>
        </a>
      </div>
    </div>
  )
}
