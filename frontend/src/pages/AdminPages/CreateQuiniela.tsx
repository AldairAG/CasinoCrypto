import { useEffect, useRef, useState } from "react";
import { CardHeader, CardDescription, Card, CardHead, CardContent } from "../../components/cards/Card";
import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";
import MainDiv from "../../components/ui/MainDiv";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/navigation/Tabs";
import { ArrowUpOnSquareIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Select from "../../components/ui/Select";
import { useDeportes } from "../../hooks/useDeportes";
import Loader from "../../components/ui/Loader";
import EventItem from "../../components/items/EventItem";
import { FormikProps, useFormik } from "formik";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { APUESTAS_TIPO_QUINIELA, REPARTICION_PREMIOS } from "../../constants/apuestasTipos";
import { twMerge } from "tailwind-merge";
import VentanaModal from "../../components/ui/VentanaModal";


const leagues = [
    { id: 4328, name: 'Premier League' },
    { id: 4335, name: 'LaLiga' },
    { id: 4332, name: 'Serie A' },
    { id: 4331, name: 'Bundesliga' },
    { id: 4334, name: 'Ligue 1' },
    { id: 4480, name: 'Brasileirão' },
    { id: 4346, name: 'MLS' },
    { id: 4350, name: 'Liga MX' },
    { id: 4337, name: 'Eredivisie' },
    { id: 4344, name: 'Primeira Liga' },
];

const quinielaModalidades = [
    {
        id: 1,
        nombre: "Marcador exacto",
        descripcion: "Los participantes predicen el resultado exacto del evento (por ejemplo, 2-1 para un partido de fútbol).",
        ejemplo: "Equipo A 2 - 1 Equipo B",
        value: APUESTAS_TIPO_QUINIELA.MARCADOR_EXACTO,
        evaluacion: "Se asignan puntos si el participante acierta tanto el ganador como los goles exactos."
    },
    {
        id: 2,
        nombre: "Resultado general",
        descripcion: "Los participantes solo predicen el resultado global del evento (ganador, empate, o perdedor).",
        ejemplo: "Equipo A gana.",
        value: APUESTAS_TIPO_QUINIELA.RESULTADO_GENERAL,
        evaluacion: "Se asignan puntos si el participante acierta el resultado general, sin importar el marcador exacto."
    },
    {
        id: 3,
        nombre: "Primero en marcar",
        descripcion: "Los participantes predicen qué equipo o jugador anotará el primer gol/punto.",
        ejemplo: "Equipo B será el primero en anotar.",
        value: APUESTAS_TIPO_QUINIELA.PRIMERO_EN_MARCAR,
        evaluacion: "Se otorgan puntos si el primer anotador coincide con la predicción."
    },
    {
        id: 4,
        nombre: "Diferencia de goles/puntos",
        descripcion: "En lugar del marcador exacto, los participantes predicen la diferencia de goles/puntos entre los equipos.",
        ejemplo: "Diferencia de goles: 1 (Equipo A gana 2-1 o 3-2).",
        value: APUESTAS_TIPO_QUINIELA.DIFERENCIA_DE_GOL,
        evaluacion: "Se asignan puntos si se acierta la diferencia de goles/puntos, sin importar el marcador exacto."
    },
    {
        id: 5,
        nombre: "Número total de goles/puntos",
        descripcion: "Los participantes predicen cuántos goles/puntos se anotarán en total durante el evento.",
        ejemplo: "Total: 4 goles.",
        value: APUESTAS_TIPO_QUINIELA.MUMERO_DE_GOL,
        evaluacion: "Se otorgan puntos si el participante acierta el número total de goles/puntos combinados de ambos equipos."
    },
    {
        id: 6,
        nombre: "Rango de resultados",
        descripcion: "Los participantes predicen rangos de resultados, como '1-3 goles', 'empate por cualquier marcador', o 'victoria amplia'.",
        ejemplo: "Equipo A gana por 2+ goles.",
        value: APUESTAS_TIPO_QUINIELA.RANGO_RESULTADO,
        evaluacion: "Se otorgan puntos si el marcador real cae dentro del rango predicho."
    },
    /*     {
            id: 7,
            nombre: "Predicciones combinadas (parlays)",
            descripcion: "Los participantes pueden hacer predicciones múltiples para un solo evento (por ejemplo, marcador exacto + primero en marcar).",
            ejemplo: "Equipo A gana 3-1 y anota primero.",
            value: APUESTAS_TIPO_QUINIELA.,
            evaluacion: "Se otorgan puntos si ambas condiciones se cumplen."
        } */
];

const formasReparticionPremio = [
    {
        id: 1,
        nombre: "Repartición total al ganador único",
        descripcion: "El participante con el puntaje más alto se lleva el premio completo.",
        value: REPARTICION_PREMIOS.GANADOR_UNICO,
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
        value: REPARTICION_PREMIOS.DISTRIBUCION_PROPORCIONAL,
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
        value: REPARTICION_PREMIOS.PREDICCION_EXACTA,
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
        value: REPARTICION_PREMIOS.ACUMULACION,
        ventajas: ["Aumenta el interés en futuras quinielas."],
        formula: "Premio acumulado = Premio actual + Premio anterior"
    },
    {
        id: 5,
        nombre: "Repartición igualitaria entre empatados",
        descripcion: "Si varios participantes tienen el puntaje más alto, el premio se divide equitativamente entre ellos.",
        value: REPARTICION_PREMIOS.REPARTICION_IGUALITARIA,
        ventajas: ["Justo para empates."],
        formula: "Premio individual = Premio total / Número de ganadores"
    }
];

interface QuinielaFormValues {
    quinielaName: string,
    costo: number,
    startDate: string,
    endDate: string,
    description: string,
    banner: null,
    urlBanner: string,
    columns: number,
    allowDoubleBets: boolean,
    allowTripleBets: boolean,
    tiposApuesta: string[],
    reparticionPremio: string,
    partidosSeleccionados: string[],
};

type GeneralTabProps = {
    formik: FormikProps<QuinielaFormValues>;
};

const CreateQuiniela = () => {
    const { eventos } = useDeportes();

    const [visible, setVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            quinielaName: "",
            costo: 0,
            startDate: new Date().toISOString().split("T")[0], // Formato YYYY-MM-DD
            endDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0], // Formato YYYY-MM-DD
            description: "",
            banner: null,
            urlBanner: "",
            columns: 1,
            allowDoubleBets: false,
            allowTripleBets: false,
            tiposApuesta: [APUESTAS_TIPO_QUINIELA.RESULTADO_GENERAL],
            reparticionPremio: REPARTICION_PREMIOS.DISTRIBUCION_PROPORCIONAL,
            partidosSeleccionados: [] as string[],
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <MainDiv>
            <form onSubmit={formik.handleSubmit}>

                <VentanaModal isOpen={visible} setOpen={() => setVisible(!visible)}>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-semibold">¿Estás seguro de crear la quiniela?</h1>
                        <p className="text-sm text-gray-500">Una vez creada, no podrás editarla.</p>

                        <p className="">Resumen de quiniela</p>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Nombre: {formik.values.quinielaName}</p>
                            <p className="text-sm font-semibold">Costo: {formik.values.costo}</p>
                            <p className="text-sm font-semibold">Fecha de inicio: {formik.values.startDate}</p>
                            <p className="text-sm font-semibold">Fecha de fin: {formik.values.endDate}</p>
                            <p className="text-sm font-semibold">Descripción: {formik.values.description}</p>
                            <p className="text-sm font-semibold">Columnas de apuestas: {formik.values.columns}</p>
                            <p className="text-sm font-semibold">Tipos de apuesta: {formik.values.tiposApuesta.join(", ")}</p>
                            <p className="text-sm font-semibold">Repartición de premios: {formik.values.reparticionPremio}</p>
                            <p className="text-sm font-semibold">Partidos seleccionados: {formik.values.partidosSeleccionados.length}</p>
                        </div>

                        <div className="flex gap-2 justify-end">
                            <Boton onClick={() => setVisible(false)}>Cancelar</Boton>
                            <Boton type="submit">Crear</Boton>
                        </div>
                    </div>
                </VentanaModal>

                <CardHead className="flex items-center justify-between">
                    <div>
                        <CardHeader>Crear Nueva Quiniela</CardHeader>
                        <CardDescription>Configura los detalles y partidos para una nueva quiniela.</CardDescription>
                    </div>
                    <Boton className="flex items-center justify-center gap-2">
                        <DocumentArrowUpIcon className="h-6 w-6 text-gray-50" />
                        Crear quiniela
                    </Boton>
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
                        <GeneralTab formik={formik} />
                    </TabsContent>
                    <TabsContent value="partidos">
                        <SeleccionarPartidosTab formik={formik} />
                    </TabsContent>
                    <TabsContent value="premios">
                        <ReparticionPremioTab formik={formik} />
                    </TabsContent>
                    <TabsContent value="tipos">
                        <QuinielaModalidadTab formik={formik} />
                    </TabsContent>
                </Tabs>
            </form>
        </MainDiv>
    )
}












