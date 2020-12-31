import React from "react"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import CalendarApp from "../routes/CalendarApp"

function BookNails() {
  const clickHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Router>
      <div className="call-me">
        <div>
          <h1>JUŻ TERAZ UMÓW SIĘ NA WIZYTĘ</h1>
          <button className="order-nails" onClick={clickHandler}>
            <Link to="/calendar"> Umów się</Link>{" "}
          </button>
          <Switch>
            <Route path="/calendar" component={CalendarApp}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default BookNails
