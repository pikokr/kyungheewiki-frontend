import { css } from '@emotion/react'
import { NextPage } from 'next'
import Head from 'next/head'

const ErrorPage: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  console.log(statusCode)

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      `}
    >
      <Head>
        <title>{`${statusCode}`}</title>
      </Head>
      <div
        css={css`
          font-size: 48px;
          font-weight: 800;
        `}
      >
        {statusCode}
      </div>
    </div>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err?.statusCode ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
