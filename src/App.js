import "./App.css"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-[#e9e9e9] h-auto px-10 md:px-24 lg:px-96 xl:px-[25%]  dark:bg-gray-900 ">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main />
      </div>
    </div>
  )
}

export default App
