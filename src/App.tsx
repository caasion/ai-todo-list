import { useEffect, useState } from 'react'
import { signInAnon } from './contexts/authContext/auth.ts';
import './App.css'
import GenerationButton from './components/GenerationButton.tsx';
import ResponseBox from './components/ResponseBox.tsx';
import Todo from './components/Todo.tsx';


export interface TodoItem {
  title: String;
  desc: String;
  priority: number; // 0 - No priority; 1 - Low; 2 - Medium; 3 - HIgh; 4 - Urgent & Important
  energy: number; // 0 - No energy; 1 - Low; 2 - Medium; 3 - High
  completed: boolean;
}


function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  
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
        <div className="_left-panel panel w-1/2 overflow-y-auto p-4 bg-slate border-r-4 border-r-slate-400">
          <Todo todoList={todoList} setTodoList={setTodoList}></Todo>
        </div>

        

        {/* Right Panel */}
        <div className="_right-panel w-1/2 flex flex-col overflow-hidden bg-slate">
          {/* Scrollable content */}
          <div className="_chat-content-container panel flex-1 overflow-y-auto p-4">
            <ResponseBox promptResponse={promptResponse} />
          </div>

          {/* Fixed bottom button inside panel */}
          <div className="_chat-prompt-container sticky bottom-0 bg-slate p-4 z-10">
            <GenerationButton
              promptResponse={promptResponse}
              setPromptResponse={setPromptResponse}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

// Should ask:
// How much energy do you have?
// What mood are you in?
// What do you need right now? be productive? self-care? want to learn? want to be active? want to be social?

// Gives feedback -- you might be trying to do too much!

// Goal of AI -- pulls from todo list, and helps you make a plan for the day!! You can tell it you don't want to do certain things or feel like doing something