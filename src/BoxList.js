import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

/** Display of boxes designed by user inputs
 *
 * Props:
 * - None
 *
 * State:
 * - boxes: Array of box objects
 *        [..., {height, width, backgroundColor, id: uuid()}]
 *
 * App -> BoxList ---
 *                   -->  NewBoxForm
 *                   -->  Box
 */

// NewBoxForm, Box for rendering both components

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Takes in object updates boxes state with a newly added object
   *
   * - input: {height, width, backgroundColor, id: uuid()}
   *
   */

//   Simplier name createBox, parameter name as box instead of formdata

  function createBoxes(formData) {
    const { height, width, backgroundColor } = formData;
    console.log(formData, "formInput data");
    setBoxes((boxes) => [
      ...boxes,
      { height, width, backgroundColor, id: uuid() },
    ]);
  }

  /** Takes a box id, keep boxes not equal to that id */

  function removeBox(id) {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBoxes={createBoxes} />
      {boxes.map(({ id, height, width, backgroundColor }) => (
        <Box
          key={id}
          id={id}
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
}

export default BoxList;
