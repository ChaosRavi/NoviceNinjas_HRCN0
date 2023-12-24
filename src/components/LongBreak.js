import './Components.css';
import React from "react";

export default function LongBreak (props) {
    return (
       <>
        <div className='container'>
        <span className='fs-timer  border border-dark'> {props.minute<10? "0"+props.minute : props.minute } :  {props.second<10? "0"+props.second : props.second } </span>
        </div>
       </>
    );
}