import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <header className="bg-sky-500 shadow-lg py-2.5 font-sans hover:font-serif">
      <nav className="container mx-auto flex flex-wrap justify-between items-center p-5 md:px-10">
        {" "}
        {/* Added padding on medium screens and above */}
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <Image
            src="/picture/booooooooooooooks.jpg"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="ml-2 text-xl font-bold text-pink- italic underline md:decoration-dashe">
            BOOKS{" "}
          </span>
        </div>
        {/* Navigation links */}
        <div className="flex-grow md:flex md:items-center md:w-auto underline hover:decoration-dashed">
          <div className="md:flex-grow underline underline-offset-[3px] underline decoration-4 underline hover:decoration-dashed">
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 mr-6 text-pink-800 hover:text-white-900"
            >
              HOME
            </a>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 mr-6 text-pink-800 hover:text-white-900"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 mr-6 text-pink-800 hover:text-white-900"
            >
              HISTORY
            </a>
            <a
              href="#"
              className="block mt-4 md:inline-block md:mt-0 text-pink-800 hover:text-white-900"
            >
              CONTACT
            </a>
          </div>
          {/* Button */}
          <button className="inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
