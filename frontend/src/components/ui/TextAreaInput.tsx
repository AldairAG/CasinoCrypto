import React from "react";

interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  error?: string;
  helpText?: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ 
  id, 
  label, 
  error,
  helpText,
  className = "", 
  ...props 
}) => {
  const baseClasses = "bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
  const borderColor = error ? "border-red-500" : "border-gray-300 dark:border-gray-600";

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className={`block mb-2 text-sm font-medium ${error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white"}`}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`${baseClasses} ${borderColor}`}
        {...props}
      />
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helpText}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};

export default TextAreaInput;