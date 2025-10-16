import React, { useEffect, useState } from "react";
import '../app.css'
function BasicReact(props) {
    const name = <h1 style={{ fontWeight: 'bold' }}>Pranawa</h1>;
    const age = 19;
    const isGreen = true;

    const list = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
    const user = [
        { name: "Pranawa", age: "22" },
        { name: "Sarita", age: "39" }
    ]

    const planets = [
        { PlanetName: "Mars", isGasPlanet: false },
        { PlanetName: "Earth", isGasPlanet: false },
        { PlanetName: "Jupiter", isGasPlanet: true },
        { PlanetName: "Venus", isGasPlanet: false },
        { PlanetName: "Neptune", isGasPlanet: true },
        { PlanetName: "Uranus", isGasPlanet: true }
    ]

    const [firstname, setFirstname] = useState('');

    const handleChange = (e) => {
        setFirstname(e.target.value);
    };

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };

    const [count, setCount] = useState(0);
    const handleIncrement = () => {

    };

    

    // if else conditon
    /*
    if(age<=18){
        console.log("Your are eligible for voting");
    }
    else{
        console.log("Your are not eligible for voting");
    }
    */

    //conditional rendering
    /*
         if(age>=18){
            return <h1>Your are eligible for voting</h1>;
        }
        else{
            return <h1>Your are not eligible for voting</h1>;
        }
    */

    // Ternary operator
    // age>=16?console.log("Your are eligible for voting"):console.log("Your are not eligible for voting");

    return (
        <>
            {/*
         <h1>{props.name}</h1>
         <h1>{props.age}</h1>
         <h1>{props.email}</h1>
         */}
            {/*
          <h1>{props.salary}</h1>
          <h1>{props.position}</h1>
          <h1>{props.company}</h1> 
          */}

            {/*
          <h1>{age>=18? "Your are eligible for voting":"Your are not eligible for voting"}</h1>
          <h1 style={{color:isGreen?"green":"red"}}>This is my first react page.</h1>

          {isGreen && <button>Click Me!</button>}
          */}
          {/*
            {list.map((lists, index) =>
                <h1 key="index">{lists}</h1>
            )}

            {user.map((users, hello) =>
                <h1 key="hello">My name is {users.name} and I am {users.age} years old. </h1>
            )}

            {planets.map((planet, key) =>
                planet.isGasPlanet && <h1>{planet.PlanetName}</h1>

            )}
            <h1 key={index}>{planet.isGasPlanet ? planet.PlanetName : "Planet Not Found "}</h1>*/}
            
            {/*
            <input type="text" value={firstname} name="firstName" placeholder="FirstName" onChange={handleChange} />
            <h1>Hi, {firstname} !! </h1>


            <button className="buttonStyle" onClick={handleClick}>{show ? "Show" : "Hide"} Details</button>
            {show && <h1>My Name is pranawa</h1>}

            <br /><br />
            <button className="buttonStyle" onClick={() => setCount(count + 1)} > Increase</button>
            <h1 style={{ marginLeft: '-10%', fontSize: "40px" }}>{count}</h1>
            <button className="buttonStyle" onClick={() => setCount(count - 1)}> Decrease</button>
           */}
           

        </>
    );
};
export default BasicReact;


