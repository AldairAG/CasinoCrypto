import Boton from "../ui/Boton"
import Input from "../ui/Input"
import Select from "../ui/Select"

const DepositarForm = () => {
    return (
        <main className="w-full p-5 max-w-[1000px] space-y-4 border border-gray-300 rounded-lg">
            <div className="space-y-2">
                <Select id="wallet" label="Selecciona tu wallet">

                </Select>
                <Input id="monto" label="Monto (USD)"/>
            </div>

            <div className="p-4 bg-gray-200 rounded-md">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-medium">Current Rate</p>
                        <p className="text-lg">
                            1 {'SOL'} = $
                            {'150'}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">You will receive</p>
                        <p className="text-lg">
                            {0.00} {'SOL'}
                        </p>
                    </div>
                </div>
            </div>

            <Boton className="w-full">
                Depositar fondos
            </Boton>

        </main>
    )
}


export default DepositarForm
