// FiltersQuinela.tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardDescription } from '../cards/Card';
import Input from './Input';
import Boton from './Boton';

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
    <Card className=''>
      <CardHeader className='text-xl mb-4'>Filtrar Movimientos</CardHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label='Fecha'
          type="date"
          id="date"
          name="date"
          value={filters.date}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-500 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
        <Input
          label='Nombre de Quinela'
          type="text"
          id="name"
          name="name"
          value={filters.name}
          onChange={handleInputChange}
          placeholder='Nombre de Quinela...'
        />
      </div>

      <div className="mt-4 flex justify-end">
        <Boton
          onClick={() => {
            const resetFilters = { date: '', name: '' };
            setFilters(resetFilters);
            onFilterChange(resetFilters);
          }}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-500 rounded-md hover:bg-gray-200 dark:hover:bg-gray-400"
        >
          Limpiar filtros
        </Boton>
      </div>
    </Card>
  );
};

export default FiltersQuinela;