import React, { useEffect } from "react";
import { useRef, useState } from 'react'
import '../app.css'
import ToDoItem from '../Components/ToDoItems';


function ToDoList() {
    const [todolist, setTodolist] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useState("null");
    
    const add =()=>{
      const inputText = inputRef.current.value.trim();
     
      if(inputText ===""){
        return null;
      }  
    
      const newTodo={
        id: Date.now(),
        text: inputText,
        iscompleted: false,
      }
      setTodolist((prev)=>[...prev, newTodo]);
      inputRef.current.value = "";
    }
    
    const deleteItems =(id)=>{
        setTodolist((prvTodos)=> {
           return prvTodos.filter((todo)=> todo.id !== id)
        });
    }

    const toggleComplete = (id) =>{
        setTodolist((prevTodos)=>{
          return prevTodos.map((todo)=>{
              if(todo.id === id){
                  return {...todo, iscompleted: !todo.iscompleted};
                }
              return todo;
            })
        });
    }
    
    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todolist));
    }, [todolist]);


    return (
        <>
         <div className="to-doContainer">
           <div className = "header">
             <img style ={{width: '8%'}} src="todo_icon.png" alt="todo" />
             <h1 style ={{fontSize:'25px', fontWeight:'bold'}}> To-Do List</h1>
    
            </div>
    
            <div className="task-container">
             <input ref ={inputRef} type="text" placeholder="Add your task" className="task-input" />  {/* Inputref is used to get input filed text*/}
             <button onClick={add} className="task-button">ADD TASK</button>
           </div>
            
             <div>
              {todolist.map((item, index)=>{
                return <ToDoItem key={index} text={item.text} id = {item.id} iscompleted = {item.iscompleted} deleteItems ={deleteItems} toggleComplete={toggleComplete}/>
              })}
             </div>
     
          </div>
        </>
    )
}

export default ToDoList;