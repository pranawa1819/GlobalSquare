import React from 'react';
import { useState } from 'react';
import { sculptureList } from './data.js';
import '../app.css'
function Practice2() {
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
    return (
        <>
            <div className=" flex flex-col justify-evenly  bg-purple-200 items-center w-190 h-190 mt-30  ml-auto mr-auto">
                <div className='flex  justify-around'>
                    <button onClick={handleBackClick} className='buttonStyle' disabled={index === 0}> Go Back</button>
                    <button style={{ marginLeft: '2%' }} onClick={handleNextClick} className='buttonStyle' disabled={index === 11} > Next </button><br /><br />
                </div>
                <h2>{sculpture.name} by {sculpture.artist}</h2>
                <h3>({index + 1} of {sculptureList.length})</h3>
                <button onClick={handleMoreClick} className='buttonStyle'>
                    {showMore ? 'Hide' : 'Show'} details
                </button><br /><br />
                {showMore && <p className='text-center'>{sculpture.description}</p>}
                <img style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    src={sculpture.url}
                    alt={sculpture.alt}
                />
            </div>
        </>
    );
};
export default Practice2;