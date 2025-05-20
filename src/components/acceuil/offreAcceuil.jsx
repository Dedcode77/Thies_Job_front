import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const offres = [
  {
    id: 1,
    titre: "Développeur Frontend React",
    entreprise: "Tech Corp",
    lieu: "Dakar",
    salaire: "100 000 CFA - 230 000 CFA",
    description:
      "Rejoignez notre équipe pour développer des interfaces utilisateurs modernes et interactives. Expérience en React requise.",
  },
  {
    id: 2,
    titre: "Assistant Administratif",
    entreprise: "Global Solutions",
    lieu: "Thiès",
    salaire: "140 000 CFA - 300 000 CFA",
    description:
      "Assistez notre département administratif dans la gestion des tâches quotidiennes. Bonne organisation requise.",
  },
  {
    id: 3,
    titre: "Community Manager",
    entreprise: "Social Buzz",
    lieu: "Saint-Louis",
    salaire: "70 000 CFA - 140 000 CFA",
    description:
      "Gérez les réseaux sociaux de nos clients et élaborez des stratégies de contenu engageantes.",
  },
  {
    id: 4,
    titre: "Développeur Backend Node.js",
    entreprise: "Dev Solutions",
    lieu: "Dakar",
    salaire: "150 000 CFA - 300 000 CFA",
    description:
      "Rejoignez notre équipe pour développer des applications backend performantes. Expérience en Node.js requise.",
  },
  {
    id: 5,
    titre: "Designer Graphique",
    entreprise: "Creative Studio",
    lieu: "Dakar",
    salaire: "80 000 CFA - 200 000 CFA",
    description:
      "Créez des visuels attrayants pour nos clients. Maîtrise de la suite Adobe requise.",
  },
  {
    id: 6,
    titre: "Chargé de Marketing Digital",
    entreprise: "Marketing Pro",
    lieu: "Dakar",
    salaire: "120 000 CFA - 250 000 CFA",
    description:
      "Développez et mettez en œuvre des stratégies de marketing digital pour nos clients.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function OffreAccueil() {
  const handleApply = () => {
    toast.info("Vous devez vous connecter pour postuler.");
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {offres.map((offre, index) => (
        <motion.div
          key={offre.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="bg-white shadow-lg rounded-2xl p-4 transition duration-300 h-80 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="text-extrabold p-2 rounded-t-2xl font-bold text-xl text-center shadow-md">
                {offre.titre}
              </div>
              <p className="text-gray-600 mb-1 mt-5">
                <span className="font-bold text-2xl">
                  Entreprise : {offre.entreprise}
                </span>
              </p>
              <p className="text-gray-600 mb-1">Lieu : {offre.lieu}</p>
              <p className="text-gray-600 mb-1">
                Description : {offre.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-sm transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 group-hover:bg-black/90">
                <p className="mb-1">Entreprise : {offre.entreprise}</p>
                <p className="mb-1">Lieu : {offre.lieu}</p>
                <p>Salaire : {offre.salaire}</p>
                <button
                  onClick={handleApply}
                  className="mt-3 bg-white text-black p-2 rounded-md"
                >
                  Postuler
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default OffreAccueil;
