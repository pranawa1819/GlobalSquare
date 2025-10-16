import React from 'react';
import { useEffect, useRef, useState } from 'react'
import '../app.css'

function Simpleform() {
    const [record, setRecord] = useState(localStorage.getItem("records") ? JSON.parse(localStorage.getItem("records")) : []);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const list = {
            id: Date.now(),
            newName: name,
            newAge: age,
            newEmail: email,
            newAddress: address,
            newPhone: phoneNumber,
            newGender: gender

        }
        setRecord([list, ...record]);
        


        alert(["Registration Successfull and your details are: \n" + "Name: " + name,
        "\nAge: " + age,
        "\nEmail: " + email,
        "\nAddress: " + address,
        "\nPhone Number: " + phoneNumber,
        "\nGender: " + gender
        ]);
        
        setName('');
        setAge('');
        setEmail('');
        setAddress('');
        setPhoneNumber('');
        setGender('');
    };

    useEffect(() => {
        localStorage.setItem("records", JSON.stringify(record));
        console.log("Record saved:", record);
    }, [record]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>Registration Form</h1>
                <label>Name</label>
                <input type="text" name="Fullname" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />

                <label>Age</label>
                <input type="number" name="Age" placeholder='Enter your age' value={age} onChange={(e) => setAge(e.target.value)} />

                <label>Email</label>
                <input type="email" name="Email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Address</label>
                <input type="text" name="Address" placeholder='Enter your address' value={address} onChange={(e) => setAddress(e.target.value)} />

                <label>Phone Number</label>
                <input type="number" name="PhoneNumber" placeholder='Enter your phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                <label>Gender</label>
                <div className="gender-group">
                    <input type="radio" name="Gender" value={gender} onClick={() => setGender('Male')} />Male
                    <input type="radio" name="Gender" value={gender} onClick={() => setGender('Female')} />Female
                    <input type="radio" name="Gender" value={gender} onClick={() => setGender('Other')} />Other
                </div>

                <button type="submit" className="task-button1" >Submit</button>
            </form>

        </>
    )
}
export default Simpleform;