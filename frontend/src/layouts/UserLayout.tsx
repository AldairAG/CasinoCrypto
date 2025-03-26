import Header from "../components/navigation/Header"
import { Route, Switch } from "react-router-dom";
import { USER_ROUTES } from "../constants/ROUTERS";
import Quinielas from "../pages/Quinielas";
import QuienielaArmar from "../pages/QuinielaArmar";
import Carrito from "../pages/Carrito";
import DepositarForm from "../components/forms/DepositarForm";
import CreateWallet from "../components/forms/CreateWallet";

const UserLayout = () => {
    return (
        <main>
            <Header />

            <div className="flex justify-center">
                <Switch>
                    <Route path={USER_ROUTES.QUINIELAS_LIST} component={Quinielas} />
                    <Route path={USER_ROUTES.QUINIELA} component={QuienielaArmar} />
                    <Route path={USER_ROUTES.CARRITO} component={CreateWallet} />
                </Switch>
            </div>
        </main>
    )
}
export default UserLayout;