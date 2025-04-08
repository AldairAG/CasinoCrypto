import React, { useState } from "react";
import { Card, CardHeader, CardDescription } from "../../components/cards/Card";
import { WalletList } from "./WalletList";
import { CreateWallet } from "./CreateWallet";
import { DepositSection } from "./DepositSection";
import { WithdrawSection } from "./WithdrawSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../navigation/Tabs";
import MainDiv from "../ui/MainDiv";

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
    <Card className="w-full h-full">
      <Tabs
        defaultValue="wallets"
      >
        <TabsList>
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          <TabsTrigger value="wallets">My Wallets</TabsTrigger>
          <TabsTrigger value="create">Create Wallet</TabsTrigger>
        </TabsList>

        <TabsContent value="deposit">
          <Card>
            <CardHeader>Deposit Funds</CardHeader>
            <CardDescription className="mb-6">Add funds to your selected cryptocurrency wallet</CardDescription>
            <DepositSection />
          </Card>
        </TabsContent>

        <TabsContent value="withdraw">
          <Card>
            <CardHeader>Withdraw Funds</CardHeader>
            <CardDescription className="mb-6">Retirar fondos de su billetera </CardDescription>
            <WithdrawSection />
          </Card>
        </TabsContent>

        <TabsContent value="wallets">
          <Card>
            <div className="mb-6">
              <CardHeader>My Wallets</CardHeader>
              <CardDescription>Manage your cryptocurrency wallets</CardDescription>
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
    </Card>
  );
};

export default WalletManager;