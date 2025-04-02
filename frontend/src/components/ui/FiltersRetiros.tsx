// components/ui/FiltersRetiros.tsx
import React, { useState } from 'react';

type FiltersRetirosProps = {
  onFilterChange: (filters: { fecha: string; moneda: string }) => void;
};

const FiltersRetiros: React.FC<FiltersRetirosProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    fecha: '',
    moneda: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Filtrar por fecha
        </label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          value={filters.fecha}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="moneda" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Filtrar por criptomoneda
        </label>
        <input
          type="text"
          id="moneda"
          name="moneda"
          placeholder="BTC, ETH, USDT..."
          className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          value={filters.moneda}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default FiltersRetiros;