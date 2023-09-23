import { useEffect, useState } from "react"

function CalendarDay({day, daysSelected}){
    const [bgColor, setBgColor] = useState("grey");
    const [mouseDown, setMouseDown] = useState(false);
    let isSelected = false;
        for(let i = daysSelected[0]; i <= daysSelected[daysSelected.length-1]; i++)
        {
            if (i == day){
                isSelected = true;
            }
        }
    const changeColor = color => {
        if (bgColor == "grey"){
            setBgColor("red");
            daysSelected.push(day);
        }
        else {
            setBgColor("grey");
        }
    }
    const onMouseMouve = (e) => {
        if(mouseDown == true){
            for(let i = daysSelected[0]; i <= daysSelected[daysSelected.length-1]; i++)
            {
                if (i == day){
                    setBgColor("blue"); //Using this as a forced render
                    isSelected = true;
                }
            }
        }
    }
    const dragSelect = () => {
        if(mouseDown == true && daysSelected.indexOf(day) === -1 ){
            daysSelected.push(day);
        }
    }

    useEffect(() => {
        addEventListener("mousedown", handleMouseDown);
        addEventListener("mouseup", handleMouseUp);
        addEventListener("mousemove", handleMouseMove);
    })

    const handleMouseDown = () => {
        setMouseDown(true);
    }
    const handleMouseUp = () => {
        setMouseDown(false);
    }
    const handleMouseMove = () => {
        onMouseMouve();
    }
    return(
    <div className="day" onClick={() => changeColor("placeholder")} style={{backgroundColor: isSelected ? "pink" : bgColor}} onMouseMove={() => dragSelect() }>{day}</div>
    )
}

export default CalendarDay