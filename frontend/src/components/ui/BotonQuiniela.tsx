import React from "react";

type BotonQuinielaProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const BotonQuiniela: React.FC<BotonQuinielaProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className={`rounded-md border border-gray-300 px-2 py-1`}
        >
            {children}
            <span className=""></span>
        </button>
    )
}

export default BotonQuiniela