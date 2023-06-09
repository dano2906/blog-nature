import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <div className="sm:w-1/2 sm:h-auto my-24 sm:my-0 sm:px-6 flex flex-col items-center justify-start gap-y-12 sm:gap-y-6 sm:relative">
        <div className="sm:absolute px-4 sm:px-7 text-6xl sm:text-8xl text-center font-black drop-shadow-2xl shadow-green-950 select-none">
          <span className="sm:absolute bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-lime-700 sm:-top-72 sm:-left-40 drop-shadow-[0_0_1px_#1e5309]">
            Museo Nacional de Historia Natural
          </span>
        </div>
        <Link
          className="sm:hidden rounded-2xl px-7 py-4 sm:px-8 sm:py-3 font-semibold transition-all duration-200 text-lime-300/75 text-center text-lg mx-auto bg-gradient-to-br from-green-900 via-green-800 to-lime-900 hover:bg-gradient-to-br hover:from-lime-900 hover:via-green-800 hover:to-green-900"
          to="/"
        >
          Contáctenos
        </Link>
      </div>
      <div className="sm:w-1/2 sm:h-auto mr-8 hidden sm:grid sm:place-content-start sm:grid-cols-2 sm:grid-rows-2 sm:gap-2">
        <img
          src="/gq8.webp"
          alt="webp"
          className="w-full h-72 col-start-1 col-end-3 row-start-1 rounded transition-all duration-300 sepia hover:sepia-0 hover:scale-95 hover:rotate-1"
        />
        <img
          src="/gq10.webp"
          alt="webp"
          className="w-full h-52 rounded transition-all duration-300 sepia-[50%] hover:sepia-0 hover:scale-95 hover:rotate-1"
        />
        <img
          src="/gq11.webp"
          alt="webp"
          className="w-full h-52 rounded transition-all duration-300 sepia-[50%] hover:sepia-0 hover:rotate-1"
        />
      </div>
    </div>
  );
}
