import { gql } from '@apollo/client'

export const ADD_USER = gql`
  mutation ADD_USER($dto: CreateUserInput!) {
    addUser(dto: $dto) {
      id
      name
      email
      createdAt
      role
      password
    }
  }
`

export const UPDATE_USER = gql`
  mutation UPDATE_USER($id: ID!, $dto: UpdateUserInput!) {
    updateUser(dto: $dto, id: $id) {
      id
      name
      email
      createdAt
      role
      password
    }
  }
`

export const DELETE_USER = gql`
  mutation DELETE_USER($id: ID!) {
    deleteUser(id: $id)
  }
`
