import React from 'react';
// gatsby-browser.js o gatsby-ssr.js
import './styles/global.css'; // corregir este import

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-xl p-6 bg-black text-white rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">¡Bienvenido a mi Portafolio!</h1>
        <p className="text-gray-300">Soy un desarrollador web con experiencia en tecnologías frontend y backend.</p>
        <div className="mt-6">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-300">
            Ver Proyectos
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
