import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import {useState} from "react"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
