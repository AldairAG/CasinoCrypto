// MovementItem.tsx
import React from 'react';

type MovementItemProps = {
  type: string;
  amount: number;
  date: string;
  status: string;
  quinela: string;
  result: string;
};

const MovementItem: React.FC<MovementItemProps> = ({ type, amount, date, status, quinela, result }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-md shadow-sm">
      <div>
        <p className="font-bold text-lg dark:text-white">{type}</p>
        <p className="text-base text-gray-500 dark:text-gray-300 font-medium">{date}</p>
        <p className="text-base text-gray-500 dark:text-gray-300 font-medium">Quinela: {quinela}</p>
        <p className="text-base text-gray-500 dark:text-gray-300 font-medium">Resultado: {result}</p>
      </div>
      <div className="text-right">
        <p className={`font-bold text-lg ${amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>  
          {amount > 0 ? '+' : ''}{amount.toLocaleString()}
        </p>
        <span className={`text-sm font-semibold ${status === 'completed' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
          {status === 'completed' ? 'Completado' : 'Pendiente'}
        </span>
      </div>
    </div>
  );
};

export default MovementItem;