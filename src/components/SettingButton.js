import React from "react";

export default function PomodoroButton(props, { onClick }) {
    return (
        <>
            <div className={`time-fields ${props.isActive ? 'active' : ''}`} onClick={props.onClick}>
                <span className="fw-bold" >
                    Setting
                </span>
            </div>
        </>
    );
}