import Router from 'next/router'

export const processLogin = (data: {
  accessToken: string
  refreshToken: string
  expiresAt: number
}) => {
  localStorage.auth = JSON.stringify(data)

  Router.push('/').then()
}
