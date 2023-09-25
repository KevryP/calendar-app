import { useEffect, useState } from "react"

function CalendarDay({day, addSelected, isSelected, handleMouseMove}){
    const [bgColor, setBgColor] = useState("grey");
    const [cSelected, setSelected] = useState(isSelected);


    useEffect(() =>{
        setSelected(isSelected);
    },[isSelected]);

    const changeColor = color => {
        if (bgColor == "grey"){
            setSelected(true);
            addSelected(day);
        }
        else {
            setBgColor("grey");
        }
    }


    return(
    <div className="day" 
        onClick={() => changeColor("placeholder")} 
        style={{backgroundColor: cSelected ? "pink" : bgColor}}
        onMouseDown={() => addSelected(day)}
        onMouseMove={() => handleMouseMove(day)}
        >
            {day}
    </div>
    )
}

export default CalendarDay