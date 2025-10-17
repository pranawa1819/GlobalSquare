import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import HeaderAll from './Components/headerAll';
import ToDoLists from './Components/ToDo';
import Example from './Components/Example';
import NavRouting from './Components/navRoutes';
import YNavRouting from './Components/youTubeNav';
import TailwindCssExample from './Components/TailwindCssExample';
import BasicReact from './Components/BasicReact';
import ToDoUsingTailWind from './Components/ToDoUsingTailWind';
import Simpleform from './Components/Simpleform';
import UseEffectTask from './Components/UseEffectTask';
import StopWatch from './Components/StopWatch';
import ButtonComponent from './Components/buttonComponents';
import AgePredictor from './Components/AgePredict';
import ApiExample from './Components/APIExample';
import ExcuseGenerator from './Components/ExcuseGenerator';
import RandomUser from './Components/RamdomUser';
import DataFetch from './Components/TableApi';
import Header from './Component/header';
import ContextExample from './Component/Context';
import PropsDrilling from './Component/PropsDrilling';
import Home from './Component/home';
import Profile from './Component/profile';
import Practice2 from './Components/practice2';



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
     <HeaderAll />
      
      <Routes>
        <Route path="/ToDo"element={<><ToDoLists /></>} />
      </Routes>

      <Routes>
        <Route path="/Example" element={<> <Example /></>} />
      </Routes>

      <Routes>
        <Route path="/navRoutes" element={<><NavRouting /></>} />
      </Routes>

      <Routes>
        <Route path="/youTubeNav" element={<><YNavRouting /></>} />
      </Routes>

      <Routes>
        <Route path="/TailwindCssExample" element={<><TailwindCssExample /></>} />
      </Routes>

      <Routes>
        <Route path="/practice2" element={<><Practice2 /></>} />
      </Routes>

      <Routes>
        <Route path="/BasicReact" element={<><BasicReact /> </>} />
      </Routes>

      <Routes>
        <Route path="/ToDoUsingTailWind" element={<><ToDoUsingTailWind /></>} />
      </Routes>

      <Routes>
        <Route path="/Simpleform" element={<><Simpleform /></>} />
      </Routes>

      <Routes>
        <Route path="/UseEffectTask" element={<><UseEffectTask /></>} />
      </Routes>

      <Routes>
        <Route path="/StopWatch" element={<><StopWatch /></>} />
      </Routes>

      <Routes>
        <Route path="/buttonComponents" element={<><ButtonComponent /></>} />
      </Routes>

      <Routes>
        <Route path="/AgePredict" element={<><AgePredictor /></>} />
      </Routes>

      <Routes>
        <Route path="/APIExample" element={<><ApiExample /></>} />
      </Routes>

      <Routes>
        <Route path="/ExcuseGenerator" element={<><ExcuseGenerator /></>} />
      </Routes>

      <Routes>
        <Route path="/RandomUser" element={<><RandomUser /></>} />
      </Routes>

      <Routes>
        <Route path="/TableApi" element={<><DataFetch /></>} />
      </Routes>

      <Routes>
        <Route path="/PropsDrilling" element={<><PropsDrilling /></>} />
        <Route path="/home" element={<><Header /><Home name={username}/></>} />
        <Route path="/profile" element={<><Header /><Profile name={username} newName={setUserName} /></>} />
      </Routes>

      
      <Routes>
        <Route path="/Context" element={<><ContextExample /></>} />
      </Routes>
      





    </>

  )
}


export default App;
