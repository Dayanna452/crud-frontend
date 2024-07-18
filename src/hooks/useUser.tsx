import { useState, useEffect } from 'react'

export const useUser = () => {
  const [status, setStatus] = useState('idle')
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!query) return

    const fetchData = async () => {
      setStatus('fetching')
      const response = await fetch(process.env.API_REST || "http://localhost:4000/graphql")
      const data = await response.json()
      setData(data.hits)
      setStatus('fetched')
    }

    fetchData()
  }, [query])
}
