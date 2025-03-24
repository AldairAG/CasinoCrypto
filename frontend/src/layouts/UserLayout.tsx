import Header from "../components/navigation/Header"
import { Route, Switch } from "react-router-dom";
import { USER_ROUTES } from "../constants/ROUTERS";
import Quinielas from "../pages/Quinielas";
import QuienielaArmar from "../pages/QuinielaArmar";


const UserLayout = () => {
    return (
        <main>
            <Header />

            <div className="flex justify-center">
                <Switch>
                    <Route path={USER_ROUTES.QUINIELAS_LIST} component={Quinielas} />
                    <Route path={USER_ROUTES.QUINIELA} component={QuienielaArmar} />
                </Switch>
            </div>
        </main>
    )
}
export default UserLayout;