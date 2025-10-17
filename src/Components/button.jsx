import React from 'react';
import '../app.css'

function Button(props) {


    return (
        <>

            <div className = "text-center items-center mt-10  ml-auto mr-auto" >
                <h1 className="text-2xl font-bold font-serif mb-10 ">Creating Buttons Using Button Components</h1>
                <button className={`border-2 border-black rounded-2xl text-center px-2  py-1   ${props.color}`} >{props.name}</button>
            </div>

        </>

    );

};
export default Button;