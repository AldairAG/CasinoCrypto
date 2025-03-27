import { useState } from "react";
import Input from '../../components/ui/Input';
import Boton from '../../components/ui/Boton';

import { icons, IconName } from "../../components/ui/Icons";

// Definición de tipos para las props
interface SidebarProps {
  setActiveTab: (tab: string) => void;
}

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {




  const menuItems = [
    { id: "profile", label: "Profile", icon: "profile" as IconName },
    { id: "dashboard", label: "Dashboard", icon: "dashboard" as IconName },
    { id: "settings", label: "Settings", icon: "settings" as IconName },
  ];

  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-800 p-4">
      <ul className="space-y-4 text-gray-700 dark:text-gray-300">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className="flex items-center p-3 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="mr-2">{icons[item.icon]}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

};

// Tabs Component

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {

    
 const tabs = [
    { id: "profile", label: "Profile", icon: "profile" as IconName },
    { id: "dashboard", label: "Confirmaccion de identidad", icon: "dashboard" as IconName },
    { id: "settings", label: "Settings", icon: "settings" as IconName },
    { id: "password", label: "Cambiar email y password", icon: "password" as IconName },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex text-gray-500 dark:text-gray-400">
        {tabs.map((tab) => (
          <li key={tab.id} className="mr-2">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 border-b-2 transition flex items-center ${
                activeTab === tab.id
                  ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                  : "border-transparent hover:text-gray-600 dark:hover:text-gray-300"
              }`}
            >
              <span className="mr-2">{icons[tab.icon]}</span>
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );


};

// User Profile Content
const ProfileContent: React.FC = () => (

<div className="p-4">
<h2 className="text-xl font-semibold  dark:text-white mb-4">
  Perfil de Usuario
</h2>
{/* Grid con 3 columnas */}
<div className="grid grid-cols-3 gap-4">
  <Input
    id="username"
    label= "Nombre de usuario*"
    
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
    value= '1234567891'
   
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
    label= "Fecha de nacimiento*"
    type="date"
    value="1990-01-01"
    readOnly
    className="bg-gray-100 cursor-not-allowed"
  />
</div>

{/* Botón de guardar */}
<div className="mt-4">
  <Boton color="bg-blue-800">Guardar</Boton>
</div>
</div>
);

// Dashboard Content
const DashboardContent: React.FC = () => (

    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <p className="text-gray-700 dark:text-gray-300 mb-6">
      <span className=" font-bold ">Seleccione y suba los documentos correspondientes, se requiere un comprobante de domicilio y un tipo de DNI</span>
    </p>

    <div className="space-y-6">
      {/* Comprobante de domicilio 1 */}
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

      {/* Comprobante de domicilio 2 */}
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

      {/* Botón Guardar */}
      <Boton color="bg-blue-800">Guardar</Boton>
    </div>
  </div>

    
  
);


// Password Content
const PasswordContent: React.FC = () => (
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
          onFocus={(e) => e.target.placeholder = ''}
          onBlur={(e) => e.target.placeholder = 'Dar clic para escribir'}
        />
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Verificar
        </button>
      </div>

      {/* Campo para ingresar el código de verificación (no es read-only) */}
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

      {/* Campo que muestra el código generado (read-only) */}
      <div>
        <label className="block text-sm  font-bold text-gray-700 dark:text-gray-300">
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

      <Boton className="px-4 py-2  text-white rounded-md focus:outline-none focus:ring-2 ">
        Guardar
      </Boton>
    </div>
  </div>
  );

// Settings Content
const SettingsContent: React.FC = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Settings</h2>
    <p className="mt-2 text-gray-600 dark:text-gray-300">Configure your preferences here.</p>
  </div>
);

// Main User Profile Page
const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");

  return (
    <div className="flex heigth:0vh bg-gray-100 dark:bg-gray-900">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {activeTab === "profile" && <ProfileContent />}
          {activeTab === "dashboard" && <DashboardContent />}
          {activeTab === "settings" && <SettingsContent />}
          {activeTab === "password" && <PasswordContent/>}


        </div>
      </div>
    </div>
  );
};

export default UserProfile;
