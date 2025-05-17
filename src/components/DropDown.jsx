// src/components/ProfileDropdown.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Dropdown({ username = "Utilisateur", onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white flex items-center gap-2 focus:outline-none"
      >
        <span className="font-medium">{username}</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-white" />
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-5 w-40 bg-white rounded-md shadow-lg z-50">
          <div className="py-2 px-4 text-gray-800 border-b font-semibold">
            <Link to={"/profileUser"}>Profile</Link>
          </div>
          <div className="py-2 px-4 text-gray-800 border-b font-semibold">
            Parametre
          </div>
          <button
            onClick={() => {
              setMenuOpen(false);
              onLogout();
            }}
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            Déconnexion <FontAwesomeIcon icon={faDoorOpen} />
          </button>
        </div>
      )}
    </div>
  );
}
