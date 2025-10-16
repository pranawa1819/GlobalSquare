import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import '../app.css'


function ApiExample() {
    const [catFact, setCatFact] = useState("");

    const handleClick = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    };

    /*
    useEffect(()=>{
      handleClick();
    },[]);
    */

    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                <button className="border-2 border-black  text-center px-6 mb-10 py-1" onClick={handleClick}>Generate Cat Fact</button>
                <p>Cat Fact: {catFact}</p>
            </div>
        </>
    );

};

export default ApiExample;