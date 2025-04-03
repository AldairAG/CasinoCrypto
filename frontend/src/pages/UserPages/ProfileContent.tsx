import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";

export const ProfileContent: React.FC = () => (
  <div className="p-6 space-y-6">
    <h2 className="text-2xl font-semibold dark:text-white">
      Perfil de Usuario
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        <Input
          id="username"
          label="Nombre de usuario*"
          value="Juan123"
          readOnly
          className="bg-gray-100 cursor-not-allowed"
        />
      </div>
      
      <div className="space-y-4">
        <Input
          id="email"
          label="Email"
          value="juan@example.com"
          readOnly
          className="bg-gray-100 cursor-not-allowed"
        />
      </div>
      
      <div className="space-y-4">
        <Input
          id="phone"
          label="Teléfono"
          value="1234567891"
        />
      </div>
      
      <div className="space-y-4">
        <Input
          id="firstName"
          label="Nombre*"
          value="Juan"
          readOnly
          className="bg-gray-100 cursor-not-allowed dark:text-white"
        />
      </div>
      
      <div className="space-y-4">
        <Input
          id="lastName"
          label="Apellidos"
          value="Pérez"
          readOnly
          className="bg-gray-100 cursor-not-allowed"
        />
      </div>
      
      <div className="space-y-4">
        <Input
          id="dob"
          label="Fecha de nacimiento*"
          type="date"
          value="1990-01-01"
          readOnly
          className="bg-gray-100 cursor-not-allowed"
        />
      </div>
    </div>

    <div className="pt-4">
      <Boton color="bg-blue-800 hover:bg-blue-900 transition-colors">
        Guardar Cambios
      </Boton>
    </div>
  </div>
);

export default ProfileContent;