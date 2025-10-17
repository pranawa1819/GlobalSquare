import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

import '../app.css'


function ApiExample() {
    const [catFact, setCatFact] = useState("");

    const handleClick = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data);
        });
    };

    /*
    useEffect(()=>{
      handleClick();
    },[]);
    */

    return (
        <>
            <div className='flex flex-col justify-center items-center mt-60  ml-auto mr-auto '>
                <button className="border-2  text-center  border-blue-500 px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-bold" onClick={handleClick}>Generate Cat Fact</button>
                
                {catFact && (<><p>Cat Fact: {catFact.fact}</p>
                <p>Cat Fact: {catFact.length}</p></>)}
            </div>
        </>
    );

};

export default ApiExample;