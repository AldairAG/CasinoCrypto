import Header from "../components/navigation/Header"
import { Route, Switch } from "react-router-dom";
import { USER_ROUTES } from "../constants/ROUTERS";
import Quinielas from "../pages/UserPages/Quinielas";
import QuienielaArmar from "../pages/UserPages/QuinielaArmar";
import CarritoQuiniela from "../pages/UserPages/CarritoQuiniela";
import UserProfile from '../pages/UserPages/UserProfile';


const UserLayout = () => {
    return (
        <main>
            <Header />

            <div className="flex justify-center">
                <Switch>
                    <Route path={USER_ROUTES.USER_PROFILE} component={UserProfile} />
                    <Route path={USER_ROUTES.QUINIELAS_LIST} component={Quinielas} />
                    <Route path={USER_ROUTES.QUINIELA} component={QuienielaArmar} />
                    <Route path={USER_ROUTES.CARRITO} component={CarritoQuiniela} />
                </Switch>
            </div>
        </main>
    )
}
export default UserLayout;