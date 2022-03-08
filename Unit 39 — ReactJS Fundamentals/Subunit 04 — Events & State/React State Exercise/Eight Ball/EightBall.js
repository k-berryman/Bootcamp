import React, { useState } from 'react';
import './Eightball.css'

function EightBall({ answers }) {
  const [msg, setMsg] = useState('Think of a Question.');
  const [color, setColor] = useState('black');
  const [greenCount, setGreenCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [redCount, setRedCount] = useState(0);


  // Choose a random object in a given array
  function getRandObj(array) {
    const randObj = array[Math.floor(Math.random()*array.length)];
    return randObj;
  }

  function handleClick() {
    // Choose random message and color
    const newObj = getRandObj(answers);
    setMsg(newObj.msg);
    setColor(newObj.color);

    if(newObj.color == 'green') {
      setGreenCount(greenCount + 1)
    }
    if(newObj.color == 'goldenrod') {
      setYellowCount(yellowCount + 1)
    }
    if(newObj.color == 'red') {
      setRedCount(redCount + 1)
    }
  }

  // Set ball to original message & color
  function resetBall() {
    setMsg('Think of a Question.');
    setColor('black');
  }

  return (
    <div>
      <div className={color} onClick={handleClick}>
        <p>{msg}</p>

        <h4>Green Count: {greenCount}</h4>
        <h4>Yellow Count: {yellowCount}</h4>
        <h4>Red Count: {redCount}</h4>

      </div>

      <button onClick={resetBall}>Reset</button>
    </div>


  )
}

export default EightBall;
