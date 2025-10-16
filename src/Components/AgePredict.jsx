import React from "react";
import { useState, useEffect } from "react";
import Axios from 'axios';
import '../app.css'

function AgePredictor() {
    const [name, setName] = useState("");
    const [predictAge, setPredictAge] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictAge(res.data);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setError("Failed to fetch data. Please try again later.");
        });
    };

    return (
        <>
            <div className=" flex flex-col justify-evenly  bg-purple-200 w-130 h-100 items-center">
                <div>
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-700 px-8 py-2 mr-5  bg-gray-100" />
                    <button onClick={handleClick} className="border-2  text-center  border-purple-500 px-6 py-3 rounded-2xl bg-purple-600 text-white hover:bg-purple-700 font-bold">Predict Age</button>
                </div>

                {error && (
                    <p className="text-red-600 font-semibold mt-3">
                        {error}
                    </p>
                )}
                
                {predictAge && (
                    <div className="font-bold text-2xl mt-4">
                        <p>Your Name: {predictAge.name}</p>
                        <p>Age: {predictAge.age}</p>
                        <p>Count: {predictAge.count}</p>
                    </div>
                )}

                <button className="border-2 border-purple-500 px-6 py-1 rounded-2xl bg-purple-600 text-white hover:bg-purple-700  text-2xl mt-5 "
                    onClick={() => {
                        setName("");
                        setPredictAge(null);
                    }}>Reset</button>
            </div>
        </>
    );
};

export default AgePredictor;