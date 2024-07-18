import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      createdAt
      role
      password
    }
    access_token
  }
`
