import { useState } from "react";

/** Display of Box forms
 *
 * Props:
 * - createBoxes function, creates new boxes from form inputs
 *
 * State:
 * - height: form inputs -- string
 * - width: form inputs -- string
 * - backgroundColor: form inputs -- string
 *
 * App -> BoxList ---
 *                   -->  NewBoxForm
 *                   -->  Box
 */

function NewBoxForm({ createBoxes }) {
  //   const initialData = [height, width, bg];
  const [height, setHeight] = useState(5);
  const [width, setWidth] = useState(5);
  const [backgroundColor, setBackgroundColor] = useState("blue");

  /** Takes an event target value updates height input fields as user types  */
  function handleHeightChange(evt) {
    console.log(evt.target.value, "this was a valid height change");
    setHeight(evt.target.value);
  }

  /** Takes an event target value updates width input fields as user types  */
  function handleWidthChange(evt) {
    setWidth(evt.target.value);
  }

  /** Takes an event target value updates backgroundColor
   * input fields as user types  */
  function handleBackgroundColorChange(evt) {
    setBackgroundColor(evt.target.value);
  }

  /** Handles form submission of an event, invokes createBoxes function,
   * resets form inputs back to default */
  function handleSubmit(evt) {
    evt.preventDefault();

    console.log("this submition was created", evt);
    createBoxes({ height, width, backgroundColor });
    setHeight(5);
    setWidth(5);
    setBackgroundColor("blue");
  }

  //Question: When is it a better design to have the
  // form element in the Parent component and just pass in the input elements
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={height}
        onChange={handleHeightChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={width}
        onChange={handleWidthChange}
      />

      <label htmlFor="backgroundColor">BackgroundColor:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        type="color"
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
      />
      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
