import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../app.css'
import UseEffectTask from '../Components/UseEffectTask';



function Task() {
   
    const[show, setShow]=useState(false);
    const handleClick=()=>{
        setShow(!show);
    };

   

  return(
   <>
    <div className="mt-10 text-center">
      <button className="border-2 border-amber-500 px-2 py-1 rounded-2xl bg-amber-500 text-white hover:bg-amber-700  text-2xl " onClick={handleClick}>
         {show?"Show":"Hide"} Details
      </button>
      <br/><br/>
      {show && <UseEffectTask />  }
        
    </div>   
   </>
  );
 
};
export default Task;