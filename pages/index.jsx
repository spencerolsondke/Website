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
        <Card>
          <Title text="Welcome to my webpage!"/>
            <p class="font-sans text-2xl text-white-dark text-center">Made with React and Next.js</p>
            <p class="font-sans text-2xl text-white-dark text-center">Designed by Spencer Matei Olson</p>
            <div class="inset-x-0 bottom-0">
              <svg class="h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
          </div>
        </Card>         
        <Card>
          <Title text="Next screen"/>
        </Card>
      </Layout>
    </>
  )
}
