import React from "react";
import '../app.css'

function Home(props){
    return(
        <>
        <div className="flex flex-col justify-between mt-10 ">
            <h1 className="font-mono text-2xl text-center">This is home page for user {props.name}</h1>
        </div>
        </>
    )

};
export default Home;
