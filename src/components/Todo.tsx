import React, { useState, useEffect } from 'react'

interface TodoItem {
  title: String;
  desc: String;
  completed: boolean;
}

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  // Set Dummy Task to test tab height
    useEffect(() => {
      setTodoList([
        { title: "task1", desc: "abc", completed: false },
        { title: "task2", desc: "???", completed: false }
      ])
    }, [])

  return (
    <div className='_todo-wrapper'>
      <div className='_todo-input flex justify-between bg-slate-600 p-4 items-center'>
        <div className='todo-input-item'>
          <label className='pr-1'>Title:</label>
          <input 
            type="text" 
            value={newTitle} 
            placeholder='Task Title' 
            className='' />
        </div>

        <div className='todo-input-item'>
          <label className='pr-1'>Description:</label>
          <input 
            type="text" 
            value={newTitle} 
            placeholder='Task Description' 
            className='' />
        </div>
        
        <div className='_todo-input-item'>
          <button className='_todo-input-create '>Add</button>
        </div>
      </div>

      <div className='_todo-list'>
        { todoList.map((task, index) => { console.log(todoList); return (
          <div className='_task-item flex justify-between items-center bg-slate-600 m-3 p-2' key={index}>
            <div>
              <h3 className='text-4xl font-bold'>{task.title}</h3>
              <p>{task.desc}</p>
            </div>

            <div>
              <button>Complete Task</button>
            </div>
          </div>
        )})

        }
      </div>
    </div>
  )
}

export default Todo