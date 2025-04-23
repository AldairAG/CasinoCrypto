// import {Card} from "../../components/cards/Card"
// import Boton from "../../components/ui/Boton"
// import BotonQuiniela from "../../components/ui/BotonQuiniela"

// const quinielas = {
//     id: 1,
//     nombre: "Liga Española - Jornada 28",
//     fechaCierre: "2025-03-15T18:00:00",
//     partidos: [
//         { id: 1, local: "Barcelona", visitante: "Real Madrid", fecha: "2025-03-15T20:00:00", estadio: "Camp Nou" },
//         { id: 2, local: "Atlético Madrid", visitante: "Sevilla", fecha: "2025-03-15T18:30:00", estadio: "Metropolitano" },
//         { id: 3, local: "Valencia", visitante: "Villarreal", fecha: "2025-03-16T16:00:00", estadio: "Mestalla" },
//         {
//             id: 4,
//             local: "Athletic Bilbao",
//             visitante: "Real Sociedad",
//             fecha: "2025-03-16T18:30:00",
//             estadio: "San Mamés",
//         },
//         { id: 5, local: "Betis", visitante: "Espanyol", fecha: "2025-03-16T14:00:00", estadio: "Benito Villamarín" },
//     ],
//     premio: "€100,000",
//     participantes: 24563,
//     precioApuesta: 5,
// }


// const QuienielaArmar = () => {
//     return (
//         <main className="px-4 max-w-[1600px] w-full space-y-4">
{/* <header className="space-y-4 pt-6 mb-8">
    <div className="flex justify-between items-center mb-8">
        <button className=" flex items-center gap-5 ms-5">
            <i className="text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </i>
            <label>Regresar a las quinielas</label>
        </button>
        <label className="text-gray-700 hover:text-blue-400 hover:underline">¿Cómo se juega a Quiniela?</label>
    </div>

    <h1 className="text-3xl">Liga Española - Jornada 28</h1>
    <div className="flex justify-start gap-10">
        <div className="text-gray-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <span className="text-gray-500 font-semibold"> Cierra en: <span className="border rounded-md p-1 border-gray-300">5 horas restantes</span></span>
        </div>
        <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-amber-400 bi bi-trophy text-lg" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
            </svg>
            <span className="text-gray-500 font-semibold"> Premio: $100,000</span>
        </div>
        <div className="text-gray-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
            <span className="text-gray-500 font-semibold">Participantes: 24,563</span>
        </div>
        <div className="text-gray-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
            </svg>
            <span className="text-gray-500 font-semibold">Precio por apuesta: $15.00</span>
        </div>
    </div>
</header> */}

//             <div className="rounded-lg bg-gray-100 border border-gray-300 ">
//                 <table className="w-full">
//                     <thead className="bg-gray-200">
//                         <th className="p-2 text-left">Partido</th>
//                         <th className="p-2 text-left">Pronostico</th>
//                         <th className="p-2 text-left">Fecha</th>
//                     </thead>
//                     <tbody>
//                         {quinielas.partidos.map((item, index) => (
//                             <tr key={index}>
//                                 <td>
//                                     <div className="flex flex-col ps-2 py-2">
//                                         <label className="font-semibold text-gray-500"> {item.local} - {item.visitante}</label>
//                                         <span className="text-sm">{item.estadio}</span>
//                                     </div>
//                                 </td>
//                                 <td className="space-x-2">
//                                     <button className="rounded-md border border-gray-300 p-3">1</button>
//                                     <button className="rounded-md border border-gray-300 p-3">X</button>
//                                     <button className="rounded-md border border-gray-300 p-3">2</button>
//                                 </td>
//                                 <td><span className="text-gray-600">{item.fecha}</span></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>


