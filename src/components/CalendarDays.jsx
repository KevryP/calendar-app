import { useEffect, useState } from "react";
import Day from "./CalendarDay"

function CalendarDays() {
    let days = [];
    for(let i=0; i< 42; i++){
        days.push(i);
    }

    return(
        <div className="calendar-body">
            {days.map((day) => {
            return(
                <Day day={day}></Day>
            )
        })}
        </div>
    )
}

export default CalendarDays