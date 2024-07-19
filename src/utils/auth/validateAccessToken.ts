import { cookies } from 'next/headers'

export const validateAccessToken = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
}