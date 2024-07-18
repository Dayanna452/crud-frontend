import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { ADD_USER, DELETE_USER, UPDATE_USER } from 'app/graphql/mutations/user'
import { GET_USER, GET_USERS } from 'app/graphql/queries/user'
import { useState, useEffect } from 'react'

export const useUser = () => {
  const [status, setStatus] = useState('idle')
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

    const { loading, error, data: dataUsers } = useQuery(GET_USERS, {})
    const [usersOptions, usersVar] = useLazyQuery(GET_USER, {})
    const [addUsersOptions, addUsersVar] = useMutation(ADD_USER, {})
    const [updateUsersOptions, updateUsersVar] = useMutation(UPDATE_USER, {})
    const [deleteUsersOptions, deleteUsersVar] = useMutation(DELETE_USER, {})

  useEffect(() => {
    if (!query) return

    const fetchData = async () => {
      setStatus('fetching')
      const response = await fetch(
        process.env.API_REST || 'http://localhost:4000/graphql'
      )
      const data = await response.json()
      setData(data.hits)
      setStatus('fetched')
    }

    fetchData()
  }, [query])

  return { status, data, loading, error, dataUsers, usersOptions, usersVar, addUsersOptions, addUsersVar, updateUsersOptions, updateUsersVar, deleteUsersOptions, deleteUsersVar }  
}
