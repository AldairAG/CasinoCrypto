import { USER_ROUTES } from "../../constants/ROUTERS";
import { useUser } from "../../hooks/useUser";
import Boton from "../ui/Boton";
import Input from "../ui/Input";
import WaveText from "../ui/WaveText";

const LoginForm = () => {
    const {navigateTo}=useUser()

    return (
        <form action="" className="bg-gray-50 p-4 flex flex-col gap-4 w-md text-center rounded-sm">
            <WaveText text={'CasiNova'} classname="text-red-500 text-5xl" />
            <h1 className="font-semibold text-lg">Inicia sesion</h1>
            <Input id={"email"}
                placeholder="Ingresa tu correo electronico"
            />
            <Input id={"pass"}
                placeholder="******"
            />
            <Boton onClick={()=>navigateTo(USER_ROUTES.USER_LAYOUT)}>Iniciar sesion</Boton>

            <h5>¿Aun no tienes una cuenta? <span className="text-blue-400">Registrate aqui</span></h5>
        </form>
    )
}

export default LoginForm;