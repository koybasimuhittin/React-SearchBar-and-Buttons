import React, { useState } from 'react';
import './CountButton.css';

const CountButton = (props)=>{
    const [currentCount,setCurrentCount] = useState(0)
    const handleClick = ()=>{
        setCurrentCount(currentCount + props.incrementValue)
    }
    const buttonStyle ={
        background: props.buttonColor,
    }
    return <div>
        <button style={buttonStyle} onClick={handleClick}>+{props.incrementValue}</button>
        <div className={'count-text'}>{currentCount}</div>
    </div>
}

export default CountButton