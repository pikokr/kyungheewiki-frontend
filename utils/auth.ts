import Router from 'next/router'
import React from 'react'

import { api } from './api'
import { APIUser } from './types'

export const processLogin = (data: {
  accessToken: string
  refreshToken: string
  expiresAt: number
}) => {
  localStorage.auth = JSON.stringify(data)

  Router.push('/').then()
}

export const AuthContext = React.createContext<APIUser | null>(null)

type useCurrentUserFn = (() => APIUser) | ((required: false) => APIUser | null)

export const useCurrentUser: useCurrentUserFn = () => {
  return React.useContext(AuthContext)
}

export const fetchCurrentUser = async (): Promise<APIUser | null> => {
  try {
    const { data } = await api.get('/me')
    return data
  } catch (e) {
    return null
  }
}
