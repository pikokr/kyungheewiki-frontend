import { atom } from 'recoil'

import { APIUser } from './utils/types'

export const userAtom = atom<APIUser | null>({
  key: 'user',
  default: null,
})
