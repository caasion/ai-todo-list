import React from 'react'
import Markdown from 'react-markdown';

interface ResponseBoxProps {
  promptResponse: string[];
}

const ResponseBox = ( {promptResponse}: ResponseBoxProps ) => {

  return (
    <div>
      <div className='_chat-content-inner-container flex flex-col'>
        {promptResponse.map((response, index) => (
        <div className='bg-slate-500 outline-2 outline-slate-900 p-5 mx-2' key={index}>
          <Markdown>{response}</Markdown>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ResponseBox;