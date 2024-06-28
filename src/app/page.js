"use client"
import React, { useState } from 'react';
import Template from './Components/Template';

export default function Home() {
  const [showTemplate, setShowTemplate] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAddOrderClick = () => {
    setSelectedOption('Add Order');
    setShowTemplate(true);
  };

  const handleAddVehicleClick = () => {
    setSelectedOption('Add Vehicle');
    setShowTemplate(true);
  };

  const handleCloseTemplate = () => {
    setShowTemplate(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="mb-8 text-center">
        <button
          onClick={handleAddOrderClick}
          className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-2 sm:mr-4"
        >
          Add Order
        </button>
        <button
          onClick={handleAddVehicleClick}
          className="bg-green-600 text-white py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Add Vehicle
        </button>
      </div>
      {!showTemplate && (
        <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-4xl flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="w-full p-6 border-2 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            <div className="h-48 flex items-center justify-center text-gray-500 border-t border-gray-200 pt-4">
              No results to display
            </div>
          </div>
        </div>
      )}
      {showTemplate && <Template onClose={handleCloseTemplate} option={selectedOption} />}
    </div>
  );
}
