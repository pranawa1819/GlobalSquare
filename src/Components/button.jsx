import React from 'react';
import { useState, useEffect } from 'react';
import '../app.css'

function Button(props) {


    return (
        <>

            <div >
                <button className={`border-2 border-black rounded-2xl text-center px-6 mb-10 py-1 ${props.color}`} >{props.name}</button>
            </div>

        </>

    );

};
export default Button;