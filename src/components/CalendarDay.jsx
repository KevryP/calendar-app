import { useEffect, useState } from "react"

function CalendarDay({day}){
    const [bgColor, setBgColor] = useState("grey");
    const dayClick = color => {
        if (bgColor == "grey"){
            setBgColor("red");
        }
        else {setBgColor("grey");}
}
    
    return(
    <div className="day" onClick={() => dayClick("red")} style={{backgroundColor: bgColor}}>{day}</div>
    )
}

export default CalendarDay