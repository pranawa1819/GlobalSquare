import React from "react";
import { Link } from "react-router-dom";
import '../app.css'


function TailwindCssExample() {
    return (
        <>
            <div class="flex bg-black px-[24px] py-[16px]">
                <h1 class="text-amber-300 disabled:hover:text-red-300 ">Hello world</h1>
            </div>
            <br />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>

            <br /><br />
            <div class="grid grid-cols-3  px-4 gap-5">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-25">Click Me</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-25">Click Me</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-25">Click Me</button>


            </div>
            <br /><br />
            <button class="bg-violet-400 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
                Save changes
            </button>

        </>
    )
}

export default TailwindCssExample;