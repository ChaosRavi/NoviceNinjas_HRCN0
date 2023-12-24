import React, { useState } from "react";

export default function CustomizeTimer({ onSetCustomTimer }) {

    const [inputMinute, setInputMinute] = useState(0);
    const [inputSecond, setInputSecond] = useState(0);

    const saveCustomTimer = () => {
        // send the input second and minute to parent component
        onSetCustomTimer(inputSecond, inputMinute);
        alert("Save Successfully");
    }


    return (
        <>
            <div className="w-100">
                <div className="card-body">
                    <input type="number" value={inputMinute} onChange={(e) => setInputMinute(e.target.value)} placeholder="Minute" /> <br />

                    <input type="number" value={inputSecond} onChange={(e) => setInputSecond(e.target.value)} placeholder="Second" /> <br />
                    <button onClick={ saveCustomTimer }>Save</button>
                </div>
            </div>
        </>
    );
}