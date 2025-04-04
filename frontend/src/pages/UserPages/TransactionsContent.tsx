// components/TransactionsContent.tsx
import { Card } from "../../components/cards/Card";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "../../components/navigation/Tabs";
import { Ingreso, Ganancia, Egreso } from "../../components/icons/Icons";
import FiltersIngresos from "../../components/ui/FiltersIngresos";
import IngresoItem from "../../components/ui/IngresoItem";
import { useState } from "react";
import FiltersRetiros from "../../components/ui/FiltersRetiros";
import RetiroItem from "../../components/ui/RetiroItem";
import GananciaItem from "../../components/ui/GananciaItem";
import Input from "../../components/ui/Input";
import MainDiv from "../../components/ui/MainDiv";


const TransactionsContent: React.FC = () => {
  return (
    <Card className="p-6 space-y-6 h-full w-full">
      <Tabs defaultValue={'Ganancia'} className="w-full">

        <TabsList className="mb-4">

          <TabsTrigger className="flex gap-2" value="Ganancia">
            <Ganancia className="text-gray-500 h-6 w-6" />
            Ingresos
          </TabsTrigger>

          <TabsTrigger className="flex gap-2" value="Egreso">
            <Egreso className="text-gray-500 h-6 w-6" />
            Retiros
          </TabsTrigger>

          <TabsTrigger className="flex gap-2" value="Ingreso">
            <Ingreso className="h-6 w-6 text-gray-500" />
            Ganancias
          </TabsTrigger>
        </TabsList>

        <TabsContent className="w-full" value="Ganancia">
          <GananciaContent />
        </TabsContent>
        <TabsContent className="w-full" value="Egreso">
          <RetiroContent />
        </TabsContent>
        <TabsContent className="w-full" value="Ingreso">
          <IngresoContent />
        </TabsContent>

      </Tabs>

    </Card>
  )
};

