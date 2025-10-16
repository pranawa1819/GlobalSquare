import React from "react";


import '../app.css'
import ChangeProfile from "./changeprofile";


function Profile(props) {
    return (
        <>
            <div className="flex flex-col justify-between mt-10">
                <h1 className="font-mono text-2xl text-center">This is profile page for user {props.name}</h1>
                <ChangeProfile setName={props.newName}/>
            </div>
        </>
    )

};

export default Profile;