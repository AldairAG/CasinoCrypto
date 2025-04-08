import Header from "../components/navigation/Header"
import { Route, Switch } from "react-router-dom";
import { USER_ROUTES } from "../constants/ROUTERS";
import Quinielas from "../pages/UserPages/Quinielas";
import QuienielaArmar from "../pages/UserPages/QuinielaArmar";
import Carrito from "../pages/UserPages/Carrito";
import DepositarForm from "../components/forms/DepositarForm";
import CreateWallet from "../components/forms/CreateWallet";
import UserProfile from '../pages/UserPages/UserProfile';

//import para prueba de la seccion de wallets
import WalletManager from "../components/forms/WalletManager";

const UserLayout = () => {
    return (
        <main>
            <Header />

            <div className="flex justify-center">
                <Switch>
                    <Route path={USER_ROUTES.USER_PROFILE} component={UserProfile} />
                    <Route path={USER_ROUTES.QUINIELAS_LIST} component={Quinielas} />
                    <Route path={USER_ROUTES.QUINIELA} component={QuienielaArmar} />
                    <Route path={USER_ROUTES.CARRITO} component={WalletManager} />
                </Switch>
            </div>
        </main>
    )
}
export default UserLayout;