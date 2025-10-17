import React, { useEffect, useState } from "react";
import '../app.css'
function BasicReact(props) {
    const [count, setCount] = useState(0);
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

            
         {/* <h1>{age>=18? "Your are eligible for voting":"Your are not eligible for voting"}</h1>
          <h1 style={{color:isGreen?"green":"red"}}>This is my first react page.</h1>

          {isGreen && <button>Click Me!</button>}
         
          
            {list.map((lists) =>
                <h1 key="index">{lists}</h1>
            )}

            {user.map((users) =>
                <h1 key="hello">My name is {users.name} and I am {users.age} years old. </h1>
            )}

            {planets.map((planet) =>
                planet.isGasPlanet && <h1>{planet.PlanetName}</h1>

            )}*/}
           {/*} <h1 key={index}>{planet.isGasPlanet ? planet.PlanetName : "Planet Not Found "}</h1>*/}
            
            <div className=" flex flex-col justify-evenly  w-130 h-100 items-center mt-60  ml-auto mr-auto">
            <input type="text" value={firstname} name="firstName" placeholder="FirstName" onChange={handleChange} />
            <h1>Hi, {firstname} !! </h1>
             

            <button className="buttonStyle" onClick={handleClick}>{show ? "Show" : "Hide"} Details</button>
            {show && <h1>My Name is pranawa</h1>}

            <br /><br />
            <button className="buttonStyle" onClick={() => setCount(count + 1)} > Increase</button>
            <h1 style={{ marginLeft: '10%', fontSize: "40px" }}>{count}</h1>
            <button className="buttonStyle" onClick={() => setCount(count - 1)}> Decrease</button>
          
           </div>

        </>
    );
};
export default BasicReact;


  {/*
    <BasicReact name="Pranawa" age={21} email ="pranawakc187@gmail.com" />
    <BasicReact name="Sita" age={29}  email ="sita12@gmail.com" />
    <BasicReact name="Gita" age={15}  email ="gita123@gmail.com" />
    */}
      {/*
    <BasicReact salary={90000} position = "Senior SDE" company="Amazon" />
    <BasicReact salary={12000} position = "Junior SDE" company="Google" />
    <BasicReact salary={10000} position = "Project Manager" company="Netflix" />
    */}