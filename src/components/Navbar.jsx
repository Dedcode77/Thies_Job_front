import React, { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";
import Dropdown from "./DropDown";
import profileUser from "../assets/images/ProfileUser.avif";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const isScroll = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = {
    username: "JohnDoe",
  };

  const handleLogout = () => {
    alert("Déconnexion réussie");
  };

  const announcements = [
    "Nouvelle annonce : Travailleur demandé pour chantier à Dakar.",
    "Formation gratuite en gestion de projet ce week-end !",
    "Postulez dès maintenant pour des missions temporaires à Thiès.",
    "Aide & Support : Consultez notre FAQ pour plus d'informations.",
  ];

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScroll ? "bg-blue-500 shadow-md" : "bg-blue-900"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 h-16">
        <h1 className="text-2xl font-bold text-gray-100">SEN JOB.sn</h1>

        {/* Desktop Annonces */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="font-bold px-3 text-white">Annonces : </span>
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAnnouncement}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="text-gray-100 text-sm font-medium"
              >
                {announcements[currentAnnouncement]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center lg:gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white lg:hidden focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>

          <div className="hidden lg:flex items-center gap-4">
            <img
              src={profileUser}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <Dropdown username={user.username} onLogout={handleLogout} />
            <FontAwesomeIcon icon={faBell} color="white" size="xl" />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 300 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-blue-900 text-white p-4 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-end gap-4">
                <img
                  src={profileUser}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                />
                <Dropdown username={user.username} onLogout={handleLogout} />
              </div>
            </div>
            <div className="lg:flex items-center justify-center gap-4 mt-6 mb-3 border-t border-white pt-4">
              <span className="font-bold text-white">Annonces : </span>
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAnnouncement}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-100 text-sm font-medium"
                  >
                    {announcements[currentAnnouncement]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
