// components/ui/GananciaItem.tsx
import React from 'react';

type GananciaItemProps = {
  fecha: string;
  hora: string;
  concepto: string;
  monto: number;
  estado: string;
};

const GananciaItem: React.FC<GananciaItemProps> = ({ 
  fecha, 
  hora, 
  concepto, 
  monto,
  estado 
}) => {
  const getEstadoColor = () => {
    switch(estado) {
      case 'acreditado':
        return 'text-green-600 dark:text-green-400';
      case 'pendiente':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'cancelado':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getEstadoText = () => {
    switch(estado) {
      case 'acreditado':
        return 'Acreditado';
      case 'pendiente':
        return 'Pendiente';
      case 'cancelado':
        return 'Cancelado';
      default:
        return estado;
    }
  };

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
          +${monto.toLocaleString()}
        </p>
        <span className={`text-sm font-semibold ${getEstadoColor()}`}>
          {getEstadoText()}
        </span>
      </div>
    </div>
  );
};

export default GananciaItem;