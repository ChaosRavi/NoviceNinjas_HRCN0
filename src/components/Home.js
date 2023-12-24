import React, { useState } from 'react';

// import { Link } from 'react-router-dom';


export default function Home(props) {

    const [isBreak, setIsBreak] = useState(false);


    return (
        <>
            {/* Navbar */}
       
                <div className={`time-fields ${props.showElement}`}>
                    <span className="fw-bold">
                        {/* <Link to="/setting" >Setting</Link> */}
                        Setting
                    </span>
                </div>
                <div className={`time-fields ${props.showElement}`}>
                    <span className="fw-bold">
                        {/* <Link to="/login" >Login</Link> */}
                        Login
                    </span>
                </div>
          
        </>
    );
}