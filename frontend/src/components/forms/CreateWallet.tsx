import React from "react";
import  Input  from "../ui/Input";
import  Boton  from "../ui/Boton";
import  Select  from "../ui/Select";

// Eliminar la dependencia de las props de función
export const CreateWallet: React.FC = () => {
  const [name, setName] = React.useState("");
  const [cryptoType, setCryptoType] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Solo muestra en consola para demostración (sin lógica real)
    console.log("Wallet creation submitted:", { name, cryptoType });
    setName("");
    setCryptoType("");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl text-gray-900">Create a new wallet</h1>
        <p className="text-gray-600">Add a new cryptocurrency wallet to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          id="wallet_name"
          label="Wallet Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <Select 
          id="crypto_name"
          label="Cryptocurrency"
          value={cryptoType}
          onChange={(e) => setCryptoType(e.target.value)}
          required
        >
          <option value="">Select a cryptocurrency</option>
          <option value="BTC">Bitcoin</option>
          <option value="SOL">Solana</option>
        </Select>
        
        <Boton type="submit" className="w-full">
          Create Wallet
        </Boton>
      </form>
    </div>
  );
};

export default CreateWallet;