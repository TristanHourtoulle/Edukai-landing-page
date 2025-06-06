"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Upload, Zap, BookOpen, BarChart3, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Importez vos cours",
    description: "Déposez vos fichiers PDF, Word, images ou tapez votre texte. Edukai accepte tous les formats.",
    color: "from-blue-500 to-blue-600",
    lightColor: "from-blue-50 to-blue-100"
  },
  {
    icon: Zap,
    number: "02", 
    title: "IA analyse le contenu",
    description: "Notre intelligence artificielle analyse votre contenu et identifie les concepts clés à retenir.",
    color: "from-purple-500 to-purple-600",
    lightColor: "from-purple-50 to-purple-100"
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Quiz générés automatiquement",
    description: "Recevez instantanément des quiz personnalisés et des fiches de révision adaptées à votre niveau.",
    color: "from-green-500 to-green-600",
    lightColor: "from-green-50 to-green-100"
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Suivez vos progrès",
    description: "Analysez vos performances, identifiez vos points faibles et améliorez-vous continuellement.",
    color: "from-orange-500 to-orange-600",
    lightColor: "from-orange-50 to-orange-100"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-orange-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full border border-purple-100 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Comment ça marche
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 satoshi-bold">
            Simple comme
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mt-2">
              1, 2, 3, 4 !
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto outfit-regular leading-relaxed">
            En quelques clics, transformez n&apos;importe quel contenu de cours en expérience 
            d&apos;apprentissage interactive et personnalisée.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines on desktop */}
          <div className="hidden lg:block absolute top-20 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 via-green-300 to-orange-300 opacity-30"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-5 hover:rotate-1 overflow-hidden group-hover:scale-[1.03] transform-gpu">
                {/* Enhanced gradient background on hover with animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.lightColor} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`}></div>
                
                {/* Animated border glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ease-out scale-105`}></div>
                
                {/* Large number background with enhanced animation */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 satoshi-bold group-hover:text-gray-50 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-12">
                  {step.number}
                </div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Enhanced icon with multiple effects */}
                  <div className="relative mb-6 group-hover:mb-8 transition-all duration-500 ease-out">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 ease-out group-hover:shadow-2xl`}>
                      <step.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                    </div>
                    {/* Enhanced number badge with animation */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300 ease-out">
                      <span className="text-xs font-bold text-gray-700">{index + 1}</span>
                    </div>
                    {/* Pulsing glow effect behind icon */}
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg scale-150 transition-all duration-700 ease-out group-hover:animate-pulse`}></div>
                  </div>
                  
                  {/* Enhanced title with animation */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 satoshi-medium group-hover:text-gray-800 transition-all duration-300 ease-out group-hover:scale-105">
                    {step.title}
                  </h3>
                  
                  {/* Enhanced description with subtle animation */}
                  <p className="text-gray-600 outfit-regular leading-relaxed mb-6 group-hover:text-gray-700 transition-all duration-300 ease-out">
                    {step.description}
                  </p>

                  {/* Enhanced progress indicator with animation */}
                  <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300 ease-out">
                    <div className={`h-1 flex-1 bg-gradient-to-r ${step.color} rounded-full group-hover:h-1.5 transition-all duration-300 ease-out relative overflow-hidden`}>
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-gray-600 group-hover:font-semibold transition-all duration-300 ease-out">Étape {index + 1}</span>
                  </div>
                </CardContent>
                
                {/* Enhanced hover border effect with animation */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-all duration-500 ease-out`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
                  <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r ${step.color} rounded-full animate-ping`}></div>
                  <div className={`absolute top-3/4 right-1/4 w-1 h-1 bg-gradient-to-r ${step.color} rounded-full animate-ping`} style={{animationDelay: '200ms'}}></div>
                  <div className={`absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gradient-to-r ${step.color} rounded-full animate-ping`} style={{animationDelay: '400ms'}}></div>
                </div>
              </Card>
              
              {/* Enhanced arrow connector with animation */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-8 group">
                  <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300 ease-out">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 group-hover:w-12 transition-all duration-300 ease-out"></div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:scale-110 transition-all duration-300 ease-out" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-12 transition-all duration-300 ease-out"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Comparison Section */}
        <div className="mt-24 mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-green-50 rounded-full border border-orange-100 mb-6">
              <span className="text-sm font-medium bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent">
                Pourquoi choisir Edukai ?
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 satoshi-bold">
              Révolutionnez votre
              <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-green-600 bg-clip-text text-transparent mt-2">
                façon d&apos;étudier
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto outfit-regular leading-relaxed">
              Découvrez pourquoi des milliers d&apos;étudiants abandonnent les méthodes traditionnelles pour Edukai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Traditional Method */}
            <div className="relative group">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 p-8 relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                {/* Subtle animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-red-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">😰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-red-700 satoshi-medium">Méthode traditionnelle</h4>
                      <p className="text-red-600 text-sm outfit-regular">Chronophage et fastidieuse</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-red-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="outfit-regular">Relire tous les cours plusieurs fois</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="outfit-regular">Créer des fiches manuellement</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="outfit-regular">Inventer des questions d&apos;entraînement</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="outfit-regular">Organiser et structurer le contenu</span>
                    </div>
                    <div className="flex items-center gap-3 text-red-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="outfit-regular">Réviser sans feedback personnalisé</span>
                    </div>
                  </div>

                  <div className="bg-red-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-red-700 satoshi-bold">4-6 heures</div>
                    <div className="text-red-600 text-sm outfit-regular">de préparation par cours</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Edukai Method */}
            <div className="relative group">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 p-8 relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                {/* Subtle animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-green-700 satoshi-medium">Avec Edukai</h4>
                      <p className="text-green-600 text-sm outfit-regular">Intelligent et efficace</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="outfit-regular">Importez votre cours en 1 clic</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="outfit-regular">IA génère automatiquement les fiches</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="outfit-regular">Quiz adaptatifs créés instantanément</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="outfit-regular">Contenu structuré automatiquement</span>
                    </div>
                    <div className="flex items-center gap-3 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="outfit-regular">Suivi personnalisé de vos progrès</span>
                    </div>
                  </div>

                  <div className="bg-green-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-green-700 satoshi-bold">2-5 minutes</div>
                    <div className="text-green-600 text-sm outfit-regular">pour tout préparer</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-3xl p-8 border border-gray-100 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 satoshi-medium">
                Les avantages d&apos;Edukai en chiffres
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 satoshi-bold">95%</div>
                  <div className="text-gray-600 text-sm outfit-regular">de temps économisé</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 satoshi-bold">3x</div>
                  <div className="text-gray-600 text-sm outfit-regular">plus efficace</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 satoshi-bold">+40%</div>
                  <div className="text-gray-600 text-sm outfit-regular">de réussite aux examens</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                <p className="text-lg font-semibold text-orange-600 satoshi-medium">
                  Rejoignez les 10,000+ étudiants qui ont déjà transformé leur réussite !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 satoshi-medium">
              Prêt à révolutionner votre apprentissage ?
            </h3>
            <p className="text-gray-600 mb-6 outfit-regular max-w-2xl mx-auto">
              Rejoignez des milliers d&apos;étudiants qui ont déjà transformé leur façon d&apos;étudier avec Edukai.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Mise en place en 2 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Aucune installation requise</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Accès immédiat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 