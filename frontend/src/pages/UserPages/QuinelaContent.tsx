// QuinelaContent.tsx
import React, { useState } from 'react';
import MovementItem from '../../components/ui/MovementItem';
import FiltersQuinela from '../../components/ui/FiltersQuinela';

const QuinelaContent:React.FC = () => {
  const allMovements = [
    { id: 1, type: 'Ganancia', amount: 1500, date: '2023-11-01', status: 'completed', quinela: 'Quinela 1', result: 'Ganado' },
    { id: 2, type: 'Pago', amount: -500, date: '2023-11-05', status: 'pending', quinela: 'Quinela 2', result: 'Pendiente' },
    { id: 3, type: 'Pago', amount: -200, date: '2023-11-10', status: 'pending', quinela: 'Quinela 3', result: 'Pendiente' },
    { id: 4, type: 'Ganancia', amount: 1000, date: '2023-11-15', status: 'completed', quinela: 'Quinela Especial', result: 'Ganado' },
  ];

  const [filteredMovements, setFilteredMovements] = useState(allMovements);

  const handleFilterChange = (filters: { date: string; name: string }) => {
    const filtered = allMovements.filter(movement => {
      const matchesDate = !filters.date || movement.date === filters.date;
      const matchesName = !filters.name || 
        movement.quinela.toLowerCase().includes(filters.name.toLowerCase());
      return matchesDate && matchesName;
    });
    setFilteredMovements(filtered);
  };

  return (
    <div className="mt-4">
      <FiltersQuinela onFilterChange={handleFilterChange} />
      
      <h4 className="text-lg font-medium dark:text-white mb-4">Movimientos Recientes</h4>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="space-y-3">
          {filteredMovements.length > 0 ? (
            filteredMovements.map((movement) => (
              <MovementItem 
                key={movement.id}
                type={movement.type}
                amount={movement.amount}
                date={movement.date}
                status={movement.status}
                quinela={movement.quinela}
                result={movement.result}
              />
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 dark:text-gray-300">
              No se encontraron movimientos con los filtros seleccionados
            </p>
          )}
        </div>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-gray-600 rounded-md">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            <span className="font-medium dark:text-white">Saldo actual:</span> $800
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuinelaContent;