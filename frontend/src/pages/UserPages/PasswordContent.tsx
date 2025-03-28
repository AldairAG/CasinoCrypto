import Boton from "../../components/ui/Boton";

export const PasswordContent: React.FC = () => (
  <div className="p-4">
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
          Ingrese su correo
        </label>
        <input
          type="email"
          id="email"
          placeholder="Dar clic para escribir"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Dar clic para escribir")}
        />
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Verificar
        </button>
      </div>

      <div>
        <label htmlFor="verificationCode" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
          Ingrese el código de verificación
        </label>
        <input
          type="text"
          id="verificationCode"
          placeholder="Ingrese el código recibido por email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
          Nuevo Email
        </label>
        <input
          type="text"
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-yellow-100 dark:bg-yellow-900 dark:text-white cursor-not-allowed"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
          Contraseña
        </label>
        <input
          type="password"
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-yellow-100 dark:bg-yellow-900 dark:text-white cursor-not-allowed"
        />
      </div>

      <Boton className="px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2">
        Guardar
      </Boton>
    </div>
  </div>
);

export default PasswordContent;