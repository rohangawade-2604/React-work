import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceList from './components/servicelist'
import FormList from './contactpage/form'
import FormList2 from './contactpage/form2'
import Home from './ContextAPI/Home'
import ServiceData from './ContextAPI/ServiceData'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
      {/* <div>
        <h1>UseState in React</h1>
        <p>count is: {count}</p>
        <button onClick={() => setCount((count) => count+1)}>Increment</button>
        <button onClick={() => setCount((count) => count-1)}>Decrement</button>
      </div> */}

      <ServiceList/>
      <FormList/>
      <FormList2/>

      <ServiceData>
      <Home/>
      </ServiceData>
    </>
  )
}

export default App
