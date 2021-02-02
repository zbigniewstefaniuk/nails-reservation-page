import "./App.css"

// Routes
import Gallery from "./routes/Gallery"
import LandingPage from "./routes/LandingPage"
import CalendarApp from "./routes/CalendarApp"
import Error404Handler from "./routes/Error404Handler"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from "./components/Layout/Layout"

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/gallery" component={Gallery} />
            <Route path='/booknail' component={CalendarApp} />
            <Route component={Error404Handler} />
          </Switch>
        </Layout>
      </div>
    </Router>
  )
}

export default App
