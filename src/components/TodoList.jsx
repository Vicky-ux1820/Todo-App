import React from 'react'

const TodoList = ({title, deleteTodo, id, toggle, isCompleted}) => {
  return (
    <div>
      <div className='flex  items-center gap-2'>
        <div className='flex-1/2 flex items-center gap-2'>
        <input 
        onChange={() => toggle(id)}
        type="checkbox" />
        <p className={`text-xl ${ isCompleted ? "line-through": ""}`}>{title}</p>
        </div>
        
        <button
        onClick={() => deleteTodo(id)}
        className=' flex-1/4 cursor-pointer bg-red-600 py-2 px-4 rounded-md text-white'>Delete</button>
      </div>
    </div>
  )
}

export default TodoList
