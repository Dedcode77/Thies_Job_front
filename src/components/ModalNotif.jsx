// src/components/ModalNotification.jsx
import React from "react";

function ModalNotif({ notification, onClose }) {
  if (!notification) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-2">{notification.community}</h2>
        <p className="mb-4">{notification.message}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
export default ModalNotif;
