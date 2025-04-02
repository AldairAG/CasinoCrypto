// components/ui/IngresoItem.tsx
import React from 'react';

type IngresoItemProps = {
  concepto: string;
  monto: number;
  fecha: string;
  hora: string;
  estado: string;
};

const IngresoItem: React.FC<IngresoItemProps> = ({ 
  concepto, 
  monto, 
  fecha, 
  hora, 
  estado 
}) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-md shadow-sm">
      <div>
        <p className="font-bold text-lg dark:text-white">{concepto}</p>
        <p className="text-base text-gray-500 dark:text-gray-300 font-medium">
          {fecha} - {hora}
        </p>
      </div>
      <div className="text-right">
        <p className="font-bold text-lg text-green-600 dark:text-green-400">
          +{monto.toLocaleString()}
        </p>
        <span className={`text-sm font-semibold ${
          estado === 'completado' 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-yellow-600 dark:text-yellow-400'
        }`}>
          {estado === 'completado' ? 'Completado' : 'Pendiente'}
        </span>
      </div>
    </div>
  );
};

export default IngresoItem;