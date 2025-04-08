import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  classNameInput?: string;
  classNameDiv?: string;
}

/**
 * A reusable input component built with React and TypeScript, supporting custom styles and labels.
 *
 * @component
 * @template InputProps - The props type for the input component.
 * @param {string} id - The unique identifier for the input element.
 * @param {string} [label] - The optional label text for the input element.
 * @param {string} [classNameDiv] - Additional CSS classes for the wrapper `<div>` element.
 * @param {string} [classNameInput] - Additional CSS classes for the `<input>` element.
 * @param {React.Ref<HTMLInputElement>} ref - A forwarded ref for the input element.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - Additional props for the input element.
 * @returns {JSX.Element} A styled input component with optional label and customizable styles.
 *
 * @example
 * ```tsx
 * <Input
 *   id="username"
 *   label="Username"
 *   classNameDiv="custom-div-class"
 *   classNameInput="custom-input-class"
 *   placeholder="Enter your username"
 * />
 * ```
 */
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