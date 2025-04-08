// import Accordion from "../../components/ui/Accordion";

// interface FAQContentProps {
//   onNavigateToSupport?: () => void;
// }

// const FAQContent: React.FC<FAQContentProps> = ({ onNavigateToSupport }) => {
//   const faqItems = [
//     {
//       question: "¿Cómo puedo restablecer mi contraseña?",
//       answer: "Puedes restablecer tu contraseña desde la sección 'Perfil' > 'Cambio de credenciales'. Necesitarás acceso al correo electrónico asociado a tu cuenta."
//     },

//     {
//       question: "¿Cómo verifico mi identidad?",
//       answer: "Debes subir un documento de identificación válido y un comprobante de domicilio reciente en la sección 'Confirmación de identidad'."
//     },
//     {
//       question: "¿Dónde puedo ver mi historial de transacciones?",
//       answer: "Todas tus transacciones están disponibles en la sección 'Transacciones' "
//     }
//   ];

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold dark:text-white mb-6">Preguntas Frecuentes</h2>
      
//       <div className="space-y-4">
//         {faqItems.map((item, index) => (
//           <Accordion key={index} title={item.question}>
//             <p>{item.answer}</p>
//           </Accordion>
//         ))}
//       </div>

//       <div className="mt-8 bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
//         <h3 className="font-semibold dark:text-white mb-2">¿No encontraste lo que buscabas?</h3>
//         <p className="text-gray-600 dark:text-gray-300 mb-3">Contáctanos directamente a través de nuestra sección de Soporte.</p>
//         <button 
//           type="button"
//           onClick={onNavigateToSupport}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Ir a Soporte
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FAQContent;

import Accordion from "../../components/ui/Accordion";
import { Card, CardHeader, CardDescription } from "../../components/cards/Card";
import Boton from "../../components/ui/Boton"; // Si tienes este componente

interface FAQContentProps {
  onNavigateToSupport?: () => void;
}

const FAQContent: React.FC<FAQContentProps> = ({ onNavigateToSupport }) => {
  const faqItems = [
    {
      question: "¿Cómo puedo restablecer mi contraseña?",
      answer: "Puedes restablecer tu contraseña desde la sección 'Perfil' > 'Cambio de credenciales'. Necesitarás acceso al correo electrónico asociado a tu cuenta."
    },
    {
      question: "¿Cómo verifico mi identidad?",
      answer: "Debes subir un documento de identificación válido y un comprobante de domicilio reciente en la sección de 'Perfil' > 'Confirmación de identidad'."
    },
    {
      question: "¿Dónde puedo ver mi historial de transacciones?",
      answer: "Todas tus transacciones están disponibles en la sección 'Transacciones'."
    }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Encabezado con CardHeader */}
      <CardHeader className="text-2xl font-bold text-gray-900 mb-6">
        Preguntas Frecuentes
      </CardHeader>
      
      {/* Lista de Acordeones */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <Accordion 
            key={index} 
            title={item.question}
            className="bg-white border border-gray-200 rounded-lg shadow-sm"
            titleClassName="font-medium text-gray-800"
          >
            <CardDescription className="p-4 text-gray-600">
              {item.answer}
            </CardDescription>
          </Accordion>
        ))}
      </div>

      {/* Sección de Soporte con Card */}
      <Card className="mt-8 bg-blue-50 border border-blue-100">
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2">¿No encontraste lo que buscabas?</h3>
          <CardDescription className="text-gray-600 mb-3">
            Contáctanos directamente a través de nuestra sección de Soporte.
          </CardDescription>
          <Boton 
            onClick={onNavigateToSupport}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700"
          >
            Ir a Soporte
          </Boton>
        </div>
      </Card>
    </div>
  );
};

export default FAQContent;