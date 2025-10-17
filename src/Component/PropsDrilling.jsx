import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/home";
import Header from "../Component/header";
import Profile from "../Component/profile";
import Contact from "../Component/contact";


function PropsDrilling() {
    const [username, setUserName] = useState("pranawa");
    return (
        <>
            <Header/>
        <Routes>
            <Route
                path="/home"
                element={
                    <>
                     <Home name={username} />
                    </>
                }
            />
            <Route
                path="/profile"
                element={
                    <>
                     <Profile name={username} newName={setUserName} /> 
                    </>
                }
            />
            <Route
                path="/contact"
                element={
                    <>
                     <Contact />  
                    </>
                }
            />
        </Routes>
        </>
    );
};

export default PropsDrilling