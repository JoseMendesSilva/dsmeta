import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NotificationButton from './components/NotificationButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Olá Mundo!</h1>
    <NotificationButton />
    </>
  )
}

export default App
