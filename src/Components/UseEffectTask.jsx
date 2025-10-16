import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../app.css'


function UseEffectTask() {
    /*
      const [firstname, setFirstname] = useState('');
  
      const handleChange = (e) => {
          setFirstname(e.target.value);
      };
      
      const [clickCount, setClickCount] = useState(0);
      const increment = () => setClickCount((prev) => prev + 1);
  
      useEffect(() => {
          document.addEventListener('mousedown', increment);
      });
  
  */

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const timeLimit = 20;
    /*
        useEffect(() => {
            let timer;
            if (isTyping && count < timeLimit) {
                timer = setInterval(() => {
                    setCount((prev) => prev + 1);
                }, 1000);
            }
    
            return () => clearInterval(timer);
        }, [isTyping, count]);
    */
    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);


        if (!isTyping && newText.length > 0 && count < timeLimit) {
            setIsTyping(true);
        }


    }


    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;



    return (
        <>
            {/*
            <div>
                <input type="text" value={firstname} name="firstName" placeholder="Enter Something" onChange={handleChange} />
                <h1> {firstname}  </h1>
            </div>

            <h1>Document Clicks: {clickCount}</h1>
        */}

            <div className="text-center border-1 border-purple-300 rounded-2xl w-175 mt-60  ml-auto mr-auto bg-pink-200">
                <h1 className="font-bold text-center text-2xl mt-5 text-pink-950">Time: {count}</h1>
                <h1 className="font-bold text-center text-2xl mt-5 text-pink-950">Describe yourself in 15 words:</h1>
                <textarea value={text} placeholder="write here..." onChange={handleChange} disabled={wordCount === 15} className="border-2 border-gray-700 px-2 py-1  mt-5 bg-gray-100 w-60 " ></textarea>
                {wordCount === 15 && (<><h1 className="text-red-600 font-bold text-center  mt-5">Sorry you can't write more you have already write 15 words</h1>
                    <button className="border-2 border-purple-500 px-2 py-1 rounded-2xl bg-purple-600 text-white hover:bg-purple-700  text-2xl mt-5"
                        onClick={() => {
                            setCount(0);
                            setIsTyping(false);
                            setText('');

                        }}
                    > Reset</button></>)}
                <h1 className="font-bold text-center text-2xl mt-5  text-pink-950" >{wordCount}</h1>
                {count === timeLimit &&
                    (<>  <h1 className="font-bold text-center text-2xl mt-5 text-pink-950">You have write only {wordCount} words in {count} seconds.</h1>
                        <button className="border-2 border-purple-500 px-2 py-1 rounded-2xl bg-purple-600 text-white hover:bg-purple-700  text-2xl mt-5"
                            onClick={() => {
                                setCount(0);
                                setIsTyping(false);
                                setText('');

                            }}
                        > Reset</button>
                    </>)

                }
            </div>

        </>
    )




};
export default UseEffectTask;


