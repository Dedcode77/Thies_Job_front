import React, { useState } from "react";
import { toast } from "react-toastify";

const CardOffre = ({ offer, deleteOffre }) => {
  const [postuler, setPostuler] = useState(false);
  const handlePostuler = () => {
    setPostuler(!postuler);
    toast.success("Postulation envoyé !");
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
      <h3 className="text-lg font-bold mb-2 text-blue-900">{offer.title}</h3>
      <p className="text-gray-700">{offer.company}</p>
      <p className="text-gray-500 text-sm">{offer.location}</p>
      <p className="text-gray-400 text-xs">{offer.date}</p>
      <div className="flex justify-between">
        <button
          onClick={handlePostuler}
          className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition duration-300"
        >
          {postuler ? "Postulé" : "Postuler"}
        </button>
        <button
          onClick={() => deleteOffre(offer.id)}
          className="mt-4 px-4 py-2 border border-red-500  text-red-500 hover:bg-red-500 hover:text-white rounded-md transition duration-300"
        >
          Pas intéressé
        </button>
      </div>
    </div>
  );
};

export default CardOffre;
