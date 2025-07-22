import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian'
import './components/accordian/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordian />
    </>
  )
}

export default App
