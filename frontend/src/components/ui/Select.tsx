import React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    id: string;
    label?: string;
}

const Select: React.FC<SelectProps> = ({ id, label, children }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id} className="border rounded-md border-gray-300 text-gray-500 text-sm p-2.5">
                {children}
            </select>
        </div>

    )
}

export default Select