import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

import '../app.css'

function RandomUser() {
    const [user, setUser] = useState("");
 
    const [error, setError] = useState(null);


    const handleFetch = () => {

        fetch("https://randomuser.me/api/").then((res) => res.json()).then((data) => {
            setUser(data.results[0]);
        })

            .catch((err) => {
                console.error("API Error:", err);
                setError("Failed to fetch data. Please try again later.");
            })


    }





    return (
        <>
            <div className='flex flex-col justify-evenly   w-130 h-100 items-center mt-60  ml-auto mr-auto'>

                <button className="border-2 text-center border-blue-500 px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-bold w-100" onClick={handleFetch}>Generate Random User</button>


                <div className='flex flex-col justify-around items-center px-10 py-4 mt-10 border-0 '>
                    {error && (
                        <p className="text-red-600 font-semibold mt-3">
                            {error}
                        </p>
                    )}
                   
                    {user &&
                        (<>
                            <img src={user.picture.large} className='w-50 h-50'/>
                            <br />
                            <p className='font-medium text-2xl '>Name:{user.name.first} {user.name.last} </p>
                            <p className='font-medium text-2xl '>Email: {user.email}</p>
                            <p className='font-medium text-2xl '>Location:{user.location.country} </p>
                        </>)
                    }
                </div>
            </div>
        </>
    );
};

export default RandomUser;