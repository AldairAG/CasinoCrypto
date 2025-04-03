import Boton from "../components/ui/Boton"
import BotonRegreso from "../components/ui/BotonRegreso"
import { USER_ROUTES } from "../constants/ROUTERS"
import { TrashIcon } from "@heroicons/react/24/outline";

const quiniela = {
    id: 1,
    nombre: "Liga Española - Jornada 28",
    partidos: 5,
    predicciones: [
        { partido: "Barcelona - Real Madrid", seleccion: "1" },
        { partido: "Atlético Madrid - Sevilla", seleccion: "X2" },
        { partido: "Valencia - Villarreal", seleccion: "1X2" },
        { partido: "Athletic Bilbao - Real Sociedad", seleccion: "X" },
        { partido: "Betis - Espanyol", seleccion: "2" },
    ],
    dobles: 1,
    triples: 1,
    cuadruples: 0,
    apuestas: 6,
    precioUnitario: 5,
    precioTotal: 30,
    modalidad: "Directo",
}


const Carrito = () => {
    return (
        <main className="w-full p-8">
            <div className="space-y-4">
                <BotonRegreso label="Regresar a las qunielas" to={USER_ROUTES.QUINIELAS_LIST} />
                <h1 className="font-semibold text-gray-500 text-3xl  mb-4">Mi cesta</h1>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 w-full mb-4">

                <h1 className="text-gray-500 text-xl font-semibold" >Quinielas en tu cesta</h1>

                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold">{quiniela.nombre}</h3>
                            <p className="text-gray-500 text-sm text-muted-foreground">{quiniela.partidos} partidos seleccionados</p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                <div className="text-xs border border-gray-300 font-semibold rounded-lg px-2 py-1 ">
                                    {quiniela.dobles} dobles
                                </div>
                                <div className="text-xs border border-gray-300 font-semibold rounded-lg px-2 py-1">
                                    {quiniela.triples} triples
                                </div>
                                <div className="text-xs border border-gray-300 font-semibold rounded-lg px-2 py-1">
                                    {quiniela.apuestas} apuestas
                                </div>
                                <div className="text-xs border border-gray-300 font-semibold rounded-lg px-2 py-1">
                                    Modalidad: {quiniela.modalidad}
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-medium">€{quiniela.precioTotal.toFixed(2)}</span>
                            <button>
                                <TrashIcon className="h-6 w-6 text-red-600" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 bg-gray-50 rounded-md p-3">
                        <h4 className="text-sm font-semibold mb-2">Detalle de pronósticos:</h4>
                        <div className="space-y-2">
                            {quiniela.predicciones.map((pred, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                    <span className="text-muted-foreground text-gray-500">{pred.partido}</span>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 font-semibold">{pred.seleccion}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 w-full space-y-2">
                <div>
                    <h1 className="text-xl font-semibold">Resumen</h1>
                </div>
                <div className="mb-4">
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>€{quiniela.precioTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Impuestos</span>
                            <span>€{(quiniela.precioTotal * 0.1).toFixed(2)}</span>
                        </div>
                        <hr className="text-gray-400" />
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>€{(quiniela.precioTotal * 1.1).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Boton className="w-full">Proceder al pago</Boton>
                </div>
            </div>
        </main>
    )
}

export default Carrito