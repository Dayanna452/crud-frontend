"use client"
import { useMutation, useQuery } from '@apollo/client'
import { LOGIN } from 'app/graphql/mutations/auth'
import { ADD_USER, DELETE_USER, UPDATE_USER } from 'app/graphql/mutations/user'
import { GET_USER, GET_USERS } from 'app/graphql/queries/user'
import { AuthForm } from 'app/types/auth'
import { useRouter } from 'next/navigation'

export const useUser = () => {
  const {push} = useRouter()
  const { data: user, error: errUser, loading: ldUser } = useQuery(GET_USER)
  const {
    data: allUsers,
    error: errUsers,
    loading: ldUsers
  } = useQuery(GET_USERS)
  const [loginFn, loginVar] = useMutation(LOGIN)
  const [addUserFn, addUserVar] = useMutation(ADD_USER)
  const [updateUserFn, updateUserVar] = useMutation(UPDATE_USER)
  const [deleteUserFn, deleteUserVar] = useMutation(DELETE_USER)

  const handleLogin = async (formData: AuthForm) => {
    try {
      console.log('formData', formData)
      await loginFn({
        variables: { email: formData.username, password: formData.password }
      })
      console.log('loginVar', loginVar.data)
      if (loginVar.data.login['access_token']) push('/list')
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddUser = async (formData: FormData) => {
    try {
      await addUserFn({ variables: { formData } })
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateUser = async (formData: FormData) => {
    try {
      await updateUserFn({ variables: { formData } })
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUserFn({ variables: { id } })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    user,
    allUsers,
    ldUser,
    ldUsers,
    errUser,
    errUsers,
    handleLogin,
    handleAddUser,
    handleUpdateUser,
    handleDeleteUser,
    login: {
      loading: loginVar.loading,
      error: loginVar.error,
      data: loginVar.data
    },
    addUser: {
      loading: addUserVar.loading,
      error: addUserVar.error,
      data: addUserVar.data
    },
    updateUser: {
      loading: updateUserVar.loading,
      error: updateUserVar.error,
      data: updateUserVar.data
    },
    deleteUser: {
      loading: deleteUserVar.loading,
      error: deleteUserVar.error,
      data: deleteUserVar.data
    }
  }
}
