import "./App.css"

// components
import Contact from "./components/Contact"
import Prices from "./components/Prices/Prices"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <header id="home">
        <Home />
      </header>
      {/* <header id="book-nails">
        <BookNails />
      </header> */}
      <header id="prices">
        <Prices />
      </header>
      <header id="contact">
        <Contact />
      </header>
    </div>
  )
}

export default App
