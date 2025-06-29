import React, { useState, useEffect } from 'react'
import { MdDeleteOutline, MdCheckBoxOutlineBlank, MdCheckBox, MdDragIndicator } from "react-icons/md";

const PRIORITY_LABELS = ["None", "Low", "Medium", "High", "Urgent"];
const ENERGY_LABELS = ["None", "Low", "Medium", "High"];

interface TodoItem {
  title: String;
  desc: String;
  priority: number; // 0 - No priority; 1 - Low; 2 - Medium; 3 - HIgh; 4 - Urgent & Important
  energy: number; // 0 - No energy; 1 - Low; 2 - Medium; 3 - High
  completed: boolean;
}

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPriority, setNewPriority] = useState(0);
  const [newEnergy, setNewEnergy] = useState(0);

  // Set Dummy Task to test tab height
  useEffect(() => {
    setTodoList([
      { title: "task1", desc: "abc", priority: 3, energy: 3, completed: false },
      { title: "task2", desc: "???", priority: 4, energy: 0, completed: false }
    ])
  }, [])

  const handleNewTodo = () => {
    let NewTodoItem: TodoItem = {
      title: newTitle,
      desc: newDesc,
      priority: newPriority,
      energy: newEnergy,
      completed: false
    }

    let updatedList = [...todoList];
    updatedList.push(NewTodoItem);
    setTodoList(updatedList);

    setNewDesc("");
    setNewTitle("")
  };

  const handleCompleteTodo = (index: number) => {
    let updatedList = [...todoList];
    updatedList[index] = {...updatedList[index], completed: !updatedList[index].completed};
    setTodoList(updatedList);
  };

  const handleDeleteTodo = (index: number) => {
    let updatedList = [...todoList];
    updatedList.splice(index, 1)
    setTodoList(updatedList);
  }

  return (
    <div className='_todo-wrapper'>
      <div className='_todo-input flex flex-col bg-slate-600 p-4 items-center'>
        <div className='w-full flex'>
          <div className='todo-input-item w-full flex items-center'>
            <label className='mr-3 text-bold text-2xl '>Title:</label>
            <input 
              type="text" 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder='Task Title' 
              className='input-area'></input>
          </div>
          <div className='todo-input-item'>
            <label className='mr-3 text-bold text-2xl '>Priority:</label>
            <select value={newPriority} onChange={(e) => setNewPriority(Number(e.target.value))} id="priority">
              <option value={0}>None</option>
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
              <option value={4}>Urgent & Important</option>
            </select>
          </div>
          <div className='todo-input-item'>
            <label className='mr-3 text-bold text-2xl '>Energy:</label>
            <select value={newEnergy} onChange={(e) => setNewEnergy(Number(e.target.value))} id="priority">
              <option value={0}>None</option>
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
            </select>
          </div>
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
          <div className='_task-item flex items-center bg-slate-600 m-3 py-2 px-2' key={index}>
            <div className='mr-3'>
              <MdDragIndicator className='text-2xl hover:text-purple-300' />
            </div>

            <div className='mr-3'>
              {task.completed 
                ? (<MdCheckBox className='checkbox' onClick={() => handleCompleteTodo(index)} />) 
                : (<MdCheckBoxOutlineBlank className='checkbox' onClick={() => handleCompleteTodo(index)} />)
              }
            </div>

            <div className='w-full'>
              <h3 className={`text-2xl font-semibold ${task.completed && "line-through text-slate-300"}`}>{task.title}</h3>
              <p className={`text-slate-300 ${task.completed && "line-through text-slate-400"}`}>{task.desc}</p>
              <p>🚩 {PRIORITY_LABELS[task.priority]} | 🔋 {ENERGY_LABELS[task.energy]}</p>
            </div>

            
            <div className='flex mr-3'>
              <MdDeleteOutline 
                className='text-3xl hover:text-red-400 active:text-red-500' 
                onClick={() => handleDeleteTodo(index)}
              />
            </div>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Todo