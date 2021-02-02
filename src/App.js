import "./App.css"

// Routes
import Gallery from "./routes/Gallery"
import LandingPage from "./routes/LandingPage"
import CalendarApp from "./routes/CalendarApp"
import Error404Handler from "./routes/Error404Handler"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/gallery" component={Gallery} />
          <Route path='/booknail' component={CalendarApp} />
          <Route component={Error404Handler} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
