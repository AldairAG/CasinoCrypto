import React from "react";
import Select from "./Select";
import Input from "./Input";

const countryCodes = [
  { code: "+52", name: "México" },
  { code: "+1", name: "EE.UU." },
  { code: "+34", name: "España" },
  { code: "+54", name: "Argentina" },
  { code: "+57", name: "Colombia" },
];

const PhoneInput: React.FC = () => {
  return (
    <div className="flex space-x-2">
      {/* Selección de código de país */}
      <Select id={'lada'} className="border rounded-md p-2">
        {countryCodes.map(({ code, name }) => (
          <option key={code} value={code}>{`${name} (${code})`}</option>
        ))}
      </Select>

      {/* Input para número de teléfono */}
      <Input
        id="tele  fono" 
        type="tel" 
        className="border rounded-md p-2 w-full"
        placeholder="Número de teléfono"
      />
    </div>
  );
};

export default PhoneInput;