const GeneralTab = ({ formik }: GeneralTabProps) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0] || null;
        formik.setFieldValue("banner", file);

        if (file) {
            const url = URL.createObjectURL(file);
            formik.setFieldValue("urlBanner", url);
        }
    };



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
                    name="quinielaName"
                    onChange={formik.handleChange}
                    value={formik.values.quinielaName}
                />

                <Input
                    id="cost"
                    label="Costo de participación"
                    placeholder="Costo de participación"
                    type="number"
                    name="costo"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.costo}
                />

                <Input
                    id="start-date"
                    label="Fecha de inicio"
                    type="date"
                    required
                    name="startDate"
                    onChange={formik.handleChange}
                    value={formik.values.startDate} // Formatear la fecha a YYYY-MM-DD
                />

                <Input
                    id="end-date"
                    label="Fecha de fin"
                    type="date"
                    required
                    name="endDate"
                    onChange={formik.handleChange}
                    value={formik.values.endDate} // Formatear la fecha a YYYY-MM-DD
                />

                <Input
                    id="description"
                    classNameDiv="col-span-2"
                    label="Descripción"
                    placeholder="Descripción de la quiniela"
                    type="text"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />

                <Input
                    ref={inputRef}
                    classNameDiv="hidden"
                    id="banner"
                    label="Banner"
                    type="file"
                    accept="image/*"
                    name="banner"
                    onChange={handleChange}
                />

                <button
                    onClick={handleClick}
                    className="col-span-2 h-90 border-2 border-dashed border-gray-300 rounded-md 
                    flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 
                    relative overflow-hidden text-white"
                    style={
                        formik.values.urlBanner ? {
                            backgroundImage: `url(${formik.values.urlBanner})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        } : {}
                    }
                >

                    <div className="flex flex-col items-center justify-center gap-2">
                        <ArrowUpOnSquareIcon className="h-6 w-6 text-gray-500" />
                        Haz clic para subir una imagen
                    </div>
                </button>

                <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-sm text-gray-500 font-semibold">Columnas de apuestas</label>

                    <div className="flex">
                        <button
                            type="button"
                            onClick={() => formik.setFieldValue("columns", Math.max(1, formik.values.columns - 1))}
                            className="border-1 border-gray-300 rounded-md p-2 
                            flex items-center justify-center cursor-pointer 
                            hover:bg-gray-200">
                            <MinusIcon className="text-gray-500 w-6 h-6" />
                        </button>

                        <input
                            type="text"
                            placeholder="0"
                            className="w-30 text-center"
                            readOnly
                            value={formik.values.columns}
                        />

                        <button
                            type="button"
                            onClick={() => formik.setFieldValue("columns", formik.values.columns + 1)}
                            className={"border-1 border-gray-300 rounded-md p-2 flex" +
                                " items-center justify-center hover:bg-gray-200 cursor-pointer"}>
                            <PlusIcon className="text-gray-500 w-6 h-6" />
                        </button>
                    </div>

                </div>

                <div>
                    <label className="text-sm text-gray-500 font-semibold">Opciones adicionales</label>
                    <div className="flex gap-2 mt-2 items-center">
                        <input
                            name="allowDoubleBets"
                            onChange={formik.handleChange}
                            checked={formik.values.allowDoubleBets}
                            type="checkbox"
                            id="enable-pool"
                            className="w-4 h-4" />
                        <label htmlFor="enable-pool" className="text-sm text-gray-500">Permitir apuestas dobles (costo x2)</label>
                    </div>
                    <div className="flex gap-2 mt-2 items-center">
                        <input
                            name="allowTripleBets"
                            onChange={formik.handleChange}
                            checked={formik.values.allowTripleBets}
                            type="checkbox"
                            id="enable-pool"
                            className="w-4 h-4" />
                        <label htmlFor="enable-pool" className="text-sm text-gray-500">Permitir apuestas triples (costo x3)</label>
                    </div>
                </div>
            </CardContent>

        </Card>
    )
}

const QuinielaModalidadTab = ({ formik }: GeneralTabProps) => {

    const handleClick = (tipo: string) => {
        const tiposApuesta = formik.values.tiposApuesta.includes(tipo)
            ? formik.values.tiposApuesta.filter((t) => t !== tipo)
            : [...formik.values.tiposApuesta, tipo];

        formik.setFieldValue("tiposApuesta", tiposApuesta);
        console.log(formik.values.tiposApuesta);
    }

    return (
        <Card>
            <CardHead>
                <CardHeader>Tipos de apuesta</CardHeader>
                <CardDescription>Configura los tipos de apuesta para la quiniela.</CardDescription>
            </CardHead>

            <CardContent className="grid grid-cols-2 gap-5">
                {quinielaModalidades.map((modalidad) => (
                    <div key={modalidad.id}
                        onClick={() => handleClick(modalidad.value)}
                        className={twMerge(
                            "flex border-1 flex-col gap-2 p-2 rounded-md border-gray-300 hover:bg-gray-100",
                            formik.values.tiposApuesta.includes(modalidad.value) && "border-blue-500"
                        )}
                    >
                        <h1 className="text-lg font-semibold">{modalidad.nombre}</h1>
                        <p className="text-sm text-gray-500">{modalidad.descripcion}</p>
                        <p className="text-sm text-gray-500">Ejemplo: {modalidad.ejemplo}</p>
                        <p className="text-sm text-gray-500">Evaluación: {modalidad.evaluacion}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

const ReparticionPremioTab = ({ formik }: GeneralTabProps) => {

    const handleClick = (tipo: string) => {
        formik.setFieldValue("reparticionPremio", tipo);
    }

    return (
        <Card>
            <CardHead>
                <CardHeader>Repartición de premios</CardHeader>
                <CardDescription>Configura la repartición de premios para la quiniela.</CardDescription>
            </CardHead>

            <CardContent className="flex flex-wrap gap-5">
                {formasReparticionPremio.map((forma) => (
                    <label key={forma.id}
                        onClick={() => handleClick(forma.value)}
                        className={twMerge("flex flex-col gap-2 py-1 px-2 border w-full md:flex-1/3 " +
                            "border-gray-300 rounded-md pb-4 hover:bg-gray-100 cursor-pointer",
                            formik.values.reparticionPremio == (forma.value) && "border-blue-500")}>
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

    useEffect(() => {
        fetchLiga(selectedLeagueId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLeagueId]);

    const fetchLiga = async (selectedLeagueId: string) => {
        setLoading(true);
        await findEventosLigasFamosas(selectedLeagueId);
        setLoading(false);
    };

    const handleLeagueChange = (value: string) => {
        setSelectedLeagueId(value);
    };

    const handleEventChange = (eventId: string) => {
        console.log(eventId);
        const partidosSeleccionados = formik.values.partidosSeleccionados.includes(eventId)
            ? formik.values.partidosSeleccionados.filter((id) => id !== eventId)
            : [...formik.values.partidosSeleccionados, eventId];

        formik.setFieldValue("partidosSeleccionados", partidosSeleccionados);
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
                                    key={item.idEvent}
                                    event={item}
                                    classNameCard={(
                                        formik.values.partidosSeleccionados.includes(item.idEvent) ?
                                            " border-blue-500 border-3" : ""
                                    )}
                                    onClick={() => handleEventChange(item.idEvent)}
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