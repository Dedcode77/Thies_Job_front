import React from "react";
import useScroll from "../hooks/useScroll";

export default function Navbar() {
  const isScroll = useScroll();

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        isScroll ? "bg-sky-700" : "bg-sky-900"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 h-16">
        <div className="text-white text-2xl font-bold">Logo</div>
        <ul className="flex gap-6">
          <li className="text-white cursor-pointer hover:underline">Home</li>
          <li className="text-white cursor-pointer hover:underline">About</li>
          <li className="text-white cursor-pointer hover:underline">Contact</li>
        </ul>
      </div>
    </div>
  );
}
