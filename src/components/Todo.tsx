import React, { useState, useEffect } from 'react'
import { MdDeleteOutline, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

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

  const handleNewTodo = () => {
    let NewTodoItem: TodoItem = {
      title: newTitle,
      desc: newDesc,
      completed: false
    }

    let updatedList = [...todoList];
    updatedList.push(NewTodoItem);
    setTodoList(updatedList);
  };

  const handleCompleteTodo = (index: number) => {
    let updatedList = [...todoList];
    updatedList[index] = {...updatedList[index], completed: !updatedList[index].completed};
    setTodoList(updatedList);
  };

  return (
    <div className='_todo-wrapper'>
      <div className='_todo-input flex bg-slate-600 p-4 items-center'>
        <div className='todo-input-item w-full flex items-center'>
          <label className='mr-3 text-bold text-2xl '>Title:</label>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder='Task Title' 
            className='input-area'></input>
        </div>

        <div className='todo-input-item w-full flex items-center'>
          <label className='mr-3 text-bold text-2xl'>Description:</label>
          <input 
            type="text" 
            value={newDesc} 
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder='Task Description' 
            className='input-area' />
        </div>
        
        <div className='_todo-input-item'>
          <button className='_todo-input-create ' onClick={() => handleNewTodo()}>Add</button>
        </div>
      </div>

      <div className='_todo-list'>
        { todoList.map((task, index) =>  (
          <div className='_task-item flex items-center bg-slate-600 m-3 py-2 px-4' key={index}>
            <div className='mr-3'>
              {task.completed 
                ? (<MdCheckBox className='checkbox' onClick={() => handleCompleteTodo(index)} />) 
                : (<MdCheckBoxOutlineBlank className='checkbox' onClick={() => handleCompleteTodo(index)} />)
              }
            </div>

            <div className='w-full'>
              <h3 className='text-4xl font-bold'>{task.title}</h3>
              <p>{task.desc}</p>
            </div>

            
            <div className='flex'>
              <MdDeleteOutline className='text-3xl' />
            </div>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Todo