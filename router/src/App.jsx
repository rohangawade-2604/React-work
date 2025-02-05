import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Header from './assets/components/header'
import Service from './assets/components/Service'
import ServiceData from './ContextAPI/ServiceData'
import Home2 from './ContextAPI/Home2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <ServiceData>
        <Home2 />
      </ServiceData>
    </>
  )
}

export default App
