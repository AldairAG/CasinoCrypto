import React from "react"
import { twMerge } from "tailwind-merge";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    id?: string;
    label?: string;
    children?: React.ReactNode;
    className?: string;
    classNameDiv?: string;
}

const Select: React.FC<SelectProps> = ({ id, label, children,className,classNameDiv,...props }) => {
    return (
        <div className={twMerge("flex flex-col",classNameDiv)}>
            <label htmlFor={id}>{label}</label>
            <select id={id} {...props}
                className={twMerge("border rounded-md border-gray-300 text-gray-500 text-sm p-2.5",className)}>
                {children}
            </select>
        </div>

    )
}

export default Select