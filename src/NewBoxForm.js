import { useState } from "react";

function NewBoxForm({ createBoxes }) {
    const initialData = [height, width, bg]
    const [height, setHeight] = useState(5);
    const [width, setWidth] = useState(5);
    const [backgroundColor, setBackgroundColor] = useState("blue");

    function handleHeightChange(evt) {
        setHeight(evt.target.value);
    }

    function handleWidthChange(evt) {
        setWidth(evt.target.value);
    }

    function handleBackgroundColorChange(evt) {
        setBackgroundColor(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        createBoxes(height, width, backgroundColor);
        setHeight(5);
        setWidth(5);
        setBackgroundColor("blue");
        console.log("Check out state ->", formData);
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
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
            />
            <button>Add a new box!</button>
        </form>
    );
}

export default NewBoxForm;