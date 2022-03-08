# Eight Ball
## ReactJS - React State Exercise - Events & State - Kaitlin Berryman - Springboard

**Initial Instructions: EightBall Component**

This application will consist of two components:

**App**
A simple component that just renders an EightBall component.

**EightBall**
The component for the magic eight ball.

The EightBall should take a single property, **answers**, which should be an array of objects, with each object having a key for **msg** and **color**. For example, to use the answers from the classic commercial product, you could use these:

    [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" },
    ]

The EightBall will need state to keep track of the current color and message text, and this state should initially be “black” and “Think of a Question”.

Make it so that the ball chooses a random message when it is clicked on. This should change the background color of the ball and the message.

### Let's Get Started! 
#### My process for making my submission is below

`mkdir react-eightball`
`cd react-eightball`
`npx create-react-app eightball`
`cd eightball`
`npm start`

Let's create the `EightBall`component first
Create `EightBall.js` and `EightBall.css`

Set up  `EightBall.js` 

     import React from 'react';
        
     function EightBall() {
      return (
        <div>
            
        </div>
      )
    }
        
    export default EightBall;

In `App.js`, 
`import EightBall from './EightBall';`
`<EightBall />`


----

Alright, now let's add in props

This destructures answers from props in `EightBall.js`

    function EightBall({ answers }) {
     return (
       <div>
         {console.log(answers)}
       </div>
     )
    }

This passes in the array as a prop in `App.js`

    const answers = [...];
    <EightBall answers={answers}/>

----

Alright, now let's add a function that chooses a random object, which will help us choose a random message (and associated color) when the ball is clicked.

`Eightball.js`

    import React from 'react';
    
    function EightBall({ answers }) {
      // Choose a random object in a given array
      function getRandObj(array) {
        const randObj = array[Math.floor(Math.random()*array.length)];
        return randObj;
      }
    
      return (
        <div>
          {console.log(getRandObj(answers))}
        </div>
      )
    }
    
    export default EightBall;

----

Alright, now let's add state

The EightBall will need state to keep track of the current color and message text, and this state should initially be “black” and “Think of a Question”.

    import React, { useState } from 'react';
    
    function EightBall({ answers }) {
      const [msg, setMsg] = useState('Think of a Question.');
      const [color, setColor] = useState('black');
    
      // Choose a random object in a given array
      function getRandObj(array) {
        const randObj = array[Math.floor(Math.random()*array.length)];
        return randObj;
      }
    
      return (
        <div>
          {console.log(msg)}
        </div>
      )
    }
    
    export default EightBall;

----

Add UI

`EightBall.js`

    import React, { useState } from 'react';
    import './Eightball.css'
    
    function EightBall({ answers }) {
      const [msg, setMsg] = useState('Think of a Question.');
      const [color, setColor] = useState('black');
    
      // Choose a random object in a given array
      function getRandObj(array) {
        const randObj = array[Math.floor(Math.random()*array.length)];
        return randObj;
      }
    
      return (
        <div className={color}>
          <p>{msg}</p>
        </div>
      )
    }
    
    export default EightBall;

Eightball.css

    .black {
      background-color: black;
    }
    
    .green {
      background-color: green;
    }
    
    .goldenrod {
      background-color: goldenrod;
    }
    
    .red {
      background-color: red;
    }
    
    div {
      border-radius: 50%;
      width: 300px;
      height: 300px;
    }
    
    p {
      color: white;
      padding-top: 100px;
      padding-left: 110px;
      width: 75px;
    }


----

Make it so that the ball chooses a random message when it is clicked on. This should change the background color of the ball and the message.

`EightBall.js`

    import React, { useState } from 'react';
    import './Eightball.css'
    
    function EightBall({ answers }) {
      const [msg, setMsg] = useState('Think of a Question.');
      const [color, setColor] = useState('black');
    
      // Choose a random object in a given array
      function getRandObj(array) {
        const randObj = array[Math.floor(Math.random()*array.length)];
        return randObj;
      }
    
      // Choose random message and color
      function getRandBall() {
        setMsg(getRandObj(answers).msg);
        setColor(getRandObj(answers).color);
      }
    
      return (
        <div
          className={color}
          onClick={getRandBall}
        >
          <p>{msg}</p>
        </div>
      )
    }
    
    export default EightBall;


----
Further Study — Make a reset button

    function resetBall() {
        setMsg('Think of a Question.');
        setColor('black');
      }
    
      return (
        <div>
          <div className={color} onClick={getRandBall}>
            <p>{msg}</p>
          </div>
    
          <button onClick={resetBall}>Reset</button>
        </div>
      )
    }

----

Further Study — Record Keeping

As you ask questions to the ball, display counts of the number of times the eight ball shows up as each of the three different colors.

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
and 

        <h4>Green Count: {greenCount}</h4>
        <h4>Yellow Count: {yellowCount}</h4>
        <h4>Red Count: {redCount}</h4>



