import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Contacts from './components/Contacts'

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Projects />
    <About />
    <Contacts />
   </div>
  )
}
