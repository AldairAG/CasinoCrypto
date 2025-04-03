// components/IngresoContent.tsx
import React, { useState } from 'react';
import IngresoItem from '../../components/ui/IngresoItem';
import FiltersIngresos from '../../components/ui/FiltersIngresos';

const IngresoContent: React.FC = () => {
  const allIngresos = [
    { 
      id: 1, 
      concepto: 'BTC', 
      monto: 2500, 
      fecha: '2023-11-01', 
      hora: '10:30 AM',
      estado: 'completado' 
    },
    { 
      id: 2, 
      concepto: 'ETH', 
      monto: 1800, 
      fecha: '2023-11-05', 
      hora: '02:15 PM',
      estado: 'completado' 
    },
    { 
      id: 3, 
      concepto: 'BTC', 
      monto: 500, 
      fecha: '2023-11-10', 
      hora: '09:45 AM',
      estado: 'pendiente' 
    },
    { 
      id: 4, 
      concepto: 'Solana', 
      monto: 1200, 
      fecha: '2023-11-15', 
      hora: '04:20 PM',
      estado: 'completado' 
    },
  ];

  const [filteredIngresos, setFilteredIngresos] = useState(allIngresos);

  const handleFilterChange = (filters: { fecha: string; concepto: string }) => {
    const filtered = allIngresos.filter(ingreso => {
      const matchesDate = !filters.fecha || ingreso.fecha === filters.fecha;
      const matchesConcepto = !filters.concepto || 
        ingreso.concepto.toLowerCase().includes(filters.concepto.toLowerCase());
      return matchesDate && matchesConcepto;
    });
    setFilteredIngresos(filtered);
  };

  return (
    <div className="mt-4">
      <FiltersIngresos onFilterChange={handleFilterChange} />
      
      <h4 className="text-lg font-medium dark:text-white mb-4">Registro de Ingresos</h4>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="space-y-3">
          {filteredIngresos.length > 0 ? (
            filteredIngresos.map((ingreso) => (
              <IngresoItem 
                key={ingreso.id}
                concepto={ingreso.concepto}
                monto={ingreso.monto}
                fecha={ingreso.fecha}
                hora={ingreso.hora}
                estado={ingreso.estado}
              />
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 dark:text-gray-300">
              No se encontraron ingresos con los filtros seleccionados
            </p>
          )}
        </div>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-gray-600 rounded-md">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            <span className="font-medium dark:text-white">Total ingresos:</span> ${filteredIngresos
              .filter(i => i.estado === 'completado')
              .reduce((sum, ingreso) => sum + ingreso.monto, 0)
              .toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IngresoContent;