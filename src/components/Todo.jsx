import React, { use, useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

  const add = () => {
    if (inputRef.current.value.trim() === '') {
      alert('Please enter a task');  
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: inputRef.current.value,
      isCompleted: false,
    }
    setTodos([...todos, newTodo]);
    inputRef.current.value = '';
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggle=(id)=>{
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    ));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-[#fafafa] flex flex-col justify-start gap-4 p-4 rounded min-w-[45%]  min-h-[40vh]">
      <div className="flex items-center gap-2">
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter a task"
          className="px-4 py-2 border rounded-md outline outline-blue-300 border-gray-300"
        />
        <button
        onClick={add}
        className="bg-blue-800 text-white px-4 py-2.5 rounded-md cursor-pointer">
          Add To-Do
        </button>
      </div>
      <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoList key={todo.id} toggle={toggle} title={todo.title} isCompleted={todo.isCompleted} id={todo.id} deleteTodo={deleteTodo}/>
      ))}
      </div>
    </div>
  );
};

export default Todo;
