import React from 'react';
var i = 0
const calculatorLogScreen = (props) => (

  <div className='calculator-log-screen'>
    {props.calculatorLog.map(log => (
      <div className="calculator-log" key={i++}>{log}</div>
    ))}
  </div>



);

export default calculatorLogScreen;
