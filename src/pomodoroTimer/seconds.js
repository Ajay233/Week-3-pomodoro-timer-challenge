import React from 'react'

class Seconds extends React.Component {

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextProps, nextState)
  //   return nextProps.start ? true : false
  // }

  componentDidUpdate(nextProps){
    console.log(this.props.start)
    console.log(this.props.timerSet)
    if(this.props.start && !this.props.timerSet){
      this.props.startSecondsCountDown()
    }
  }

  render(){
    const {seconds} = this.props
    return(
      <div className="seconds">
        <span className="time">{seconds}</span> seconds
      </div>
    );
  }
}

export default Seconds
