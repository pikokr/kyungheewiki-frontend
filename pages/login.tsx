import { css } from '@emotion/react'
import { AxiosError } from 'axios'
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
import { ErrorCode, api } from '../utils/api'
import { processLogin } from '../utils/auth'

const LoginPage: NextPage = () => {
  const [email, setEmail] = React.useState('')
  const [pw, setPw] = React.useState('')

  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const [submitting, setSubmitting] = React.useState(false)

  const [submitError, setSubmitError] = React.useState('')

  const submit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setSubmitting(true)
      setSubmitError('')

      try {
        const newErrors = { ...errors }
        let errored = false

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          newErrors.email = 'Invalid email'
          errored = true
        } else delete newErrors.email

        if (pw.length < 6) {
          newErrors.password = 'Password must be at least 6 characters'
          errored = true
        } else delete newErrors.password

        setErrors(newErrors)
        if (errored) {
          return
        }

        errored = false

        try {
          const { data } = await api.post('/auth/login', {
            email,
            password: pw,
          })

          processLogin(data)
        } catch (e) {
          const err = e as AxiosError
          if (err.response?.status !== 400) {
            setSubmitError(`${e}`)
            return
          }
          const res = err.response.data as any

          if (res.code === ErrorCode.ValidationError) {
            for (const issue of res.issues) {
              const p = issue.path.join('.')

              switch (p) {
                case 'email':
                  newErrors.email = issue.message
                  break
                case 'password':
                  newErrors.password = issue.message
                  break
              }
            }

            setErrors(newErrors)
            return
          }

          setSubmitError(`${e}`)

          return
        }
      } finally {
        setSubmitting(false)
      }
    },
    [errors, email, pw]
  )

  return (
    <>
      <Head>
        <title>Login - KyungheeWiki</title>
      </Head>
      <LoginLayout title="KyungheeWiki">
        <form onSubmit={submit}>
          <LoginInput
            icon={<Icon size={24} src={PersonIcon.src} />}
            placeholder="Email"
            type="text"
            err={errors.email}
            value={email}
            onChange={setEmail}
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
              err={errors.password}
              value={pw}
              onChange={setPw}
            />
            <div
              css={css`
                text-align: right;
                font-weight: 300;
                margin-top: 6px;
                font-size: 14px;
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
              font-size: 14px;
              color: rgba(0, 0, 0, 0.4);
            `}
          >
            Don{"'"}t have an account?{' '}
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </div>
        </form>
      </LoginLayout>
    </>
  )
}

export default LoginPage
