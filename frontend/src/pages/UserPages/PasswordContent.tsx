import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";

export const PasswordContent: React.FC = () => (
  <div className="w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
      Siga las siguientes instrucciones para cambiar tu correo electrónico o contraseña
    </h2>

    <div className="space-y-10">
      {/* Paso 1: Ingresar correo para código de verificación */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          1. Ingrese su correo para enviar un código de verificación
        </h3>
        <Input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <div className="pt-2">
          <Boton
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md dark:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
          >
            Enviar código
          </Boton>
        </div>
      </div>

      {/* Paso 2: Ingresar código de verificación */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          2. Ingrese el código de verificación que fue enviado a su correo 
        </h3>
        <Input
          id="code"
          type="text"
          placeholder="code"
          className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <div className="pt-2">
          <Boton
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md dark:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
          >
            Validar código
          </Boton>
        </div>
      </div>

      {/* Paso 3: Ingresar nuevos datos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          3. Ingrese su nuevo correo o contraseña y pulse el botón de guardar
        </h3>
        <Input
          id="newEmail"
          type="email"
          placeholder="newexample@gmail.com"
          className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <Input
          id="newPassword"
          type="password"
          placeholder="password"
          className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <div className="pt-4">
          <Boton
            className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md dark:bg-green-800 dark:hover:bg-green-700 transition-colors"
          >
            Guardar cambios
          </Boton>
        </div>
      </div>
    </div>
  </div>
);

export default PasswordContent;