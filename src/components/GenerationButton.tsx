import React, { useState } from 'react'
import { model } from '../firebase/firebase'
import { markdownParsing } from './Regex';
import Markdown from 'react-markdown';

const GenerationButton = () => {

  const [prompt, setPrompt] = useState("");
  const [promptResponse, setPromptResponse] = useState<string[]>([]);

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

    const response = await result.response;

    const text = response.text();
  }

  const rules: [RegExp, string][] = markdownParsing;
  const processMarkdown = (text: string) => {
    let html = text;
    rules.forEach(([rule, template]) => {
      html = html.replace(rule, template);
    });

    return html;
  } 
  

  return (
    <div>
      <div>
        {promptResponse.map((response, index) => (
        <div>
          <Markdown key={index}>
            {response}
          </Markdown>
        </div>
      ))}
      </div>
      

      <div className="w-full mx-0.7 h-max bg-slate-600 rounded-4xl px-4 py-2 flex-center">
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

        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    
  )
}

export default GenerationButton