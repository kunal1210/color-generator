import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [shades, setShades] = useState(10);
  const [list, setList] = useState(new Values("#888").all(shades));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let shadesValue = parseInt(shades);
      let colors = new Values(color).all(shadesValue);
      setList(colors);
      console.log(shades);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container header">
        <h3>Color Generator</h3>
        <form className="" onSubmit={handleSubmit}>
          <div className="field_input">
            <label htmlFor="shades">shades</label>
            <input
              max={100}
              id="shades"
              min={1}
              placeholder="10"
              type="number"
              name=""
              value={shades}
              onChange={(e) => setShades(e.target.value)}
            />
          </div>
          <div className="field_input">
            <label htmlFor="color">insert Color Code</label>
            <input
              placeholder="#f15025"
              type="text"
              id="color"
              name=""
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className={`${error && "error"}`}
            />
          </div>
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>Color List</h4>
        {list.map((color, index) => {
          return (
            <SingleColor
              {...color}
              key={index}
              hexColor={color.hex}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
