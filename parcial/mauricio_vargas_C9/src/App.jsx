import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/From/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h4>hola</h4>
      <Form/>
    </>
  )
}

export default App
