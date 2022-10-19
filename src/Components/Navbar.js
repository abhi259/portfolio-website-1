import { MdDarkMode } from "react-icons/md"
import { BsSunFill } from "react-icons/bs"

export default function Navbar({ darkMode, setDarkMode }) {
  // const modeLogo = darkMode ? MdDarkMode : BsSunFill
  return (
    <nav className="py-10 sm:mb-12 flex justify-between">
      <div className="flex gap-4">
        <h1 className="text-xl font-burtonsScript dark:text-[#cccccc]">
          {" "}
          abhishekpatil.me
        </h1>
      </div>
      <ul className="flex items-center">
        <li
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-4xl "
        >
          {darkMode ? (
            <MdDarkMode className="text-[#efefef]  " />
          ) : (
            <BsSunFill className="text-[#ffbe56]  " />
          )}
        </li>
        <li></li>
      </ul>
    </nav>
  )
}
