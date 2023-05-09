import { useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";

export default function Navigation() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="w-full h-auto bg-transparent relative">
        <nav className="py-3 px-4 sm:px-7 flex flex-row items-center justify-between">
          <Link to="/">
            <img
              src="./public/icon.png"
              alt="Icon of MNHNC"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
          </Link>
          <ul className="hidden sm:flex flex-row items-center justify-center gap-x-6">
            <Link to="/">Blog</Link>
            <Link to="/">Link 2</Link>
            <Link to="/">Link 3</Link>
          </ul>
          <MenuButton show={show} setShow={setShow} />
        </nav>
      </header>
      <aside
        className={`${
          show ? "absolute" : "hidden"
        } sm:hidden w-2/3 h-3/4 py-10 top-0 bottom-20 bg-lime-200/60 backdrop-blur-xl shadow-md rounded animate-in slide-in-from-left-full`}
      >
        <ul className="flex flex-col items-center justify-center gap-y-6">
          <Link to="/">Blog</Link>
          <Link to="/">Link 2</Link>
          <Link to="/">Link 3</Link>
        </ul>
      </aside>
    </>
  );
}
