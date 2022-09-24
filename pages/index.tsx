import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Link from 'next/link'

import { LoginButton } from '../components/layouts/login/login/LoginButton'
import { useCurrentUser, useLogout } from '../utils/auth'

const Home: NextPage = () => {
  const user = useCurrentUser()
  const logout = useLogout()

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      css={css`
        margin-left: 80px;
        margin-top: 100px;

        @media screen and (max-width: 512px) {
          margin-left: 30px;
          margin-right: 30px;
        }
      `}
    >
      <div
        css={css`
          font-family: 'Inter', sans-serif;

          font-weight: 100;
          font-size: 60px;

          @media screen and (max-width: 512px) {
            font-size: 40px;
          }
        `}
      >
        KyungheeWiki
      </div>
      <div
        css={css`
          margin-top: 8px;
          font-family: 'Inter', sans-serif;

          font-weight: 700;
          font-size: 40px;

          line-height: 42px;

          @media screen and (max-width: 512px) {
            font-size: 30px;
            line-height: 36px;
          }
        `}
      >
        당신의 학습에
        <br />한 층 더 업그레이드.
      </div>
      <LoginButton
        link
        href={user ? '/app' : '/login'}
        css={css`
          width: 150px;
          font-weight: 700;
          margin-top: 24px;
        `}
      >
        바로가기
      </LoginButton>

      {user && (
        <motion.div
          css={css`
            position: absolute;
            right: 32px;
            top: 32px;
            font-size: 18px;
            user-select: none;

            .dropdown-button {
              cursor: pointer;
            }

            .dropdown-content {
              visibility: hidden;
              opacity: 0;

              transition: all ease 0.2s;
            }

            &:hover {
              .dropdown-content {
                visibility: visible;
                opacity: 1;
              }
            }
          `}
        >
          <div className="dropdown-button">
            {user.name} ({user.class.grade}-{user.class.classNum})
          </div>
          <div
            css={css`
              position: relative;
            `}
            className="dropdown-content"
          >
            <div
              css={css`
                height: 8px;
                width: 100%;
              `}
            />
            <div
              css={css`
                position: absolute;
                right: 0;
                top: 8px;

                background: #fff;
                border-radius: 8px;
                box-shadow: 5px 5px 30px -10px #000;

                white-space: nowrap;

                overflow: hidden;
              `}
            >
              <div
                onClick={logout}
                css={css`
                  font-size: 16px;
                  font-weight: 300;
                  padding: 8px;

                  transition: all ease 0.2s;

                  cursor: pointer;

                  &:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                  }
                `}
              >
                로그아웃
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Home
