import React from "react";
import { Link } from "react-router-dom";
import '../app.css'


function HeaderAll(){
    return(
     <>
     <div className="flex flex-wrap justify-center items-center gap-6 px-10 py-4 bg-amber-200 font-semibold text-lg text-gray-800 shadow-md border-b-2 border-amber-300">
        <Link to="/ToDo" >ToDoList</Link>
        <Link to="/Example" >Practice1</Link>
        <Link to="/navRoutes" >NavBar</Link>
        <Link to="/youTubeNav" >YouTubeNavbar</Link>
        <Link to ="/TailwindCssExample">TWCpractice</Link>
        <Link to ="/practice2">Practice2</Link>
        <Link to ="/BasicReact">Practice3</Link>
        <Link to ="/ToDoUsingTailWind">ToDoList(TWC)</Link>
        <Link to ="/Simpleform">Form</Link>
        <Link to ="/UseEffectTask">WordRestriction</Link>
        <Link to ="/StopWatch">StopWatch</Link>
        <Link to ="/buttonComponents">Buttons</Link>
        <Link to ="/AgePredict">AgePredict</Link>
        <Link to ="/APIExample">APIExamplseGenerator</Link>
        <Link to ="/RandomUser">RandomUsee</Link>
        <Link to ="/ExcuseGenerator">Excur</Link>
        <Link to ="/TableApi">TableApi</Link>
        <Link to ="/PropsDrilling">PropsDrilling</Link>
        <Link to ="/Context">UseContext</Link>
        

     </div>
     </>
    );

};
export default HeaderAll;