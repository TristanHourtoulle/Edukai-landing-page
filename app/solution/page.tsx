import { Button } from "@/components/ui/button";
import {
  AlarmClockCheck,
  BookOpen,
  Brain,
  FileText,
  GraduationCap,
  PencilRuler,
  Wand,
} from "lucide-react";

export default function Solution() {
  return (
    <div className="outfit-regular w-full h-full flex flex-col items-center justify-center gap-5 lg:gap-20 pb-[5%] px-8 mt-5 lg:mt-0">
      {/* Section 1: En-tête et Résumé */}
      <section className="text-center w-full lg:max-w-2xl">
        <h1 className="text-xl lg:text-5xl text-white font-bold">
          Une solution <span className="text-primary-500">sur-mesure</span> pour
          optimiser tes révisions
        </h1>
        <p className="text-sm lg:text-lg text-white text-opacity-75 mt-1 lg:mt-4">
          Gagne du temps, révise efficacement et accède à un contenu adapté à
          tes besoins.
        </p>
      </section>

      {/* Section 2: Fonctionnalités Principales */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="flex flex-col justify-between bg-primary-500 bg-opacity-15 rounded-lg p-4 lg:p-8 shadow-lg hover:scale-105 transform transition-all">
          <AlarmClockCheck size={50} className="text-white" />
          <h3 className="text-lg lg:text-2xl text-primary-500 font-semibold mt-4">
            Gain de Temps
          </h3>
          <p className="text-white text-opacity-75 text-sm lg:text-lg mt-2">
            Edukai génère automatiquement des fiches et quiz à partir de tes
            documents, t'économisant de longues heures de préparation.
          </p>
        </div>

        <div className="flex flex-col justify-between bg-primary-500 bg-opacity-15 rounded-lg p-4 lg:p-8 shadow-lg hover:scale-105 transform transition-all">
          <Brain size={50} className="text-white" />
          <h3 className="text-lg lg:text-2xl text-primary-500 font-semibold mt-4">
            Automatisation Intelligente
          </h3>
          <p className="text-white text-opacity-75 text-sm lg:text-lg mt-2">
            Notre IA analyse tes cours pour créer des fiches de révisions
            optimisées et des quiz adaptés.
          </p>
        </div>

        <div className="flex flex-col justify-between bg-primary-500 bg-opacity-15 rounded-lg p-4 lg:p-8 shadow-lg hover:scale-105 transform transition-all">
          <PencilRuler size={50} className="text-white" />
          <h3 className="text-lg lg:text-2xl text-primary-500 font-semibold mt-4">
            Personnalisation sur-mesure
          </h3>
          <p className="text-white text-opacity-75 text-sm lg:text-lg mt-2">
            Chaque fiche et quiz sont adaptés spécifiquement à ton cours pour une
            révision plus ciblée.
          </p>
        </div>
      </section>

      {/* Section 3: Processus d'utilisation */}
      <section className="text-center max-w-6xl">
        <h2 className="text-xl lg:text-4xl text-white font-bold mb-8">
          Comment ça marche ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-primary-500 bg-opacity-15 rounded-lg p-6 shadow-lg">
            <FileText size={60} className="text-white" />
            <h3 className="text-lg lg:text-xl text-primary-500 font-semibold mt-4">
              Upload
            </h3>
            <p className="text-white text-opacity-75 text-sm lg:text-lg mt-2">
              Envoie ton cours, sous forme de photo ou de fichier.
            </p>
          </div>

          <div className="flex flex-col items-center bg-primary-500 bg-opacity-15 rounded-lg p-6 shadow-lg">
            <Wand size={60} className="text-white" />
            <h3 className="text-lg lg:text-xl text-primary-500 font-semibold mt-4">
              Laisse l'IA agir
            </h3>
            <p className="text-white text-opacity-75 text-sm lg:text-lg mt-2">
              Attends pendant que notre IA analyse ton cours.
            </p>
          </div>

          <div className="flex flex-col items-center bg-primary-500 bg-opacity-15 rounded-lg p-6 shadow-lg">
            <BookOpen size={60} className="text-white" />
            <h3 className="text-lg lg:text-xl text-primary-500 font-semibold mt-4">
              Apprends
            </h3>
            <p className="text-white text-opacity-75 text-sm lg:text-lg mt-2">
              Étudie grâce aux fiches de révision générées automatiquement.
            </p>
          </div>

          <div className="flex flex-col items-center bg-primary-500 bg-opacity-15 rounded-lg p-6 shadow-lg">
            <GraduationCap size={60} className="text-white" />
            <h3 className="text-lg lg:text-xl text-primary-500 font-semibold mt-4">
              Teste-toi
            </h3>
            <p className="text-white text-opacity-75 text-sm lg:text-lg mt-2">
              Teste tes connaissances avec des quiz personnalisés.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="text-center">
        <h2 className="text-2xl lg:text-4xl text-white font-bold">
          Prêt à transformer tes révisions ?
        </h2>
        <Button
          disabled
          className="bg-primary-500 text-white py-3 px-8 rounded-full shadow-xl mt-6 transition-all transform hover:scale-105"
        >
          Bientôt disponible !
        </Button>
      </section>
    </div>
  );
}
