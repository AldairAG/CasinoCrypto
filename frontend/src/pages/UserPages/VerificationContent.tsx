import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";

export const VerificationContent: React.FC = () => (
  <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
      Verificación de dos factores
    </h2>
    
    <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
      Por seguridad, enviaremos un código de verificación a tu correo electrónico.
      Ingresa tanto tu email como el código recibido para completar el proceso.
    </p>

    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Correo electrónico
        </label>
        <Input
          id="email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Código de verificación
        </label>
        <Input
          id="code"
          type="number"
          placeholder="123456"
          className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
          pattern="[0-9]*"
          inputMode="numeric"
        />
      </div>
    </div>

    <div className="flex justify-center">
      <Boton
        className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md dark:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
      >
        Verificar Identidad
      </Boton>
    </div>
  </div>
);

export default VerificationContent;