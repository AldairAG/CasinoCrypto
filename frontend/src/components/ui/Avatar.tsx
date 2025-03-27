import { useState } from 'react';
import img from '../../assets/ususario.png'
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { WalletIcon } from "@heroicons/react/24/outline";
import { PowerIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

const Avatar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative border border-gray-300 rounded-md px-3 flex items-center gap-3"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        >
            <div className='flex w-8'>
                <img src={img} alt="user" />
            </div>
            <label className='font-semibold'>$ 0.00</label>
            <ChevronDownIcon className="h-5 w-5 text-gray-500 stroke-2" />
            
            {isOpen && (
                <>
                <div className=' absolute h-12 right-0 mt-2 w-40'></div>
                <div
                    className="absolute py-2 px-4 top-full right-0 mt-2 w-100 bg-white shadow-lg rounded-md border
                     border-gray-200 space-y-2 z-2">
                    <div className='flex flex-col'>
                        <span className='font-semibold text-gray-500 text-xl'>Usuario1</span>
                        <span className='font-semibold text-gray-400 text-sm'>eemail@gmail.com</span>
                    </div>
                    <div className=' bg-blue-900 rounded-md p-3 flex flex-col'>
                        <h1 className='font-semibold text-white text-xl'>$ 100.00</h1>
                        <span className='text-white text-xs'>Saldo total</span>
                    </div>

                    <ul className=" text-sm text-gray-700 space-y-2 bg-gray-200 rounded-md">
                        <li className="flex ps-6 space-x-2 items-center hover:bg-gray-100 py-4 px-2 rounded-md">
                            <UserCircleIcon className="h-6 w-6 text-gray-500" />
                            <label className='font-semibold '>Perfil</label>
                        </li>
                        <li className="flex ps-6 space-x-2 items-center hover:bg-gray-100 py-4 px-2 rounded-md">
                            <CalendarIcon className="h-6 w-6 text-gray-500" />

                            <label className='font-semibold '>Historial</label>
                        </li>
                        <li className="flex ps-6 space-x-2 items-center hover:bg-gray-100 py-4 px-2 rounded-md">
                            <WalletIcon className="h-6 w-6 text-gray-500" />
                            <label className='font-semibold '>Depositar</label>
                        </li>
                        <li className="flex ps-6 space-x-2 items-center hover:bg-gray-100 py-4 px-2 rounded-md">
                            <WalletIcon className="h-6 w-6 text-gray-500" />
                            <label className='font-semibold '>Retirar</label>
                        </li>
                        <li className="flex ps-6 space-x-2 items-center hover:bg-gray-100 py-4 px-2 rounded-md">
                            <WalletIcon className="h-6 w-6 text-gray-500" />
                            <label className='font-semibold '>Mis wallets</label>
                        </li>
                        <li className="flex ps-6 space-x-2 items-center hover:bg-gray-100 py-4 px-2 rounded-md">
                            <QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
                            <label className='font-semibold '>Preguntas frecuentes</label>
                        </li>
                        <li className="flex ps-6 space-x-2 items-center hover:bg-gray-100 py-4 px-2 rounded-md">
                            <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gray-500" />
                            <label className='font-semibold '>Soporte</label>
                        </li>
                    </ul>

                    <ul className=" text-sm text-gray-700 space-y-2 bg-gray-200 rounded-md">
                        <li className="flex ps-6 space-x-2 items-center hover:bg-gray-100 py-4 px-2 rounded-md">
                            <PowerIcon className="h-6 w-6 text-gray-500" />
                            <label className='font-semibold '>Cerrar sesión</label>
                        </li>
                    </ul>

                </div>
                </>
            )}
        </div>
    )
}

export default Avatar