//             <Card className="flex justify-around items-center">
//                 <h3 className="font-extrabold">Pleno al 15</h3>
//                 <div className="space-x-2">
//                     <span className="font-semibold text-blue-700">Mexico</span>
//                     <BotonQuiniela>0</BotonQuiniela>
//                     <BotonQuiniela>1</BotonQuiniela>
//                     <BotonQuiniela>2</BotonQuiniela>
//                     <BotonQuiniela>M</BotonQuiniela>
//                 </div>
//                 <div className="space-x-2">
//                     <span className="font-semibold text-red-700">Paises bajos</span>
//                     <BotonQuiniela>0</BotonQuiniela>
//                     <BotonQuiniela>1</BotonQuiniela>
//                     <BotonQuiniela>2</BotonQuiniela>
//                     <BotonQuiniela>M</BotonQuiniela>
//                 </div>
//             </Card>

//             <div className="space-y-4">
//                 <div className="border rounded-lg border-gray-300 shadow-lg p-4 flex justify-around">
//                     <Card className="">
//                         Num. apuestas: 0
//                     </Card>
//                     <Card className="">
//                         Num. dobles: 0
//                     </Card>
//                     <Card className="">
//                         Modalidad: Directo
//                     </Card>
//                 </div>
//                 <Card className="">
//                     <h2>Precio total: $0.50 USD</h2>
//                 </Card>
//                 <Boton>Agregar a la cesta</Boton>
//             </div>
//         </main>
//     )
// }

// export default QuienielaArmar
//============================================================================================================================================================


//===============================================================================================================================

import { useState } from "react";
import { Card, Badge } from "../../components/cards/Card";
import Boton from "../../components/ui/Boton";
import BotonQuiniela from "../../components/ui/BotonQuiniela";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/CustomTabs";
import Select from "../../components/ui/Select";

const quinielas = {
    id: 1,
    nombre: "Liga Española - Jornada 28",
    fechaCierre: "2025-03-15T18:00:00",
    partidos: [
        { id: 1, local: "Barcelona", visitante: "Real Madrid", fecha: "2025-03-15T20:00:00", estadio: "Camp Nou", liga: "La Liga" },
        { id: 2, local: "Atlético Madrid", visitante: "Sevilla", fecha: "2025-03-15T18:30:00", estadio: "Metropolitano", liga: "La Liga" },
        { id: 3, local: "Valencia", visitante: "Villarreal", fecha: "2025-03-16T16:00:00", estadio: "Mestalla", liga: "La Liga" },
        {
            id: 4,
            local: "Athletic Bilbao",
            visitante: "Real Sociedad",
            fecha: "2025-03-16T18:30:00",
            estadio: "San Mamés",
            liga: "La Liga"
        },
        { id: 5, local: "Betis", visitante: "Espanyol", fecha: "2025-03-16T14:00:00", estadio: "Benito Villamarín", liga: "La Liga" },
    ],
    premio: "€100,000",
    participantes: 24563,
    precioApuesta: 5,
    bolsaTotal: "$245,630",
    distribucion: "70/20/10",
    cierre: "2d 14h"
};

