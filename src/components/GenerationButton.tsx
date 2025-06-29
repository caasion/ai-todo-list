import React, { useState } from 'react'
import { model } from '../firebase/firebase'
import type { TodoItem } from '../App';

interface GenerationButtonProps {
  promptResponse: string[];
  setPromptResponse: React.Dispatch<React.SetStateAction<string[]>>;
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const PROMPT_TEMPLATE = `Your objective is to help the user with completing their tasks in the todo list provided by providing them with a plan for today. You should consider:
The user's energy level, mood, and needs. (If the user doesn't provide anything, please prompt them to do so, by suggesting that you can refine the schedule for the day with more information)
[Preset Information -- TBD]
Format your response in a bulleted list of:
- Task 1 (that should be completed first)
- Task 2
- Task 3
All of the user's tasks in a javascript object:
`

const GenerationButton = ({ promptResponse, setPromptResponse, todoList, setTodoList }: GenerationButtonProps) => {
  const [prompt, setPrompt] = useState("");
  

  const handleSubmit = () => {
    setPromptResponse(prev => [...prev, ""]);
    generateFromPrompt(PROMPT_TEMPLATE + JSON.stringify(todoList) + prompt, promptResponse.length);
  }

  const generateFromPrompt = async (prompt: string, responseIndex: number) => {
    
    const result = await model.generateContentStream(prompt);

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      setPromptResponse(prev => {
        const updated = [...prev];
        updated[responseIndex] += chunkText;
        return updated;
      });
      
    }
  }


  return (
    <div className="chat-prompt-inner-container w-full h-max bg-slate-600 rounded-4xl px-4 py-2 flex-center">
      <textarea 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = Math.min(target.scrollHeight, 5 * 24) + "px";
        }}
        className='w-full resize-none overflow-y-auto m-3 focus:outline-0 '
        placeholder='Enter Prompt'
        rows={1}
      />

      <button 
        type="button" 
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
    
  )
}

export default GenerationButton

// TODO: Add chat history memory


// Important: Prompt Engineering & Design: https://firebase.google.com/docs/ai-logic/prompt-design?authuser=0

// Add "Accept?" button after ai suggestions



// ??? Is it possible to have the AI format it in natural language, but then provide the coding a JSON file??

// Your objective is to help the user with completing their tasks in the todo list provided by providing them with a plan for today. You should consider:
// The user's energy level, mood, and needs. (If the user doesn't provide anything, please prompt them to do so, by suggesting that you can refine the schedule for the day with more information)
// (Preset information -- i.e. when do you usually eat lunch, what are you habits, to tell the prompt)
// Format your response in a bulleted list of:
// - Task 1 (that should be completed first)
// - Task 2
// - Task 3
// All of the user's tasks in a javascript object:
// (Stuffs)