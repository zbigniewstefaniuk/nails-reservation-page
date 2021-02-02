import "./App.css"

// Routes
import Gallery from "./routes/Gallery"
import LandingPage from "./routes/LandingPage"
import CalendarApp from "./routes/CalendarApp"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/galery" component={Gallery} />
          <Route path='/booknail' component={CalendarApp} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
