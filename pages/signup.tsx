import { css } from '@emotion/react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { LoginLayout } from '../components/layouts/login/LoginLayout'
import { LoginButton } from '../components/layouts/login/login/LoginButton'
import { LoginInput } from '../components/layouts/login/login/LoginInput'
import { Icon } from '../components/utils/Icon'
import FingerprintIcon from '../icons/fingerprint.svg'
import LockIcon from '../icons/lock.svg'
import PersonIcon from '../icons/person.svg'

const LoginPage: NextPage = () => {
  const [id, setId] = React.useState('')
  const [pw, setPw] = React.useState('')
  const [pwConfirm, setPwConfirm] = React.useState('')
  const [classCode, setClassCode] = React.useState('')

  return (
    <>
      <Head>
        <title>Sign Up - KyungheeWiki</title>
      </Head>
      <LoginLayout title="Sign Up">
        <div>
          <LoginInput
            icon={<Icon size={24} src={PersonIcon.src} />}
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
              icon={<Icon size={24} src={LockIcon.src} />}
              placeholder="Password"
              type="password"
              value={pw}
              onChange={setPw}
            />
          </div>
          <div
            css={css`
              margin-top: 16px;
            `}
          >
            <LoginInput
              icon={<Icon size={24} src={LockIcon.src} />}
              placeholder="Password Confirm"
              type="password"
              value={pwConfirm}
              onChange={setPwConfirm}
            />
          </div>
          <div
            css={css`
              margin-top: 16px;
            `}
          >
            <LoginInput
              icon={<Icon size={24} src={FingerprintIcon.src} />}
              placeholder="Class Code"
              type="text"
              value={classCode}
              onChange={setClassCode}
            />
          </div>
          <div
            css={css`
              margin-top: 12px;
            `}
          >
            <LoginButton>Sign Up</LoginButton>
          </div>
          <div
            css={css`
              text-align: center;
              margin-top: 20px;
              font-weight: 300;
              font-size: 14px;
              color: rgba(0, 0, 0, 0.4);
            `}
          >
            Already have an account?{' '}
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </div>
        </div>
      </LoginLayout>
    </>
  )
}

export default LoginPage
