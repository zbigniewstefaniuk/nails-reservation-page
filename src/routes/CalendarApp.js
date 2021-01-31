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

  return (
    <div className="calendar-app">
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>

      <section>
        <h2>Dostępne daty</h2>
        <p>Wybrana data: {userDate}</p>
      </section>
    </div>
  )
}

export default CalendarApp
