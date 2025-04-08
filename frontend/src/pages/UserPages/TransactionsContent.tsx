
import { useState } from 'react';
import { Card, CardHeader, CardDescription, CardContent } from "../../components/cards/Card";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "../../components/navigation/Tabs";
import { Ingreso, Ganancia, Egreso } from "../../components/icons/Icons";
import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";

const TransactionsContent: React.FC = () => {
  return (
    <Card className="p-6 bg-white shadow-md w-full">
      <Tabs defaultValue={'Ganancia'}>
        <TabsList className="mb-6">
          <TabsTrigger className="flex gap-2" value="Ganancia">
            <Ganancia className="h-6 w-6 text-gray-500" />
            Ingresos
          </TabsTrigger>
          <TabsTrigger className="flex gap-2" value="Egreso">
            <Egreso className="h-6 w-6 text-gray-500" />
            Retiros
          </TabsTrigger>
          <TabsTrigger className="flex gap-2" value="Ingreso">
            <Ingreso className="h-6 w-6 text-gray-500" />
            Ganancias
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Ganancia">
        <IngresoContent />
          {/* <GananciaContent /> */}
        </TabsContent>
        <TabsContent value="Egreso">
          <RetiroContent />
        </TabsContent>
        <TabsContent value="Ingreso">
          <GananciaContent />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

// ==================== COMPONENTES DE FILTROS ====================
const FiltersIngresos: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ fecha: '', concepto: '' });

  return (
    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Input
        label="Filtrar por fecha"
        type="date"
        name="fecha"
        value={filters.fecha}
        onChange={(e) => {
          const newFilters = { ...filters, fecha: e.target.value };
          setFilters(newFilters);
          onFilterChange(newFilters);
        }}
        className="bg-gray-50 border-gray-300 focus:ring-blue-500"
      />
      <Input
        label="Filtrar por concepto"
        type="text"
        name="concepto"
        placeholder="BTC, ETH..."
        value={filters.concepto}
        onChange={(e) => {
          const newFilters = { ...filters, concepto: e.target.value };
          setFilters(newFilters);
          onFilterChange(newFilters);
        }}
        className="bg-gray-50 border-gray-300 focus:ring-blue-500"
      />
    </CardContent>
  );
};

const FiltersRetiros: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ fecha: '', moneda: '' });

  return (
    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Input
        label="Filtrar por fecha"
        type="date"
        name="fecha"
        value={filters.fecha}
        onChange={(e) => {
          const newFilters = { ...filters, fecha: e.target.value };
          setFilters(newFilters);
          onFilterChange(newFilters);
        }}
        className="bg-gray-50 border-gray-300 focus:ring-blue-500"
      />
      <Input
        label="Filtrar por criptomoneda"
        type="text"
        name="moneda"
        placeholder="BTC, ETH..."
        value={filters.moneda}
        onChange={(e) => {
          const newFilters = { ...filters, moneda: e.target.value };
          setFilters(newFilters);
          onFilterChange(newFilters);
        }}
        className="bg-gray-50 border-gray-300 focus:ring-blue-500"
      />
    </CardContent>
  );
};

const FiltersGanancias: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ fecha: '', concepto: '' });

  return (
    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Input
        label="Filtrar por fecha"
        type="date"
        name="fecha"
        value={filters.fecha}
        onChange={(e) => {
          const newFilters = { ...filters, fecha: e.target.value };
          setFilters(newFilters);
          onFilterChange(newFilters);
        }}
        className="bg-gray-50 border-gray-300 focus:ring-blue-500"
      />
      <Input
        label="Filtrar por concepto"
        type="text"
        name="concepto"
        placeholder="Quinela, Apuestas..."
        value={filters.concepto}
        onChange={(e) => {
          const newFilters = { ...filters, concepto: e.target.value };
          setFilters(newFilters);
          onFilterChange(newFilters);
        }}
        className="bg-gray-50 border-gray-300 focus:ring-blue-500"
      />
    </CardContent>
  );
};

