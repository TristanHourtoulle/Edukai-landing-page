"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Zap, 
  Brain, 
  Target,
  Scan,
  BarChart3,
  Sparkles,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Génération instantanée",
    description: "Transformez vos cours en quiz et fiches de révision en quelques secondes grâce à notre IA avancée.",
    badge: "IA",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: FileText,
    title: "Support universel",
    description: "Tous vos formats de cours sont pris en charge : PDF, Word, images, texte et bien plus encore.",
    badge: "Universel",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Scan,
    title: "Reconnaissance intelligente",
    description: "Extrayez automatiquement le contenu de vos images et documents manuscrits avec précision.",
    badge: "Avancé",
    color: "from-green-400 to-emerald-600"
  },
  {
    icon: Brain,
    title: "Questions adaptatives",
    description: "Création automatique de questions pertinentes adaptées au niveau de difficulté de votre contenu.",
    badge: "Intelligent",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Target,
    title: "Personnalisation complète",
    description: "Adaptez vos quiz selon vos objectifs d&apos;apprentissage et votre niveau d&apos;études.",
    badge: "Sur mesure",
    color: "from-pink-400 to-rose-600"
  },
  {
    icon: BarChart3,
    title: "Analyse de performance",
    description: "Suivez vos progrès et identifiez vos points d&apos;amélioration avec des analyses détaillées.",
    badge: "Suivi",
    color: "from-indigo-400 to-indigo-600"
  }
];

const supportedFormats = [
  { name: "PDF", icon: "📄", description: "Documents PDF" },
  { name: "Word", icon: "📝", description: "Documents Word" },
  { name: "Images", icon: "🖼️", description: "JPG, PNG, etc." },
  { name: "Texte", icon: "📃", description: "Fichiers texte" },
  { name: "PowerPoint", icon: "📊", description: "Présentations" },
  { name: "Excel", icon: "📈", description: "Tableurs" }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fonctionnalités
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 satoshi-bold">
            Tout ce dont vous avez besoin
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              pour apprendre efficacement
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto outfit-regular leading-relaxed">
            Edukai combine intelligence artificielle et design intuitif pour révolutionner 
            votre expérience d&apos;apprentissage et maximiser votre réussite.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 bg-white/90 text-gray-700 border-0 shadow-md text-xs px-2 py-1"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 satoshi-medium">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 outfit-regular leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supported Formats Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-100 mb-6">
            <FileText className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Compatibilité
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 satoshi-bold">
            Formats supportés
          </h3>
          <p className="text-lg text-gray-600 mb-12 outfit-regular max-w-2xl mx-auto">
            Importez vos cours dans le format qui vous convient. Notre technologie s&apos;adapte à tous vos besoins.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
            {supportedFormats.map((format, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-lg">
                    {format.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 satoshi-medium text-sm md:text-base">
                    {format.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 outfit-regular">
                    {format.description}
                  </p>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Trust indicators */}
          <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-6 satoshi-medium">
              Votre sécurité, notre priorité
            </h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-semibold text-gray-900 block">100% Sécurisé</span>
                  <span className="text-xs text-gray-500">Chiffrement SSL</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-semibold text-gray-900 block">Données privées</span>
                  <span className="text-xs text-gray-500">Aucun stockage</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-semibold text-gray-900 block">Traitement rapide</span>
                  <span className="text-xs text-gray-500">Quelques secondes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 