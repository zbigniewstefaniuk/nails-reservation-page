import "./App.css"

import logo from "./images/logo.png"

//
import { animateScroll as scroll } from "react-scroll"

// components
import Images from "./components/Images"
import BookNails from "./components/BookNails"
import Contact from "./components/Contact"
import Prices from "./components/Prices"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">
        <Navbar />
        <div className="header">
          <img className="logo" src={logo} alt="logo-Joanna"  onClick={() => scroll.scrollToTop}/>
        </div>
        <br />
        <Images />
      </header>
      <header className="App-header" id="book-nails">
        <BookNails />
      </header>
      <header className="App-header" id="prices">
        <Prices />
      </header>
      <header className="App-header" id="contact">
        <Contact />
      </header>
    </div>
  )
}

export default App
