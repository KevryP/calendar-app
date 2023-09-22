import '../css/Calendar.css'
import CalendarDays from './CalendarDays'

function Calendar() {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return(
        <>
        <div className='calendar'>
            <div className='calendar-header'>
                <h1> Calendar </h1>
            </div>
            <div className="weekday-header">
                {weekdays.map((weekday) => {return(<div><p>{weekday}</p></div>)})}
            </div>
            <CalendarDays></CalendarDays>
        </div>
        </>
    )
}

export default Calendar