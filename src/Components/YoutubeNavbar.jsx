import React from "react";
import { Link } from "react-router-dom";
import '../app.css'
import { TfiMenu } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscMicFilled } from "react-icons/vsc";
import { IoAdd } from "react-icons/io5";

function YoutubeNavbar() {
    return (
        <>
            <div className="y-navbar">
                <div className="y-left">
                    <TfiMenu style={{ color: 'white', width: '25px', height: '25px' }} />
                    <img src="ylogo.png" alt="logo" className="ylogo" />
                </div>
                <div className="y-mid">
                    <div className="searchbar">
                        <input type="text" placeholder="Search" className="search-input" />
                        <button className="search-button"><IoSearchOutline style={{ marginLeft: '20px', color: 'white', width: '25px', height: '25px' }} /></button>

                    </div>
                    <div className="mic-icon">
                        <VscMicFilled style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '5.5px', color: 'white', width: '24px', height: '24px' }} />
                    </div>
                </div>


                <div className="y-right">
                    <div className="createbutton">
                        <IoAdd style={{ color: 'white', width: '22px', height: '22px' }} />
                        <h3 style={{ color: 'white', fontWeight: 'bold' }}>Create</h3>
                    </div>

                    <div style={{ position: 'relative' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IoNotificationsOutline style={{ color: 'white', width: '25px', height: '25px' }} />
                        <div className="notify">
                            <h3 style={{ textAlign: 'center', alignContent: 'center',padding:'2px', color: 'white', fontSize: '6px', fontWeight: 'bold' }} >5+</h3>
                        </div>
                    </div>

                    <img src="profile.png" alt="profile" className="yprofile" />

                </div>
            </div>


        </>
    )
}
export default YoutubeNavbar;