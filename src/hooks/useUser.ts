import { useMutation } from '@apollo/client'
import { LOGIN } from 'app/graphql/mutations/auth'
import { ADD_USER, DELETE_USER, UPDATE_USER } from 'app/graphql/mutations/user'
import { AuthForm } from 'app/types/auth'
import { redirect } from 'next/navigation'

export const useUser = () => {
  const [loginFn, loginVar] = useMutation(LOGIN)
  const [addUserFn, addUserVar] = useMutation(ADD_USER)
  const [updateUserFn, updateUserVar] = useMutation(UPDATE_USER)
  const [deleteUserFn, deleteUserVar] = useMutation(DELETE_USER)
  const handleCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject['password_confirmation']

  }

  
  const handleLogin = async (formData: AuthForm) => {
    try {
      await loginFn({ variables: { email: formData.username, password: formData.password } })
      //console.log('data', data)
      if (loginVar.data['access_token']) redirect('/list')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    handleCreateUser,
    handleLogin,
    login:{
      loading: loginVar.loading,
      error: loginVar.error,
      data: loginVar.data
    },
    addUser:{
      loading: addUserVar.loading,
      error: addUserVar.error,
      data: addUserVar.data
    },
    updateUser:{
      loading: updateUserVar.loading,
      error: updateUserVar.error,
      data: updateUserVar.data
    },
    deleteUser:{
      loading: deleteUserVar.loading,
      error: deleteUserVar.error,
      data: deleteUserVar.data
    }
    
  }
}
