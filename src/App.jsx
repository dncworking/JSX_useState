import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import One from './One'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <One/>
    </>
  )
}

export default App
