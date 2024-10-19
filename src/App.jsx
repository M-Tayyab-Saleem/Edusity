import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Compus from './components/Compus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Video from './components/Video'


const App = () => {
  const [playState , setplayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title  subTitle="Our Programs"  title="What We Offer"/>
      <Programs />
      <About setplayState={setplayState}/>
      <Compus />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
      <Video playState={playState} setplayState={setplayState}/>
    </div>
  )
}

export default App