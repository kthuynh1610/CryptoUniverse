import { useState } from 'react'
import './App.css'
import Header from './Components/VerticalHeader/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>Crypto Universe</h1>
    </>
  )
}

export default App
