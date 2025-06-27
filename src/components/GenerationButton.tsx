import React, { useState } from 'react'
import { model } from '../firebase/firebase'

interface GenerationButtonProps {
  promptResponse: string[];
  setPromptResponse: React.Dispatch<React.SetStateAction<string[]>>;
}

const GenerationButton = ({ promptResponse, setPromptResponse }: GenerationButtonProps) => {
  const [prompt, setPrompt] = useState("");
  

  const handleSubmit = () => {
    setPromptResponse(prev => [...prev, ""]);
    generateFromPrompt(prompt, promptResponse.length);
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
    <div className="input-area">
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
        className='rounded-4xl bg-purple-600 p-2 hover:bg-purple-700 cursor-pointer'
      >
        Submit
      </button>
    </div>
    
  )
}

export default GenerationButton