export default function ReactApps() {
  return (
    <div>
      <div>
        <h3 className="text-3xl pt-16 dark:text-[#cccccc]">Portfolio</h3>
      </div>
      <div className="flex flex-col gap-12 py-10 md:grid md:gap-4 md:grid-cols-3   ">
        {/* Money Manager */}
        <div className="relative cursor-pointer ">
          <div className=" inset-0 z-0 ">
            <img
              src="money-manager-output.gif"
              alt="abcd"
              className="grow h-[100%] rounded-xl"
            />
          </div>
          <a href="https://jovial-sundae-02375d.netlify.app/">
            <div className="opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex justify-center  items-center bg-[#090d17] rounded-xl">
              <h1 className="text-white font-bold text-lg text-center">
                {" "}
                MONEY MANAGER
              </h1>
            </div>
          </a>
        </div>
        {/* Emoji Game */}
        <div className="relative cursor-pointer">
          <div className=" inset-0 z-0">
            <img
              src="emoji-game-output-v2.gif"
              alt="abcd"
              className="rounded-xl grow h-[100%]"
            />
          </div>
          <a href="https://admirable-selkie-3deb69.netlify.app/">
            <div className="opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-[#090d17] rounded-xl">
              <h1 className="text-white font-bold text-lgtext-center">
                EMOJI GAME
              </h1>
            </div>
          </a>
        </div>

        {/* Clicker Count */}
        <div className="">
          <a href="https://strong-duckanoo-97c230.netlify.app/">
            <img
              src="clickCounter.png"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
        {/* Coin Toss Game */}
        <div className="relative cursor-pointer">
          <div className=" inset-0 z-0">
            <img
              src="coin-toss-game-output.gif"
              alt="abcd"
              className="rounded-xl grow h-[100%]"
            />
          </div>
          <a href="https://heartfelt-otter-c15572.netlify.app/">
            <div className="opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-[#090d17] rounded-xl">
              <h1 className="text-white font-bold text-lg">HEADS/TAILS</h1>
            </div>
          </a>
        </div>

        {/* Random Number Generator */}
        <div className="">
          <a href="https://euphonious-heliotrope-2029f2.netlify.app/">
            <img
              src="random-number-generator-output-v2.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
        {/* Mock App Store */}
        <div className="">
          <a href="https://fastidious-llama-c65447.netlify.app/">
            <img
              src="app-store-output.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>

        {/* Calculate letters */}
        <div className="">
          <a href="https://luminous-horse-7c70ef.netlify.app/">
            <img
              src="letters-calculator-output-v2.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
        {/* Gallery App */}
        <div className="">
          <a href="https://leafy-semifreddo-0ada24.netlify.app/">
            <img
              src="gallery-output.gif"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
        {/* Destination Search */}
        <div className="">
          <a href="https://jocular-paprenjak-435b24.netlify.app/">
            <img
              src="SearchDestination.png "
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>

        {/* TodoList Javascript only */}
        <div className="">
          <a href="https://stunning-longma-d0caa4.netlify.app/">
            <img
              src="Screenshot 2022-10-14 042124.png"
              alt="abcd"
              className="rounded-lg grow h-[100%]"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
