import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";

export const VerificationContent: React.FC = () => (
  <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
      Verificación de dos factores
    </h2>

    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Ingrese su correo electrónico para recibir un código de verificación
        </p>
        <Input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
      </div>

      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Código
        </p>
        <Input
          id="code"
          type="number"
          placeholder="123456"
          className="dark:bg-gray-700 dark:text-white dark:border-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          pattern="[0-9]*"
          inputMode="numeric"
        />
      </div>

      <Boton
        className="w-full bg-blue-10000 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-md dark:bg-blue-900 dark:hover:bg-blue-800 transition-colors"
      >
        Verificar
      </Boton>
    </div>
  </div>
);

export default VerificationContent;