const IngresoContent: React.FC = () => {
  const allIngresos = [
    { 
      id: 1, 
      concepto: 'BTC', 
      monto: 2500, 
      fecha: '2023-11-01', 
      hora: '10:30 AM',
      estado: 'completado' 
    },
    { 
      id: 2, 
      concepto: 'ETH', 
      monto: 1800, 
      fecha: '2023-11-05', 
      hora: '02:15 PM',
      estado: 'completado' 
    },
    { 
      id: 3, 
      concepto: 'BTC', 
      monto: 500, 
      fecha: '2023-11-10', 
      hora: '09:45 AM',
      estado: 'pendiente' 
    },
    { 
      id: 4, 
      concepto: 'Solana', 
      monto: 1200, 
      fecha: '2023-11-15', 
      hora: '04:20 PM',
      estado: 'completado' 
    },
  ];

  const [filteredIngresos, setFilteredIngresos] = useState(allIngresos);

  const handleFilterChange = (filters: { fecha: string; concepto: string }) => {
    const filtered = allIngresos.filter(ingreso => {
      const matchesDate = !filters.fecha || ingreso.fecha === filters.fecha;
      const matchesConcepto = !filters.concepto || 
        ingreso.concepto.toLowerCase().includes(filters.concepto.toLowerCase());
      return matchesDate && matchesConcepto;
    });
    setFilteredIngresos(filtered);
  };

  return (
    <div className="mt-4">
      <FiltersIngresos onFilterChange={handleFilterChange} />
      
      <h4 className="text-lg font-medium dark:text-white mb-4">Registro de Ingresos</h4>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="space-y-3">
          {filteredIngresos.length > 0 ? (
            filteredIngresos.map((ingreso) => (
              <IngresoItem 
                key={ingreso.id}
                concepto={ingreso.concepto}
                monto={ingreso.monto}
                fecha={ingreso.fecha}
                hora={ingreso.hora}
                estado={ingreso.estado}
              />
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 dark:text-gray-300">
              No se encontraron ingresos con los filtros seleccionados
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const RetiroContent: React.FC = () => {
  const allRetiros = [
    { 
      id: 1, 
      fecha: '2023-11-02', 
      hora: '11:45 AM',
      monto: 0.5, 
      monedaCrypto: 'BTC', 
      equivalenciaUSD: 15000,
      estado: 'completado' ,
      concepto: 'Retiro de BTC' 
    },
    { 
      id: 2, 
      fecha: '2023-11-07', 
      hora: '03:20 PM',
      monto: 10, 
      monedaCrypto: 'ETH', 
      equivalenciaUSD: 18000,
      estado: 'pendiente' ,
      concepto: 'Retiro de SOLANA'
    },
    { 
      id: 3, 
      fecha: '2023-11-12', 
      hora: '09:15 AM',
      monto: 500, 
      monedaCrypto: 'ETH', 
      equivalenciaUSD: 500,
      estado: 'cancelado' ,
      concepto: 'Retiro de ETC'
    },
    { 
      id: 4, 
      fecha: '2023-11-18', 
      hora: '05:30 PM',
      monto: 2.5, 
      monedaCrypto: 'SOL', 
      equivalenciaUSD: 250,
      estado: 'completado' ,
      concepto: 'Retiro de BTC'
    },
  ];

  const [filteredRetiros, setFilteredRetiros] = useState(allRetiros);

  const handleFilterChange = (filters: { fecha: string; moneda: string }) => {
    const filtered = allRetiros.filter(retiro => {
      const matchesDate = !filters.fecha || retiro.fecha === filters.fecha;
      const matchesMoneda = !filters.moneda || 
        retiro.monedaCrypto.toLowerCase().includes(filters.moneda.toLowerCase());
      return matchesDate && matchesMoneda;
    });
    setFilteredRetiros(filtered);
  };

  return (
    <div className="mt-4">
      <FiltersRetiros onFilterChange={handleFilterChange} />
      
      <h4 className="text-lg font-medium dark:text-white mb-4">Registro de Retiros</h4>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="space-y-3">
          {filteredRetiros.length > 0 ? (
            filteredRetiros.map((retiro) => (
              <RetiroItem 
                key={retiro.id}
                fecha={retiro.fecha}
                hora={retiro.hora}
                monto={retiro.monto}
                monedaCrypto={retiro.monedaCrypto}
                equivalenciaUSD={retiro.equivalenciaUSD}
                estado={retiro.estado}
                concepto={retiro.concepto}
              />
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 dark:text-gray-300">
              No se encontraron retiros con los filtros seleccionados
            </p>
          )}
        </div>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-gray-600 rounded-md">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            <span className="font-medium dark:text-white">Total retirado (USD):</span> ${filteredRetiros
              .filter(r => r.estado === 'completado')
              .reduce((sum, retiro) => sum + retiro.equivalenciaUSD, 0)
              .toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

const GananciaContent: React.FC = () => {
  const allGanancias = [
    {
      id: 1,
      fecha: '2023-11-03',
      hora: '09:15 AM',
      concepto: 'Ganancia por Quinela',
      monto: 1200,
      estado: 'acreditado'
    },
    {
      id: 2,
      fecha: '2023-11-08',
      hora: '02:45 PM',
      concepto: 'Ganancia por Apuestas',
      monto: 350,
      estado: 'acreditado'
    },
    {
      id: 3,
      fecha: '2023-11-14',
      hora: '11:30 AM',
      concepto: 'Ganancia por Quinela',
      monto: 75,
      estado: 'pendiente'
    },
    {
      id: 4,
      fecha: '2023-11-20',
      hora: '04:10 PM',
      concepto: 'Ganancia por Apuestas',
      monto: 1800,
      estado: 'acreditado'
    },
  ];

  const [filteredGanancias, setFilteredGanancias] = useState(allGanancias);

  return (
    <div className="w-full">
      <Card className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label='Filtrar por fecha'
          type="date"
          id="fecha"
          name="fecha"
          className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
        />
        <Input
          label='Filtrar por concepto'
          type="text"
          id="concepto"
          name="concepto"
          placeholder="Buscar concepto..."
          className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
        />
      </Card>

      <h4 className="text-lg font-medium mb-4">Registro de Ganancias</h4>
      <Card>
        <div className="space-y-3">
          {filteredGanancias.length > 0 ? (
            filteredGanancias.map((ganancia) => (
              <GananciaItem
                key={ganancia.id}
                fecha={ganancia.fecha}
                hora={ganancia.hora}
                concepto={ganancia.concepto}
                monto={ganancia.monto}
                estado={ganancia.estado}
              />
            ))
          ) : (
            <p className="text-center py-4 text-gray-500 dark:text-gray-300">
              No se encontraron ganancias con los filtros seleccionados
            </p>
          )}
        </div>
        
      </Card>
    </div>
  );
};

export default TransactionsContent;