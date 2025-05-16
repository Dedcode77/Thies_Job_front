import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menuItems = Array.from({ length: 11 }, (_, i) => `Menu ${i + 1}`);

  return (
    <div
      className={`fixed left-0 mt-16 h-[calc(100%-4rem)] bg-neutral-900 text-white transition-[width] duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        {isOpen && (
          <span className="text-xl font-bold max-sm:text-sm">Mon WebSite</span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
          className="text-white focus:outline-none p-2 rounded-md transition"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 hover:text-gray-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
