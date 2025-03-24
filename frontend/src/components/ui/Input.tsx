import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ id, label, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...props} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
    </div>
  );
};

export default Input;