import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title.jsx'
import Layout from '../components/Layout.jsx'
import Card from '../components/Card.jsx'
import disableScroll from 'disable-scroll'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spencer Matei Olson</title>
      </Head>
      <Layout>
        <Card arrowNext={true} next="About" id="Start">
          <Title class="flex-none" text="Welcome to my webpage!"/>
          <p>Made with React and Next.js</p>
          <p>Designed by Spencer Matei Olson</p>
        </Card>         
        <Card id="About" arrowPrev={true} prev="Start">
          <Title text="About me"/>
          <p>
            Hello there! I am a half-American half-Romanian university student and tech enthusiast who calls Europe his home. 
            I've spent most of my adult life studying Computer Science and exploring the different facets of that field.
          </p>
        </Card>
      </Layout>
    </>
  )
}
