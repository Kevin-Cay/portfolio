import { useState } from 'react'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Templates from '../components/Templates'

export default function Home() {
    const [language, setLanguage] = useState('english');
    return (
    <div >
      <Head >
        <title>Kevin Cay</title>
        <meta name="KevinCay||Portfolio" content="This is my amazing portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar setLanguage={setLanguage} language={language} />
      <Header language={language} />
      <AboutMe  language={language} id="about"/>
      <Projects language={language} id="projects" />
      <Templates language={language} id="templates" />
      <Technologies language={language} id="tech" />
      <ContactForm language={language} id="contact" />
    </div>
  )
}
