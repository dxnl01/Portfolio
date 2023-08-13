import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-xl p-6 bg-white rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">¡Bienvenido a mi Portafolio!</h1>
        <p className="text-gray-700">Soy un desarrollador web con experiencia en tecnologías frontend y backend.</p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Ver Proyectos
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
