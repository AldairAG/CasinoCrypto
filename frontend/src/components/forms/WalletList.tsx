import React from "react";
import { Card, CardHeader, CardDescription, Badge } from "../../components/cards/Card";
import  TrashButton  from "../../components/ui/TrashButton";

// Definir el tipo Wallet en el mismo archivo
type Wallet = {
  id: string;
  name: string;
  cryptoType: string;
  balance: number;
  address: string;
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
            <div className="flex justify-between items-start mb-3">
              <div>
                <CardHeader className="text-xl">{wallet.name}</CardHeader>
                <Badge className={`mt-1 ${
                  wallet.cryptoType === 'BTC' 
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

export default WalletList;