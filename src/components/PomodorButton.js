import React from "react";

export default function PomodoroButton(props) {
    return (
        <>
            <div className={`time-fields ${props.isActive ? 'active' : ''}`}>
                <span className="fw-bold" >
                    Pomodoro
                </span>
            </div>
        </>
    );
}