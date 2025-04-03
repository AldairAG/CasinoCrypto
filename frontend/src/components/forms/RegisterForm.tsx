import { ADMIN_ROUTES } from "../../constants/ROUTERS";
import { useUser } from "../../hooks/useUser";
import Boton from "../ui/Boton";
import DateSelector from "../ui/DateSelector";
import Input from "../ui/Input";
import PhoneInput from "../ui/PhoneInput";
import WaveText from "../ui/WaveText";

//nombre apellidos correo fecha nacimiento ususario contrasel;a 

const formulario = [
    { id: 'username', pl: 'Usuario' },
    { id: 'nombres', pl: 'Ingresa tu nombre(s)' },
    { id: 'Apellidos', pl: 'Ingresa tu apellido(s)' },
    { id: 'pass', pl: 'Contraseña' },
    { id: 'email', pl: 'Correo electrónico' }
];


const RegisterForm = () => {
        const {navigateTo}=useUser()
    
    return (
        <form action="" className="bg-gray-50 p-4 flex flex-col gap-4 w-md text-center rounded-sm">
            <WaveText text={'CasiNova'} classname="text-red-500 text-5xl" />
            <h1 className="font-semibold text-lg">Crear una cuenta</h1>

            {formulario.map((item, index) => (
                <div key={index}>
                    <Input id={item.id}
                        placeholder={item.pl}
                    />
                </div>
            ))}
             <DateSelector />
             <div className="text-start">
                <label className="text-gray-500">Telefono</label>
                <PhoneInput/>
             </div>



            <Boton onClick={()=>navigateTo(ADMIN_ROUTES.ADMIN_LAYOUT)}>Crear cuenta</Boton>

            <h5>¿Aun no tienes una cuenta? <span className="text-blue-400">Registrate aqui</span></h5>
        </form>
    )
}

export default RegisterForm;