// ==================== COMPONENTES DE CONTENIDO ====================
const IngresoContent: React.FC = () => {
  const allIngresos = [
    { id: 1, concepto: 'BTC', monto: 2500, fecha: '2023-11-01', hora: '10:30 AM', estado: 'completado' },
    { id: 2, concepto: 'ETH', monto: 1800, fecha: '2023-11-05', hora: '02:15 PM', estado: 'completado' },
    { id: 3, concepto: 'BTC', monto: 500, fecha: '2023-11-10', hora: '09:45 AM', estado: 'pendiente' },
    { id: 4, concepto: 'Solana', monto: 1200, fecha: '2023-11-15', hora: '04:20 PM', estado: 'completado' },
  ];

  const [filteredIngresos, setFilteredIngresos] = useState(allIngresos);

  return (
    <div className="mt-4">
      <FiltersIngresos onFilterChange={(filters) => {
        const filtered = allIngresos.filter(ingreso => {
          const matchesDate = !filters.fecha || ingreso.fecha === filters.fecha;
          const matchesConcepto = !filters.concepto || ingreso.concepto.toLowerCase().includes(filters.concepto.toLowerCase());
          return matchesDate && matchesConcepto;
        });
        setFilteredIngresos(filtered);
      }} />
      
      <CardHeader className="text-lg font-medium text-gray-900 mb-4">
        Registro de Ingresos
      </CardHeader>
      
      <Card className="bg-gray-50 p-4">
        <div className="space-y-3">
          {filteredIngresos.length > 0 ? (
            filteredIngresos.map((ingreso) => (
              <div key={ingreso.id} className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                <div>
                  <p className="font-bold text-lg text-gray-900">{ingreso.concepto}</p>
                  <p className="text-base text-gray-600 font-medium">
                    {ingreso.fecha} - {ingreso.hora}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-blue-600">
                    ${ingreso.monto.toLocaleString()}
                  </p>
                  <span className={`text-sm font-semibold ${
                    ingreso.estado === 'completado' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {ingreso.estado.charAt(0).toUpperCase() + ingreso.estado.slice(1)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-gray-500">
              No se encontraron ingresos
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

const RetiroContent: React.FC = () => {
  const allRetiros = [
    { id: 1, fecha: '2023-11-02', hora: '11:45 AM', monto: 0.5, monedaCrypto: 'BTC', equivalenciaUSD: 15000, estado: 'completado', concepto: 'Retiro de BTC' },
    { id: 2, fecha: '2023-11-07', hora: '03:20 PM', monto: 10, monedaCrypto: 'ETH', equivalenciaUSD: 18000, estado: 'pendiente', concepto: 'Retiro de SOLANA' },
    { id: 3, fecha: '2023-11-12', hora: '09:15 AM', monto: 500, monedaCrypto: 'ETH', equivalenciaUSD: 500, estado: 'cancelado', concepto: 'Retiro de ETC' },
    { id: 4, fecha: '2023-11-18', hora: '05:30 PM', monto: 2.5, monedaCrypto: 'SOL', equivalenciaUSD: 250, estado: 'completado', concepto: 'Retiro de BTC' },
  ];

  const [filteredRetiros, setFilteredRetiros] = useState(allRetiros);

  return (
    <div className="mt-4">
      <FiltersRetiros onFilterChange={(filters) => {
        const filtered = allRetiros.filter(retiro => {
          const matchesDate = !filters.fecha || retiro.fecha === filters.fecha;
          const matchesMoneda = !filters.moneda || retiro.monedaCrypto.toLowerCase().includes(filters.moneda.toLowerCase());
          return matchesDate && matchesMoneda;
        });
        setFilteredRetiros(filtered);
      }} />
      
      <CardHeader className="text-lg font-medium text-gray-900 mb-4">
        Registro de Retiros
      </CardHeader>
      
      <Card className="bg-gray-50 p-4">
        <div className="space-y-3">
          {filteredRetiros.length > 0 ? (
            filteredRetiros.map((retiro) => (
              <div key={retiro.id} className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                <div>
                  <p className="font-bold text-lg text-gray-900">{retiro.concepto}</p>
                  <p className="text-base text-gray-600 font-medium">
                    {retiro.fecha} - {retiro.hora}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-red-600">
                    -{retiro.monto} {retiro.monedaCrypto}
                  </p>
                  <p className="text-sm text-gray-600">
                    (${retiro.equivalenciaUSD.toLocaleString()})
                  </p>
                  <span className={`text-sm font-semibold ${
                    retiro.estado === 'completado' ? 'text-green-600' : 
                    retiro.estado === 'pendiente' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {retiro.estado.charAt(0).toUpperCase() + retiro.estado.slice(1)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-gray-500">
              No se encontraron retiros
            </p>
          )}
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Total retirado (USD):</span> $
            {filteredRetiros
              .filter(r => r.estado === 'completado')
              .reduce((sum, retiro) => sum + retiro.equivalenciaUSD, 0)
              .toLocaleString()}
          </p>
        </div>
      </Card>
    </div>
  );
};

const GananciaContent: React.FC = () => {
  const allGanancias = [
    { id: 1, fecha: '2023-11-03', hora: '09:15 AM', concepto: 'Ganancia por Quinela', monto: 1200, estado: 'acreditado' },
    { id: 2, fecha: '2023-11-08', hora: '02:45 PM', concepto: 'Ganancia por Apuestas', monto: 350, estado: 'acreditado' },
    { id: 3, fecha: '2023-11-14', hora: '11:30 AM', concepto: 'Ganancia por Quinela', monto: 75, estado: 'pendiente' },
    { id: 4, fecha: '2023-11-20', hora: '04:10 PM', concepto: 'Ganancia por Apuestas', monto: 1800, estado: 'acreditado' },
  ];

  const [filteredGanancias, setFilteredGanancias] = useState(allGanancias);

  return (
    <div className="mt-4">
      <FiltersGanancias onFilterChange={(filters) => {
        const filtered = allGanancias.filter(ganancia => {
          const matchesDate = !filters.fecha || ganancia.fecha === filters.fecha;
          const matchesConcepto = !filters.concepto || ganancia.concepto.toLowerCase().includes(filters.concepto.toLowerCase());
          return matchesDate && matchesConcepto;
        });
        setFilteredGanancias(filtered);
      }} />
      
      <CardHeader className="text-lg font-medium text-gray-900 mb-4">
        Registro de Ganancias
      </CardHeader>
      
      <Card className="bg-gray-50 p-4">
        <div className="space-y-3">
          {filteredGanancias.length > 0 ? (
            filteredGanancias.map((ganancia) => (
              <div key={ganancia.id} className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                <div>
                  <p className="font-bold text-lg text-gray-900">{ganancia.concepto}</p>
                  <p className="text-base text-gray-600 font-medium">
                    {ganancia.fecha} - {ganancia.hora}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-green-600">
                    +${ganancia.monto.toLocaleString()}
                  </p>
                  <span className={`text-sm font-semibold ${
                    ganancia.estado === 'acreditado' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {ganancia.estado.charAt(0).toUpperCase() + ganancia.estado.slice(1)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-gray-500">
              No se encontraron ganancias
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TransactionsContent;