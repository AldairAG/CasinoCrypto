import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardDescription } from "../../components/cards/Card";

const recentActivity = [
    {
        id: "1",
        user: {
            name: "Carlos Mendoza",
            email: "carlos@example.com",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "CM",
        },
        action: "Apostó en quiniela",
        amount: "$50.00",
        date: "Hace 2 horas",
    },
    {
        id: "2",
        user: {
            name: "María García",
            email: "maria@example.com",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "MG",
        },
        action: "Ganó en quiniela",
        amount: "$120.00",
        date: "Hace 3 horas",
    },
    {
        id: "3",
        user: {
            name: "Juan Pérez",
            email: "juan@example.com",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "JP",
        },
        action: "Creó cuenta",
        amount: "",
        date: "Hace 5 horas",
    },
    {
        id: "4",
        user: {
            name: "Ana Rodríguez",
            email: "ana@example.com",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "AR",
        },
        action: "Retiró fondos",
        amount: "$200.00",
        date: "Hace 6 horas",
    },
    {
        id: "5",
        user: {
            name: "Roberto Sánchez",
            email: "roberto@example.com",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "RS",
        },
        action: "Depositó fondos",
        amount: "$100.00",
        date: "Hace 8 horas",
    },
]

const Dashboard = () => {
    return (
        <main className="max-w-[1600px] w-full h-full p-6 space-y-5">

            <h1 className="text-2xl flex gap-2">
                <RectangleGroupIcon className="w-7 h-7" />
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardDescription className="mb-3 font-bold">Usuarios totales</CardDescription>
                    <CardHeader className="mb-1">50000</CardHeader>
                    <CardDescription className="text-xs">+19 nuevos hoy</CardDescription>
                </Card>
                <Card>
                    <CardDescription className="mb-3 font-bold">Quinielas activas</CardDescription>
                    <CardHeader className="mb-1">12</CardHeader>
                    <CardDescription className="text-xs">+3 nuevas hoy</CardDescription>
                </Card>
                <Card className="w-full">
                    <CardDescription className="mb-3 font-bold">Ingresos totales</CardDescription>
                    <CardHeader className="mb-1">$45,231.89</CardHeader>
                    <CardDescription className="text-xs">+20.1% respecto al mes anterior</CardDescription>
                </Card>
            </div>

            <Card>
                <CardHeader className="mb-1">Actividad reciente</CardHeader>
                <CardDescription className="text-xs mb-4">Últimas 5 transacciones en la plataforma.</CardDescription>

                <div className="flex gap-5 flex-col">
                    {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition duration-200 ease-in-out">
                            <div className=" space-y-1">
                                <p className="text-sm font-semibold leading-none">{activity.user.name}</p>
                                <p className="text-sm text-gray-500">{activity.action}</p>
                            </div>
                            <div className="ml-auto text-sm font-medium">
                                {activity.amount && (
                                    <span
                                        className={
                                            activity.action.includes("Ganó")
                                                ? "text-green-500"
                                                : activity.action.includes("Retiró")
                                                    ? "text-red-500"
                                                    : ""
                                        }
                                    >
                                        {activity.amount}
                                    </span>
                                )}
                            </div>
                            <div className="ml-2 text-xs text-muted-foreground">{activity.date}</div>
                        </div>
                    ))}
                </div>

            </Card>

        </main>
    )
}

export default Dashboard;