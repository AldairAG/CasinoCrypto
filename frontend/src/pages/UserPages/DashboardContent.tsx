import Boton from "../../components/ui/Boton";

export const DashboardContent: React.FC = () => (
  <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <p className="text-gray-700 dark:text-gray-300 mb-6">
      <span className="font-bold">
        Seleccione y suba los documentos correspondientes, se requiere un comprobante de domicilio y un tipo de DNI
      </span>
    </p>

    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Comprobante de domicilio
        </label>
        <div className="flex items-center">
          <input
            type="file"
            className="hidden"
            id="domicilio1"
          />
          <label
            htmlFor="domicilio1"
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition"
          >
            Seleccionar archivo*
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Comprobante de domicilio
        </label>
        <div className="flex items-center">
          <input
            type="file"
            className="hidden"
            id="domicilio2"
          />
          <label
            htmlFor="domicilio2"
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition"
          >
            Seleccionar archivo*
          </label>
        </div>
      </div>

      <Boton color="bg-blue-800">Guardar</Boton>
    </div>
  </div>
);

export default DashboardContent;