import React, { useState, useEffect } from 'react';
import '../styles/Timer.css'
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);

  const startTimer = () => {
    setIsActive(true);
    setStartTime(Date.now()); // Set start time when timer starts
  };

  const stopTimer = () => {
    setIsActive(false);
    setEndTime(Date.now()); // Set end time when timer stops
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (startTime && endTime) {
      const elapsedMilliseconds = endTime - startTime;
      setTotalTime(elapsedMilliseconds);
    }
  }, [startTime, endTime]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600000);
    const minutes = Math.floor((timeInSeconds % 3600000) / 60000);
    const seconds = Math.floor((timeInSeconds % 60000) / 1000);

    return (
      String(hours).padStart(2, '0') +
      ':' +
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0')
    );
  };

  return (
    <center>
      <h1>{formatTime(seconds * 1000)}</h1>
      {!isActive ? (
        <button onClick={startTimer} className='btn-timer start'>Start</button>
      ) : (
        <button onClick={stopTimer} className='btn-timer stop'>Stop</button>
      )}
      <div className='Timer_set'>
      <p>Start Time: {startTime ? new Date(startTime).toLocaleString() : 'Not started'}</p>
      <p>End Time: {endTime ? new Date(endTime).toLocaleString() : 'Not stopped'}</p>
      <p>Total Time Spent: {formatTime(totalTime)}</p>
      </div>
      
    </center>
  );
};

export default Timer;
