import { USER_ROUTES } from '../../constants/ROUTERS'
import { useUser } from '../../hooks/useUser'
import BotonCarrito from '../cards/BotonCarrito'
import Avatar from '../ui/Avatar'

const Header = () => {

    const { navigateTo } = useUser()

    return (
        <header className="w-full flex flex-col bg-gray-100 shadow-md">
            <div className="h-25 flex px-4 items-center justify-between">
                <h1 className="text-5xl text-red-600">CasiNova</h1>
                <div className='flex gap-4 '>
                    <BotonCarrito />
                    <Avatar/>
                </div>
            </div>
            <div className="flex bg-gray-300 items-center justify-center">
                <span className="px-6 py-3 font-semibold py border-b-2 border-red-600">Deportes</span>
                <span onClick={()=> navigateTo(USER_ROUTES.USER_PROFILE)}className="px-6 py-3 font-semibold py">Casino</span>
                <span onClick={() => navigateTo(USER_ROUTES.QUINIELAS_LIST)} className="px-6 py-3 font-semibold py ">Quinielas</span>
            </div>

        </header>
    )
}

export default Header