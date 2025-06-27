import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { signInAnon } from './contexts/authContext/auth.ts';
import './App.css'
import GenerationButton from './components/GenerationButton.tsx';
import ResponseBox from './components/ResponseBox.tsx';
import Todo from './components/Todo.tsx';

function App() {
  const [count, setCount] = useState(0)
  
  const [promptResponse, setPromptResponse] = useState<string[]>([]);

  // Set Dummy Response to test tab height
  useEffect(() => {
    setPromptResponse([`A\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\nA\n\n`])
  }, [])

  return (
    <div className="_main flex flex-col h-screen overflow-hidden">
      {/* Sticky Header */}
      <header className="_header sticky top-0 left-0 w-full z-50 shadow bg-slate-700">
        <h1 className="py-5 text-center font-bold text-5xl text-white">
          To-do list improver
        </h1>
      </header>

      {/* Main Content */}
      <div className="_main-content-container flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <div className="_left-panel w-1/2 overflow-y-auto p-4 bg-slate border-r-4 border-r-slate-400">
          <Todo></Todo>
        </div>

        {/* Right Panel */}
        <div className="_right-panel w-1/2 flex flex-col overflow-hidden bg-slate">
          {/* Scrollable content */}
          <div className="_chat-content-container flex-1 overflow-y-auto p-4">
            <ResponseBox promptResponse={promptResponse} />
          </div>

          {/* Fixed bottom button inside panel */}
          <div className="_chat-prompt-container sticky bottom-0 bg-slate p-4 z-10">
            <GenerationButton
              promptResponse={promptResponse}
              setPromptResponse={setPromptResponse}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
