import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Proyects from '../components/Proyects'
import Technologies from '../components/Technologies'

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>Kevin Cay</title>
        <meta name="KevinCay||Portfolio" content="This is my amazing portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <AboutMe id="about"/>
      <Proyects id="proyects" />
      <Technologies id="tech" />
      <ContactForm id="contact" />
    </div>
  )
}
