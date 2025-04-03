import Boton from "../../components/ui/Boton";
import { USER_ROUTES } from "../../constants/ROUTERS";
import { useUser } from "../../hooks/useUser";

const quineilas = [
    { hora: '1d 1h', titulo: 'Copa del Rey - Semifinales', partidos: 15, premio: 100000, participantes: 18920 },
    { hora: '1d 1h', titulo: 'Liga Española - Jornada 28', partidos: 15, premio: 100000, participantes: 18920 },
    { hora: '1d 1h', titulo: 'Premier League - Jornada 30', partidos: 10, premio: 100000, participantes: 18920 },
    { hora: '1d 1h', titulo: 'Champions League - Octavos', partidos: 2, premio: 100000, participantes: 18920 },
]


const Quinielas = () => {
        const { navigateTo } = useUser()

    return (
        <main className="px-4">
            <h1>Quienielas disponibles</h1>
            <h3>Arma tu quiniela y comeinza a ganar</h3>

            <table className="flex gap-4 flex-wrap">
                {quineilas.map((item, index) => (
                    <tr key={index} className="grow basis-1/4 min-w-[500x]">
                        <div className="flex flex-col border rounded-lg border-gray-300 shadow-lg h-full">
                            <div className=" w-full h-48 relative">
                                <span 
                                className="text-center text-white absolute top-2 right-4 bg-red-600 px-3 rounded-xl">{item.hora} restantes</span>
                                <img src="" alt="img_quiniela" className=" w-full h-full object-cover" />
                            </div>

                            <div className="p-4 flex flex-col">
                                <span className="text-xl font-semibold mb-4">{item.titulo}</span>
                                <div className="flex justify-around">
                                    <div className="text-gray-500 flex flex-col items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                        </svg>
                                        <span className="text-gray-500 font-semibold">{item.partidos} partidos</span>
                                    </div>

                                    <div className=" flex flex-col items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-amber-400 bi bi-trophy text-lg" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
                                        </svg>
                                        <span className="text-gray-500 font-semibold">{item.premio} $</span>
                                    </div>

                                    <div className="text-gray-500 flex flex-col items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                        </svg>
                                        <span className="text-gray-500 font-semibold">{item.participantes}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <Boton onClick={()=>navigateTo(USER_ROUTES.QUINIELA)}>Armar quiniela</Boton>
                            </div>
                        </div>
                    </tr>
                ))}
            </table>
        </main>
    )
}

export default Quinielas;