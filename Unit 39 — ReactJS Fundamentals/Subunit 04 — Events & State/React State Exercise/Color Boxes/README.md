# Color Boxes
## ReactJS - React State Exercise - Events & State - Kaitlin Berryman - Springboard

### Instructions: Color Boxes

Show a series of 16 boxes. At the bottom of all of the boxes should be a button labeled “Change”.

Initially, each box should have a background color chosen from a random list of colors.

When you click the button:

-   it should select a random box
-   it should change the background color of that random box to a new color from the possible colors list.

----

Okay, let's get started! :-)
`mkdir react-boxes`
`cd react-boxes`
`npx create-react-app boxes`
`cd boxes`
`npm start`

---

Let's create the  `Box`component first Create  `Box.js`  and  `Box.css`

Set up  `Box.js`

```
 import React from 'react';
    
 function Box() {
  return (
    <div>
        
    </div>
  )
}
    
export default Box;

```

---

Let's create the  `Boxes`component first Create  `Boxes.js`  and  `Boxes.css`

Set up  `Boxes.js`

```
 import React from 'react';
 import Box from './Box';
    
 function Boxes() {
  return (
    <div>
        
    </div>
  )
}
    
export default Boxes;
```


In  `App.js`,  `import Boxes from './Boxes';`  `<Boxes />`

----

### Further Study — Defaults
There are opportunities to move some things into default properties:

-   the list of possible colors for boxes
-   the number of boxes (so it doesn’t always have to be 16!)
