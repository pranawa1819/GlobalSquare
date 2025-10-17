import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../app.css'
import { GrPlayFill ,GrPauseFill } from "react-icons/gr";


function StopWatch() {
    const[isplay, setIsPlay] = useState(false);
    const [count, setCount] = useState(0);
    const handleClick = ()=>{
        setIsPlay(!isplay)
    }

    useEffect(()=>{
      let timer;
        if(isplay){
        timer = setInterval(()=>{
            setCount((prev)=>prev+1);
        },1000);
    }
        return ()=>clearInterval(timer);

    },[isplay]);
    
    return (

        <div className=" flex flex-col justify-around text-center items-center border-2 border-amber-500 round bg-yellow-500  w-175 h-150 mt-60  ml-auto mr-auto">
            <h1 className="text-5xl font-bold font-serif ">Stop Watch</h1>
            <h1 className="text-8xl font-bold ">0:0:{count}</h1>
            <button onClick={handleClick}>
            {isplay?<GrPauseFill className="w-20 h-20 " />:<GrPlayFill className="w-20 h-20 " />}
            </button>

        </div>

    );
};
export default StopWatch;