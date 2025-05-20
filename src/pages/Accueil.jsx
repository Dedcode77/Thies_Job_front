import React from "react";
import { Link } from "react-router-dom";
import CarouselAccueil from "../components/acceuil/CarouselAccueil";
import SliderCard from "../components/acceuil/SliderCard";
import OffreAccueil from "../components/acceuil/offreAcceuil";
import NosStats from "../components/acceuil/NosStats";

function Accueil() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="bg-blue-900 text-white py-4 px-6 mb-10 flex justify-between items-center">
        <h1 className="text-xl font-bold">Bienvenue sur SEN JOB</h1>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-gray-200"
          >
            Se connecter
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700"
          >
            S'inscrire
          </Link>
        </div>
      </nav>

      <div className="bg-blue-900 text-white py-10 px-6 mb-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue SEN JOB.sn</h1>
        <p>la plateforme de recherche d'emploi</p>
        <p className="text-lg">
          Que vous soyez chômeur, étudiant ou à la recherche de nouvelles
          opportunités, trouvez ici des offres d'emploi adaptées à votre profil.
        </p>
        <Link
          to="/register"
          className="mt-4 inline-block bg-blue-600 py-2 px-6 rounded-full hover:bg-blue-700"
        >
          Créer un compte
        </Link>
      </div>

      <div className="mb-10 relative">
        <CarouselAccueil />
      </div>

      <div className="mb-10 relative">
        <OffreAccueil />
      </div>

      <div className="mb-10 relative">
        <h2 className="text-2xl text-center font-bold mb-4 text-blue-900">
          Nos statistiques
        </h2>
        <NosStats />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Pourquoi nous choisir ?
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Un large réseau d'entreprises partenaires</li>
          <li>Des offres adaptées à chaque profil</li>
          <li>Une plateforme simple et intuitive</li>
          <li>Un suivi personnalisé pour chaque candidat</li>
        </ul>
      </div>

      <div className="mb-10">
        <SliderCard />
      </div>

      <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Entreprises & Startups</h2>
        <p>
          Vous cherchez des talents ? Créez un compte pour publier vos offres
          d'emploi.
        </p>
        <Link
          to="/register-entreprise"
          className="mt-4 inline-block bg-blue-600 py-2 px-6 rounded-full hover:bg-blue-700"
        >
          Créer un compte entreprise
        </Link>
      </div>

      <footer className="bg-gray-100 text-center py-6 mt-10">
        <p className="text-gray-600">
          Rejoignez-nous et trouvez votre prochain emploi sur SEN JOB.sn !
        </p>
      </footer>
    </div>
  );
}

export default Accueil;
