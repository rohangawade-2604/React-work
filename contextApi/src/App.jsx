import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './context/counter'
import Count from './Component/count';

function App() {

  const CallContext = useContext(CountContext);

  console.log("Context"+ CallContext);
  

  return (
    <>  
    <div className="App">
      <h1>Count is all about {CallContext.count}</h1>
      <Count />
    </div>
    
    </>
  )
}

export default App
