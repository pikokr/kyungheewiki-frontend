import { css } from '@emotion/react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { LoginLayout } from '../components/layouts/login/LoginLayout'
import { LoginButton } from '../components/layouts/login/login/LoginButton'
import { LoginInput } from '../components/layouts/login/login/LoginInput'
import { Icon } from '../components/utils/Icon'
import LockIcon from '../icons/lock.svg'
import PersonIcon from '../icons/person.svg'

const LoginPage: NextPage = () => {
  const [id, setId] = React.useState('')
  const [pw, setPw] = React.useState('')

  return (
    <>
      <Head>
        <title>Login - KyungheeWiki</title>
      </Head>
      <LoginLayout title="KyungheeWiki">
        <div>
          <LoginInput
            icon={<Icon size={32} src={PersonIcon.src} />}
            placeholder="User ID"
            type="text"
            value={id}
            onChange={setId}
          />
          <div
            css={css`
              margin-top: 16px;
            `}
          >
            <LoginInput
              icon={<Icon size={32} src={LockIcon.src} />}
              placeholder="Password"
              type="password"
              value={pw}
              onChange={setPw}
            />
            <div
              css={css`
                text-align: right;
                font-weight: 300;
                margin-top: 6px;
              `}
            >
              <Link href="/reset">
                <a>Forgot a password?</a>
              </Link>
            </div>
          </div>
          <div
            css={css`
              margin-top: 12px;
            `}
          >
            <LoginButton>Login</LoginButton>
          </div>
          <div
            css={css`
              text-align: center;
              margin-top: 20px;
              font-weight: 300;
              color: rgba(0, 0, 0, 0.4);
            `}
          >
            Don{"'"}t have an account?{' '}
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </div>
        </div>
      </LoginLayout>
    </>
  )
}

export default LoginPage
