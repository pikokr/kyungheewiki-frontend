import { css } from '@emotion/react'
import { AxiosError } from 'axios'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'

import { LoginLayout } from '../components/layouts/login/LoginLayout'
import { LoginButton } from '../components/layouts/login/login/LoginButton'
import { LoginInput } from '../components/layouts/login/login/LoginInput'
import { Icon } from '../components/utils/Icon'
import CalendarIcon from '../icons/calendar.svg'
import FingerprintIcon from '../icons/fingerprint.svg'
import LockIcon from '../icons/lock.svg'
import MailIcon from '../icons/mail.svg'
import PersonIcon from '../icons/person.svg'
import { ErrorCode, api } from '../utils/api'
import { processLogin, useCurrentUser } from '../utils/auth'

const LoginPage: NextPage = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [pw, setPw] = React.useState('')
  const [pwConfirm, setPwConfirm] = React.useState('')
  const [classCode, setClassCode] = React.useState('')

  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const [submitting, setSubmitting] = React.useState(false)
  const [classNum, setClassNum] = React.useState('')

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

        if (name.length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
          errored = true
        } else delete newErrors.name

        if (pw.length < 6) {
          newErrors.password = 'Password must be at least 6 characters'
          errored = true
        } else delete newErrors.password

        if (pw !== pwConfirm) {
          newErrors.passwordConfirm = 'Password confirm must match with password'
          errored = true
        } else delete newErrors.passwordConfirm

        if (classCode.length !== 6 || isNaN(+classCode)) {
          newErrors.classCode = 'Class code must be a 6 digit number'
          errored = true
        } else delete newErrors.classCode

        if (+classNum > 40 || +classNum <= 0) {
          newErrors.classNumber = 'Class number must between 1 and 40'
          errored = true
        } else delete newErrors.classNumber

        setErrors(newErrors)
        if (errored) {
          return
        }

        errored = false

        try {
          const { data } = await api.post('/auth/signup', {
            email,
            password: pw,
            classCode: classCode,
            name,
            classNum: +classNum,
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
                case 'name':
                  newErrors.name = issue.message
                  break
                case 'email':
                  newErrors.email = issue.message
                  break
                case 'password':
                  newErrors.password = issue.message
                  break
                case 'classNum':
                  newErrors.classNumber = issue.message
                  break
                case 'classCode':
                  newErrors.classCode = issue.message
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
    [errors, email, name, pw, pwConfirm, classCode, classNum]
  )

  const user = useCurrentUser(false)

  if (user) {
    Router.push('/')
    return <></>
  }

  return (
    <>
      <Head>
        <title>Sign Up - KyungheeWiki</title>
      </Head>
      <LoginLayout title="Sign Up">
        {submitError && (
          <div
            css={css`
              padding: 12px;
              font-size: 14px;
              background: #ff4949;
              border-radius: 8px;
              color: #fff;
              margin-bottom: 16px;
            `}
          >
            {submitError}
          </div>
        )}

        <form onSubmit={(e) => submit(e)}>
          <LoginInput
            err={errors.email}
            icon={<Icon size={24} src={MailIcon.src} />}
            placeholder="Email"
            type="text"
            value={email}
            onChange={setEmail}
            submitting={submitting}
          />
          <div
            css={css`
              margin-top: 16px;
            `}
          >
            <LoginInput
              err={errors.name}
              icon={<Icon size={24} src={PersonIcon.src} />}
              placeholder="Name"
              type="text"
              value={name}
              onChange={setName}
              submitting={submitting}
            />
          </div>
          <div
            css={css`
              margin-top: 16px;
            `}
          >
            <LoginInput
              err={errors.password}
              icon={<Icon size={24} src={LockIcon.src} />}
              placeholder="Password"
              type="password"
              value={pw}
              onChange={setPw}
              submitting={submitting}
            />
          </div>
          <div
            css={css`
              margin-top: 16px;
            `}
          >
            <LoginInput
              err={errors.passwordConfirm}
              icon={<Icon size={24} src={LockIcon.src} />}
              placeholder="Password Confirm"
              type="password"
              value={pwConfirm}
              onChange={setPwConfirm}
              submitting={submitting}
            />
          </div>
          <div
            css={css`
              margin-top: 16px;
            `}
          >
            <LoginInput
              err={errors.classCode}
              icon={<Icon size={24} src={FingerprintIcon.src} />}
              placeholder="Class Code"
              type="text"
              value={classCode}
              onChange={setClassCode}
              submitting={submitting}
            />
          </div>

          <div
            css={css`
              margin-top: 16px;
            `}
          >
            <LoginInput
              err={errors.classNumber}
              icon={<Icon size={24} src={CalendarIcon.src} />}
              placeholder="Class number"
              type="number"
              value={classNum}
              onChange={setClassNum}
              submitting={submitting}
            />
          </div>
          <div
            css={css`
              margin-top: 24px;
            `}
          >
            <LoginButton submitting={submitting}>Sign Up</LoginButton>
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
        </form>
      </LoginLayout>
    </>
  )
}

export default LoginPage
