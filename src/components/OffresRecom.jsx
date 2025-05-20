import React, { useState } from "react";
import CardOffre from "./CardOffre";

const OffresRecom = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Développeur Web Full Stack",
      company: "Tech Solutions",
      location: "Dakar, Sénégal",
      date: "Il y a 2 jours",
    },
    {
      id: 2,
      title: "Designer UX/UI",
      company: "DesignPro",
      location: "Thiès, Sénégal",
      date: "Il y a 3 jours",
    },
    {
      id: 3,
      title: "Community Manager",
      company: "Société Média",
      location: "Saint-Louis, Sénégal",
      date: "Il y a 5 jours",
    },
    {
      id: 4,
      title: "Marketing Digital",
      company: "Bakeli School of technology",
      location: "Dakar, Sénégal",
      date: "Il y a 1 jours",
    },
  ]);

  const deleteOffre = (id) => {
    const updatedOffers = offers.filter((offer) => offer.id !== id);
    setOffers(updatedOffers);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredOffers = offers.filter((offer) =>
    offer.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Offres Recommandées
        </h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher une offre"
          className="py-2 px-4 rounded-md outline-none border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOffers.map((offer) => (
          <CardOffre key={offer.id} offer={offer} deleteOffre={deleteOffre} />
        ))}
        {filteredOffers.length === 0 && (
          <div className="col-span-3 text-center text-gray-500">
            Aucune offre recommandée pour le moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default OffresRecom;
