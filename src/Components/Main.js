import { DiJsBadge, DiCss3, DiReact, DiHtml5, DiPython } from "react-icons/di"
import {
  SiTailwindcss,
  SiFigma,
  SiBootstrap,
  SiGithub,
  SiLinkedin,
  SiArtstation,
} from "react-icons/si"

export default function Main() {
  return (
    <div >
      <div className="flex flex-col justify-center items-center">
        <div className="text-left mx-auto py-10 ">
          <h3 className="text-sm py-2 md:text-lg  dark:text-[#cccccc]">
            Hi, my name is
          </h3>
          <h2 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl">
            Abhishek Patil
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl  dark:text-[#929292]">
            I am a frontend developer and designer.
          </h3>
        </div>
        <div className="text-5xl flex justify-center gap-10 py-3 text-gray-900 dark:text-gray-300 ">
          <a href="https://github.com/abhi259" target="_blank" rel="noreferrer">
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-patil-900098158/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://www.artstation.com/abhishekpatil925"
            target="_blank"
            rel="noreferrer"
          >
            <SiArtstation />
          </a>
        </div>
        <div className="  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 justify-center items-center overflow-hidden md:h-96 md:w-96">
          <img
            className="pt-12 scale-[1.34]"
            src="dev-ed-wave.png"
            alt="abcd"
          />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-4xl  py-1  dark:text-[#cccccc]">About Me </h3>
        <p className="text-lg py-2 leading-8 text-gray-800 dark:text-[#bbbaba]">
          &nbsp;&nbsp;&nbsp;&nbsp;Hello! My name is Abhishek. I am a{" "}
          <span className="text-teal-500"> Front-End Web Developer</span> and{" "}
          <span className="text-teal-500">3D Artist </span>
          My interest in web development started in early 2022 when I wanted to
          make my own website to showcase my 3D work. I started out by trying
          those online website-building platforms but I wanted to build my own
          website from the ground up and that's how my web development journey
          started.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp; I am an honest, hardworking, dependable and
          open-minded person always looking for new things to learn. After
          office hours most probably you will find me playing online PC games
          but I also like going out, meeting new people and exploring new
          places.
          <br />
          <br />
        </p>
        <p className="text-2xl py-2 leading-8 dark:text-[#e2e1e1]">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className=" grid grid-cols-2 md:grid-cols-3  justify-center text-slate-900 dark:text-[#b3b3b3] text-xl md:text-2xl mt-6 ">
          <li className="flex items-center gap-2 mb-2 ">
            {" "}
            <DiHtml5 />
            HTML
          </li>
          <li className="flex items-center gap-2 mb-2 ">
            {" "}
            <DiCss3 />
            CSS
          </li>
          <li className="flex items-center gap-2  mb-2 ">
            {" "}
            <DiJsBadge /> JavaScript
          </li>
          <li className="flex items-center gap-2 mb-2  ">
            <DiReact />
            React
          </li>
          <li className="flex items-center gap-2 mb-2 ">
            {" "}
            <DiPython />
            Python{" "}
          </li>
          <li className="flex items-center gap-2 mb-2 ">
            <SiTailwindcss />
            TailWind
          </li>
          <li className="flex items-center gap-2 mb-2 ">
            <SiFigma />
            Figma
          </li>
          <li className="flex items-center gap-2 mb-2 ">
            <SiBootstrap />
            Bootstrap
          </li>
        </ul>
      </div>
    </div>
  )
}
