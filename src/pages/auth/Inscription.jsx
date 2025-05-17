import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-900 p-8 rounded shadow-md w-96 text-white"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Inscription</h1>
        <div className="mb-4">
          <label className="block mb-1">Nom</label>
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
          <label className="block mb-1">Email</label>
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
          <label className="block mb-1">Mot de passe</label>
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
          <label className="block mb-1">Confirmer le mot de passe</label>
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
          <label className="block mb-1">Genre</label>
          <select
            name="genre"
            value={form.genre}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required>
            <option value="">Sélectionner un genre</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            </select>

        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Inscription;
