import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'

const ReactHook = () => {

    const [count, setCount] = useState(0);

    function IncreaseCount(i) {
        setCount(prevCount => prevCount + 1);
        console.log(count);
    }

    const IncreaseButton=()=>{
        return(<button id="increase-button" onClick={() => IncreaseCount(1)}>+</button>)
    };

    
    // this.increase_button.addEventListener("click", handleEvent);


    return (
        <div>
            <h1>Home Page</h1>
            <p>{count}</p>
            <IncreaseButton/>
        </div>);



    function handleEvent() {
        console.log(count);

    }
    
}

export default ReactHook;