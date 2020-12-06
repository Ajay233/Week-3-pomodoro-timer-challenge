import React from 'react'

const TimesSelect = (props) => {

  // TODO
  // Update selectValues to be mm:ss in 30 second increments
  // Method for handling minutes and seconds and updating each in the Timer state

  let selectRef = React.createRef()

  // This method creates an array of values from 0-25 and maps each value to an option element
  const selectValues = () => {
    let range = [...Array(26).keys()]
    let values = range.map(val => {
      return <option key={val}>{val}</option>
    })
    return values
  }

  return(
    <div>
      Set number of minutes:
      <select ref={selectRef} value={props.minutes} onChange={() => {props.setMinutes(selectRef)} }>
        {selectValues()}
      </select>
    </div>
  );
}

export default TimesSelect
