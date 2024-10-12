import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Compus from './components/Compus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title  subTitle="Our Programs"  title="What We Offer"/>
      <Programs />
      <About />
      <Compus />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App