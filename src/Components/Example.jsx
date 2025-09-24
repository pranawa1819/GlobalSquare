import React, { use } from 'react';
import {useRef, useState} from 'react';

import '../app.css'

function Example(){
 let fruits = ['apple', 'banana', 'grapes', 'mango'];
 const [fruitList, setFruitList] = useState('');

const details =[{
    name: 'John',
    age: 30,
    address: 'Kathmandu',
    friends:['Ram','Shyam','Hari']

},{
    name: 'Smith',
    age: 25,
    address: 'Lalitpur',
    friends:['Anil','Sunil','Binod'],
   }]

   let items =[1,2,3,4,5,6,7,8,9,10];
   let even=items.filter((num)=>num%2==0);     





    return(

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

            <p >{even}</p>


        </>
    )
}
export default Example;