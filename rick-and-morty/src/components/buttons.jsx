import React, { useState, useEffect } from "react";
import App from "../App";

const ButtonsCreate = ({value, setValue}) => {

    
    return (
   
        <div className="btn-container">
            <button className="page-change-btn">Prev</button>
            <input 
                className="page-change-input" 
                value={value}
                // onFocus={setValue('')}
                onChange={event => setValue(event.target.value)}
                ></input>
            <button className="page-change-btn">Next</button>
        </div>
    
    )
}

export default ButtonsCreate


// {setValue(event.target.value)
//                                     console.log('1')}}