import { useEffect, useState } from "react";
import Day from "./CalendarDay"

function CalendarDays() {
    const [dSelected, setDSelected] = useState([]);
    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        addEventListener("mousedown", handleMouseDown);
        addEventListener("mouseup", handleMouseUp);
        addEventListener("mousemove", handleMouseMove);

        return () => {
            removeEventListener("mousedown", handleMouseDown);
            removeEventListener("mouseup", handleMouseUp);
            removeEventListener("mousemove", handleMouseMove);
        }
    },[mouseDown, dSelected]);

    const addSelected = (newDay) => {
        if (dSelected.indexOf(newDay) === -1){
            setDSelected([...dSelected, newDay]);
        }
    }

    function findSelected(day) {
        dSelected.sort((a,b) => a - b);
        for(let i = dSelected[0]; i <= dSelected[dSelected.length-1]; i++){
            if (i == day){
                return true;
            }
        }
        return false;
    }

    const handleMouseDown = () => {
        setMouseDown(true);
        setDSelected([]);
    }

    const handleMouseUp = () => {
        setMouseDown(false);
    }

    const handleMouseMove = (day) => {
        if(day instanceof MouseEvent){  //Surely theres a better way to handle this...
            return;
        }
        if(mouseDown == true){
            if (day < dSelected[dSelected.length-1]) {
                setDSelected([dSelected[0], day]);
            }
            addSelected(day);
        }
    }

    let days = [];
    for(let i=0; i < 42; i++){// Fills the "days" array with 42 numbers representing the numbers in a 6 row calendar
        let year = 2023;
        let month = 8;
        let day = 1;

        if(i < new Date(year, month, day).getDay()){ // Start of Month
            days.push(new Date(year, month-1,0).getDate()-new Date(year, month, day).getDay()+i+1);
        } 
        else if ((i-new Date(year, month, 1).getDay()) > new Date(year, month, 0).getDate()-2){// End of Month
            days.push(i - new Date(year, month, 0).getDate()-3);
        }
        else {// Days in Month
            days.push(i-new Date(year, month, day).getDay() + 1);
        }
    }

    return(
        <div className="calendar-body">
            {days.map((day, index) => {
            return(
                <Day 
                    key={index}
                    position={index}
                    day={day} 
                    addSelected={addSelected} 
                    isSelected={findSelected(index)}
                    handleMouseMove={handleMouseMove}
                />
            )
        })}
        </div>
    )
}

export default CalendarDays