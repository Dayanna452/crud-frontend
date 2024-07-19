import { useMutation, } from '@apollo/client'
import { LOGIN } from 'app/graphql/mutations/auth'
import { AuthForm } from 'app/types/auth'
import { redirect } from 'next/navigation'

export const useUser = () => {
  const [loginVar, loginFn] = useMutation(LOGIN)
  const handleCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject['password_confirmation']
    /* const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const variables = {
      input: {
        ...formDataObject,
        phone: '+52' + formDataObject.phone
      }
    }
   */
    /*   const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
    const { customerUserErrors, customer } = customerCreate
    if(customer?.firstName){
      await createAccessToken(formDataObject.email as string, formDataObject.password as string)
      redirect('/store')
    } */
  }

  const handleLogin = async (formData: AuthForm) => {
    try {
      const { data, errors } = await loginVar({ variables: formData })
      if (data['access_token']) redirect('/list')
      if (errors) console.log(errors)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    handleCreateUser,
    handleLogin
  }
}
