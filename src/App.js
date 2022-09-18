import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f12345").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setList(new Values(color).all(10));
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? "error" : null}`}
            value={color}
            type="text"
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f12345"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              hexColor={color.hex}
              {...color}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
