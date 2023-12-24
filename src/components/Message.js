import React from "react"
import "./Components.css"

export default function Message(props) {
    return (
        <>
            <div className="text-center mt-4">
                {console.log("isBreak in Message " + props.isBreak)}
                {props.isBreak ? <p className="fw-bold fs-20">Break Time! Take break and come again.</p> : <p className="fw-bold fs-20">Work Time! Work hard and achieve your goal.</p>}
            </div>

        </>
    );
}


