import { useState, useEffect } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

function CalendarApp() {
  const [date, setDate] = useState(new Date())
  const [userDate, setUserDate] = useState("")
  console.log(date.getMonth(), date.getDay())

  useEffect(() => {
    setUserDate(`${date.getDate()}.${date.getMonth() + 1}`)
  }, [date])

  const disabledDates = [
    new Date(2021, 2, 10),
    new Date(2021, 2, 9),
  ]

  return (
    <div className="calendar-app">
      <div>
        <Calendar
          onChange={setDate}
          value={date}
          minDate={new Date()}
          tileDisabled={({ date, view }) =>
            view === "month" && // Block day tiles only
            disabledDates.some(
              (disabledDate) =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
            )
          }
        />
      </div>

      <section>
        <h2>Wybierz date w kalendarzu</h2>
        <p>Wybrana data: {userDate}</p>
      </section>
    </div>
  )
}

export default CalendarApp
