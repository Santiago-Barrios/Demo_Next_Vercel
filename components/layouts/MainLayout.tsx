import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'
import { Inter } from 'next/font/google'
import { FC } from 'react'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Santiago</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  )
}
