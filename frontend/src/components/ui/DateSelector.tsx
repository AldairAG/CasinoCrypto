// import React from "react";
// import Select from "./Select";



// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

// const DateSelector: React.FC = () => {
//     const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
//     const days = Array.from({ length: 31 }, (_, i) => i + 1);

//     return (
//         <div className="text-start">
//             <label className="text-gray-500">Fecha de nacimiento</label>
//             <div className="flex space-x-2">
//                 <Select id={'dia'} className="border rounded-md p-2">
//                     {days.map((day) => (
//                         <option key={day} value={day}>{day}</option>
//                     ))}
//                 </Select>

//                 <Select id={'mes'} className="border rounded-md p-2">
//                     {meses.map((month) => (
//                         <option key={month} value={month}>{month}</option>
//                     ))}
//                 </Select>

//                 <Select id={'year'} className="border rounded-md p-2">
//                     {years.map((year) => (
//                         <option key={year} value={year}>{year}</option>
//                     ))}
//                 </Select>
//             </div>
//         </div>
//     );
// };

// export default DateSelector;

import React from "react";
import Select from "./Select";

interface DateSelectorProps {
  onChange: (fullDate: string) => void;
  value?: string;
  error?: string;
}

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const DateSelector: React.FC<DateSelectorProps> = ({ onChange, value, error }) => {
    const initialDate = value ? new Date(value) : new Date();
    const [day, setDay] = React.useState<number>(initialDate.getDate());
    const [month, setMonth] = React.useState<number>(initialDate.getMonth());
    const [year, setYear] = React.useState<number>(initialDate.getFullYear());

    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    React.useEffect(() => {
        const selectedDate = new Date(year, month, day);
        onChange(selectedDate.toISOString());
    }, [day, month, year, onChange]);

    return (
        <div className="text-start">
            <label className="text-gray-500">Fecha de nacimiento</label>
            <div className="flex space-x-2">
                <Select 
                    id={'dia'}
                    className="border rounded-md p-2"
                    value={day}
                    onChange={(e) => setDay(Number(e.target.value))}
                >
                    {days.map((day) => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </Select>

                <Select 
                    id={'mes'}
                    className="border rounded-md p-2"
                    value={meses[month]}
                    onChange={(e) => setMonth(meses.indexOf(e.target.value))}
                >
                    {meses.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </Select>

                <Select 
                    id={'year'}
                    className="border rounded-md p-2"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                >
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </Select>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>
    );
};

export default DateSelector;