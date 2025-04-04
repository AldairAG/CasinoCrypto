import { PlusIcon } from "@heroicons/react/24/outline";
import { Badge, Card } from "../../components/cards/Card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "../../components/ui/DropdownMenu";
import { Link } from "react-router-dom";
import { ADMIN_ROUTES } from "../../constants/ROUTERS";

const quinielas = [
    {
        id: "1",
        name: "Liga MX - Jornada 15",
        status: "active",
        participants: 124,
        totalPot: "$6,200.00",
        startDate: "12/05/2023",
        endDate: "15/05/2023",
    },
    {
        id: "2",
        name: "Champions League - Semifinales",
        status: "active",
        participants: 256,
        totalPot: "$12,800.00",
        startDate: "18/05/2023",
        endDate: "20/05/2023",
    },
    {
        id: "3",
        name: "Premier League - Jornada 38",
        status: "upcoming",
        participants: 0,
        totalPot: "$0.00",
        startDate: "22/05/2023",
        endDate: "23/05/2023",
    },
    {
        id: "4",
        name: "Copa América - Fase de Grupos",
        status: "completed",
        participants: 189,
        totalPot: "$9,450.00",
        startDate: "01/05/2023",
        endDate: "10/05/2023",
    },
    {
        id: "5",
        name: "La Liga - Jornada 34",
        status: "completed",
        participants: 145,
        totalPot: "$7,250.00",
        startDate: "28/04/2023",
        endDate: "01/05/2023",
    },
]

const Quinielas = () => {
    return (
        <main className="w-full h-full max-w-[1600px] p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="">
                    <h1 className="text-2xl font-bold">Quinielas</h1>
                    <p className="text-muted-foreground">Aquí puedes gestionar las quinielas.</p>
                </div>

                <Link to={ADMIN_ROUTES.ADMIN_CREATE_QUINIELA}
                    className="flex bg-blue-500 text-white rounded-md px-4 py-2 items-center gap-2 hover:bg-blue-500 transition duration-200 ease-in-out">
                    <PlusIcon className="h-6 w-6 text-gray-50" />
                    <span>Nueva Quiniela</span>
                </Link>
            </div>

            <Card className="flex text-center p-1">
                <h2 className="text-base font-bold text-gray-500 rounded-sm w-full py-1 px-2 bg-gray-100">Quinielas Activas</h2>
                <h2 className="text-base font-bold text-gray-500 rounded-sm w-full py-1 px-2">Quinielas Proximas</h2>
                <h2 className="text-base font-bold text-gray-500 rounded-sm w-full py-1 px-2">Quinielas Completadas</h2>
            </Card>

            <Card className="p-0">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-3 px-4 text-left">Nombre</th>
                            <th className="py-3 px-4 text-left">Estado</th>
                            <th className="py-3 px-4 text-left">Participantes</th>
                            <th className="py-3 px-4 text-left">Pozo Total</th>
                            <th className="py-3 px-4 text-left">Fechas</th>
                            <th className="py-3 px-4 text-right">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {quinielas.map((quiniela) => (
                            <tr key={quiniela.id} className="hover:bg-gray-100 transition duration-200 ease-in-out">
                                <td className="px-4 py-3 ">
                                    <span className="font-medium">{quiniela.name}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <Badge>
                                        {quiniela.status === "active"
                                            ? "Activa"
                                            : quiniela.status === "upcoming"
                                                ? "Próxima"
                                                : "Completada"}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3">{quiniela.participants}</td>
                                <td className="px-4 py-3">{quiniela.totalPot}</td>
                                <td className="px-4 py-3">
                                    <span className="text-sm">
                                        {quiniela.startDate} - {quiniela.endDate}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem variant="titulo">Acciones</DropdownMenuItem>
                                            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                                            <DropdownMenuItem>Ver participantes</DropdownMenuItem>
                                        {/*<hr />
                                            {quiniela.status !== "completed" && (
                                                <>
                                                    <div>Editar quiniela</div>
                                                    {quiniela.status === "active" && (
                                                        <div className="text-amber-600">Finalizar quiniela</div>
                                                    )}
                                                </>
                                            )}*/}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>

        </main>
    )
}

export default Quinielas