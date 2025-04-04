import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  classNameInput?: string;
  classNameDiv?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, classNameDiv, classNameInput, ...props }, ref) => {
    return (
      <div className={twMerge("", classNameDiv)}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          {...props}
          ref={ref}
          className={twMerge(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm " +
              "rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
            classNameInput
          )}
        />
      </div>
    );
  }
);

export default Input;