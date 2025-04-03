// components/GananciaContent.tsx
import React, { useState } from 'react';
import GananciaItem from '../../components/ui/GananciaItem';
import FiltersGanancias from '../../components/ui/FiltersGanancias';

const GananciaContent: React.FC = () => {
  const allGanancias = [
    { 
      id: 1, 
      fecha: '2023-11-03', 
      hora: '09:15 AM',
      concepto: 'Ganancia por Quinela', 
      monto: 1200,
      estado: 'acreditado' 
    },
    { 
      id: 2, 
      fecha: '2023-11-08', 
      hora: '02:45 PM',
      concepto: 'Ganancia por Apuestas', 
      monto: 350,
      estado: 'acreditado' 
    },
    { 
      id: 3, 
      fecha: '2023-11-14', 
      hora: '11:30 AM',
      concepto: 'Ganancia por Quinela', 
      monto: 75,
      estado: 'pendiente' 
    },
    { 
      id: 4, 
      fecha: '2023-11-20', 
      hora: '04:10 PM',
      concepto: 'Ganancia por Apuestas', 
      monto: 1800,
      estado: 'acreditado' 
    },
  ];

  const [filteredGanancias, setFilteredGanancias] = useState(allGanancias);

  const handleFilterChange = (filters: { fecha: string; concepto: string }) => {
    const filtered = allGanancias.filter(ganancia => {
      const matchesDate = !filters.fecha || ganancia.fecha === filters.fecha;
      const matchesConcepto = !filters.concepto || 
        ganancia.concepto.toLowerCase().includes(filters.concepto.toLowerCase());
      return matchesDate && matchesConcepto;
    });
    setFilteredGanancias(filtered);
  };

  return (
    <div className="mt-4">
      <FiltersGanancias onFilterChange={handleFilterChange} />
      
      <h4 className="text-lg font-medium dark:text-white mb-4">Registro de Ganancias</h4>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="space-y-3">
          {filteredGanancias.length > 0 ? (
            filteredGanancias.map((ganancia) => (
              <GananciaItem 
                key={ganancia.id}
                fecha={ganancia.fecha}
                hora={ganancia.hora}
                concepto={ganancia.concepto}
                monto={ganancia.monto}
                estado={ganancia.estado}
              />
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 dark:text-gray-300">
              No se encontraron ganancias con los filtros seleccionados
            </p>
          )}
        </div>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-gray-600 rounded-md">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            <span className="font-medium dark:text-white">Total ganancias:</span> ${filteredGanancias
              .filter(g => g.estado === 'acreditado')
              .reduce((sum, ganancia) => sum + ganancia.monto, 0)
              .toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GananciaContent;