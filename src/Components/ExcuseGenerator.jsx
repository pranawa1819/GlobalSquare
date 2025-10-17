import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import '../app.css'

function ExcuseGenerator() {
    const [generateExcuse, setGenerateExcuse] = useState("");
    const fetchdata = (excuse) => {
        fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => res.json()).then((data) => {
            setGenerateExcuse(data[0].excuse);
        });
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <>
            <div className=" flex flex-col justify-evenly   w-130 h-100 items-center mt-60  ml-auto mr-auto">
                <h1 className='text-2xl font-bold text-center'>Excuse Generator</h1>
                <button className="border-2  text-center  border-blue-500 px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-bold" onClick={() => fetchdata("party")}>Party</button>
                <button className="border-2  text-center  border-blue-500 px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-bold" onClick={() => fetchdata("family")}>Family</button>
                <button className="border-2  text-center  border-blue-500 px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-bold" onClick={() => fetchdata("office")}>Office</button>
                <button className="border-2  text-center  border-blue-500 px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-bold" onClick={() => fetchdata("college")}>College</button>
                {generateExcuse &&
                    <h1> Excuses: {generateExcuse}</h1>
                }
            </div>
        </>
    );

};
export default ExcuseGenerator;