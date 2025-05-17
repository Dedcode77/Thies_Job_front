import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Inscription() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
    genre: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Nom: ${form.nom}\nEmail: ${form.email}\nMot de passe: ${form.password}\nConfirmer le mot de passe: ${form.confirmPassword}\nGenre: ${form.genre}`
    );

    navigate("/dashboard");
  };

  return (
    
   <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
    
      {/* Partie Gauche - Illustration/Branding */}
      <div className="lg:w-1/2 
      bg-[url('/src/assets/images/cyton.jpg')] 
      bg-cover bg-center p-8
       text-white flex flex-col 
       justify-center
       
         md:bg-[url('/src/assets/images/cyton.jpg')] 
        lg:bg-[url('/src/assets/images/cyton.jpg')]
       ">
      
        <div className=" max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4">Rejoignez notre communauté</h1>
          <p className="text-xl mb-8">
            Créez votre compte et accédez à toutes nos fonctionnalités exclusives.
          </p>
          <div className="hidden lg:block">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="italic">"La meilleure plateforme pour vos besoins."</p>
              <p className="font-medium mt-2">- Utilisateur satisfait</p>
            </div>
          </div>
        </div>
      </div>



      {/* Partie Droite - Formulaire d'inscription */}

         <div className="lg:w-1/2 flex items-center justify-center p-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-xl w-full max-w-md text-black"
      >
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">Inscription</h1>
        <div className="mb-2">
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
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
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
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Confirmer le mot de passe</label>
          <input
            type="password"
            name="password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Genre</label>
          <select
            name="genre"
            value={form.genre}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required>
            <option value="">Sélectionner un genre</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
             <option value="femme">Autre</option>
            </select>

        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          S'inscrire
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Déjà un compte ?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
     Se connecter
    </Link>
          </p>
          </div>
      </form>
    </div>
      </div>
  );
}

export default Inscription;
