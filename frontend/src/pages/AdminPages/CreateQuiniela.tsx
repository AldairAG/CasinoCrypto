import { useRef } from "react";
import { CardHeader, CardDescription, Card, CardHead, CardContent } from "../../components/cards/Card";
import Input from "../../components/ui/Input";
import MainDiv from "../../components/ui/MainDiv";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/navigation/Tabs";
import { ArrowUpOnSquareIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const CreateQuiniela = () => {
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
                    <GeneralTab />
                </TabsContent>
                <TabsContent value="partidos">
                    {/* Contenido para la pestaña "Partidos" */}
                    Partidos
                </TabsContent>
                <TabsContent value="premios">
                    {/* Contenido para la pestaña "Premios" */}
                    Premios
                </TabsContent>
                <TabsContent value="tipos">
                    {/* Contenido para la pestaña "Premios" */}
                    Premios
                </TabsContent>
            </Tabs>


        </MainDiv>
    )
}


const GeneralTab = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        inputRef.current?.click();
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
                    ref={inputRef}
                />

                <button
                    onClick={handleButtonClick}
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

export default CreateQuiniela;