import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";
import { Card, CardHeader, CardDescription, CardHead, CardContent } from "../../components/cards/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/navigation/Tabs";
import { UserIcon, CheckBadgeIcon, LockClosedIcon, IdentificationIcon } from "@heroicons/react/24/outline";



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
  <Card className="p-6 bg-white shadow-md">
    <CardHead className="mb-6">
      <CardHeader className="text-xl font-bold text-gray-900">
        Verificación de dos factores
      </CardHeader>
      <CardDescription className="text-gray-600 mt-2">
        Por seguridad, enviaremos un código de verificación a tu correo electrónico.
        Ingresa tanto tu email como el código recibido para completar el proceso.
      </CardDescription>
    </CardHead>

    <CardContent className="flex flex-col md:flex-row gap-4 mb-6">

      <Input
        classNameDiv="flex-1"
        label="Correo electrónico"
        id="email"
        type="email"
        placeholder="tucorreo@ejemplo.com"
        className="!w-[280px] bg-gray-50 text-gray-900 border-gray-300 focus:ring-blue-500"
      />

      <Input
        classNameDiv="flex-1"
        label="Código de verificación"
        id="code"
        type="number"
        placeholder="123456"
        className="!w-[280px] bg-gray-50 text-gray-900 border-gray-300 focus:ring-blue-500"
      />
    </CardContent>

    <div className="flex justify-center">
      <Boton
        className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors"
      >
        Verificar Identidad
      </Boton>
    </div>
  </Card>
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
  <Card className="p-8 bg-white shadow-lg max-w-2xl mx-auto">
    {/* Título principal + Descripción */}
    <CardHead className="mb-8 text-center">
      <CardHeader className="text-3xl font-bold text-gray-900">
        Cambio de credenciales
      </CardHeader>
      <CardDescription className="text-gray-600 mt-2 text-xl">
        Complete los siguientes pasos para actualizar su correo o contraseña de forma segura.
      </CardDescription>
    </CardHead>

    <div className="space-y-8">
      {/* Paso 1: Email */}
      <div className="space-y-3">
        
        <Input
        label="1. Ingrese su correo para recibir un código"
          id="email"
          type="email"
          placeholder="ejemplo@gmail.com"
          className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Boton className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors">
          Enviar código
        </Boton>
      </div>

      {/* Paso 2: Código */}
      <div className="space-y-3">
       
        <Input
          label=" 2. Ingrese el código de verificación" 
          id="code"
          type="text"
          placeholder="123456"
          className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-medium"
        />
        <Boton className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors">
          Validar código
        </Boton>
      </div>

      {/* Paso 3: Nuevos datos */}
      <div className="space-y-3">
        <label className="block text-lg font-medium text-gray-800">
          3. Actualice sus credenciales
        </label>
        <Input
          id="newEmail"
          type="email"
          placeholder="nuevo@email.com"
          className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
        />
        <Input
          id="newPassword"
          type="password"
          placeholder="Nueva contraseña"
          className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Boton className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors">
          Guardar cambios
        </Boton>
      </div>
    </div>
  </Card>
);

// const IdentificationContent: React.FC = () => (
//   <div className="w-full p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
//     <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
//       Seleccione y suba los documentos correspondientes
//     </h2>
//     <p className="text-gray-600 dark:text-gray-300 mb-8">
//       Se requiere un comprobante de domicilio y un tipo de DNI
//     </p>

//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-8">
//       {/* Comprobante de domicilio */}
//       <div className="w-full">
//         <label className="block text-lg  text-white dark:text-gray-300 mb-4 font-bold">
//           Comprobante de domicilio
//         </label>
//         <div className="flex">
//           <input
//             type="file"
//             className="hidden"
//             id="domicilio"
//             accept=".pdf,.jpg,.jpeg,.png"
//           />
//           <label
//             htmlFor="domicilio"
//             className="w-full px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition text-center text-lg"
//           >
//             Seleccionar archivo*
//           </label>
//         </div>
//       </div>

//       {/* Identificación oficial */}
//       <div className="w-full">
//         <label className="block text-lg font- text-white dark:text-gray-300 mb-4 font-bold">
//           Identificación oficial
//         </label>
//         <div className="flex">
//           <input
//             type="file"
//             className="hidden"
//             id="identificacion"
//             accept=".pdf,.jpg,.jpeg,.png"
//           />
//           <label
//             htmlFor="identificacion"
//             className="w-full px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition text-center text-lg"
//           >
//             Seleccionar archivo*
//           </label>
//         </div>
//       </div>
//     </div>

//     <div className="w-full flex justify-center">
//       <Boton
//         color="bg-blue-800 hover:bg-blue-900 transition-colors"
//         className="w-full lg:w-auto px-8 py-4 text-lg"
//       >
//         Guardar Documentos
//       </Boton>
//     </div>
//   </div>
// );

const IdentificationContent: React.FC = () => (
  <Card className="p-6 bg-white shadow-md">
    <CardHeader className="text-xl font-bold text-gray-900 mb-4">
      Seleccione y suba los documentos correspondientes
    </CardHeader>

    <CardDescription className="text-gray-600 mb-6 text-lg">
      Se requiere un comprobante de domicilio y un tipo de DNI
    </CardDescription>

    <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Comprobante de domicilio */}
      <div className="space-y-3">
        <label className="block text-lg font-bold text-gray-800 mb-2">
          Comprobante de domicilio*
        </label>
        <div className="relative">
          <input
            type="file"
            id="domicilio"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
          />
          <label
            htmlFor="domicilio"
            className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg cursor-pointer transition font-medium"
          >
            Seleccionar archivo
          </label>
        </div>
      </div>

      {/* Identificación oficial */}
      <div className="space-y-3">
        <label className="block text-lg font-bold text-gray-800 mb-2">
          Identificación oficial*
        </label>
        <div className="relative">
          <input
            type="file"
            id="identificacion"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
          />
          <label
            htmlFor="identificacion"
            className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg cursor-pointer transition font-medium"
          >
            Seleccionar archivo
          </label>
        </div>
      </div>
    </CardContent>

    <div className="flex justify-center">
      <Boton
        className="w-full lg:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm"
      >
        Guardar Documentos
      </Boton>
    </div>
  </Card>
);

export default ProfileContent;