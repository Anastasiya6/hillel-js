import {useState,useEffect,useRef } from "react";

const TimerFunc = () => {
    let timer = document.querySelector('.timer');;
    const [seconds, setSeconds] = useState(localStorage.getItem('seconds') ? parseInt(localStorage.getItem('seconds')) : 0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if ( intervalRef.current ) return;
        timer.classList.remove('text-danger');
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            console.log('Updated!');
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current );
        intervalRef.current = null;
        timer.classList.add('text-danger');

    };

    const resetTimer = () => {
        setSeconds(0);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };
    useEffect(() => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            console.log('Updated!');
        }, 1000);

        return () => {
            console.log('unmount');
            clearInterval(intervalRef.current);}
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