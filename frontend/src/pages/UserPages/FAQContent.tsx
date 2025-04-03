import Accordion from "../../components/ui/Accordion";

interface FAQContentProps {
  onNavigateToSupport?: () => void;
}

const FAQContent: React.FC<FAQContentProps> = ({ onNavigateToSupport }) => {
  const faqItems = [
    {
      question: "¿Cómo puedo restablecer mi contraseña?",
      answer: "Puedes restablecer tu contraseña desde la sección 'Cambiar email y password'. Necesitarás acceso al correo electrónico asociado a tu cuenta."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito/débito (Visa, MasterCard, American Express), transferencias bancarias y PayPal."
    },
    {
      question: "¿Cómo verifico mi identidad?",
      answer: "Debes subir un documento de identificación válido y un comprobante de domicilio reciente en la sección 'Confirmación de identidad'."
    },
    {
      question: "¿Dónde puedo ver mi historial de transacciones?",
      answer: "Todas tus transacciones están disponibles en la sección 'Historial' > 'Operaciones'."
    }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold dark:text-white mb-6">Preguntas Frecuentes</h2>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <Accordion key={index} title={item.question}>
            <p>{item.answer}</p>
          </Accordion>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
        <h3 className="font-semibold dark:text-white mb-2">¿No encontraste lo que buscabas?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3">Contáctanos directamente a través de nuestra sección de Soporte.</p>
        <button 
          type="button"
          onClick={onNavigateToSupport}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Ir a Soporte
        </button>
      </div>
    </div>
  );
};

export default FAQContent;