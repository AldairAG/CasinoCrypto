import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";
import { Card, CardHeader } from "../../components/cards/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/navigation/Tabs";
import { UserIcon,CheckBadgeIcon ,LockClosedIcon,IdentificationIcon} from "@heroicons/react/24/outline";

export const ProfileContent = () => (
  <Card className="p-6 space-y-6 h-full">

    <Tabs defaultValue={'perfilData'}>

      <TabsList className="mb-4">

        <TabsTrigger className="flex gap-2" value="perfilData">
          <UserIcon className="h-5 w-5" />
          Datos de perfil
        </TabsTrigger>

        <TabsTrigger className="flex gap-2" value="verificación">
          <CheckBadgeIcon className="h-6 w-6" />
          Verificacion
        </TabsTrigger>

        <TabsTrigger className="flex gap-2" value="cambioCredenciales">
          <LockClosedIcon className="h-6 w-6" />
          Cambio de credenciales
        </TabsTrigger>

        <TabsTrigger className="flex gap-2" value="Confirmacion">
          <IdentificationIcon className="h-6 w-6" />
          Confirmacion de identidad
        </TabsTrigger>
      </TabsList>

      <TabsContent value="perfilData" className="h-full">
        <PerfilData />
      </TabsContent>

      <TabsContent value="verificación" className="h-full">
        <VerificationContent />
      </TabsContent>

      <TabsContent value="cambioCredenciales" className="h-full">
        <PasswordContent />
      </TabsContent>

      <TabsContent value="Confirmacion" className="h-full">
        <IdentificationContent />
      </TabsContent>

    </Tabs>


  </Card>
);

const VerificationContent: React.FC = () => (
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

const PerfilData = () => {
  return (
    <div className="h-full">
      <CardHeader className="text-2xl font-semibold dark:text-white">
        Perfil de Usuario
      </CardHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Input
          id="username"
          label="Nombre de usuario*"
          value="Juan123"
          readOnly
          className="bg-gray-100 cursor-not-allowed"
        />

        <Input
          id="email"
          label="Email"
          value="juan@example.com"
          readOnly
          className="bg-gray-100 cursor-not-allowed"
        />

        <Input
          id="phone"
          label="Teléfono"
          value="1234567891"
        />

        <Input
          id="firstName"
          label="Nombre*"
          value="Juan"
          readOnly
          className="bg-gray-100 cursor-not-allowed dark:text-white"
        />

        <Input
          id="lastName"
          label="Apellidos"
          value="Pérez"
          readOnly
          className="bg-gray-100 cursor-not-allowed"
        />

        <Input
          id="dob"
          label="Fecha de nacimiento*"
          type="date"
          value="1990-01-01"
          readOnly
          className="bg-gray-100 cursor-not-allowed"
        />

      </div>

      <div className="pt-4">
        <Boton color="bg-blue-800 hover:bg-blue-900 transition-colors">
          Guardar Cambios
        </Boton>
      </div>
    </div>
  )
}

const PasswordContent: React.FC = () => (
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

const IdentificationContent: React.FC = () => (
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

export default ProfileContent;