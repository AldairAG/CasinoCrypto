import { USER_ROUTES } from "../../constants/ROUTERS";
import { useUser } from "../../hooks/useUser";
import Boton from "../ui/Boton";
import Input from "../ui/Input";
import WaveText from "../ui/WaveText";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
    const {navigateTo,login}=useUser()

    const handleLogin=async(email:string,password:string)=>{
        await login(email,password)
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
            handleLogin(values.email,values.password);
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email invalido")
                .required("Campo requerido"),
                password: Yup.string()
                .min(6, "La contraseña debe tener al menos 6 caracteres")
                .required("Campo requerido"),
        }),
    })

    return (
        <form onSubmit={formik.handleSubmit} className="bg-gray-50 p-4 flex flex-col gap-4 w-md text-center rounded-sm">
            <WaveText text={'CasiNova'} classname="text-red-500 text-5xl" />
            <h1 className="font-semibold text-lg">Inicia sesion</h1>
            <Input id={"email"}
                placeholder="Ingresa tu correo electronico"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
            <Input 
                id={"password"}
                name="password"
                type="password"
                placeholder="******"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
            />
            <Boton type={'submit'} onClick={()=>navigateTo(USER_ROUTES.USER_LAYOUT)}>Iniciar sesion</Boton>

            <h5>¿Aun no tienes una cuenta? <span className="text-blue-400">Registrate aqui</span></h5>
        </form>
    )
}

export default LoginForm;