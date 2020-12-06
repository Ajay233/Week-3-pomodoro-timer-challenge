import React from 'react'
import Minutes from './minutes'
import Seconds from './seconds'
import TimesSelect from './timeSelect'
import '../stylesheets/timer.css'
import lol from '../public/sound43.wav'
import pomodoroLogo from '../public/pomodoroLogo.png'

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      minutes: 25,
      start: false,
      playEffect: false
    };
    this.imgRef = React.createRef()
  }

  startSecondsCountDown = () => {
    this.timerId = setInterval(this.decrementSeconds, 1000)
  }

  decrementSeconds = () => {
    const { seconds, minutes } = this.state
    if(seconds > 0){
      let secs = seconds - 1
      this.setState({ seconds: secs })
    } else if(minutes > 0 && seconds === 0){
      let mins = minutes - 1
      this.setState({ minutes: mins })
      this.setState({ seconds: 60 })
    } else {
      clearInterval(this.timerId);
      let timesUp = new Audio(lol);
      timesUp.play().then(() => {
        console.log("Played audio")
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  handleStart = () => {
    console.log(this.state.start)
    this.setState({ start: true })
    console.log(this.state.start)
    this.toggleAnimation()
  }

  handleStop = () => {
    this.setState({ start: false })
    clearInterval(this.timerId);
    this.timerId = null;
    this.toggleAnimation()
  }

  handleReset = () => {
    this.setState({ minutes: 25 })
    this.setState({ seconds: 0 })
    this.setState({ start: false })
    this.timerId = null;
  }

  setMinutes = (ref) => {
    this.setState({ minutes: ref.current.value })
  }

  toggleAnimation = () => {
    this.imgRef.current.classList.toggle('timerSpin')
  }

  render(){
    const { minutes, seconds, start } = this.state
    return(
      <div>
        {console.log(this.state)}
        <div className="title-large">Pomodoro Timer</div>
        <div>
          <img className="pomodoroLogo" ref={this.imgRef} src={pomodoroLogo} alt="pomodoro timer"/>
        </div>
        <div className="timeDisplay">
          <Minutes minutes={minutes} decrementMinutes={this.decrementMinutes}/>
          <Seconds
            start={start}
            seconds={seconds}
            startSecondsCountDown={this.startSecondsCountDown}
            timerSet={this.timerId}
          />
        </div>
          <TimesSelect setMinutes={this.setMinutes} minutes={minutes}/>
        <button className="button start" onClick={this.handleStart} disabled={start}>Start</button>
        <button className="button start" onClick={this.handleStop}>Stop</button>
        <button className="button reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Timer
