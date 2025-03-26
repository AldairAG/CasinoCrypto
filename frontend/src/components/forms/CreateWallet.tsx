import Input from "../ui/Input"
import Boton from "../ui/Boton"
import Select from "../ui/Select"

const CreateWallet = () => {
    return (
        <main className="w-full p-5 max-w-[1000px] space-y-4 border border-gray-300 rounded-lg">
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">Crea una nueva wallet</h1>
                <h2>Agrega una nueva wallet para hacer depositos a tu cuenta</h2>
            </div>

            <Input id="wallet_name"
                label="Nombre de la wallet" />
            <Select id="crypto_name"
                label="Crypto-divisa" >
                <option value="">Bitcoin</option>
                <option value="">Sol</option>
            </Select>
            <Input id="wallet_address"
                label="wallet address" />
            <Boton>Create wallet</Boton>
        </main>
    )
}

export default CreateWallet