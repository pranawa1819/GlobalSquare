import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../app.css'

function ToDoUsingTailWind() {
    
    const [todolist, setTodolist] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const [newTask, setNewtask] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    

    const add = () => {
        if (newTask.trim() === "") return;

        if (isEditing) {
            setTodolist(
                todolist.map((task) =>
                    task.id === currentId ? { ...task, taskName: newTask } : task
                )
            );
            setIsEditing(false);
            setCurrentId(null);
        } else {
            const task = {
                id: Date.now(),
                taskName: newTask,
                iscompleted: false,
            };
            setTodolist([task, ...todolist]);
        }

        setNewtask("");
    };



    const deleteTask = (id) => {
        setTodolist(todolist.filter((task) => task.id !== id));
    };

    const complete = (id) => {
        setTodolist(
            todolist.map((task) => {
                if (task.id === id) {
                    return { ...task, iscompleted: !task.iscompleted }
                }

            })
        );
    };


    const edit = (id) => {

        const taskToEdit = todolist.find((task) => task.id === id);
        setNewtask(taskToEdit.taskName);
        setIsEditing(true);
        setCurrentId(id);

    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todolist));
    }, [todolist]);

    return (
        <>
            <div className="border-2 border-gray-200 w-3xl shadow-md m-auto mt-10">
                <div className="flex text-center m-11">
                    <img src="/todo_icon.png" className="w-9 h-9 " ></img>
                    <h1 className="font-bold  text-3xl">To-Do List</h1>
                </div>
                <div className="flex  px-[24px] py-[16px] h-20 w-2xl m-auto mt-5 justify-center">
                    <input type="text" placeholder="Enter your task" value={newTask} onChange={(e) => setNewtask(e.target.value)} className="border-2 border-gray-700 px-2 py-1 mr-5  bg-gray-100" />
                    <button className="border-2 border-amber-500 px-2 py-1 rounded-2xl bg-amber-500 text-white hover:bg-amber-700  text-2xl " onClick={add}> {isEditing ? "Update Task" : "Add Task"}</button>
                </div>

                <div className="ml-11 mr-11 mt-5 mb-5 justify-center bg-amber-50 ">
                    {todolist.map((task, index) =>
                        <div className="flex justify-between px-[24px] py-[16px] w-2xl">
                            <div className="flex ">
                                {/*<img src={task.iscompleted ? "/tick.png" : "/not_tick.png"} alt="" className="w-8 h-8 " onClick={() => complete(task.id)} />*/}
                                <input
                                    type="checkbox"
                                    checked={task.iscompleted}
                                    onChange={() => complete(task.id)}
                                    className="w-8 h-8 "
                                    
                                />
                                <h1 className={`font-bold  text-2xl px-6 ${task.iscompleted ? 'line-through text-gray-500' : ''} `} >{task.taskName}</h1>
                            </div>
                            <div className="flex  ">
                                <img src="/delete.png" className="w-8 h-8 mr-5 " onClick={() => deleteTask(task.id)} />
                                <img src="/edit.png" className="w-8 h-8 mr-5 " onClick={() => edit(task.id)} />
                                {isEditing && task.id === currentId
                                    && (
                                        <img src="/close.png"
                                            className="w-8 h-8  "
                                            onClick={() => {
                                                setIsEditing(false);
                                                setNewtask("");
                                                setCurrentId(null);
                                            }}
                                        />

                                    )}
                            </div>



                        </div>
                    )}
                </div>
            </div>
        </>
    );

};

export default ToDoUsingTailWind;
