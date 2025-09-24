import React from "react";
import { Link } from "react-router-dom";
import '../app.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



function Navbar() {
    return (
        <>
            <div className="navbar">

                <img src="logo.png" alt="logo" className="logo" />
                
                <div className="line">
                    <Link to="" className="Nav-Link">Home</Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Link to="" className="Nav-Link">Service</Link>
                        <MdOutlineKeyboardArrowDown style={{color: 'white'}}/>

                    </div>
                    <Link to="" className="Nav-Link">Forum</Link>
                    <Link to="" className="Nav-Link">Contact Us</Link>
                </div>
                <div className="rightSide">
                    <img src="brightness.png" alt="user" className="brightness" />
                    <img src="profile.png" alt="profile" className="profile" />
                    <img src="downarrow.png" alt="downarrow" className="arrow" />
                </div>

            </div>
        </>
    )
}
export default Navbar;