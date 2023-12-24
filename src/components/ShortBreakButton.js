import React from "react";

export default function ShortBreakButton (props) {
    return (
        <>
            <div className={`time-fields ${props.isActive ? 'active': ''}`}>
                    <span className="fw-bold" >
                
                        {/* <Link to="/pomodoro" >Pomodoro</Link> */}
                        Short Break 
                    </span>
                </div>
        </>
    );
}