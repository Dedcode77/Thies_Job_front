import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../../components/Carousel";
import Chart from "../../../components/Chart";

const DashboardUser = () => {
  return (
    <div className="p-6 min-h-screen max-sm:p-0 max-sm:m-2">
      {/* Section Annonces */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Tableau de Bord
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
            <h3 className="text-lg font-semibold mb-2">
              Bienvenue sur votre espace SEN JOB.sn
            </h3>
            <p className="text-gray-700 mb-4">
              Ici, vous trouverez les dernières opportunités d'emploi, vos
              candidatures en cours et des suggestions pour booster vos
              compétences. Que vous soyez à la recherche d'un emploi temporaire
              ou d'une mission longue durée, SEN JOB.sn vous offre une
              plateforme complète pour explorer, postuler et suivre vos
              candidatures.
            </p>
            <p className="text-gray-700 mb-4">
              Parcourez les annonces actualisées, postulez rapidement pour
              maximiser vos chances et profitez de nos suggestions de formations
              pour rester compétitif sur le marché du travail. Nous sommes là
              pour vous accompagner dans votre recherche d'emploi.
            </p>
            {/* <p className="text-sm text-gray-600">
              Consultez les annonces disponibles et postulez rapidement pour
              maximiser vos chances ! Ne manquez pas les formations recommandées
              pour développer de nouvelles compétences et améliorer votre
              employabilité.
            </p> */}
          </div>
          <div className="w-1/2">
            <Carousel />
          </div>
        </div>
      </div>

      {/* Candidatures en cours */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            Candidatures Récentes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-blue-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-blue-900">
                  Candidatures Totales
                </h2>
                <p className="text-xl font-bold">1435</p>
              </div>
              <span className="text-blue-500 text-3xl">📄</span>
            </div>

            <div className="bg-green-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-green-900">
                  Nouvelles Candidatures
                </h2>
                <p className="text-xl font-bold">320</p>
              </div>
              <span className="text-green-500 text-3xl">🆕</span>
            </div>

            <div className="bg-yellow-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-yellow-900">
                  Candidatures Acceptées
                </h2>
                <p className="text-xl font-bold">540</p>
              </div>
              <span className="text-yellow-500 text-3xl">✅</span>
            </div>

            <div className="bg-red-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-red-900">
                  Candidatures Rejetées
                </h2>
                <p className="text-xl font-bold">75</p>
              </div>
              <span className="text-red-500 text-3xl">❌</span>
            </div>
          </div>
        </div>

        {/* Opportunités Recommandées */}
        <div className="bg-white p-4 rounded-lg shadow-md max-sm:hidden">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            Nos Statistiques de l'année precedente
            <div>
              <Chart />
            </div>
          </h3>
        </div>
      </div>

      {/* Notifications Récentes */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">
          Notifications Récentes
        </h3>
        <ul className="space-y-2">
          <li className="text-sm text-gray-700">
            Aucune notification pour le moment.
          </li>
        </ul>
      </div>

      {/* Suggestions de Formations / Offres */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">
          Formations & Développement
        </h3>
        <ul className="space-y-2">
          <li className="text-sm text-blue-600 cursor-pointer hover:underline">
            Formation en gestion de projet - Dakar
          </li>
          <li className="text-sm text-blue-600 cursor-pointer hover:underline">
            Marketing digital : les fondamentaux - Thiès
          </li>
          <li className="text-sm text-blue-600 cursor-pointer hover:underline">
            Atelier : Rédiger un CV professionnel - Rufisque
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardUser;
