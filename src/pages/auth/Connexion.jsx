import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Connexion() {
  const [form, setForm] = useState({
    nom: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Nom: ${form.nom}\nMot de passe: ${form.password}`
    );

    navigate("/dashboard");
  };
  const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const quoteZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const titleHover = {
  whileHover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

  return (


// ...

<div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
  {/* Partie Gauche - Illustration/Branding */}
  <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="lg:w-1/2 
    bg-[url('/src/assets/images/cyton.jpg')] 
    bg-cover bg-center p-8
    text-white flex flex-col justify-center"
>
  <div className="max-w-md mx-auto">
    {/* Titre avec animation au survol */}
    <motion.h1
      className="text-4xl font-bold mb-4"
      custom={0}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
      whileHover={titleHover.whileHover}
    >
      Rejoignez notre communauté
    </motion.h1>

    {/* Texte d'intro */}
    <motion.p
      className="text-xl mb-8"
      custom={1}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
    >
      Créez votre compte et accédez à toutes nos fonctionnalités exclusives.
    </motion.p>

    {/* Citation stylée */}
    <motion.div
      className="hidden lg:block"
      variants={quoteZoom}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg">
        <motion.p className="italic text-white/90">
          "La meilleure plateforme pour vos besoins."
        </motion.p>
        <motion.p className="font-medium mt-2 text-white">
          - Utilisateur satisfait
        </motion.p>
      </div>
    </motion.div>
  </div>
</motion.div>


      {/* Partie Droite - Formulaire de connexion */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-96 text-black"
        >
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">Connexion</h1>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Nom ou nom structure</label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
 {/* Options supplémentaires */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-gray-700">
                Se souvenir de moi
              </label>
            </div>
            <a href="/mot-de-passe-oublie" className="text-blue-600 hover:underline text-sm">
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Se connecter
          </button>
          
          {/* Lien vers inscription */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Pas encore de compte ?{' '}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">
      S'inscrire
    </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
