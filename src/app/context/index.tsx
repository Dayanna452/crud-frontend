'use client'

import { ApolloProvider } from '@apollo/client'
import client from 'app/services/apolloClient'
import React from 'react'

export default function Contexts({children}:{children: React.ReactNode}) {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}
