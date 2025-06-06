"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, Zap, Sparkles, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-header">
      {/* Éléments flottants d'arrière-plan avec effets de lueur adoucis */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orbes flottantes avec glass morphism et lueur adoucie sans bordures */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/15 backdrop-blur-3xl rounded-full animate-float-glow shadow-[0_0_60px_rgba(255,255,255,0.15)]"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/12 backdrop-blur-3xl rounded-full animate-float-glow-slow delay-[800ms] shadow-[0_0_55px_rgba(255,255,255,0.12)]"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/18 backdrop-blur-3xl rounded-full animate-float-glow-fast delay-[400ms] shadow-[0_0_50px_rgba(255,255,255,0.2)]"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/8 backdrop-blur-3xl rounded-full animate-float-glow-slow delay-[1200ms] shadow-[0_0_65px_rgba(255,255,255,0.1)]"></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-white/14 backdrop-blur-3xl rounded-full animate-float-glow-fast delay-[600ms] shadow-[0_0_52px_rgba(255,255,255,0.16)]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-18 h-18 bg-white/16 backdrop-blur-3xl rounded-full animate-float-glow delay-[1000ms] shadow-[0_0_58px_rgba(255,255,255,0.18)]"></div>
        <div className="absolute top-1/3 left-1/2 w-10 h-10 bg-white/13 backdrop-blur-3xl rounded-full animate-float-glow-fast delay-[200ms] shadow-[0_0_48px_rgba(255,255,255,0.14)]"></div>
        <div className="absolute bottom-1/2 right-1/4 w-22 h-22 bg-white/10 backdrop-blur-3xl rounded-full animate-float-glow-slow delay-[1400ms] shadow-[0_0_62px_rgba(255,255,255,0.12)]"></div>
        
        {/* Icônes flottantes avec animations flocon variées et délais irréguliers */}
        <div className="absolute top-10 left-1/4 animate-snowfall-slow delay-[3200ms]">
          <BookOpen className="w-8 h-8 text-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        </div>
        <div className="absolute top-16 right-1/4 animate-snowfall-fast delay-[7800ms]">
          <Brain className="w-8 h-8 text-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        </div>
        <div className="absolute top-8 left-16 animate-snowfall-medium delay-[1500ms]">
          <Zap className="w-8 h-8 text-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        </div>
        <div className="absolute top-12 right-1/3 animate-snowfall-zigzag delay-[5600ms]">
          <Sparkles className="w-6 h-6 text-white/25 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
        </div>
        <div className="absolute top-20 left-1/2 animate-snowfall-drift delay-[2400ms]">
          <Target className="w-7 h-7 text-white/25 drop-shadow-[0_0_13px_rgba(255,255,255,0.25)]" />
        </div>
        <div className="absolute top-6 right-16 animate-snowfall-gentle delay-[9100ms]">
          <Lightbulb className="w-6 h-6 text-white/25 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-32 md:pt-40">
          {/* Badge Beta */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8 cursor-default hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <span className="text-white/90 text-sm font-medium">
              🚀 Beta disponible en Juillet 2025
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 satoshi-bold leading-tight">
            Révolutionnez votre
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent hover:from-yellow-200 hover:to-orange-200 transition-all duration-300">
              façon d&apos;apprendre
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto outfit-regular leading-relaxed px-4 sm:px-0">
            Edukai transforme automatiquement vos cours en quiz interactifs et fiches de révision personnalisées.
            Plus de temps perdu à préparer, concentrez-vous sur l&apos;apprentissage !
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg satoshi-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 group w-full sm:w-auto"
            >
              Rejoindre la Beta
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/40 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/60 hover:text-white hover:shadow-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg satoshi-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Découvrir les fonctionnalités</span>
              <span className="sm:hidden">Découvrir</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
            <div className="text-center cursor-default hover:scale-105 transition-all duration-300 p-2 sm:p-4 rounded-lg hover:bg-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 satoshi-bold">95%</div>
              <div className="text-white/80 text-xs sm:text-sm outfit-regular">Gain de temps</div>
            </div>
            <div className="text-center cursor-default hover:scale-105 transition-all duration-300 p-2 sm:p-4 rounded-lg hover:bg-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 satoshi-bold">10+</div>
              <div className="text-white/80 text-xs sm:text-sm outfit-regular">Formats supportés</div>
            </div>
            <div className="text-center cursor-default hover:scale-105 transition-all duration-300 p-2 sm:p-4 rounded-lg hover:bg-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 satoshi-bold">∞</div>
              <div className="text-white/80 text-xs sm:text-sm outfit-regular">Quiz générés</div>
            </div>
          </div>

          {/* Aperçu de la plateforme - Screenshot unique */}
          <div className="relative max-w-5xl mx-auto mb-0 pb-16 sm:pb-24 md:pb-40 px-4 sm:px-0">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-white/80 text-sm outfit-regular mb-4">Découvrez la plateforme en action</p>
            </div>
            
            {/* Screenshot principal avec effet glass */}
            <div className="relative bg-white/8 backdrop-blur-lg rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-white/15 shadow-[0_0_60px_rgba(255,255,255,0.08)] hover:scale-[1.02] transition-all duration-500">
              <Image
                src="/platform-screen/homepage.png"
                alt="Interface principale d'Edukai"
                width={1200}
                height={800}
                className="rounded-lg sm:rounded-xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,20 600,60 C850,100 1050,20 1200,40 L1200,120 L0,120 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
} 