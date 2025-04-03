import { useState } from "react";
import TextAreaInput from "../../components/ui/TextAreaInput";
import SelectableList from "../../components/ui/SelectableList";
import Boton from "../../components/ui/Boton";
import Icon from "../../components/ui/Icon"; // Importa el componente Icon

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
      // Simular envío a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Problema enviado:", { selectedProblem, problemDescription });
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
      <div className="max-w-2xl mx-auto text-center py-8">
        <div className="mb-4 text-green-600 dark:text-green-400">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold dark:text-white mb-2">¡Solicitud enviada con éxito!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Nuestro equipo de soporte se pondrá en contacto contigo pronto.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6 gap-2">
        <Icon name="support" className="text-blue-600 dark:text-blue-400 w-6 h-6" />
        <h1 className="text-3xl font-bold dark:text-white">Soporte</h1>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Seleccione el problema que más se acerque al que presenta
      </p>

      <SelectableList
        items={commonProblems}
        selectedItem={selectedProblem}
        onSelect={setSelectedProblem}
        className="mb-6"
      />

      <TextAreaInput
        id="problem-description"
        label="Descripción detallada del problema"
        placeholder="Ingrese la descripción del problema aquí..."
        value={problemDescription}
        onChange={(e) => setProblemDescription(e.target.value)}
        rows={6}
        required
      />

      <Boton
        type="submit"
        disabled={!selectedProblem || !problemDescription || isSubmitting}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Boton>
    </form>
  );
};

export default SupportContent;