import React from 'react';
import { useRef, useState } from 'react'
import '../app.css'

function Simpleform() {
    return (
        <>
            <form>
                <h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'25px'}}>Registration Form</h1>
                <label>Name</label>
                <input type="text" name="Fullname" />

                <label>Age</label>
                <input type="number" name="Age"  />

                <label>Email</label>
                <input type="email" name="Email"  />

                <label>Address</label>
                <input type="text" name="Address" />

                <label>Phone Number</label>
                <input type="number" name="PhoneNumber" />

                <label>Gender</label>
                <div className="gender-group">
                    <input type="radio"  name="Gender" value="Male" />Male
                    <input type="radio"  name="Gender" value="Female" />Female
                    <input type="radio"  name="Gender" value="Other" />Other
                </div>

                <button type="submit" className="task-button1">Submit</button>
            </form>

        </>
    )
}
export default Simpleform;