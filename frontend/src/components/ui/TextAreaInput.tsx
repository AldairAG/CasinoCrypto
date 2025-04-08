import React from "react";
import { twMerge } from "tailwind-merge";

interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  error?: string;
  helpText?: string;
  className?: string;
  containerClassName?: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ 
  id, 
  label, 
  error,
  helpText,
  className = "",
  containerClassName = "",
  ...props 
}) => {
  const baseClasses = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
  const errorClasses = "border-red-500 text-red-900 placeholder-red-700";

  return (
    <div className={twMerge("mb-4", containerClassName)}>
      {label && (
        <label 
          htmlFor={id} 
          className={twMerge(
            "block mb-2 text-sm font-medium",
            error ? "text-red-600" : "text-gray-700"
          )}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={twMerge(
          baseClasses,
          error && errorClasses,
          className
        )}
        {...props}
      />
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default TextAreaInput;