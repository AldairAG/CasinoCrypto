import Boton from "../../components/ui/Boton";

export const IdentificationContent: React.FC = () => (
  <div className="w-full p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
      Seleccione y suba los documentos correspondientes
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-8">
      Se requiere un comprobante de domicilio y un tipo de DNI
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-8">
      {/* Comprobante de domicilio */}
      <div className="w-full">
        <label className="block text-lg  text-white dark:text-gray-300 mb-4 font-bold">
          Comprobante de domicilio
        </label>
        <div className="flex">
          <input
            type="file"
            className="hidden"
            id="domicilio"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <label
            htmlFor="domicilio"
            className="w-full px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition text-center text-lg"
          >
            Seleccionar archivo*
          </label>
        </div>
      </div>

      {/* Identificación oficial */}
      <div className="w-full">
        <label className="block text-lg font- text-white dark:text-gray-300 mb-4 font-bold">
          Identificación oficial
        </label>
        <div className="flex">
          <input
            type="file"
            className="hidden"
            id="identificacion"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <label
            htmlFor="identificacion"
            className="w-full px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition text-center text-lg"
          >
            Seleccionar archivo*
          </label>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-center">
      <Boton
        color="bg-blue-800 hover:bg-blue-900 transition-colors"
        className="w-full lg:w-auto px-8 py-4 text-lg"
      >
        Guardar Documentos
      </Boton>
    </div>
  </div>
);

export default IdentificationContent;