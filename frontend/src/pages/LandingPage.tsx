import Boton from "../components/ui/Boton"
import WaveText from "../components/ui/WaveText"
import img1 from '../assets/casino_games.png'
import img2 from '../assets/chicas_ganando.png'
import img3 from '../assets/register.png'
import img4 from '../assets/maletin.png'
import img5 from '../assets/manosCartas.png'
import img6 from '../assets/ruleta.png'
import img7 from '../assets/personasGanando.png'
import {Card} from "../components/cards/Card"
import { useState } from "react"
import LoginForm from "../components/forms/LoginForm"
import RegisterForm from "../components/forms/RegisterForm"
import { motion } from "framer-motion";
import { useCallback } from "react";

const LandingPage = () => {

    const [state, setState] = useState({
        login: false, 
        register: false
    })

    const closeModal = useCallback(() => {
        setState((prev) => {
            const modal = prev.register ? "register" : "login";
            return {
                ...prev,
                [modal]: !prev[modal],
            };
        });
    }, []);

    const openModal = useCallback((modal: "login" | "register") => {
        setState((prev) => ({
            ...prev,
            [modal]: !prev[modal], // Invierte el valor de `modal` en el estado
        }));
    }, []);


    return (
        <section className={'relative h-screen ' + (state.login || state.register) && (' overflow-y-hidden')}>

            {(state.login || state.register) && (
                <div className="bg-gray-800/50 absolute w-full h-full z-1 flex justify-center items-center">
                    {state.login && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute bg-white shadow-lg p-4 rounded-md"
                        >
                            <LoginForm />
                        </motion.div>
                    )}
                    {state.register && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute bg-white shadow-lg p-4 rounded-md"
                        >
                            <RegisterForm />
                        </motion.div>
                    )}
                </div>
            )}



            <header className="h-14 w-ful flex items-center justify-between px-4">
                <h1 className="text-4xl">CasiNova</h1>
                <div className="flex gap-4">
                    <Boton onClick={() => openModal('login')}>Iniciar sesion</Boton>
                    <Boton onClick={() => openModal('register')}>Registrarme</Boton>
                </div>
            </header>

            <div className="relative bg-cover bg-center flex flex-col justify-center items-center pt-20"
                style={{ backgroundImage: `url(${img1})` }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative text-center">
                    <h1 className="text-white text-6xl font-bold mb-3">
                        El mejor <WaveText text={'casino online'} classname="text-red-500" />
                    </h1>
                    <h3 className="text-white text-xl mb-4">
                        Disfruta de nuestros facinantes modos de juego y gana a montones.
                    </h3>
                    <Boton>Juega ahora</Boton>
                </div>
                <div className="relative">
                    <img src={img2} alt="img_chicas" />
                </div>

            </div>

            <div className="text-center p-12">
                <h2 className="text-4xl font-semibold text-blue-900 mb-3">Pasos para <span className="text-red-600">jugar</span></h2>
                <p className="text-xl">Empezar a generar nunca habia sido tan facil, solo sigue los siguientes pasos</p>
            </div>

            <div className="flex gap-4 px-4 pb-16">
                <Card className={"flex flex-col flex-1/3 text-center items-center"}>
                    <img src={img3} alt="img_registrate" className="h-35 w-35 " />
                    <h3 className="text-2xl font-semibold text-gray-700">Registrate hoy</h3>
                    <p className="text-lg">Crea un cuenta con tu correo electronico y una contraseña</p>
                </Card>
                <Card className={"flex flex-col flex-1/3 text-center items-center"}>
                    <img src={img4} alt="img_compra" className="h-35 w-35 " />
                    <h3 className="text-2xl font-semibold text-gray-700">Compra nova-coins</h3>
                    <p className="text-lg">Puedes comprar nova coins con cualquiera de nuestras formas de pago la cuales incluyten crypto divisas</p></Card>
                <Card className={"flex flex-col flex-1/3 text-center items-center"}>
                    <img src={img5} alt="img_ganar" className="h-35 w-35 " />
                    <h3 className="text-2xl font-semibold text-gray-700">Empieza a ganar</h3>
                    <p className="text-lg">A partir de este momento solo queda ganar ganar y ganar mas, haz crecer tus ganancia con nova</p>
                </Card>
            </div>

            <div className="bg-white flex">
                <img src={img6} alt="ruleta" className="w-lg" />

                <div className="flex flex-col items-center w-full justify-center text-center">
                    <h2 className="text-4xl font-semibold text-blue-900 mb-3">Promocion de <span className="text-red-600">nuevo </span> usuario</h2>
                    <p className="text-xl text-gray-600">Registrate y recibe un bono de bienvenida de 100 nova coins</p>
                    <p className="text-xl text-gray-600 mb-4">Si recomiendas a un amigo recibe 500 nova coins gratis</p>
                    <Boton>Juega ahora</Boton>
                </div>
            </div>

            <div className="relative w-full "
                style={{ backgroundImage: `url(${img7})` }}>
                <div className="absolute bg-blue-800/70 w-full h-full" />
                <div className="relative flex gap-4 px-4 py-12 ">
                    <Card className="text-center flex-1/4 bg-gray-50">
                        <h3>1,200+</h3>
                        <h2>Miembros totales registrados</h2>
                    </Card>
                    <Card className="text-center flex-1/4 bg-gray-50">
                        <h3>400+</h3>
                        <h2>Ganadores hoy</h2>
                    </Card>
                    <Card className="text-center flex-1/4 bg-gray-50">
                        <h3>1,200+</h3>
                        <h2>Ganadores totales</h2>
                    </Card>
                    <Card className="text-center flex-1/4 bg-gray-50">
                        <h3>1,200+</h3>
                        <h2>Partidos jugados</h2>
                    </Card>
                </div>
            </div>

            <div>
                <img src='' alt="anuncio" />
            </div>

            <footer>

            </footer>

        </section>
    )
}

export default LandingPage