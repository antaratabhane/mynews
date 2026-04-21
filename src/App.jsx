import { useState } from 'react'
import Header from './components/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <h1 className='text-3xl bg-violet-500'>Hello World</h1>
    </>
  )
}

export default App
