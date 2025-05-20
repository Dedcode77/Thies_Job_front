import React, { useState } from "react";
import {
  FaCamera,
  FaEdit,
  FaSave,
  FaTrash,
  FaTimes,
  FaPowerOff,
} from "react-icons/fa";
import imageDefaultUser from "../../../assets/images/ProfileUser.avif";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Nom Prénom");
  const [address, setAddress] = useState("Adresse");
  const [phone, setPhone] = useState("Téléphone");
  const [ville, setVille] = useState("Ville");
  const [pays, setPays] = useState("Pays");
  const [gender, setGender] = useState("Genre");
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(imageDefaultUser);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-6">
        <div className="flex max-sm:flex-col max-sm:text-center items-center space-x-4">
          <div className="relative">
            <img
              src={previewImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="profileImageInput"
              />
              <label htmlFor="profileImageInput" className="cursor-pointer">
                <FaCamera color="white" />
              </label>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">example@example.com</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Informations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Nom", value: name, onChange: setName },
              { label: "Adresse", value: address, onChange: setAddress },
              { label: "Téléphone", value: phone, onChange: setPhone },
              { label: "Ville", value: ville, onChange: setVille },
              { label: "Pays", value: pays, onChange: setPays },
              { label: "Genre", value: gender, onChange: setGender },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700">{field.label}</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-lg text-gray-800 font-bold">
                    {field.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 ms-auto flex justify-end space-x-4">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 text-white bg-gray-600 rounded-md flex items-center space-x-2"
          >
            {isEditing ? <FaTimes /> : <FaEdit />}
            <span>{isEditing ? "Annuler" : "Modifier"}</span>
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-4 max-sm:flex-col max-sm:p-4 max-sm:gap-2">
        <button className="px-4 py-2 text-white bg-red-600 rounded-md flex items-center space-x-2">
          <FaTrash />
          <span>Supprimer mon compte</span>
        </button>

        <button className="px-4 py-2 text-white bg-yellow-600 rounded-md flex items-center space-x-2">
          <FaPowerOff />
          <span>Désactiver mon compte</span>
        </button>
      </div>
    </>
  );
};

export default Profile;
