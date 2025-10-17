import React from "react";
import { Link } from "react-router-dom";
import '../app.css'


function Header(){
    return(
     <>
     <div className="flex justify-evenly items-center text-center mt-10 border-0 px-10 py-3 bg-amber-200 w-200 font-bold text-2xl mt-60  ml-auto mr-auto">
        <Link to="/home" >Home</Link>
        <Link to="/profile" >Profile</Link>
        <Link to="/contact" >Contact</Link>
     </div>
     </>
    );

};
export default Header;