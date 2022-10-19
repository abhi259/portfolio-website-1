import "./App.css"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import { useEffect, useState } from "react"
import ReactApps from "./Components/ReactApps"
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5330)
  }, [])

  return (
    <div className={darkMode ? "dark" : ""}>
      {loading && (
        <div className="flex justify-center items-center h-screen ">
          <LoadingScreen />
        </div>
      )}
      {!loading && (
        <div className="bg-[#e9e9e9] h-auto px-10 md:px-24 lg:px-96 xl:px-[25%]  dark:bg-gray-900 transition duration-1000  ">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main />
          <ReactApps />
        </div>
      )}
    </div>
  )
}

export default App
