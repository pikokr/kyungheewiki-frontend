import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import React, { PropsWithChildren } from 'react'

export const LoginBox: React.FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
  return (
    <motion.div
      css={css`
        max-width: 360px;
        width: 100vw;
        position: relative;

        @media screen and (max-width: 512px) {
          /* height: 100vh; */
          /* position: fixed; */
          /* overflow-x: hidden; */
          /* overflow-y: auto; */
          max-width: unset;
        }
      `}
    >
      <motion.div
        layoutId="loginBoxBackground"
        css={css`
          border-radius: 16px;
          box-shadow: 3px 3px 40px rgba(0, 0, 0, 0.1);
          background: #fff;

          position: absolute;

          width: 100%;
          height: 100%;

          @media screen and (max-width: 512px) {
            box-shadow: none;
            border-radius: 0;
          }
        `}
      />
      <motion.div
        css={css`
          position: relative;
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div
          css={css`
            padding: 32px;
            width: 100%;
            display: flex;
            flex-direction: column;

            @media screen and (max-width: 512px) {
              padding-left: 24px;
              padding-right: 24px;
              padding-top: 0;
              padding-bottom: 0;
              min-height: 100vh;

              justify-content: center;
            }
          `}
        >
          <div>
            <div
              css={css`
                font-size: 28px;
                font-weight: 300;
                text-align: center;
              `}
            >
              {title}
            </div>
            <div
              css={css`
                margin-top: 24px;

                @media screen and (max-width: 512px) {
                  flex-grow: 1;
                }
              `}
            >
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
