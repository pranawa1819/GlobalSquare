import React, { useState } from "react";
import '../app.css'


function ChangeProfile(props){
    const[newUserName, setNewUserName]=useState("");

    return (
        <>
        <div className="text-center mt-5">
            <input type = "text" value ={newUserName} placeholder="Enter a name" onChange={(e)=>setNewUserName(e.target.value)} />
            <button onClick={()=>{props.setName(newUserName)}}>Change Name</button>
        </div>
        </>
    )

};
export default ChangeProfile;