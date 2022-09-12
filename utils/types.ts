export interface APIClass {
  id: string
  grade: number
  classNum: number
}

export interface APIUser {
  id: string
  name: string
  email: string
  class: APIClass
  classNum: number
}
