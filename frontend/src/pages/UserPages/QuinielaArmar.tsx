import { Link, useParams } from "react-router-dom";
import { CardHeader, CardDescription, CardHead, CardContent } from "../../components/cards/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/CustomTabs";
import {
    TrophyIcon,
    CalendarIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    ArrowLongLeftIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline";
import { USER_ROUTES } from "../../constants/ROUTERS";
import { useQuiniela } from "../../hooks/useQuiniela";
import { useEffect, useState, useCallback, memo } from "react";
import { useDeportes } from "../../hooks/useDeportes";
import { PrimeroEnMarcarItem, MarcadorExactoItem } from "../../components/items/QuinielaItems";
import Loader from "../../components/ui/Loader";
import { calcularTiempoRestante } from "../../utils/dateUtils";
import { PrediccionPost } from "../../types/Prediccion";
import { useCarrito } from "../../hooks/useCarrito";
import { QuinielaPostType, QuinielaType } from "../../types/QinielaType";
import { Event, EventResponseApi } from "../../types/Event";

interface EventosTabProps {
    loading: boolean;
    eventos: Event[];
    title: string;
    description: string;
    ItemComponent: React.ComponentType<{ item: Event }>;
    modalidad: string;
    onAddToCart: (modalidad: string) => void;
    isInCartMap: Record<string, boolean>;
}

// Contenido de las pestañas
const tabContents = [
    {
        value: "marcador_exacto",
        title: "Marcador exacto",
        description: "Predice el resultado exacto de cada partido. Obtienes puntos solo si aciertas el marcador final.",
        component: MarcadorExactoItem
    },
    {
        value: "primero_en_marcar",
        title: "Primero en Marcar",
        description: "Predice qué equipo anotará el primer gol en cada partido.",
        component: PrimeroEnMarcarItem
    },
    {
        value: "resultado_general",
        title: "Resultado General",
        description: "Predice si el partido terminará en victoria local, empate o victoria visitante.",
        component: PrimeroEnMarcarItem
    },
    {
        value: "numero_de_gol",
        title: "Número de Goles",
        description: "Predice el número total de goles que se anotarán en cada partido.",
        component: PrimeroEnMarcarItem
    },
    {
        value: "diferencia_de_gol",
        title: "Diferencia de Gol",
        description: "Predice la diferencia de goles entre los equipos al final del partido.",
        component: PrimeroEnMarcarItem
    },
    {
        value: "rango_resultado",
        title: "Rango Resultado",
        description: "Predice el rango de goles para cada equipo (0, 1-2, 3+).",
        component: PrimeroEnMarcarItem
    }
];

// Componente para mostrar mensaje
const Message = memo(({ text, type }: { text: string, type: string }) => {
    if (!text) return null;

    return (
        <div className={`p-3 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {text}
        </div>
    );
});

// Componente para información de quiniela
const QuinielaInfo = memo(({ quiniela }: { quiniela: QuinielaType|null }) => (
    <div className="flex justify-start gap-10">
        <div className="text-gray-500 flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-text-500" />
            <span className="text-gray-500 font-semibold">
                Cierra en: {quiniela?.fechaFin ? calcularTiempoRestante(quiniela.fechaFin) : "Fecha no disponible"}
            </span>
        </div>
        <div className="flex items-center gap-2">
            <TrophyIcon className="h-5 w-5 text-yellow-600" />
            <span className="text-gray-500 font-semibold"> Premio: $100,000</span>
        </div>
        <div className="text-gray-500 flex items-center gap-2">
            <UserGroupIcon className="h-5 w-5 text-gray-500" />
            <span className="text-gray-500 font-semibold">Participantes: 24,563</span>
        </div>
        <div className="text-gray-500 flex items-center gap-2">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-500" />
            <span className="text-gray-500 font-semibold">
                Precio por apuesta: ${quiniela?.precioParticipacion || 15}.00
            </span>
        </div>
    </div>
));

// Componente para los eventos de una pestaña con su propio botón de agregar al carrito
const EventosTab = memo(({
    loading,
    eventos,
    title,
    description,
    ItemComponent,
    modalidad,
    onAddToCart,
    isInCartMap
}: EventosTabProps) => (
    <>
        <CardHead>
            <div className="flex justify-between items-center">
                <div>
                    <CardHeader>{title}</CardHeader>
                    <CardDescription className="text-sm text-blue-800">
                        {description}
                    </CardDescription>
                </div>
                <button
                    onClick={() => onAddToCart(modalidad)}
                    disabled={isInCartMap[modalidad]}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow 
                        ${isInCartMap[modalidad]
                            ? 'bg-green-600 text-white cursor-default'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                    <ShoppingCartIcon className="h-4 w-4" />
                    {isInCartMap[modalidad] ? 'Agregada' : 'Agregar al carrito'}
                </button>
            </div>
        </CardHead>
        <CardContent>
            <div className="space-y-3 w-full">
                {loading ? (
                    <Loader />
                ) : (
                    eventos.map(partido => (
                        <div key={partido.idEvent}>
                            <ItemComponent
                                item={partido}
                            />
                        </div>
                    ))
                )}
            </div>
        </CardContent>
    </>
));


const QuinielaArmar = () => {
    //Parametros de la URL
    const { id } = useParams<{ id: string }>();
    //Hooks
    const { getQuinielaById, quiniela } = useQuiniela();
    const { eventos,getEventosByIds } = useDeportes();
    const { addItemToCart, isItemInCart } = useCarrito();
    // Estados locales
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState({ text: "", type: "" });

    const [isInCartMap, setIsInCartMap] = useState<Record<string, boolean>>({});
    const [prediccionesPorModalidad, setPrediccionesPorModalidad] = useState<Record<string, PrediccionPost[]>>({});

    // Cargar predicciones cuando se tienen eventos
    useEffect(() => {
        if (eventos?.length > 0) {
            const prediccionesBase = eventos.map(evento => ({
                idEvento: evento.idEvent,
                strTipoPrediccion: "",
                intResultadoLocal: 0,
                intResultadoVisitante: 0,
                strRangoLocal: '',
                strRangoVisitante: '',
                idGanador: 0,
                idPrimeroEnMarcar: 0,
                strDiferenciaDeGoles: '',
                intTotalGoles: 0
            }));

            const initialPredictions: Record<string, PrediccionPost[]> = {};

            // Inicializa predicciones para cada modalidad
            tabContents.forEach(tab => {
                initialPredictions[tab.value] = prediccionesBase.map(p => ({
                    ...p,
                    idEvento:Number( p.idEvento),
                    strTipoPrediccion: tab.value
                }));
            });

            setPrediccionesPorModalidad(initialPredictions);
            console.log("Predicciones por modalidad:", initialPredictions);
            
        }
    }, [eventos]);

    // Cargar datos de quiniela y eventos
    useEffect(() => {
        const fetchQuinielaData = async () => {
            if (!id) return;

            try {
                await getQuinielaById(Number(id));

                if (quiniela?.eventos) {
                    const ids = (quiniela.eventos as unknown as EventResponseApi[])
                        .map((evento) => evento.idEvento)
                        .map(String);
                    console.log("IDs de eventos:", ids);

                    await getEventosByIds(ids);
                }
            } catch (error) {
                console.error("Error al cargar la quiniela:", error);
                setMessage({ text: "Error al cargar la quiniela", type: "error" });
            } finally {
                setLoading(false);
            }
        };

        fetchQuinielaData();
    }, [id]);

    // Inicializar el mapa de estado del carrito
    useEffect(() => {
        if (id) {
            const cartMap: Record<string, boolean> = {};
            tabContents.forEach(tab => {
                // Componer un ID único para cada modalidad de quiniela
                const modalidadId = `${id}-${tab.value}`;
                cartMap[tab.value] = isItemInCart ? isItemInCart(Number(modalidadId)) : false;
            });
            setIsInCartMap(cartMap);
        }
    }, [id]);

    // Memoizar función para agregar al carrito una modalidad específica
    const handleAddToCart = useCallback((modalidad: string) => {
        if (!quiniela || !prediccionesPorModalidad[modalidad]) return;

        // Crea un ID único para cada modalidad de quiniela
        const modalidadId = `${quiniela.idQuiniela || Number(id)}-${modalidad}`;

        const quinielaForCart: QuinielaPostType = {
            nombreQuiniela: quiniela.nombreQuiniela,
            fechaFin: quiniela.fechaFin,
            precioParticipacion: quiniela.precioParticipacion,
            idQuiniela: Number(id),
            idUsuario: 1,
            predicciones: prediccionesPorModalidad[modalidad],
            tipoApuesta: modalidad
        };

        addItemToCart(quinielaForCart);

        // Actualiza el estado para esta modalidad específica
        setIsInCartMap(prev => ({
            ...prev,
            [modalidad]: true
        }));

        setMessage({ text: `¡Quiniela ${modalidad.replace('_', ' ')} añadida al carrito!`, type: "success" });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }, [quiniela, id, prediccionesPorModalidad, addItemToCart]);

    return (
        <section className="px-4 max-w-[1600px] w-full space-y-4">
            <header className="space-y-4 pt-6 mb-8">
                <div className="flex justify-between items-center mb-8">
                    <Link to={USER_ROUTES.QUINIELAS_LIST} className="flex items-center gap-5 ms-5">
                        <ArrowLongLeftIcon className="h-6 w-6 text-gray-500" />
                        <label>Regresar a las quinielas</label>
                    </Link>
                    <label className="text-gray-700 hover:text-blue-400 hover:underline">
                        ¿Cómo se juega a Quiniela?
                    </label>
                </div>

                <div className="flex justify-between items-center">
                    <h1 className="text-3xl">
                        {quiniela?.nombreQuiniela}
                    </h1>
                </div>

                <Message text={message.text} type={message.type} />

                <QuinielaInfo quiniela={quiniela} />
            </header>

            <Tabs defaultValue="marcador_exacto">
                <TabsList className="mb-6">
                    {tabContents.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabContents.map(tab => (
                    <TabsContent key={tab.value} value={tab.value}>
                        <EventosTab
                            loading={loading}
                            eventos={eventos}
                            title={tab.title}
                            description={tab.description}
                            ItemComponent={tab.component}
                            modalidad={tab.value}
                            onAddToCart={handleAddToCart}
                            isInCartMap={isInCartMap}
                        />
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
};

export default QuinielaArmar;