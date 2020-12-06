import React from 'react'

const Minutes = (props) => {
  return(
    <div className="minutes">
      <span className="time">{props.minutes}</span> minutes
    </div>
  );
}

export default Minutes
