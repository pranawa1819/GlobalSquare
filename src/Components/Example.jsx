import React, { use } from 'react';
import { useRef, useState } from 'react';
import { sculptureList } from './data.js';
import '../app.css'

function Example() {
    // using map
    let fruits = ['apple', 'banana', 'grapes', 'mango'];
    const [fruitList, setFruitList] = useState('');


    // using json
    const details = [{
        name: 'John',
        age: 30,
        address: 'Kathmandu',
        friends: ['Ram', 'Shyam', 'Hari']

    }, {
        name: 'Smith',
        age: 25,
        address: 'Lalitpur',
        friends: ['Anil', 'Sunil', 'Binod'],
    }]


    //using filter
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let even = items.filter((num) => num % 2 == 0);

    // color picker example
    const [color, setColor] = useState("Tomato"); // call useState and assign its return values to `color` and `setColor`
    //Its initial value is undefined (since no value is passed to useState()). setColor is the function that will change the color value.

    const divStyle = { backgroundColor: color, gap: '10px' };
    const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];


    //Giving a component multiple state variables 
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    function handleBackClick() {
        setIndex(index - 1);
    }

    //form handling using onChange event
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setlastName(e.target.value); //The current value of that element
    }

    function handleReset() {
        setFirstName('');
        setlastName('');
    }

    // form handling using state object
    const [profile, setProfile] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setProfile((prevProfile) => ({
            ...prevProfile, //spread operator
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(profile, '', 2));
    };

    return (

        <>
            {/*
           <div style={{display:'flex', gap:'10px', marginTop:'30px', marginLeft:'auto',marginRight:'auto', width:'50%', justifyContent:'center'}}>
             <button onClick={()=>setFruitList(fruits[0])} className={`task-button ${fruitList==fruits[0]?'colorChange':'' }`} >{fruits[0]}</button>
             <button onClick={()=>setFruitList(fruits[1])} className={`task-button ${fruitList==fruits[1]?'colorChange':'' }`}>{fruits[1]}</button>
             <button onClick={()=>setFruitList(fruits[2])} className={`task-button ${fruitList==fruits[2]?'colorChange':'' }`}>{fruits[2]}</button>
             <button onClick={()=>setFruitList(fruits[3])} className={`task-button ${fruitList==fruits[3]?'colorChange':'' }`}>{fruits[3]}</button>
            </div>
            */}


            {/* if we don't use curly braacket after => then we don't have to use return */}
            {/*
            {fruits.map((fruit,index)=>{
                return <button key={index} onClick={()=>setFruitList(fruit)} className={`task-button ${fruitList==fruit?'colorChange':'' }`}>{fruit}</button>
            })};
            */}


            {/*
            {details.map((info,index)=>{
              return <p key={index}>name={info.name} age={info.age} address={info.address} friends={info.friends}</p>
            })};
            */}


            {/*<p >{even}</p>*/}


            {/*
            <div style={divStyle}>
                <p>The color is {color}</p>
                <button className='buttonStyle' onClick={() => setColor('Aquamarine')}>
                    Aquamarine
                </button>
                <button className='buttonStyle' onClick={() => setColor('BlueViolet')}>
                    BlueViolet
                </button>
                <button className='buttonStyle' onClick={() => setColor('Chartreuse')}>
                    Chartreuse
                </button>
                <button className='buttonStyle' onClick={() => setColor('CornflowerBlue')}>
                    CornflowerBlue
                </button>
            </div>
            */}


            {/*
            <div style={divStyle}>
                <p>Selected color: {color}</p>
                {colorNames.map((colorName) => (
                    <button
                        onClick={() => setColor(colorName)}
                        key={colorName}
                        className='buttonStyle'>
                        {colorName}
                    </button>
                ))}
            </div>
            */}

            {/*
            <button onClick={handleBackClick} className='buttonStyle' disabled={index === 0}> Go Back</button>
            <button style={{ marginLeft: '2%' }} onClick={handleNextClick} className='buttonStyle' disabled={index === 11} > Next </button><br /><br />
            <h2>{sculpture.name} by {sculpture.artist}</h2><br />
            <h3>({index + 1} of {sculptureList.length})</h3><br />
            <button onClick={handleMoreClick} className='buttonStyle'>
                {showMore ? 'Hide' : 'Show'} details
            </button><br /><br />
            {showMore && <p>{sculpture.description}</p>}<br /><br />
            <img style={{ marginLeft: 'auto', marginRight: 'auto' }}
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <br /><br /><br />

            */}


            <form >
                <input
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <input
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <h1>Hi, {firstName} {lastName}</h1>
                <button className='buttonStyle' style={{ marginLeft: 'auto', marginRight: 'auto' }} onClick={handleReset}>Reset</button>
            </form>

            <form onSubmit={handleSubmit}>
                <input
                    value={profile.firstName || ''}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <input
                    value={profile.lastName || ''}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <input
                    value={profile.bday || ''}
                    type="date"
                    name="bday"
                    onChange={handleChange}
                />
                <input
                    value={profile.password || ''}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>

        </>
    )
}
export default Example;