const QuienielaArmar = () => {
    const [modoJuego, setModoJuego] = useState("marcador_exacto");
    const [predicciones, setPredicciones] = useState<Record<string, any>>({});

    const actualizarPrediccion = (partidoId: number, tipo: string, valor: any) => {
        setPredicciones(prev => ({
            ...prev,
            [`${partidoId}-${tipo}`]: valor,
        }));
    };

    const renderControlesPorModo = (partido: any) => {
        switch (modoJuego) {
            case "marcador_exacto":
                return (
                    <div className="flex items-center gap-2 justify-center mt-2">
                        <input
                            type="number"
                            min="0"
                            className="w-14 text-center border rounded p-1"
                            value={predicciones[`${partido.id}-local`] || ""}
                            onChange={(e) => actualizarPrediccion(partido.id, "local", e.target.value)}
                        />
                        <span>-</span>
                        <input
                            type="number"
                            min="0"
                            className="w-14 text-center border rounded p-1"
                            value={predicciones[`${partido.id}-visitante`] || ""}
                            onChange={(e) => actualizarPrediccion(partido.id, "visitante", e.target.value)}
                        />
                    </div>
                );

            case "primero_en_marcar":
                return (
                    <Select
                        value={predicciones[`${partido.id}-primero`] || ""}
                        onChange={(e) => actualizarPrediccion(partido.id, "primero", e.target.value)}
                        className="w-full mt-2"
                    >
                        <option value="">Primero en marcar</option>
                        <option value="local">{partido.local}</option>
                        <option value="visitante">{partido.visitante}</option>
                        <option value="ninguno">Ningún gol</option>
                    </Select>
                );

            case "numero_de_gol":
                return (
                    <Select
                        value={predicciones[`${partido.id}-goles`] || ""}
                        onChange={(e) => actualizarPrediccion(partido.id, "goles", e.target.value)}
                        className="w-full mt-2"
                    >
                        <option value="">Total de goles</option>
                        <option value="0">0 goles</option>
                        <option value="1">1 gol</option>
                        <option value="2">2 goles</option>
                        <option value="3">3 goles</option>
                        <option value="4">4 goles</option>
                        <option value="5+">5 o más</option>
                    </Select>
                );

            case "diferencia_de_gol":
                return (
                    <Select
                        value={predicciones[`${partido.id}-diferencia`] || ""}
                        onChange={(e) => actualizarPrediccion(partido.id, "diferencia", e.target.value)}
                        className="w-full mt-2"
                    >
                        <option value="">Diferencia de goles</option>
                        <option value="local-3+">Local +3</option>
                        <option value="local-2">Local +2</option>
                        <option value="local-1">Local +1</option>
                        <option value="empate">Empate</option>
                        <option value="visitante-1">Visitante +1</option>
                        <option value="visitante-2">Visitante +2</option>
                        <option value="visitante-3+">Visitante +3</option>
                    </Select>
                );

            case "rango_resultado":
                return (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <Select
                            value={predicciones[`${partido.id}-rango-local`] || ""}
                            onChange={(e) => actualizarPrediccion(partido.id, "rango-local", e.target.value)}
                        >
                            <option value="">Local</option>
                            <option value="0">0 goles</option>
                            <option value="1-2">1-2 goles</option>
                            <option value="3+">3+ goles</option>
                        </Select>
                        <Select
                            value={predicciones[`${partido.id}-rango-visitante`] || ""}
                            onChange={(e) => actualizarPrediccion(partido.id, "rango-visitante", e.target.value)}
                        >
                            <option value="">Visitante</option>
                            <option value="0">0 goles</option>
                            <option value="1-2">1-2 goles</option>
                            <option value="3+">3+ goles</option>
                        </Select>
                    </div>
                );

            default:
                return null;
        }
    };

    const renderPartido = (partido: any) => {
        return (
            <tr key={partido.id} className="border-b border-gray-300">
                <td className="p-3">
                    <Card className="!p-3 !mb-0 !shadow-none">
                        <div className="flex flex-col space-y-2">
                            <div className="flex justify-between items-center">
                                <Badge className="!text-xs">{partido.liga}</Badge>
                                <span className="text-sm text-gray-500">
                                    {new Date(partido.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>

                            <div className="grid grid-cols-5 items-center gap-2">
                                <div className="col-span-2 text-right">
                                    <div className="font-medium truncate">{partido.local}</div>
                                    {/* Comentario: Aquí van imágenes */}
                                </div>

                                <div className="flex justify-center">
                                    <span className="font-bold">vs</span>
                                </div>

                                <div className="col-span-2">
                                    <div className="font-medium truncate">{partido.visitante}</div>
                                    {/* Comentario: Aquí van imágenes */}
                                </div>
                            </div>

                            {/* Controles específicos del modo de juego */}
                            {renderControlesPorModo(partido)}

                            <div className="text-xs text-gray-500">{partido.estadio}</div>
                        </div>
                    </Card>
                </td>

                {/* Columna de Pronóstico (siempre muestra 1/X/2) */}
                <td className="p-3">
                    <div className="space-x-2">
                        <button
                            className={`rounded-md border p-3 ${predicciones[`${partido.id}-pronostico`] === "1"
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "border-gray-300"
                                }`}
                            onClick={() => actualizarPrediccion(partido.id, "pronostico", "1")}
                        >
                            1
                        </button>
                        <button
                            className={`rounded-md border p-3 ${predicciones[`${partido.id}-pronostico`] === "X"
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "border-gray-300"
                                }`}
                            onClick={() => actualizarPrediccion(partido.id, "pronostico", "X")}
                        >
                            X
                        </button>
                        <button
                            className={`rounded-md border p-3 ${predicciones[`${partido.id}-pronostico`] === "2"
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "border-gray-300"
                                }`}
                            onClick={() => actualizarPrediccion(partido.id, "pronostico", "2")}
                        >
                            2
                        </button>
                    </div>
                </td>

                <td className="p-3">
                    <div className="text-gray-600 text-sm">
                        {new Date(partido.fecha).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long'
                        })}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <main className="px-4 max-w-[1600px] w-full space-y-4">
            {/* Header se mantiene igual */}
            <header className="space-y-4 pt-6 mb-8">
                <div className="flex justify-between items-center mb-8">
                    <button className=" flex items-center gap-5 ms-5">
                        <i className="text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>
                        </i>
                        <label>Regresar a las quinielas</label>
                    </button>
                    <label className="text-gray-700 hover:text-blue-400 hover:underline">¿Cómo se juega a Quiniela?</label>
                </div>

                <h1 className="text-3xl">Liga Española - Jornada 28</h1>
                <div className="flex justify-start gap-10">
                    <div className="text-gray-500 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>
                        <span className="text-gray-500 font-semibold"> Cierra en: <span className="border rounded-md p-1 border-gray-300">5 horas restantes</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-amber-400 bi bi-trophy text-lg" viewBox="0 0 16 16">
                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
                        </svg>
                        <span className="text-gray-500 font-semibold"> Premio: $100,000</span>
                    </div>
                    <div className="text-gray-500 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                        </svg>
                        <span className="text-gray-500 font-semibold">Participantes: 24,563</span>
                    </div>
                    <div className="text-gray-500 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg>
                        <span className="text-gray-500 font-semibold">Precio por apuesta: $15.00</span>
                    </div>
                </div>
            </header>



            {/* Sección de Modos de Juego con Custom Tabs */}
            <Tabs defaultValue="marcador_exacto" onValueChange={setModoJuego}>
                <TabsList className="mb-6">
                    <TabsTrigger value="marcador_exacto">Marcador Exacto</TabsTrigger>
                    <TabsTrigger value="primero_en_marcar">Primero en Marcar</TabsTrigger>
                    <TabsTrigger value="resultado_general">Resultado General</TabsTrigger>
                    <TabsTrigger value="numero_de_gol">Número de Goles</TabsTrigger>
                    <TabsTrigger value="diferencia_de_gol">Diferencia de Gol</TabsTrigger>
                    <TabsTrigger value="rango_resultado">Rango Resultado</TabsTrigger>
                </TabsList>

                {/* Contenido descriptivo de cada modo */}
                <TabsContent value="marcador_exacto">
                    <div className="bg-blue-50 p-3 rounded-md border border-blue-100 mb-4">
                        <p className="text-sm text-blue-800">
                            Predice el resultado exacto de cada partido. Obtienes puntos solo si aciertas el marcador final.
                        </p>
                    </div>
                </TabsContent>

                {/* Contenido para los otros modos... */}
            </Tabs>

            {/* Tabla de partidos */}
            <div className="rounded-lg bg-gray-100 border border-gray-300">
                <table className="w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2 text-left">Partido</th>
                            <th className="p-2 text-left">Pronóstico (1/X/2)</th>
                            <th className="p-2 text-left">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quinielas.partidos.map(renderPartido)}
                    </tbody>
                </table>
            </div>

            {/* Sección de Tarjetas de Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Tarjetas de Participantes, Bolsa Total, Distribución y Cierre */}
                {/* ... (igual que en el código anterior) ... */}
            </div>

            {/* Resto del código (Pleno al 15, resumen, etc.) */}
            {/* ... (igual que en el código anterior) ... */}

            
        </main>
    );
};

export default QuienielaArmar;