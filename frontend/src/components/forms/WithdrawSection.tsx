import React from "react";
import  Input  from "../ui/Input";
import  Boton  from "../ui/Boton";
import  Select  from "../ui/Select";
import { Card, CardHeader, CardDescription } from "../../components/cards/Card";    

export const WithdrawSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Seleccionar Monedero
        </label>
        <Select>
          <option value="">Selecciona un monedero</option>
          <option value="1">Mi Monedero Bitcoin (BTC) - Saldo: 0.05</option>
          <option value="2">Monedero Solana (SOL) - Saldo: 2.5</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Input
          id="crypto-amount"
          label="Cantidad (BTC)"
          type="number"
          placeholder="Ingresa la cantidad en BTC"
        />
        <p className="text-sm text-gray-500">
          Disponible: 0.05 BTC
        </p>
      </div>

      <Card className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <CardDescription>Tasa Actual</CardDescription>
            <CardHeader className="text-lg">
              1 BTC = $65,000
            </CardHeader>
          </div>
          <div>
            <CardDescription>Equivalente en USD</CardDescription>
            <CardHeader className="text-lg">$3,250.00</CardHeader>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <Input
          id="destination-address"
          label="Dirección de Destino"
          placeholder="Ingresa dirección BTC"
          className="font-mono text-sm"
        />
      </div>

      <Boton className="w-full">
        Retirar Fondos
      </Boton>
    </div>
  );
};
export default WithdrawSection;