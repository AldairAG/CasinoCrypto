import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";

interface PhoneInputProps {
  value: string; // Valor completo del número de teléfono (incluyendo el código de país)
  onChange: (value: string) => void; // Función para manejar cambios en el valor
  onBlur?: () => void; // Función opcional para manejar el evento blur
  error?: string; // Mensaje de error opcional
  name: string; // Nombre del campo (para propósitos de accesibilidad o pruebas)
  id:string; // ID del campo (para propósitos de accesibilidad o pruebas)
}

const countryCodes = [
  { code: "+52", name: "México" },
  { code: "+1", name: "EE.UU." },
  { code: "+34", name: "España" },
  { code: "+54", name: "Argentina" },
  { code: "+57", name: "Colombia" },
];

const PhoneInput: React.FC<PhoneInputProps> = ({id,name, value, onChange, onBlur, error }) => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code); // Código de país seleccionado
  const [phoneNumber, setPhoneNumber] = useState(""); // Número de teléfono ingresado

  // Manejar cambios en el código de país
  const handleCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = event.target.value;
    setSelectedCode(newCode);
    onChange(`${newCode}${phoneNumber}`); // Actualizar el valor completo
  };

  // Manejar cambios en el número de teléfono
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = event.target.value;
    setPhoneNumber(newPhone);
    onChange(`${selectedCode}${newPhone}`); // Actualizar el valor completo
  };

  return (
    <div className="flex flex-col">
      <div className="flex space-x-2">
        {/* Dropdown para seleccionar el código de país */}
        <Select
          id="lada"
          className="border rounded-md p-2"
          value={selectedCode}
          onChange={handleCodeChange}
        >
          {countryCodes.map(({ code, name }) => (
            <option key={code} value={code}>{`${name} (${code})`}</option>
          ))}
        </Select>

        {/* Input para ingresar el número de teléfono */}
        <Input
          name={name}
          id={id}
          type="tel"
          className="border rounded-md p-2 w-full"
          placeholder="Número de teléfono"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onBlur={onBlur}
        />
      </div>

      {/* Mostrar mensaje de error si existe */}
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default PhoneInput;
