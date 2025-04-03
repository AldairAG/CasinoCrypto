import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { ADMIN_ROUTES } from "../constants/ROUTERS";
import { Link, Route, Switch } from "react-router-dom";
import BotonLogout from "../components/ui/BotonLogout";
import Dashboard from "../pages/AdminPages/Dashboard";
import Quinielas from "../pages/AdminPages/Quinielas";
import Usuarios from "../pages/AdminPages/Usuarios";




const routes = [
    {
        href: ADMIN_ROUTES.ADMIN_HOME,
        label: "Home",
        icon: RectangleGroupIcon,
    },
    {
        href: ADMIN_ROUTES.ADMIN_USERS,
        label: "Usuarios",
        icon: UserGroupIcon,
    },
    {
        href: ADMIN_ROUTES.ADMIN_QUINIELAS,
        label: "Quinielas",
        icon: TrophyIcon,
    }
]

const AdminLayout = () => {
    return (
        <main className="">
            <header className="sticky top-0 z-40 bg-background flex items-center justify-between 
                px-4 py-2 shadow-md">
                <h1 className="text-red-500 font-bold text-2xl">Admin panel</h1>

                <ul className="flex gap-2">
                    {routes.map((route) => (
                        <li key={route.href}>
                            <Link
                                to={route.href}
                                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium 
                                    ${window.location.pathname === route.href ? "bg-gray-300 text-primary-foreground" : "hover:bg-muted"
                                    }`}
                            >
                                <route.icon className="h-5 w-5" />
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div>
                    <BotonLogout />
                </div>

            </header>


            <section className="flex justify-center">
                <Switch>
                    <Route path={ADMIN_ROUTES.ADMIN_HOME} component={Dashboard} />
                    <Route path={ADMIN_ROUTES.ADMIN_QUINIELA} component={Dashboard} />
                    <Route path={ADMIN_ROUTES.ADMIN_QUINIELAS} component={Quinielas} />
                    <Route path={ADMIN_ROUTES.ADMIN_USER} component={Dashboard} />
                    <Route path={ADMIN_ROUTES.ADMIN_USERS} component={Usuarios} />
                </Switch>
            </section>

            {/*             <footer className="admin-footer">
                <p>&copy; 2023 Admin Panel</p>
            </footer> */}
        </main>
    )
}

export default AdminLayout;