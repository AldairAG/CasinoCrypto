const MovementsContent: React.FC = () => {
    const movements = [
      { id: 1, type: 'Depósito', amount: 1500, date: '2023-11-01', status: 'completed' },
      { id: 2, type: 'Retiro', amount: -500, date: '2023-11-05', status: 'completed' },
      { id: 3, type: 'Transferencia', amount: -200, date: '2023-11-10', status: 'pending' },
    ];
  
    return (
      <div className="mt-4">
        <h4 className="text-lg font-medium dark:text-white mb-4">Movimientos Recientes</h4>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="space-y-3">
            {movements.map((movement) => (
              <div key={movement.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-md shadow-sm">
                <div>
                  <p className="font-medium dark:text-white">{movement.type}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{movement.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    movement.amount > 0 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {movement.amount > 0 ? '+' : ''}{movement.amount.toLocaleString()}
                  </p>
                  <span className={`text-xs ${
                    movement.status === 'completed' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {movement.status === 'completed' ? 'Completado' : 'Pendiente'}
                  </span>
                </div>
              </div>
            ))}
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
  
  export default MovementsContent;