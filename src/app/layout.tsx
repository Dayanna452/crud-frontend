import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from 'app/services/apollo.service'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crud',
  description: 'Users crud'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  )
}
