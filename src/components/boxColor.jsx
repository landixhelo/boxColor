import React from "react";
import { useState } from "react";
import "../components/boxstyle.css";

const ColorBlock = () => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (color.trim() !== "") {
      setBoxes([...boxes, color]);
      setColor("");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="">Color</label>
          <input type="text" value={color} onChange={handleColorChange} />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        <div className="d-flex">
          {boxes.map((boxColor, index) => (
            <div
              key={index}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: boxColor,
                margin: "5px",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorBlock;
