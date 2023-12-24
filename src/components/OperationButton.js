import React, { useEffect, useState } from "react";
import Pomodoro from "./Pomodoro";
import ShortBreak from "./ShortBreak";
import Message from "./Message";
import SettingButton from "./SettingButton";
import PomodoroButton from "./PomodorButton";
import ShortBreakButton from "./ShortBreakButton";
import TaskButton from "./TaskButton";
import Setting from "./Setting";
import Task from "./Task";

// it is object, has values of the variables - used to control the timer
const Status = {
  start: 1,
  pause: 2,
  default: 3,
};

export default function OperationButtons() {
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [status, setStatus] = useState(Status.default);
  const [countPomodoro, setCountPomodoro] = useState(0);
  const [showElement, setShowElement] = useState("not-active");
  const [showSetting, setShowSetting] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [inputBreakTime, setInputBreakTime] = useState(1);

  // const intervelRef = useRef();

  const timer = () => {
    if (second === 0) {
      if (minute !== 0) {
        // if seconds are zero and minute is not zero then setSeconds to zero and decrease  minutes by one
        setSecond(59);
        setMinute(minute - 1);
        setShowElement("active");
        console.log("showElement is in if " + showElement);
        console.log("countPomodoro in if " + countPomodoro);
        console.log("running");
        console.log("minute is " + minute);
        console.log("isBreak is in if  = " + isBreak);
      } else if (minute === 0 && second === 0) {
        let countPomodoro = 0;
        countPomodoro = countPomodoro + 1;
        setCountPomodoro(countPomodoro);
        console.log("countPomodoro is in else " + countPomodoro);
        setShowElement("active");
        console.log("showElement is in if " + showElement);

        // if minutes are zero means pomodoro has finished and its time to take break and start timer of 5 min
        let isBreak = true;
        setIsBreak(isBreak);
        console.log("isBreak is in else =  " + isBreak);
        pause();
        // return isBreak;

        console.log("before setting " + isBreak);
        let minute = isBreak ? inputBreakTime : 0;
        console.log("minute is  " + minute);
        let second = 0;
        setSecond(second);
        setMinute(minute);
        console.log("after setting " + isBreak);
        // // setIsBreak(true);
      }
    } else {
      // if seconds are not zero then decrease it by one
      setSecond(second - 1);
    }
  };

  useEffect(() => {
    let time;
    // if status is start then run the function timer
    if (status === Status.start) {
      time = setInterval(() => {
        timer();
      }, 100);
    }
    // else if status is pause and intervelRef is set to true means timer is running then clearIntervel
    else if (status === Status.pause) {
      clearInterval(time);
    }

    return () => clearInterval(time);
  }, [minute, second, status]);

  // start function
  const start = () => {
    setStatus(Status.start);
  };

  // pause function
  const pause = () => {
    setStatus(Status.pause);
  };

  // stop function
  const stop = () => {
    setStatus(Status.pause);
    setMinute(2);
    setSecond(0);
    setIsBreak(false);
  };

  // Handle to re-render of Pomodoro component
  useEffect(() => {
    if (minute === 0 && second === 0 && isBreak) {
      setIsBreak(false);
      setMinute(2);
      setSecond(0);
      setStatus(Status.pause);
      setShowElement("active");
    }
  });

  const handleCutomeTimer = (minute, inputBreakTime) => {
    setMinute(minute);
    setInputBreakTime(inputBreakTime);
  };
  return (
    <>
      <div className="container">
        <div class="card">
          <div class="card-header">
            <h1>Pomodoro Timer</h1>
            <Message isBreak={isBreak} />
            <div class="card-header-buttons">
              <button id="buttonTypePomodoro" class="active">
                <PomodoroButton isActive={!isBreak} />
              </button>

              <button id="buttonTypeShort">
                <ShortBreakButton isActive={isBreak} />
              </button>
            </div>

            <div class="card-body">
              <div className="clock">
                <div className="numbers">
                  <div className="demo">
                    <div className="circle">
                      <span>
                        <b style={{ color: "black" }}>
                          {" "}
                          {isBreak ? (
                            <ShortBreak
                              minute={minute}
                              second={second}
                              isActive={showElement === "active"}
                            />
                          ) : (
                            <Pomodoro
                              minute={minute}
                              second={second}
                              isBreak={isBreak}
                              isActive={showElement === "active"}
                            />
                          )}
                        </b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-footer">
              <button class="btn-sucess">
                {" "}
                <span className="fw-bold btn btn-danger" onClick={start}>
                  Play
                </span>
              </button>
              <button class="btn-danger">
                {" "}
                <span className="fw-bold btn btn-danger" onClick={pause}>
                  pause
                </span>
              </button>
              <button>
                {" "}
                <span className="fw-bold btn btn-danger" onClick={stop}>
                  reset
                </span>
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-around mt-1">
            <ShortBreakButton isActive={isBreak} />
            <SettingButton
              onClick={() => {
                setShowSetting(!showSetting);
              }}
            />
            {console.log("showSetting " + showSetting)}
            <TaskButton
              onClick={() => {
                setShowTask(!showTask);
              }}
            />
          </div>

          {showSetting && <Setting onSetCustomTimer={handleCutomeTimer} />}
          {showTask && <Task />}

          {/* operating buttons */}
          <div className="container d-flex justify-content-around my-5">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

// Another approach

// import React, { useState, useEffect, useRef } from "react";

// // Constants for session durations in seconds
// const WORK_SESSION_DURATION = 2 * 60; // 25 minutes for work session
// const BREAK_SESSION_DURATION = 1 * 60; // 5 minutes for break session

// export default function PomodoroTimer() {
//     // States to manage time and session type
//     const [seconds, setSeconds] = useState(WORK_SESSION_DURATION);
//     const [isBreak, setIsBreak] = useState(false);
//     const [isActive, setIsActive] = useState(false);

//     // Reference for setInterval
//     const intervalRef = useRef(null);

//     // Function to handle starting and stopping the timer
//     const toggleTimer = () => {
//         setIsActive((prevIsActive) => {
//           if (!prevIsActive) {
//             intervalRef.current = setInterval(() => {
//               setSeconds((prevSeconds) => {
//                 if (prevSeconds <= 0) {
//                   clearInterval(intervalRef.current);
//                   if (!isBreak) {
//                     setIsBreak(true); // If it was a work session, switch to break session
//                     setSeconds(BREAK_SESSION_DURATION);
//                   } else {
//                     setIsBreak(false); // If it was a break session, switch to work session
//                     setSeconds(WORK_SESSION_DURATION);
//                   }
//                   return 0;
//                 }
//                 return prevSeconds - 1;
//               });
//             }, 500);
//           } else {
//             clearInterval(intervalRef.current); // Clear the interval
//           }
//           return !prevIsActive;
//         });
//       };

//     // Function to reset the timer
//     const resetTimer = () => {
//         setIsActive(false);
//         setIsBreak(false);
//         setSeconds(WORK_SESSION_DURATION);
//         clearInterval(intervalRef.current); // Clear interval when reset
//     };

//     useEffect(() => {
//         // Logic to switch between work and break sessions
//         if (seconds === 0) {
//             setIsActive(false); // Stop the timer when seconds reach zero

//             if (!isBreak) {
//                 setIsBreak(true); // If it was a work session, switch to break session
//                 setSeconds(BREAK_SESSION_DURATION);
//             } else {
//                 setIsBreak(false); // If it was a break session, switch to work session
//                 setSeconds(WORK_SESSION_DURATION);
//             }
//         }
//     }, [seconds, isBreak]);

//     // Function to format time into mm:ss
//     const formatTime = (timeInSeconds) => {
//         const minutes = Math.floor(timeInSeconds / 60);
//         const seconds = timeInSeconds % 60;
//         return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
//     };

//     return (
//         <div className="pomodoro-timer">
//             <h1>{isBreak ? "Break Time" : "Work Time"}</h1>
//             <div className="timer">{formatTime(seconds)}</div>
//             <div className="controls">
//                 <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
//                 <button onClick={resetTimer}>Reset</button>
//             </div>
//         </div>
//     );
// }
