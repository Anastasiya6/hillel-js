import {useState,useEffect,useRef } from "react";

const TimerFunc = () => {
    let timer = document.querySelector('.timer');;
    const [intervalId, setIntervalId] = useState(null);
    const [seconds, setSeconds] = useState(localStorage.getItem('seconds') ? parseInt(localStorage.getItem('seconds')) : 0);

    const timerFunc = () => {
        const id = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            console.log('Updated!');
        }, 1000);
        setIntervalId(id);
    }
    const startTimer = () => {
        if (intervalId) return;
        timer.classList.remove('text-danger');
        const id = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            console.log('Updated!');
        }, 1000);
        setIntervalId(id);
    };

    const stopTimer = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        timer.classList.add('text-danger');

    };

    const resetTimer = () => {
        setSeconds(0);
        clearInterval(intervalId);
        setIntervalId(null);
    };
    useEffect(() => {
        console.log('useEffect');
        const id = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            console.log('Updated!');
        }, 1000);
        setIntervalId(id);
        return () => {
            console.log('unmount');
            clearInterval(id)};
    }, []);

    useEffect(() => {
        localStorage.setItem('seconds', seconds);
    }, [seconds]);

    return (<>
            <div className="timer fs-1">{seconds}</div>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                <button type="button" onClick={startTimer} className="btn btn-success">Start</button>
                <button type="button" onClick={stopTimer} className="btn btn-danger">Stop</button>
                <button type="button" onClick={resetTimer} className="btn btn-primary">Reset</button>
            </div>
        </>

    )

}

export default TimerFunc;