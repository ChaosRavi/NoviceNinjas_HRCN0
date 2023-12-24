import React from "react";

export default function PomodoroButton (props) {
    return (
        <>
            <div className={`time-fields ${props.showElement}`}>
                    <span className="fw-bold" >
                
                        {/* <Link to="/pomodoro" >Pomodoro</Link> */}
                        Pomodoro
                    </span>
                </div>
        </>
    );
}