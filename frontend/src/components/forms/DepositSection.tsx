import React from "react";
import  Input  from "../ui/Input";
import  Boton  from "../ui/Boton";
import  Select  from "../ui/Select";
import { Card, CardHeader, CardDescription } from "../../components/cards/Card";

export const DepositSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Select Wallet
        </label>
        <Select>
          <option value="">Select a wallet</option>
          <option value="1">My Bitcoin Wallet (BTC)</option>
          <option value="2">Solana Wallet (SOL)</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Input
          id="amount"
          label="Amount (USD)"
          type="number"
          placeholder="Enter amount in USD"
        />
      </div>

      <Card className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <CardDescription>Current Rate</CardDescription>
            <CardHeader className="text-lg">
              1 BTC = $65,000
            </CardHeader>
          </div>
          <div>
            <CardDescription>You will receive</CardDescription>
            <CardHeader className="text-lg">
              0.00012345 BTC
            </CardHeader>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Deposit Address</label>
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
            Copy
          </Boton>
        </div>
      </div>

      <Boton className="w-full">
        Deposit Funds
      </Boton>
    </div>
  );
};

export default DepositSection