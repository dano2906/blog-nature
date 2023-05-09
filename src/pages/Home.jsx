import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <MainLayout>
      <main className="w-full h-screen flex flex-col sm:flex-row items-center justify-start sm:justify-center">
        <div className="sm:w-1/2 sm:h-full sm:px-10 sm:grid sm:place-content-start flex flex-col items-center justify-between gap-y-10 my-20">
          <div className="px-4 sm:px-7 text-6xl sm:text-8xl text-center font-black drop-shadow-2xl shadow-green-950 select-none">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-lime-700">
              Museo Nacional de Historia Natural
            </span>
          </div>
          <Link
            className="rounded-2xl px-7 py-4 sm:px-10 sm:py-5 font-semibold transition-all duration-200 text-lime-300/75 text-center text-lg mx-auto bg-gradient-to-br from-green-900 via-green-800 to-lime-900 hover:bg-gradient-to-br hover:from-lime-900 hover:via-green-800 hover:to-green-900 sm:hover:scale-105"
            to="/"
          >
            Informaciones generales
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
      </main>
    </MainLayout>
  );
}
