import React from 'react';
import { useRef, useState } from 'react'
import {Routes, Route } from "react-router-dom";
import './app.css'
import ToDoList from './Components/ToDo';
import Example from './Components/Example';
import Navbar from './Components/navbar';
function App() {

  return (
    <>
       <Routes>
         <Route
           path="/"
           element={
             <> 
               <div className='main'>
                 <Navbar />
       
                </div>
              </>
            }
          />
        </Routes>
     </>
  )
}

export default App
