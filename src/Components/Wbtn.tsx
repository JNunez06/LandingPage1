import React from "react";
import { FiMessageCircle } from "react-icons/fi"; // Asegúrate de instalar react-icons
export {};  // Esto hace que TypeScript lo trate como un módulo

export const Wbtn = () => {
  return (
    <a
      href="https://wa.me/928161600" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
    >
      <FiMessageCircle size={24} />
    </a>
  );
};