import React from 'react';
import {useRef, useState} from 'react';

import '../app.css'

function ToDoItem({text, id, iscompleted, deleteItems,toggleComplete}) {
  return (
    <>  
        <div className="task-item">
         <div onClick={()=>{toggleComplete(id)}} className="task-content">
             <img src={iscompleted?"tick.png":"not_tick.png"} alt="" className="tick-icon" />
             <p className={`task-text ${iscompleted?'decoration':''}`} >{text}</p>
          </div>

         <img onClick ={()=>{deleteItems(id)}} src="delete.png" alt="" class="delete-icon" />
       </div>
    </>
    )
}

export default ToDoItem;