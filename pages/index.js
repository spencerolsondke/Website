import Head from 'next/head'
import Image from 'next/image'
import { Sidebar } from '../components/Sidebar.jsx'

export default function Home() {
  return (
    <>
      <Head>
      <title>Spencer Matei Olson</title>
      </Head>
      <Sidebar />
    </>
  )
}
