import { useEffect, useState } from "react";
import Day from "./CalendarDay"

function CalendarDays() {
    let days = [];
    let daysSelected = [];
    for(let i=0; i < 42; i++){
        days.push(i);
    }
    function selectDays () {
        daysSelected.sort((a,b) => a - b);
        let largestDay = daysSelected[daysSelected.length-1]
        for(let i = daysSelected[0] + 1; i < largestDay; i++){
            daysSelected.push(i);
        }

    }

    return(
        <div className="calendar-body">
            {days.map((day) => {
            return(
                <>
                <Day day={day} daysSelected={daysSelected}></Day>
                <button onClick={() => selectDays()}></button>
                </>
            )
        })}
        </div>
    )
}

export default CalendarDays