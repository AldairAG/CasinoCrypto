import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";

export const ProfileContent: React.FC = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold dark:text-white mb-4">
      Perfil de Usuario
    </h2>
    <div className="grid grid-cols-3 gap-4">
      <Input
        id="username"
        label="Nombre de usuario*"
        value="Juan123"
        readOnly
        className="bg-gray-100 cursor-not-allowed"
      />
      <Input
        id="email"
        label="Email@"
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
    <div className="mt-4">
      <Boton color="bg-blue-800">Guardar</Boton>
    </div>
  </div>
);

export default ProfileContent;