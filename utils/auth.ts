import Router from 'next/router'
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { userAtom } from '../atoms'
import { api } from './api'
import { APIUser } from './types'

export const useLogin = () => {
  const setCurrentUser = useSetRecoilState(userAtom)

  return async (data: { accessToken: string; refreshToken: string; expiresAt: number }) => {
    localStorage.auth = JSON.stringify(data)

    await Router.push('/')

    setCurrentUser(await fetchCurrentUser())
  }
}

type useCurrentUserFn = () => APIUser | null

export const useCurrentUser: useCurrentUserFn = () => {
  return useRecoilValue(userAtom)
}

export const fetchCurrentUser = async (): Promise<APIUser | null> => {
  try {
    const { data } = await api.get('/me')
    return data
  } catch (e) {
    return null
  }
}

export const useLogout = () => {
  return async () => {
    delete localStorage.auth
    window.location.href = '/'
  }
}
