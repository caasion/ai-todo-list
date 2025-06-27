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
    updatedList[index] = {...updatedList[index], completed: true};
    setTodoList(updatedList);
  };

  return (
    <div className='_todo-wrapper'>
      <div className='_todo-input flex justify-between bg-slate-600 p-4 items-center'>
        <div className='todo-input-item'>
          <label className='pr-1'>Title:</label>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder='Task Title' 
            className='a'></input>
        </div>

        <div className='todo-input-item'>
          <label className='pr-1'>Description:</label>
          <input 
            type="text" 
            value={newDesc} 
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder='Task Description' 
            className='a' />
        </div>
        
        <div className='_todo-input-item'>
          <button className='_todo-input-create ' onClick={() => handleNewTodo()}>Add</button>
        </div>
      </div>

      <div className='_todo-list'>
        { todoList.map((task, index) =>  (
          <div className='_task-item flex justify-between items-center bg-slate-600 m-3 p-2' key={index}>
            <div>
              <h3 className='text-4xl font-bold'>{task.title}</h3>
              <p>{task.desc}</p>
            </div>

            <div>
              <button onClick={() => handleCompleteTodo(index)}>Complete Task</button>
            </div>

            {task.completed ? (<p>yay!</p>) : (<p>nay :(</p>)}
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Todo