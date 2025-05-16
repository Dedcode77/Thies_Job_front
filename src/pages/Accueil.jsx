import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1>Bienvenue veuillez vous inscrire </h1>
      <Link
        to={"/inscription"}
        className="bg-gray-400 p-3 text-white rounded-md"
      >
        S'inscrire
      </Link>
    </div>
  );
}

export default Accueil;
