import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai"

import { DiJsBadge, DiCss3, DiReact, DiHtml5, DiPython } from "react-icons/di"
import { SiTailwindcss, SiFigma, SiBootstrap } from "react-icons/si"

export default function Main() {
  return (
    <div>
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
        <div className="text-5xl flex justify-center gap-10 py-3 text-gray-700 dark:text-gray-300 ">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className=" mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 justify-center items-center overflow-hidden md:h-96 md:w-96">
          <img
            className="pt-12 scale-[1.34]"
            src="dev-ed-wave.png"
            alt="abcd"
          />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-3xl  py-1  dark:text-[#cccccc]">About Me </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-[#a6a6a6]">
          Hello! My name is Abhishek Patil and I enjoy making creative digital
          art. I worked as a <span className="text-teal-500"> 3D Artist </span>
          for around 3 years and my interest in web development started in early
          2022 when I wanted to make my own website to showcase my 3D work.
          That's how I got into{" "}
          <span className="text-teal-500"> frontend web development </span>.
        </p>
        <p className="text-xl py-2 leading-8 dark:text-[#cccccc]">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className=" grid grid-cols-3 justify-center text-slate-900 dark:text-[#b3b3b3] text-lg mt-6 ">
          <li className="flex items-center gap-2 ">
            {" "}
            <DiHtml5 />
            HTML
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <DiCss3 />
            CSS
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <DiJsBadge /> JavaScript
          </li>
          <li className="flex items-center gap-2">
            <DiReact />
            React
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <DiPython />
            Python{" "}
          </li>
          <li className="flex items-center gap-2">
            <SiTailwindcss />
            TailWind
          </li>
          <li className="flex items-center gap-2">
            <SiFigma />
            Figma
          </li>
          <li className="flex items-center gap-2">
            <SiBootstrap />
            Bootstrap
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-3xl pt-16 dark:text-[#cccccc]">Portfolio</h3>
      </div>
      <div className="flex flex-col gap-10 py-10 md:grid md:gap-4 md:grid-cols-3  ">
        <div className="">
          <a href="https://strong-duckanoo-97c230.netlify.app/" target="_blank">
            <img
              src="clickCounter.png"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
        <div className="">
          <a
            href="https://euphonious-heliotrope-2029f2.netlify.app/"
            target="_blank"
          >
            <img
              src="random-number-generator-output-v2.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
        <div className="">
          <a
            href="https://fastidious-llama-c65447.netlify.app/"
            target="_blank"
          >
            <img
              src="app-store-output.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>

        <div className="">
          <a href="https://luminous-horse-7c70ef.netlify.app/" target="_blank">
            <img
              src="letters-calculator-output-v2.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
        <div className="">
          <a
            href="https://leafy-semifreddo-0ada24.netlify.app/"
            target="_blank"
          >
            <img
              src="gallery-output.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>

        <div className="">
          <a
            href="https://jocular-paprenjak-435b24.netlify.app/"
            target="_blank"
          >
            <img
              src="SearchDestination.png "
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
        <div className="">
          <a href="https://heartfelt-otter-c15572.netlify.app/" target="_blank">
            <img
              src="coin-toss-game-output.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
