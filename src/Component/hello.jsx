import React from "react";
import '../app.css'
import { useContext } from "react";
import {AppContext} from '../App';

function Hello(){
    const {username} = useContext(AppContext);
    return(
    <>
            <div>
               <h1>My name is {username}</h1>
            </div>
        </>
    );
};
export default Hello;