import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { signInAnon } from './contexts/authContext/auth.ts';
import './App.css'
import GenerationButton from './components/GenerationButton.tsx';
import ResponseBox from './components/ResponseBox.tsx';

function App() {
  const [count, setCount] = useState(0)
  
  const [promptResponse, setPromptResponse] = useState<string[]>([]);

  return (
    <>
      <div className='h-screen flex flex-col'>
        <header className='fixed top-0 left-0 w-full z-50 shadow'>
          <h1 className='py-5 text-center'>To-do list improver</h1>
        </header>

        <main className='flex-1 overflow-y-auto pt-20 pb-20'>
          <ResponseBox promptResponse={promptResponse} />
        </main>
        
        <div className='fixed bottom-0 w-full z-50 pd-30'>
          <GenerationButton promptResponse={promptResponse} setPromptResponse={setPromptResponse}/>
        </div>
          
      </div>
      
      
      
    </>
  )
}

export default App
