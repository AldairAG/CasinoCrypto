const OperationsContent: React.FC = () => {
    return (
      <div className="mt-4">
        <h4 className="text-lg font-medium dark:text-white mb-4">Historial de Operaciones</h4>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <p className="text-gray-600 dark:text-gray-300">
            Aquí se mostrará el listado completo de todas las operaciones realizadas.
            {/* Ejemplo de datos */}
          </p>
          <div className="mt-4 space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-3 bg-white dark:bg-gray-600 rounded-md shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium dark:text-white">Operación #{item}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">2023-11-{10 + item}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-200 mt-1">Descripción de la operación...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OperationsContent;