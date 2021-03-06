import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title.jsx'
import Layout from '../components/Layout.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spencer Matei Olson</title>
      </Head>
      <Layout>
          <Title />
          <p class="font-sans text-2xl text-white-dark text-center">Made with React and Next.js</p>
      </Layout>
    </>
  )
}
