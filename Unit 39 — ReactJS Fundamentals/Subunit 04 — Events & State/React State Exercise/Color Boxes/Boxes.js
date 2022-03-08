import React, { useState } from "react";
import Box from "./Box";
import "./Boxes.css";

function Boxes({ numBoxes, allColors }) {
  function getRandObj(array) {
    const randObj = array[Math.floor(Math.random()*array.length)];
    return randObj;
  }

  const [boxes, setBoxes] = useState(
    Array.from({ length: numBoxes }, () => getRandObj(allColors))
  );

  const handleClick = evt => {
    let idx = Math.floor(Math.random() * numBoxes);

    setBoxes(boxes => {
      let boxCopy = [...boxes];
      boxCopy[idx] = getRandObj(allColors);
      return boxCopy;
    });
  };

  const allBoxes = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
    <div>
      <section className="Boxes">{allBoxes}</section>
      <button onClick={handleClick}>Change a Box</button>
    </div>
  );
}

Boxes.defaultProps = {
  numBoxes: 16,
  allColors: [
    "Aqua",
    "BlanchedAlmond",
    "Chocolate",
    "DodgerBlue",
    "Lavender",
    "LawnGreen",
    "Peru",
    "Plum",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Yellow",
    "YellowGreen"
  ]
};

export default Boxes;
