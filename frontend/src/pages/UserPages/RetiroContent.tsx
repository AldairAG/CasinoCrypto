// components/RetiroContent.tsx
import React, { useState } from 'react';
import RetiroItem from '../../components/ui/RetiroItem';
import FiltersRetiros from '../../components/ui/FiltersRetiros';

const RetiroContent: React.FC = () => {
  const allRetiros = [
    { 
      id: 1, 
      fecha: '2023-11-02', 
      hora: '11:45 AM',
      monto: 0.5, 
      monedaCrypto: 'BTC', 
      equivalenciaUSD: 15000,
      estado: 'completado' 
    },
    { 
      id: 2, 
      fecha: '2023-11-07', 
      hora: '03:20 PM',
      monto: 10, 
      monedaCrypto: 'ETH', 
      equivalenciaUSD: 18000,
      estado: 'pendiente' 
    },
    { 
      id: 3, 
      fecha: '2023-11-12', 
      hora: '09:15 AM',
      monto: 500, 
      monedaCrypto: 'USDT', 
      equivalenciaUSD: 500,
      estado: 'cancelado' 
    },
    { 
      id: 4, 
      fecha: '2023-11-18', 
      hora: '05:30 PM',
      monto: 2.5, 
      monedaCrypto: 'SOL', 
      equivalenciaUSD: 250,
      estado: 'completado' 
    },
  ];

  const [filteredRetiros, setFilteredRetiros] = useState(allRetiros);

  const handleFilterChange = (filters: { fecha: string; moneda: string }) => {
    const filtered = allRetiros.filter(retiro => {
      const matchesDate = !filters.fecha || retiro.fecha === filters.fecha;
      const matchesMoneda = !filters.moneda || 
        retiro.monedaCrypto.toLowerCase().includes(filters.moneda.toLowerCase());
      return matchesDate && matchesMoneda;
    });
    setFilteredRetiros(filtered);
  };

  return (
    <div className="mt-4">
      <FiltersRetiros onFilterChange={handleFilterChange} />
      
      <h4 className="text-lg font-medium dark:text-white mb-4">Registro de Retiros</h4>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="space-y-3">
          {filteredRetiros.length > 0 ? (
            filteredRetiros.map((retiro) => (
              <RetiroItem 
                key={retiro.id}
                fecha={retiro.fecha}
                hora={retiro.hora}
                monto={retiro.monto}
                monedaCrypto={retiro.monedaCrypto}
                equivalenciaUSD={retiro.equivalenciaUSD}
                estado={retiro.estado}
              />
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 dark:text-gray-300">
              No se encontraron retiros con los filtros seleccionados
            </p>
          )}
        </div>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-gray-600 rounded-md">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            <span className="font-medium dark:text-white">Total retirado (USD):</span> ${filteredRetiros
              .filter(r => r.estado === 'completado')
              .reduce((sum, retiro) => sum + retiro.equivalenciaUSD, 0)
              .toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RetiroContent;