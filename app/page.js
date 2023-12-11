import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Projects />
    <About />
    <Contacts />
    <Footer />
   </div>
  )
}
