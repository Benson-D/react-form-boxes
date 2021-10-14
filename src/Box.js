import React from "react";
import "./Box.css";

/** Display of individual box
 *
 * State:
 *  - none
 *
 * Props:
 * - id
 * - height
 * - width
 * - backgroundColor,
 * - removeBox function: removes box based on box id
 *
 *
 * App -> BoxList ---
 *                   -->  NewBoxForm
 *                   -->  Box
 */

function Box({ id, height, width, backgroundColor, removeBox }) {
  console.log(
    "This Box component is reachable ",
    id,
    height,
    width,
    backgroundColor
  );

  function handleDelete() {
    removeBox(id);
  }
  let styleWidth = width + "px";
  let styleHeight = height + "px";
  return (
    <div className="Box">
      <div
        className="Box-Color"
        style={{
          backgroundColor: backgroundColor,
          height: styleHeight,
          width: styleWidth,
        }}
      ></div>
      <button className="Box-remove" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Box;
