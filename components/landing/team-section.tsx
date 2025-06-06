"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Sparkles, Heart, Star } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Tristan Hourtoulle",
    role: "Frontend Developer & Designer",
    description: "Passionné par l'UX/UI et les technologies frontend modernes. Créateur du design d'Edukai et spécialisé en React, Next.js et design systems.",
    avatar: "/images/team/Tristan (1).png",
    color: "from-blue-500 to-blue-600",
    lightColor: "from-blue-50 to-blue-100",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "Figma"]
  },
  {
    name: "Khalid Belkassmi E.H.",
    role: "Backend Developer & AI",
    description: "Expert en intelligence artificielle et développement backend. Architecte des solutions d'IA d'Edukai qui révolutionnent l'apprentissage.",
    avatar: "/images/team/Khalid (1).png",
    color: "from-purple-500 to-purple-600",
    lightColor: "from-purple-50 to-purple-100",
    skills: ["NodeJS", "AI/ML", "Backend", "Data Science", "MongoDB"]
  },
  {
    name: "Lucas Rossignon",
    role: "Mobile Developer",
    description: "Développeur mobile spécialisé dans la création d'applications natives et cross-platform performantes pour une expérience mobile exceptionnelle.",
    avatar: "/images/team/Lucas (1).png",
    color: "from-green-500 to-green-600",
    lightColor: "from-green-50 to-green-100",
    skills: ["React Native", "iOS", "Android", "Mobile UX", "Swift", "Kotlin"]
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Notre équipe
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 satoshi-bold">
            Rencontrez les créateurs
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              d&apos;Edukai
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto outfit-regular leading-relaxed">
            Une équipe passionnée et motivée par le même objectif : 
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> aider les étudiants à apprendre plus efficacement.</span>
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-3 overflow-hidden relative"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.lightColor} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`}></div>
              
              {/* Animated border glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ease-out scale-105`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Avatar with enhanced styling */}
                <div className="relative mb-6 group-hover:mb-8 transition-all duration-500 ease-out">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    {/* Profile image */}
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                      <Image
                        src={member.avatar}
                        alt={`Photo de ${member.name}`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Animated border */}
                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out p-0.5`}>
                      <div className="w-full h-full rounded-xl bg-white"></div>
                    </div>
                    
                    {/* Floating glow effect */}
                    <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-r ${member.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg scale-150 transition-all duration-700 ease-out`}></div>
                  </div>
                </div>
                
                {/* Name and role */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 satoshi-medium group-hover:scale-105 transition-transform duration-300 ease-out">
                  {member.name}
                </h3>
                <Badge 
                  variant="secondary" 
                  className={`mb-4 bg-gradient-to-r ${member.color} text-white border-0 group-hover:scale-105 transition-transform duration-300 ease-out`}
                >
                  {member.role}
                </Badge>
                
                {/* Description */}
                <p className="text-gray-600 outfit-regular leading-relaxed mb-6 text-sm group-hover:text-gray-700 transition-colors duration-300 ease-out">
                  {member.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-xs satoshi-medium text-gray-700 border border-gray-100 group-hover:bg-white transition-all duration-300 ease-out hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Social links */}
                <div className="flex justify-center gap-3">
                  <button className="p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg group/btn">
                    <Github className="w-4 h-4 text-gray-700 group-hover/btn:text-gray-900" />
                  </button>
                  <button className="p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg group/btn">
                    <Linkedin className="w-4 h-4 text-gray-700 group-hover/btn:text-blue-600" />
                  </button>
                  <button className="p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg group/btn">
                    <Mail className="w-4 h-4 text-gray-700 group-hover/btn:text-green-600" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission statement with enhanced design */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-gray-100 max-w-5xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-10">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-10">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 satoshi-medium">
                Notre mission
              </h3>
              <p className="text-lg text-gray-600 outfit-regular leading-relaxed max-w-3xl mx-auto mb-8">
                Nous croyons que l&apos;apprentissage doit être <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">accessible, efficace et personnalisé</span>. 
                Edukai est né de notre volonté de révolutionner la façon dont les étudiants abordent leurs révisions, 
                en utilisant l&apos;intelligence artificielle pour créer des expériences d&apos;apprentissage sur mesure.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <span className="satoshi-medium text-gray-900 font-semibold">Simplifier</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🧠</span>
                  </div>
                  <span className="satoshi-medium text-gray-900 font-semibold">Personnaliser</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <span className="satoshi-medium text-gray-900 font-semibold">Réussir</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 satoshi-medium">
            Suivez notre aventure
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.instagram.com/edukaifr/?hl=fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">📸</span>
              </div>
              <div className="text-left">
                <span className="block font-semibold text-gray-900 satoshi-medium">Instagram</span>
                <span className="text-sm text-gray-600 outfit-regular">@edukaifr</span>
              </div>
            </a>
            
            <a 
              href="https://github.com/EdukaiFR/website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="block font-semibold text-gray-900 satoshi-medium">GitHub</span>
                <span className="text-sm text-gray-600 outfit-regular">Open Source</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 