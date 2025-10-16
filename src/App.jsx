import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './app.css'
import ToDoList from './Components/ToDo';
import Example from './Components/Example';
import Navbar from './Components/navbar';
import Simpleform from './Components/Simpleform';
import YoutubeNavbar from './Components/YoutubeNavbar';
import TailwindCssExample from './Components/TailwindCssExample';
import BasicReact from './Components/BasicReact';
import ToDoUsingTailWind from './Components/ToDoUsingTailWind';
import Task from './Components/Task';
import UseEffectTask from './Components/UseEffectTask';
import StopWatch from './Components/StopWatch';
import ButtonComponent from './Components/buttonComponents'
import ApiExample from './Components/APIExample';
import AgePredictor from './Components/AgePredict';
import ExcuseGenerator from './Components/ExcuseGenerator';
import DataFetch from './Components/TableApi';
import RandomUser from './Components/RamdomUser';

import Header from './Component/header';
import Profile from './Component/profile';
import Contact from './Component/contact';
import Home from './Component/home';
import Hi from './Component/hi';

import {createContext} from "react";

export const AppContext = createContext();

function App() {
/*
  const [name, Setname] = useState(1);

  useEffect(() => {
    Setname(name + 1);
    console.log("Component mounted");
  }, [name]);
  console.log("pranawa");
  */

  
  const [username, setUserName] = useState("pranawa");
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

      {/*}
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
    
    */}
      {/* <Example /> */}

      {/*
    <BasicReact name="Pranawa" age={21} email ="pranawakc187@gmail.com" />
    <BasicReact name="Sita" age={29}  email ="sita12@gmail.com" />
    <BasicReact name="Gita" age={15}  email ="gita123@gmail.com" />
    */}
      {/*
    <BasicReact salary={90000} position = "Senior SDE" company="Amazon" />
    <BasicReact salary={12000} position = "Junior SDE" company="Google" />
    <BasicReact salary={10000} position = "Project Manager" company="Netflix" />
    */}
      {/*
    <BasicReact />
    */}
      {/*
    <ToDoUsingTailWind />
     */}

    {/*<ButtonComponent />*/}
    {/*<ApiExample />*/}

    {/*<AgePredictor />*/}

    {/*<ExcuseGenerator />*/}
    {/*<DataFetch />*/}

   { /*
    <Routes>
         <Route
           path="/"
           element={
             <> 
               <div className='main'>
                 <Header />
                </div>
              </>
            }
          />
           <Route
           path="/home"
           element={
             <> 
               <div className='main'>
                 <Header />
                 <Home name={username}/>
                </div>
              </>
            }
          />
           <Route
           path="/profile"
           element={
             <> 
               <div className='main'>
                 <Header />
                 <Profile name={username} newName={setUserName}/>
       
                </div>
              </>
            }
          />
          <Route
           path="/contact"
           element={
             <> 
               <div className='main'>
                 <Header />
                 <Contact />
       
                </div>
              </>
            }
          />
        </Routes>
     
     */}
     <AppContext.Provider value={{username }}>
       <Hi />

     </AppContext.Provider>

   </>
  )
}


export default App;
