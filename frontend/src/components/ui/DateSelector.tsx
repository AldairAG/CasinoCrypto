import React from "react";
import Select from "./Select";

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

const DateSelector: React.FC = () => {
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="text-start">
            <label className="text-gray-500">Fecha de nacimiento</label>
            <div className="flex space-x-2">
                <Select id={'dia'} className="border rounded-md p-2">
                    {days.map((day) => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </Select>

                <Select id={'mes'} className="border rounded-md p-2">
                    {meses.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </Select>

                <Select id={'year'} className="border rounded-md p-2">
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default DateSelector;
