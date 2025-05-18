import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Connexion() {
  const [form, setForm] = useState({
    nom: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Nom: ${form.nom}\nMot de passe: ${form.password}`);

    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <div className="lg:w-1/2 bg-[url('/src/assets/images/cyton.jpg')] bg-cover bg-center p-8 text-white flex flex-col justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Rejoignez notre communauté
          </h1>
          <p className="text-xl mb-8">
            Connectez-vous pour accéder à toutes nos fonctionnalités exclusives.
          </p>
          <div className="hidden lg:block">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="italic">
                "Une plateforme qui répond à vos besoins."
              </p>
              <p className="font-medium mt-2">- Utilisateur satisfait</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-center justify-center p-2">
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded w-full max-w-md text-black"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
            Connexion
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Nom ou nom structure
            </label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

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
            <a
              href="/mot-de-passe-oublie"
              className="text-blue-600 hover:underline text-sm"
            >
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Se connecter
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Pas encore de compte ?
              <Link
                to="/register"
                className="text-blue-600 hover:underline font-medium"
              >
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
