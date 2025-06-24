import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { signInAnon } from './contexts/authContext/auth.ts';
import './App.css'
import GenerationButton from './components/GenerationButton.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1 >To-do list improver</h1>
      <div className="card">
        <button onClick={() => signInAnon()} className='text-white'>Sign In</button>
        <GenerationButton />
        
      </div>
      
    </>
  )
}

export default App
