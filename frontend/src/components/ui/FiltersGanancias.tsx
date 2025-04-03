// components/ui/FiltersGanancias.tsx
import React, { useState } from 'react';

type FiltersGananciasProps = {
  onFilterChange: (filters: { fecha: string; concepto: string }) => void;
};

const FiltersGanancias: React.FC<FiltersGananciasProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    fecha: '',
    concepto: ''
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
        <label htmlFor="concepto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Filtrar por concepto
        </label>
        <input
          type="text"
          id="concepto"
          name="concepto"
          placeholder="Buscar concepto..."
          className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          value={filters.concepto}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default FiltersGanancias;