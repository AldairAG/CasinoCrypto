import React, { useState } from "react";
import { Card, CardHeader, CardDescription, Badge } from "../../components/cards/Card";
// import { WalletList } from "./WalletList";
//import { CreateWallet } from "./CreateWallet";
//import { DepositSection } from "./DepositSection";
// import { WithdrawSection } from "./WithdrawSection";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/navigation/Tabs";
import MainDiv from "../../components/ui/MainDiv";

import Input from "../../components/ui/Input";
import Boton from "../../components/ui/Boton";
import Select from "../../components/ui/Select";
import TrashButton from "../../components/ui/TrashButton";
import {
  ArrowDownTrayIcon,      // Para depositar (entrada de dinero)
  ArrowUpTrayIcon,        // Para retirar (salida de dinero)
  WalletIcon,             // Para billeteras
  PlusCircleIcon,         // Para crear nueva
  CurrencyDollarIcon      // Alternativa (ya lo tenías)
} from "@heroicons/react/24/outline";
// Definición del tipo Wallet
type Wallet = {
  id: string;
  name: string;
  cryptoType: string;
  balance: number;
  address: string;
};





export const WalletManager: React.FC = () => {

  // Datos estáticos de ejemplo
  const wallets: Wallet[] = [
    {
      id: "1",
      name: "My Bitcoin Wallet",
      cryptoType: "BTC",
      balance: 0.05,
      address: "bclovy2Kgdygjrsgtzq2nbytf249"
    },
    {
      id: "2",
      name: "Solana Wallet",
      cryptoType: "SOL",
      balance: 2.5,
      address: "82UgnB00s5hgW9MQNSPY11v08Ko"
    }
  ];

  return (
    <MainDiv className="h-[calc(100vh-150px)] w-full p-4">
      <Tabs
        defaultValue="wallets"
      >
        <TabsList className="w-full h-full">
          <TabsTrigger value="deposit">
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Depositar
          </TabsTrigger>

          <TabsTrigger value="withdraw">
            <ArrowUpTrayIcon className="w-5 h-5 mr-2" />
            Retirar
          </TabsTrigger>

          <TabsTrigger value="wallets">
            <WalletIcon className="w-5 h-5 mr-2" />
            Mis Billeteras
          </TabsTrigger>

          <TabsTrigger value="create">
            <PlusCircleIcon className="w-5 h-5 mr-2" />
            Crear Billetera
          </TabsTrigger>
        </TabsList>

        <TabsContent value="deposit" className="w-full  h-full">
          <Card w-full h-full>
            <CardHeader>Depositar Fondos</CardHeader>
            <CardDescription className="mb-6">Agrega fondos a tu billetera de criptomoneda seleccionada</CardDescription>
            <DepositSection />
          </Card>
        </TabsContent>

        <TabsContent value="withdraw">
          <Card>
            <CardHeader>Retirar Fondos</CardHeader>
            <CardDescription className="mb-6">Retira fondos de tu billetera</CardDescription>
            <WithdrawSection />
          </Card>
        </TabsContent>

        <TabsContent value="wallets">
          <Card>
            <div className="mb-6">
              <CardHeader>Mis Billeteras</CardHeader>
              <CardDescription>Administra tus billeteras de criptomonedas</CardDescription>
            </div>
            <WalletList wallets={wallets} />
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <Card>
            <CreateWallet />
          </Card>
        </TabsContent>
      </Tabs>
    </MainDiv>
  );
};

export const CreateWallet: React.FC = () => {
  const [name, setName] = React.useState("");
  const [cryptoType, setCryptoType] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Solo muestra en consola para demostración (sin lógica real)
    console.log("Creación de billetera enviada:", { name, cryptoType });
    setName("");
    setCryptoType("");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl text-gray-900">Crear nueva billetera</h1>
        <p className="text-gray-600">Añade una nueva billetera de criptomoneda a tu cuenta</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="wallet_name"
          label="Nombre de la billetera"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Select
          id="crypto_name"
          label="Criptomoneda"
          value={cryptoType}
          onChange={(e) => setCryptoType(e.target.value)}
          required
        >
          <option value="">Selecciona una criptomoneda</option>
          <option value="BTC">Bitcoin</option>
          <option value="SOL">Solana</option>
        </Select>

        <Boton type="submit" className="w-full">
          Crear Billetera
        </Boton>
      </form>
    </div>
  );
};


export const DepositSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Seleccionar Billetera
        </label>
        <Select>
          <option value="">Selecciona una billetera</option>
          <option value="1">Mi Billetera Bitcoin (BTC)</option>
          <option value="2">Billetera Solana (SOL)</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Input
          id="amount"
          label="Monto (USD)"
          type="number"
          placeholder="Ingresa el monto en USD"
        />
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
            <CardDescription>Recibirás</CardDescription>
            <CardHeader className="text-lg">
              0.00012345 BTC
            </CardHeader>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Dirección de Depósito</label>
        <div className="flex items-center gap-2">
          <Input
            id="wallet-address"
            value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
            readOnly
            className="font-mono text-sm bg-gray-100"
          />
          <Boton
            type="button"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Copiar
          </Boton>
        </div>
      </div>

      <Boton className="w-full">
        Depositar Fondos
      </Boton>
    </div>
  );
};


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


// Definir explícitamente las props que recibe el componente
interface WalletListProps {
  wallets: Wallet[];
}

export const WalletList: React.FC<WalletListProps> = ({ wallets }) => {
  return (
    <div className="space-y-4">
      {wallets.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No wallets found. Create a wallet to get started.</p>
        </div>
      ) : (
        wallets.map((wallet) => (
          <Card key={wallet.id}>
            <div className="flex w-full items-start mb-3">
              <div>
                <CardHeader className="text-xl">{wallet.name}</CardHeader>
                <Badge className={`mt-1 ${wallet.cryptoType === 'BTC'
                    ? 'bg-orange-100 text-orange-800 border-orange-200'
                    : 'bg-purple-100 text-purple-800 border-purple-200'
                  }`}>
                  {wallet.cryptoType}
                </Badge>
              </div>
              <TrashButton />
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <CardDescription>Address</CardDescription>
                <span className="font-mono text-gray-700">{wallet.address}</span>
              </div>
              <div className="flex justify-between">
                <CardDescription>Balance</CardDescription>
                <span className="font-medium">
                  {wallet.balance} {wallet.cryptoType}
                </span>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default WalletManager;