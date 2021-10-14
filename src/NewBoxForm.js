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

    //handleSubmit
    
    function handleSubmit(evt) {
        evt.preventDefault();
        //TODO: do something with the data submitted
        setHeight(5);
        setWidth(5);
        setBackgroundColor("blue");
        console.log("Check out state ->", formData);
    }
    
    //TODO:return createBoX(passing in data)
}

export default NewBoxForm;