import { Badge, Card } from "../../components/cards/Card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "../../components/ui/DropdownMenu"

const Usuarios = () => {
    const users = [
        {
            id: "1",
            name: "Carlos Mendoza",
            email: "carlos@example.com",
            status: "active",
            balance: "$1,250.00",
            lastActive: "Hace 2 horas",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "CM",
        },
        {
            id: "2",
            name: "María García",
            email: "maria@example.com",
            status: "active",
            balance: "$3,420.50",
            lastActive: "Hace 1 día",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "MG",
        },
        {
            id: "3",
            name: "Juan Pérez",
            email: "juan@example.com",
            status: "inactive",
            balance: "$50.00",
            lastActive: "Hace 2 semanas",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "JP",
        },
        {
            id: "4",
            name: "Ana Rodríguez",
            email: "ana@example.com",
            status: "suspended",
            balance: "$0.00",
            lastActive: "Hace 1 mes",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "AR",
        },
        {
            id: "5",
            name: "Roberto Sánchez",
            email: "roberto@example.com",
            status: "active",
            balance: "$780.25",
            lastActive: "Hace 5 horas",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "RS",
        },
    ]


    return (
        <main className="w-full max-w-[1600px] p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="">
                    <h1 className="text-2xl font-bold">Usuarios</h1>
                    <p className="text-muted-foreground">Aquí puedes gestionar los usuarios.</p>
                </div>

            </div>

            <Card className="p-0">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-3 px-4 text-left">Usuario</th>
                            <th className="py-3 px-4 text-left">Estado</th>
                            <th className="py-3 px-4 text-left">Balance</th>
                            <th className="py-3 px-4 text-left">Última Actividad</th>
                            <th className="py-3 px-4 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100 transition duration-200 ease-in-out">
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full border p-1 flex items-center justify-center w-10 h-10 bg-gray-200 border-gray-300"> 
                                            <span>{user.initials}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-500">{user.name}</span>
                                            <span className="text-sm text-muted-foreground">{user.email}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <Badge>
                                        {user.status === "active" ? "Activo" : user.status === "inactive" ? "Inactivo" : "Suspendido"}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3">{user.balance}</td>
                                <td className="px-4 py-3">{user.lastActive}</td>
                                <td className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem variant="titulo">Acciones</DropdownMenuItem>
                                            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                                            <DropdownMenuItem>Ver movimientos</DropdownMenuItem>

                                            <DropdownMenuItem>Editar usuario</DropdownMenuItem>
                                            {user.status === "active" ? (
                                                <DropdownMenuItem className="text-amber-600">Suspender cuenta</DropdownMenuItem>
                                            ) : user.status === "suspended" ? (
                                                <DropdownMenuItem className="text-green-600">Reactivar cuenta</DropdownMenuItem>
                                            ) : null}
                                            <DropdownMenuItem className="text-red-600">Eliminar usuario</DropdownMenuItem>
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

export default Usuarios