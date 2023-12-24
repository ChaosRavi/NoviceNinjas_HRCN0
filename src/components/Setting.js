import React, { useState } from "react";

export default function Setting({ onSetCustomTimer }) {
    
    const [inputWorkMinute, setInputWorkMinute] = useState(0);
    const [inputBreakMinute, setInputBreakMinute] = useState(0);

    const saveCustomTimer = () => {
        // send the input second and minute to parent component
        onSetCustomTimer(inputWorkMinute, inputBreakMinute);
        alert("Save Successfully");
    }

    return (
        <>
            <div className="setting-content">
                <div className="bg-dark">
                    <div className="text-white border-top border-bottom">
                        <p >Customize timer</p>
                    </div>

                    <div className="w-100">
                        <div className="card-body">
                            <p className="text-white"> Work Time</p>
                            <input type="number" value={inputWorkMinute} onChange={(e) => setInputWorkMinute(e.target.value)} placeholder="Second" /> <br />

                            <p className="text-white"> Break Time</p>
                            <input type="number" value={inputBreakMinute} onChange={(e) => setInputBreakMinute(e.target.value)} placeholder="Minute" /> <br />
                            <button onClick={saveCustomTimer}>Save</button>
                        </div>
                        
                    </div>

                </div>
            </div>
          
        </>
    );
}