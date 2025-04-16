import { ADMIN_ROUTES } from "../../constants/ROUTERS";
import { useUser } from "../../hooks/useUser";
import Boton from "../ui/Boton";
import DateSelector from "../ui/DateSelector";
import Input from "../ui/Input";
import PhoneInput from "../ui/PhoneInput";
import WaveText from "../ui/WaveText";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
    username: string;
    password: string;
    email: string;
    telefono: string;
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
}

interface FormField {
    id: keyof FormValues;
    pl: string;
    type?: string;
}

const formulario: FormField[] = [
    { id: 'username', pl: 'Usuario' },
    { id: 'nombres', pl: 'Ingresa tu nombre(s)' },
    { id: 'apellidos', pl: 'Ingresa tu apellido(s)' },
    { id: 'password', pl: 'Contraseña', type: 'password' },
    { id: 'email', pl: 'Correo electrónico', type: 'email' }
];

const RegisterForm = () => {
    const { navigateTo } = useUser();

    const formik = useFormik<FormValues>({
        initialValues: {
            username: "",
            password: "",
            email: "",
            telefono: "",
            nombres: "",
            apellidos: "",
            fechaNacimiento: "",
        },
        onSubmit: (values) => {
            console.log("Datos del formulario:", values);
            // Aquí iría tu lógica de registro
            // await registerUser(values); 
            
            // Navegar después de enviar el formulario
            navigateTo(ADMIN_ROUTES.ADMIN_LAYOUT);
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Campo requerido")
                .min(3, "El usuario debe tener al menos 3 caracteres"),
            nombres: Yup.string()
                .required("Campo requerido")
                .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras"),
            apellidos: Yup.string()
                .required("Campo requerido")
                .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras"),
            password: Yup.string()
                .min(8, "La contraseña debe tener al menos 8 caracteres")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, // Corregido los puntos en la regex
                    "Debe contener al menos una mayúscula, una minúscula y un número"
                )
                .required("Campo requerido"),
            email: Yup.string()
                .email("Email inválido")
                .required("Campo requerido"),
            telefono: Yup.string()
                .matches(/^[0-9]+$/, "Solo se permiten números")
                .min(10, "El teléfono debe tener al menos 10 dígitos"),
            fechaNacimiento: Yup.date()
                .max(new Date(), "La fecha no puede ser futura")
                .required("Campo requerido")
        }),
    });

    return (
        <form onSubmit={formik.handleSubmit} className="bg-gray-50 p-4 flex flex-col gap-4 w-md text-center rounded-sm">
            <WaveText text={'CasiNova'} classname="text-red-500 text-5xl" />
            <h1 className="font-semibold text-lg">Crear una cuenta</h1>

            {formulario.map((item, index) => (
                <div key={index}>
                    <Input
                        id={item.id}
                        name={item.id}
                        type={item.type || 'text'}
                        placeholder={item.pl}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[item.id as keyof FormValues]}

                    />
                    {formik.touched[item.id] && formik.errors[item.id] && (
                        <div className="text-red-500 text-sm text-left">{formik.errors[item.id]}</div>
                    )}
                </div>
            ))}

            <DateSelector
                onChange={(date) => formik.setFieldValue('fechaNacimiento', date)}
                value={formik.values.fechaNacimiento}
            />
            {formik.touched[item.id as keyof FormValues] && formik.errors[item.id as keyof FormValues] && (
                <div className="text-red-500 text-sm text-left">{formik.errors.fechaNacimiento}</div>
            )}

            <div className="text-start">
                <label className="text-gray-500">Telefono</label>
                <PhoneInput
                    value={formik.values.telefono}
                    onChange={(value) => formik.setFieldValue('telefono', value)}
                    onBlur={() => formik.setFieldTouched('telefono', true)}
                />
                {formik.touched.telefono && formik.errors.telefono && (
                    <div className="text-red-500 text-sm text-left">{formik.errors.telefono}</div>
                )}
            </div>

            {/* Botón corregido - solo type="submit" */}
            <Boton type="submit">Crear cuenta</Boton>

            <h5>¿Aun no tienes una cuenta? <span className="text-blue-400">Registrate aqui</span></h5>
        </form>
    )
}

export default RegisterForm;