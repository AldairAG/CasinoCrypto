import { useEffect, useState } from "react";
import { CardHeader, CardDescription, Card, CardHead, CardContent } from "../../components/cards/Card";
import Input from "../../components/ui/Input";
import MainDiv from "../../components/ui/MainDiv";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/navigation/Tabs";
import { ArrowUpOnSquareIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Select from "../../components/ui/Select";
import { useDeportes } from "../../hooks/useDeportes";
import Loader from "../../components/ui/Loader";
import EventItem from "../../components/items/EventItem";
import { FormikProps, useFormik } from "formik";


const leagues = [
    { id: 4328, name: 'Premier League' },
    { id: 4335, name: 'LaLiga' },
    { id: 4332, name: 'Serie A' },
    { id: 4331, name: 'Bundesliga' },
    { id: 4334, name: 'Ligue 1' },
    { id: 4480, name: 'Brasileirão' },
    { id: 4346, name: 'MLS' },
    { id: 4351, name: 'Liga MX' },
    { id: 4337, name: 'Eredivisie' },
    { id: 4344, name: 'Primeira Liga' },
];

const quinielaModalidades = [
    {
        id: 1,
        nombre: "Marcador exacto",
        descripcion: "Los participantes predicen el resultado exacto del evento (por ejemplo, 2-1 para un partido de fútbol).",
        ejemplo: "Equipo A 2 - 1 Equipo B",
        evaluacion: "Se asignan puntos si el participante acierta tanto el ganador como los goles exactos."
    },
    {
        id: 2,
        nombre: "Resultado general",
        descripcion: "Los participantes solo predicen el resultado global del evento (ganador, empate, o perdedor).",
        ejemplo: "Equipo A gana.",
        evaluacion: "Se asignan puntos si el participante acierta el resultado general, sin importar el marcador exacto."
    },
    {
        id: 3,
        nombre: "Primero en marcar",
        descripcion: "Los participantes predicen qué equipo o jugador anotará el primer gol/punto.",
        ejemplo: "Equipo B será el primero en anotar.",
        evaluacion: "Se otorgan puntos si el primer anotador coincide con la predicción."
    },
    {
        id: 4,
        nombre: "Diferencia de goles/puntos",
        descripcion: "En lugar del marcador exacto, los participantes predicen la diferencia de goles/puntos entre los equipos.",
        ejemplo: "Diferencia de goles: 1 (Equipo A gana 2-1 o 3-2).",
        evaluacion: "Se asignan puntos si se acierta la diferencia de goles/puntos, sin importar el marcador exacto."
    },
    {
        id: 5,
        nombre: "Número total de goles/puntos",
        descripcion: "Los participantes predicen cuántos goles/puntos se anotarán en total durante el evento.",
        ejemplo: "Total: 4 goles.",
        evaluacion: "Se otorgan puntos si el participante acierta el número total de goles/puntos combinados de ambos equipos."
    },
    {
        id: 6,
        nombre: "Rango de resultados",
        descripcion: "Los participantes predicen rangos de resultados, como '1-3 goles', 'empate por cualquier marcador', o 'victoria amplia'.",
        ejemplo: "Equipo A gana por 2+ goles.",
        evaluacion: "Se otorgan puntos si el marcador real cae dentro del rango predicho."
    },
    {
        id: 7,
        nombre: "Predicciones combinadas (parlays)",
        descripcion: "Los participantes pueden hacer predicciones múltiples para un solo evento (por ejemplo, marcador exacto + primero en marcar).",
        ejemplo: "Equipo A gana 3-1 y anota primero.",
        evaluacion: "Se otorgan puntos si ambas condiciones se cumplen."
    }
];

const formasReparticionPremio = [
    {
        id: 1,
        nombre: "Repartición total al ganador único",
        descripcion: "El participante con el puntaje más alto se lleva el premio completo.",
        ventajas: ["Simple y motivador."],
        formula: "Premio total = Acumulado – Comisiones"
    },
    {
        id: 2,
        nombre: "Distribución proporcional entre los primeros lugares",
        descripcion: "El premio se divide entre los mejores participantes, según una proporción establecida.",
        ejemplo: [
            "Primer lugar: 50% del premio.",
            "Segundo lugar: 30%.",
            "Tercer lugar: 20%."
        ],
        ventajas: ["Premia a más jugadores, incentivando la participación."]
    },
    {
        id: 3,
        nombre: "Bono para predicciones exactas",
        descripcion: "Parte del premio se destina a participantes que acierten ciertos eventos o logren predicciones perfectas.",
        ejemplo: [
            "Cada predicción exacta otorga un bono de $50.",
            "El restante se divide entre los primeros lugares."
        ],
        ventajas: ["Incentiva predicciones arriesgadas."],
        formula: [
            "Bono por acierto = Monto fijo por evento acertado",
            "Resto del premio = Premio total - Suma de bonos"
        ]
    },
    {
        id: 4,
        nombre: "Acumulación para la siguiente quiniela",
        descripcion: "Si nadie cumple ciertos requisitos (ejemplo: puntaje mínimo), el premio se acumula para la próxima quiniela.",
        ventajas: ["Aumenta el interés en futuras quinielas."],
        formula: "Premio acumulado = Premio actual + Premio anterior"
    },
    {
        id: 5,
        nombre: "Repartición igualitaria entre empatados",
        descripcion: "Si varios participantes tienen el puntaje más alto, el premio se divide equitativamente entre ellos.",
        ventajas: ["Justo para empates."],
        formula: "Premio individual = Premio total / Número de ganadores"
    }
];

interface QuinielaFormValues {
    quinielaName: string;
    cost: number;
    startDate: Date;
    endDate: Date;
    description: string;
    banner: null;
    columns: number;
    allowDoubleBets: boolean;
    allowTripleBets: boolean;
}

// Define las propiedades que el componente espera recibir
type GeneralTabProps = {
    formik: FormikProps<QuinielaFormValues>;
};

const CreateQuiniela = () => {

    const formik = useFormik({
        initialValues: {
            quinielaName: "",
            cost: 0,
            startDate: new Date(),
            endDate: new Date(),
            description: "",
            banner: null,
            columns: 0,
            allowDoubleBets: false,
            allowTripleBets: false,
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });


    return (
        <MainDiv>
            <CardHead >
                <CardHeader>Crear Nueva Quiniela</CardHeader>
                <CardDescription>Configura los detalles y partidos para una nueva quiniela.</CardDescription>
            </CardHead>

            <Tabs defaultValue="general" className="w-full mt-4">

                <TabsList className="w-full justify-between border-2 rounded-md border-gray-200 p-1 mb-4 flex">
                    <TabsTrigger
                        className="w-full flex-1/4"
                        activeClassName="bg-gray-300 border-0 rounded-md "
                        value="general">
                        Informacion general
                    </TabsTrigger>
                    <TabsTrigger
                        className="w-full flex-1/4"
                        activeClassName="bg-gray-300 border-0 rounded-md "
                        value="tipos">
                        Tipos de apuesta
                    </TabsTrigger>
                    <TabsTrigger
                        className="w-full flex-1/4"
                        activeClassName="bg-gray-300 border-0 rounded-md "
                        value="premios">
                        Reparticion de premios
                    </TabsTrigger>
                    <TabsTrigger
                        className="w-full flex-1/4"
                        activeClassName="bg-gray-300 border-0 rounded-md "
                        value="partidos">
                        Seleccion de partidos
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                    <GeneralTab formik={formik}/>
                </TabsContent>
                <TabsContent value="partidos">
                    <SeleccionarPartidosTab formik={formik}/>
                </TabsContent>
                <TabsContent value="premios">
                    <ReparticionPremioTab formik={formik}/>
                </TabsContent>
                <TabsContent value="tipos">
                    <QuinielaModalidadTab formik={formik}/>
                </TabsContent>
            </Tabs>


        </MainDiv>
    )
}

const GeneralTab=({ formik }: GeneralTabProps) => {

    return (
        <Card>
            <CardHead>
                <CardHeader>Informacion general</CardHeader>
                <CardDescription>Configura los detalles para una nueva quiniela.</CardDescription>
            </CardHead>

            <CardContent className="grid grid-cols-2 gap-5">
                <Input
                    id="quiniela-name"
                    label="Nombre de la quiniela"
                    placeholder="Nombre de la quiniela"
                    type="text"
                    required
                />

                <Input
                    id="cost"
                    label="Costo de participación"
                    placeholder="Costo de participación"
                    type="number"
                    required
                />

                <Input
                    id="start-date"
                    label="Fecha de inicio"
                    type="date"
                    required
                />

                <Input
                    id="end-date"
                    label="Fecha de fin"
                    type="date"
                    required
                />

                <Input
                    id="description"
                    classNameDiv="col-span-2"
                    label="Descripción"
                    placeholder="Descripción de la quiniela"
                    type="text"
                    required
                />

                <Input
                    classNameDiv="hidden"
                    id="banner"
                    label="Banner"
                    type="file"
                    accept="image/*"
                />

                <button
                    type="button"
                    className="col-span-2 bg-gray-200 hover:bg-gray-300 rounded-md h-32 flex items-center justify-center flex-col gap-2"
                >
                    <ArrowUpOnSquareIcon className="h-6 w-6 text-gray-500" />
                    Haz clic para subir una imagen
                </button>

                <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-sm text-gray-500 font-semibold">Columnas de apuestas</label>

                    <div className="flex">
                        <button className="border-1 border-gray-300 rounded-md p-2 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                            <MinusIcon className="text-gray-500 w-6 h-6" />
                        </button>
                        <input type="text" placeholder="0" className="w-30 text-center" readOnly />
                        <button className="border-1 border-gray-300 rounded-md p-2 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
                            <PlusIcon className="text-gray-500 w-6 h-6" />
                        </button>
                    </div>

                </div>

                <div>
                    <label className="text-sm text-gray-500 font-semibold">Opciones adicionales</label>
                    <div className="flex gap-2 mt-2 items-center">
                        <input type="checkbox" id="enable-pool" className="w-4 h-4" />
                        <label htmlFor="enable-pool" className="text-sm text-gray-500">Permitir apuestas dobles (costo x2)</label>
                    </div>
                    <div className="flex gap-2 mt-2 items-center">
                        <input type="checkbox" id="enable-pool" className="w-4 h-4" />
                        <label htmlFor="enable-pool" className="text-sm text-gray-500">Permitir apuestas triples (costo x3)</label>
                    </div>
                </div>
            </CardContent>

        </Card>
    )
}

const QuinielaModalidadTab = ({ formik }: GeneralTabProps) => {
    return (
        <Card>
            <CardHead>
                <CardHeader>Tipos de apuesta</CardHeader>
                <CardDescription>Configura los tipos de apuesta para la quiniela.</CardDescription>
            </CardHead>

            <CardContent className="grid grid-cols-2 gap-5">
                {quinielaModalidades.map((modalidad) => (
                    <label key={modalidad.id} className="flex flex-col gap-2 py-1 px-2 border rounded-md border-gray-300 pb-4 hover:bg-gray-100 cursor-pointer">
                        <input
                            type="radio"
                            name="quinielaModalidad"
                            value={modalidad.id}
                            className="hidden"
                        />
                        <h1 className="text-lg font-semibold">{modalidad.nombre}</h1>
                        <p className="text-sm text-gray-500">{modalidad.descripcion}</p>
                        <p className="text-sm text-gray-500">Ejemplo: {modalidad.ejemplo}</p>
                        <p className="text-sm text-gray-500">Evaluación: {modalidad.evaluacion}</p>
                    </label>
                ))}
            </CardContent>
        </Card>
    )
}

const ReparticionPremioTab = ({ formik }: GeneralTabProps) => {
    return (
        <Card>
            <CardHead>
                <CardHeader>Repartición de premios</CardHeader>
                <CardDescription>Configura la repartición de premios para la quiniela.</CardDescription>
            </CardHead>

            <CardContent className="flex flex-wrap gap-5">
                {formasReparticionPremio.map((forma) => (
                    <label key={forma.id} className="flex flex-col gap-2 py-1 px-2 border w-full md:flex-1/3
                     border-gray-300 rounded-md pb-4 hover:bg-gray-100 cursor-pointer">
                        <input
                            type="radio"
                            name="quinielaModalidad"
                            value={forma.id}
                            className="hidden"
                        />
                        <h1 className="text-lg font-semibold">{forma.nombre}</h1>
                        <p className="text-sm text-gray-500">{forma.descripcion}</p>
                        {forma.ejemplo && (
                            <div className="flex flex-col gap-2 mt-2">
                                <h1 className="text-sm font-semibold">Ejemplo:</h1>
                                {forma.ejemplo.map((ejemplo, index) => (
                                    <p key={index} className="text-sm text-gray-500">{ejemplo}</p>
                                ))}
                            </div>
                        )}
                        {forma.ventajas && (
                            <div className="flex flex-col gap-2 mt-2">
                                <h1 className="text-sm font-semibold">Ventajas:</h1>
                                {forma.ventajas.map((ventaja, index) => (
                                    <p key={index} className="text-sm text-gray-500">{ventaja}</p>
                                ))}
                            </div>
                        )}
                        {forma.formula && (
                            <div className="flex flex-col gap-2 mt-2">
                                <h1 className="text-sm font-semibold">Fórmula:</h1>
                                {typeof forma.formula === 'string' ? (
                                    <p className="text-sm text-gray-500">{forma.formula}</p>
                                ) : (
                                    forma.formula.map((formula, index) => (
                                        <p key={index} className="text-sm text-gray-500">{formula}</p>
                                    ))
                                )}
                            </div>
                        )}
                    </label>
                ))}
            </CardContent>

        </Card>
    )
}

const SeleccionarPartidosTab = ({ formik }: GeneralTabProps) => {
    const { findEventosLigasFamosas, eventos } = useDeportes();
    const [selectedLeagueId, setSelectedLeagueId] = useState('4328');
    const [Loading, setLoading] = useState(true);
    const [selectedEventIds, setSelectedEventIds] = useState<string[]>([]); // Estado para almacenar los IDs seleccionados

    useEffect(() => {
        fetchLiga(selectedLeagueId);
    }, [selectedLeagueId]);

    const fetchLiga = async (selectedLeagueId: string) => {
        setLoading(true);
        await findEventosLigasFamosas(selectedLeagueId);
        setLoading(false);
    };

    const handleLeagueChange = (value: string) => {
        console.log();

        setSelectedLeagueId(value);
    };


    return (
        <Card>
            <CardHead>
                <CardHeader>Seleccionar partidos</CardHeader>
                <CardDescription>Selecciona los partidos para la quiniela.</CardDescription>
            </CardHead>

            <CardContent className="grid grid-cols-2 gap-5">
                <div className="flex gap-2 col-span-2 items-center border-b border-b-gray-300 justify-between pb-4">
                    <h1>Filtrar partidos por liga</h1>
                    <Select
                        classNameDiv="w-1/2"
                        value={selectedLeagueId}
                        onChange={(e) => handleLeagueChange(e.target.value)}
                    >
                        {leagues.map((league) => (
                            <option key={league.id} value={league.id}>
                                {league.name}
                            </option>
                        ))}
                    </Select>
                </div>

                <div className="w-full flex flex-col gap-2 col-span-2">
                    <label className="text-sm text-gray-500 font-semibold">Partidos seleccionados</label>

                    <div >
                        {Loading ? (
                            <Loader />
                        ) : eventos.length === 0 ? (
                            <p>No hay partidos disponibles</p>
                        ) : (
                            eventos.map((item) => (
                                <EventItem
                                    event={item}
                                    key={item.idEvent}
                                    checked={selectedEventIds.includes(item.idEvent)} // Verifica si está seleccionado
                                    onChange={() => handleCheckboxChange(item.idEvent)} // Maneja el cambio
                                />
                            ))
                        )}
                    </div>
                </div>
            </CardContent>
        </Card >
    );
};

export default CreateQuiniela;