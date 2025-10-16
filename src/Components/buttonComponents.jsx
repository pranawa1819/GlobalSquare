import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../Components/button';
import '../app.css'



function ButtonComponent(){

    return(
        <>
         <Button name="Twitter" color ="bg-blue-600" />

         <Button name="Youtube" color="bg-red-600" />
        </>
    )

};
export default ButtonComponent;