// FiltersQuinela.tsx
import React, { useState } from 'react';

type FiltersQuinelaProps = {
  onFilterChange: (filters: { date: string; name: string }) => void;
};

const FiltersQuinela: React.FC<FiltersQuinelaProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    date: '',
    name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-600 rounded-md shadow-sm">
      <h4 className="text-lg font-medium dark:text-white mb-4">Filtrar Movimientos</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Fecha
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-500 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nombre de Quinela
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleInputChange}
            placeholder="Buscar por nombre..."
            className="w-full p-2 border border-gray-300 dark:border-gray-500 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => {
            const resetFilters = { date: '', name: '' };
            setFilters(resetFilters);
            onFilterChange(resetFilters);
          }}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-500 rounded-md hover:bg-gray-200 dark:hover:bg-gray-400"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
};

export default FiltersQuinela;