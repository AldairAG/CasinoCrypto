import { ReactNode } from 'react';

interface VentanaModalProps {
    isOpen: boolean;
    setOpen: () => void;
    children: ReactNode;
}

const VentanaModal = ({ isOpen, setOpen, children }: VentanaModalProps) => {
    
    return (
        <div className={`fixed inset-0 z-50 h-full w-full flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black opacity-50" onClick={setOpen}/>
            <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-md w-full">
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={setOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
}

export default VentanaModal;