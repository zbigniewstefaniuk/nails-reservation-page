import "./App.css"

import logo from "./images/logo.png"

// components
import Images from "./components/Images"
import BookNails from "./components/BookNails"
import Contact from "./components/Contact"
import Prices from "./components/Prices"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="header">
          <img className="logo" src={logo} alt="logo-Joanna" />
        </div>
        <br />
        <Images />
      </header>
      <header className="App-header">
        <BookNails />
      </header>
      <header className="App-header">
        <Prices />
      </header>
      <header className="App-header">
        <Contact />
      </header>
    </div>
  )
}

export default App
