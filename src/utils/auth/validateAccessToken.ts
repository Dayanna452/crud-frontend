"use server"

import { cookies } from 'next/headers'

export const validateAccessToken = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
}


export const setAccessToken = async (accessToken: string) => {
  const cookieStore = cookies()
  cookieStore.set('accessToken', accessToken)
}