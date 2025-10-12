import React, { Component } from 'react';

class Timer extends Component {
    timer;

    constructor() {
        super();
        this.state = {
            intervalId: null,
            seconds: localStorage.getItem('seconds') ? parseInt(localStorage.getItem('seconds')) : 0
        }
    }

    componentDidMount() {
        this.timer = document.querySelector('.timer');
        this.startTimer();
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
      //  console.log(prevState.counter, this.state.counter);
       if(prevState.seconds != this.state.seconds)
            console.log('Updated!');
            return true;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.state.intervalId)

    }

    startTimer = () => {
        if(this.state.intervalId) return;
        this.timer.classList.remove('text-danger');
        const intervalId = setInterval(() => {
            this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
            localStorage.setItem('seconds', this.state.seconds);
        }, 1000)
        this.setState({intervalId})
    };

    stopTimer = () => {

        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
        this.timer.classList.add('text-danger');
    };

    resetTimer = () => {
        this.timer.classList.remove('text-danger');
        clearInterval(this.state.intervalId);
        this.setState({ seconds: 0, intervalId: null });

    };

    render() {
        return <>
            <div className="timer fs-1">{this.state.seconds}</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button type="button"  onClick={this.startTimer} className="btn btn-success">Start</button>
                <button type="button"  onClick={this.stopTimer} className="btn btn-danger">Stop</button>
                <button type="button"  onClick={this.resetTimer} className="btn btn-primary">Reset</button>
            </div>
        </>

    }
}

export default Timer;