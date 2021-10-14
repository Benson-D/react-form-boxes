import React from "react";

function Box({ id, height, width, backgroundColor, removeBox }) {
  return (
    <div className="Box">
      <div style={{ backgroundColor, height, width }}></div>
      <button className="Box-remove" onClick={() => removeBox(id)}>
        X
      </button>
    </div>
  );
}

export default Box;
