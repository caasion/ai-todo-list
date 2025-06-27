import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { signInAnon } from './contexts/authContext/auth.ts';
import './App.css'
import GenerationButton from './components/GenerationButton.tsx';
import ResponseBox from './components/ResponseBox.tsx';

function App() {
  const [count, setCount] = useState(0)
  
  const [promptResponse, setPromptResponse] = useState<string[]>([]);

  // Set Dummy Response to test tab height
  useEffect(() => {
    setPromptResponse([`A\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\n`])
  }, [])

  return (
    <>
      <header className='sticky top-0 left-0 w-full z-50 shadow bg-slate-700'>
          <h1 className='py-5 text-center font-bold text-5xl'>To-do list improver</h1>
      </header>
      
      <div className='h-screen flex flex-1 overflow-hidden'>

        <div className='w-1/2 overflow-y-auto'>
          <p className='text-amber'>test</p>
        </div>

        <div className='w-1/2 overflow-y-auto'>
          <main className='flex-1 overflow-y-auto pt-20 pb-20'>
            <ResponseBox promptResponse={promptResponse} />
          </main>
          
          <div className='fixed bottom-0 w-full z-50 pd-30'>
            <GenerationButton promptResponse={promptResponse} setPromptResponse={setPromptResponse}/>
          </div>
        </div>
        

        
          
      </div>
      
      
      
    </>
  )
}

export default App
