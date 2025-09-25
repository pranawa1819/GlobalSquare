import React from 'react';
import { useRef, useState } from 'react'
import {Routes, Route } from "react-router-dom";
import './app.css'
import ToDoList from './Components/ToDo';
import Example from './Components/Example';
import Navbar from './Components/navbar';
import Simpleform from './Components/Simpleform';
import YoutubeNavbar from './Components/YoutubeNavbar';
function App() {

  return (
    <>
    {/*
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
           <Route
           path="/Simpleform"
           element={
             <> 
               <div className='main'>
                 <Navbar />
                <Simpleform />
       
                </div>
              </>
            }
          />
        </Routes>
     </>
     */}


     <Routes>
        <Route
         path="/"
          element={
            <> 
             <YoutubeNavbar />
              
            </>
          }
        />
      </Routes>
     </>     
  )
}

export default App;
