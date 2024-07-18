import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GET_USERS {
    users {
      id
      name
      email
      createdAt
      role
      password
    }
  }
`

export const GET_USER = gql`
  query GET_USER($id: ID!) {
    user(id: $id) {
      id
      name
      email
      createdAt
      role
      password
    }
  }
`