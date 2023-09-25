import { useEffect, useState } from "react";
import Day from "./CalendarDay"

function CalendarDays() {
    const [dSelected, setDSelected] = useState([]);
    const [dragging, setDragging] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);

    const addSelected = (newDay) => {
        if (dSelected.indexOf(newDay) === -1){
            setDSelected([...dSelected, newDay]);
        }
    }

    let days = [];
    for(let i=0; i < 42; i++){
        days.push(i);
    }

    function findSelected(day) {
        dSelected.sort((a,b) => a - b);
        for(let i = dSelected[0]; i <= dSelected[dSelected.length-1]; i++){
            if (i == day){
                addSelected(i);
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        addEventListener("mousedown", handleMouseDown);
        addEventListener("mouseup", handleMouseUp);
        addEventListener("mousemove", handleMouseMove);

        return () => {
            removeEventListener("mousedown", handleMouseDown);
            removeEventListener("mouseup", handleMouseUp);
            removeEventListener("mousemove", handleMouseMove);
        }
    },[mouseDown]);

    const handleMouseDown = () => {
        setMouseDown(true);
    }

    const handleMouseUp = () => {
        setMouseDown(false);
    }

    const handleMouseMove = (day) => {
        if(day instanceof MouseEvent){  //Surely theres a better way to handle this...
            return;
        }
        if(mouseDown == true){
            addSelected(day);
        }
    }

    return(
        <div className="calendar-body">
            {days.map((day) => {
            return(
                <Day 
                    day={day} 
                    addSelected={addSelected} 
                    isSelected={findSelected(day)}
                    handleMouseMove={handleMouseMove}
                />
            )
        })}
        </div>
    )
}

export default CalendarDays