import { useEffect, useState } from "react"

function CalendarDay({position, day, addSelected, isSelected, handleMouseMove}){
    const [bgColor, setBgColor] = useState("grey");
    const [cSelected, setSelected] = useState(isSelected);

    useEffect(() =>{
        setSelected(isSelected);
    },[isSelected]);

    const changeColor = color => {
        if (bgColor == "grey"){
            addSelected(position);
        }
    }

    return(
    <div className="day" 
        onClick={() => changeColor("placeholder")} // Single Selection
        style={{backgroundColor: cSelected ? "pink" : bgColor}}
        onMouseDown={() => addSelected(position)}    // Start of Multi Selection
        onMouseMove={() => handleMouseMove(position)}    // Dragging Multi Selection
        >
            {day}
    </div>
    )
}

export default CalendarDay