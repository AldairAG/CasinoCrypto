// import { useState } from "react";
// import TextAreaInput from "../../components/ui/TextAreaInput";
// import SelectableList from "../../components/ui/SelectableList";
// import Boton from "../../components/ui/Boton";
// import {Support} from "../../components/icons/Icons"; // Importa el componente Icon

// const SupportContent: React.FC = () => {
//   const [selectedProblem, setSelectedProblem] = useState<string>("");
//   const [problemDescription, setProblemDescription] = useState<string>("");
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

//   const commonProblems = [
//     "Problemas con el inicio de sesión",
//     "Dificultades con pagos",
//     "Error en la visualización de datos",
//     "Problemas con la verificación de identidad",
//     "Funcionalidad no disponible",
//     "Otro problema"
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Simular envío a API
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       console.log("Problema enviado:", { selectedProblem, problemDescription });
//       setSubmitSuccess(true);
//       setSelectedProblem("");
//       setProblemDescription("");
//     } catch (error) {
//       console.error("Error al enviar:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (submitSuccess) {
//     return (
//       <div className="max-w-2xl mx-auto text-center py-8">
//         <div className="mb-4 text-green-600 dark:text-green-400">
//           <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//         </div>
//         <h2 className="text-xl font-bold dark:text-white mb-2">¡Solicitud enviada con éxito!</h2>
//         <p className="text-gray-600 dark:text-gray-300 mb-6">
//           Nuestro equipo de soporte se pondrá en contacto contigo pronto.
//         </p>
//         <button
//           onClick={() => setSubmitSuccess(false)}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Enviar otra solicitud
//         </button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
//       <div className="flex items-center mb-6 gap-2">
//         <Support className="text-blue-600 dark:text-blue-400 w-6 h-6" />
//         <h1 className="text-3xl font-bold dark:text-white">Soporte</h1>
//       </div>

//       <p className="text-gray-600 dark:text-gray-300 mb-6">
//         Seleccione el problema que más se acerque al que presenta
//       </p>

//       <SelectableList
//         items={commonProblems}
//         selectedItem={selectedProblem}
//         onSelect={setSelectedProblem}
//         className="mb-6"
//       />

//       <TextAreaInput
//         id="problem-description"
//         label="Descripción detallada del problema"
//         placeholder="Ingrese la descripción del problema aquí..."
//         value={problemDescription}
//         onChange={(e) => setProblemDescription(e.target.value)}
//         rows={6}
//         required
//       />

//       <Boton
//         type="submit"
//         disabled={!selectedProblem || !problemDescription || isSubmitting}
//         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//       >
//         {isSubmitting ? "Enviando..." : "Enviar"}
//       </Boton>
//     </form>
//   );
// };

// export default SupportContent;

import { useState } from "react";
import { Card, CardHeader, CardDescription } from "../../components/cards/Card";
import TextAreaInput from "../../components/ui/TextAreaInput";
import SelectableList from "../../components/ui/SelectableList";
import Boton from "../../components/ui/Boton";
import { Support } from "../../components/icons/Icons";
import { CheckCircleIcon } from "@heroicons/react/24/outline"; // Nuevo icono para éxito

const SupportContent: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<string>("");
  const [problemDescription, setProblemDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const commonProblems = [
    "Problemas con el inicio de sesión",
    "Dificultades con pagos",
    "Error en la visualización de datos",
    "Problemas con la verificación de identidad",
    "Funcionalidad no disponible",
    "Otro problema"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setSelectedProblem("");
      setProblemDescription("");
    } catch (error) {
      console.error("Error al enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Card className="max-w-2xl mx-auto text-center p-8">
        <div className="mb-4 text-green-600">
          <CheckCircleIcon className="w-12 h-12 mx-auto" />
        </div>
        <CardHeader className="text-xl font-bold mb-2">
          ¡Solicitud enviada con éxito!
        </CardHeader>
        <CardDescription className="mb-6">
          Nuestro equipo de soporte se pondrá en contacto contigo pronto.
        </CardDescription>
        <Boton 
          onClick={() => setSubmitSuccess(false)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Enviar otra solicitud
        </Boton>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[1600px] h-full">
      <Card className="h-full">
        <div className="flex items-center gap-2 mb-4">
          <Support className="text-blue-600 w-6 h-6" />
          <CardHeader className="text-3xl font-bold">
            Soporte
          </CardHeader>
        </div>

        <CardDescription className="mb-6">
          Seleccione el problema que más se acerque al que presenta
        </CardDescription>

        <SelectableList
          items={commonProblems}
          selectedItem={selectedProblem}
          onSelect={setSelectedProblem}
          className="mb-6"
        />

        <TextAreaInput
          id="problem-description"
          label="Descripción detallada del problema"
          placeholder="Describa su problema aquí..."
          value={problemDescription}
          onChange={(e) => setProblemDescription(e.target.value)}
          rows={6}
          required
          className="bg-gray-50 border-gray-300 focus:ring-blue-500"
        />

        <div className="flex justify-end">
          <Boton
            type="submit"
            disabled={!selectedProblem || !problemDescription || isSubmitting}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
          </Boton>
        </div>
      </Card>


    </form>
  );
};

export default SupportContent;