//UseEffects means apne website visit ki usk kch seconds baad koi pop up chahiye example subcribe to our site ya kch bhi to hm UseEffects use krte hai.

import React, { usestate, useEffect } from 'react';
import './style.css';

const UseEffect = () => {
    // const initialData = 15;
    const [myNum, setMyNum] = React.useState(0);
    console.log(myNum);
    
    //if we add empty array in last in useEffect then it will run only for first time but after reloading it will not work
    useEffect(() => {
    //  console.log('Hi');
    
    //title change kr dega pr empty array hatana padega
    document.title = `Chats(${myNum})`
    })
    

    return (
        <>
            <div className='center_div'>
                <p>{myNum}</p>
                <div class='button2' onClick={()=> setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
              </div>
        </>
    )
}

export default UseEffect;