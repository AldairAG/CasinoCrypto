import React from "react";
import Select from "./Select";
import Input from "./Input";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
}

const countryCodes = [
  { code: "+52", name: "México" },
  { code: "+1", name: "EE.UU." },
  { code: "+34", name: "España" },
  { code: "+54", name: "Argentina" },
  { code: "+57", name: "Colombia" },
];

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, onBlur, error }) => {
  const [countryCode, setCountryCode] = React.useState("+52");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    // Actualiza el valor completo cuando cambia el código o número
    onChange(`${countryCode} ${phoneNumber}`);
  }, [countryCode, phoneNumber, onChange]);

  React.useEffect(() => {
    // Inicializa los valores si hay un value inicial
    if (value) {
      const parts = value.split(" ");
      if (parts.length > 1) {
        setCountryCode(parts[0]);
        setPhoneNumber(parts.slice(1).join(" "));
      }
    }
  }, [value]);

  return (
    <div className="flex flex-col">
      <div className="flex space-x-2">
        <Select 
          id="lada" 
          className="border rounded-md p-2"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          {countryCodes.map(({ code, name }) => (
            <option key={code} value={code}>{`${name} (${code})`}</option>
          ))}
        </Select>

        <Input
          id="telefono"
          type="tel"
          className="border rounded-md p-2 w-full"
          placeholder="Número de teléfono"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onBlur={onBlur}
        />
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default PhoneInput;
