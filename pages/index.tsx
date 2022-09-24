import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Link from 'next/link'

import { LoginButton } from '../components/layouts/login/login/LoginButton'

const Home: NextPage = () => {
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
        href="/login"
        css={css`
          width: 150px;
          font-weight: 700;
          margin-top: 24px;
        `}
      >
        바로가기
      </LoginButton>
    </motion.div>
  )
}

export default Home
