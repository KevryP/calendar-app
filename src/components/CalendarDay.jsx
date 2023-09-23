import { useEffect, useState } from "react"

function CalendarDay({day}){
    const [bgColor, setBgColor] = useState("grey");
    const [mouseDown, setMouseDown] = useState(false);
    const dayClick = color => {
        if (bgColor == "grey"){
            setBgColor("red");
        }
        else {setBgColor("grey");}
    }
    const onMouseMouve = (e) => {
        if(mouseDown == true){
            setBgColor("blue");
        }
    }

    useEffect(() => {
        addEventListener("mousedown", handleMouseDown);
        addEventListener("mouseup", handleMouseUp);

    })

    const handleMouseDown = (e) => {
        setMouseDown(true);
    }
    const handleMouseUp = (e) => {
        setMouseDown(false);
    }

    //onClick={() => dayClick("red")}
    return(
    <div className="day" onClick={() => dayClick("placeholder")} style={{backgroundColor: bgColor}} onMouseMove={onMouseMouve}>{day}</div>
    )
}

export default CalendarDay