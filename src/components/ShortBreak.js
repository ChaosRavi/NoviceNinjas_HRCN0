import './Components.css';
import React from 'react';

export default function ShortBreak(props) {
    return (
        <>
          
            <div className={`${props.showElement}`}>
                <span className='fs-timer'> {props.minute < 10 ? "0" + props.minute : props.minute} :  {props.second < 10 ? "0" + props.second : props.second} </span>
            </div>

        </>
    );
}