"use client";

import { Github, Instagram, Mail, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  product: [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Comment ça marche", href: "#how-it-works" },
    { name: "Beta", href: "#beta" },
  ],
  company: [
    { name: "À propos", href: "#team" },
    { name: "Équipe", href: "#team" },
    { name: "Contact", href: "mailto:contact@edukai.fr" },
  ],
  resources: [
    { name: "Support", href: "/support" },
    { name: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  ],
};

const teamMembers = [
  "Tristan Hourtoulle",
  "Khalid Belkassmi E.H.",
  "Lucas Rossignon",
];

export function Footer() {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    if (href.startsWith("mailto:")) {
      // Handle email links
      window.location.href = href;
    } else if (href.startsWith("http")) {
      // Handle external links
      window.open(href, "_blank", "noopener noreferrer");
    } else if (href.startsWith("#")) {
      // Handle anchor links - navigate to home page first, then scroll
      if (window.location.pathname !== "/") {
        router.push("/" + href);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Handle internal page navigation
      router.push(href);
    }
  };

  return (
    <footer className="bg-gradient-header relative overflow-hidden">
      {/* Vague de transition */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-white transform rotate-180"
        >
          <path d="M0,60 C300,0 600,120 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
        {/* Footer Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 transition-transform duration-200 group-hover:scale-110">
                <Image
                  src="/images/Pingus Icon.png"
                  alt="Edukai Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white satoshi-bold group-hover:text-gray-100 transition-colors">
                Edukai
              </span>
            </Link>
            <p className="text-white/80 outfit-regular leading-relaxed mb-6">
              Révolutionnez votre façon d&apos;apprendre avec l&apos;intelligence artificielle. 
              Transformez vos cours en quiz interactifs en quelques secondes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/edukaifr/?hl=fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://github.com/EdukaiFR/website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:contact@edukai.fr"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Liens Produit */}
          <div>
            <h3 className="text-white font-semibold satoshi-medium mb-4">Produit</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-white/80 hover:text-white transition-colors outfit-regular text-sm cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens Entreprise */}
          <div>
            <h3 className="text-white font-semibold satoshi-medium mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-white/80 hover:text-white transition-colors outfit-regular text-sm cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens Ressources */}
          <div>
            <h3 className="text-white font-semibold satoshi-medium mb-4">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-white/80 hover:text-white transition-colors outfit-regular text-sm cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Badge Beta */}
            <div className="mt-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <span className="text-white/90 text-xs satoshi-medium">
                  🚀 Beta - Juillet 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2 sm:mb-0">
                <span className="text-white/80 text-sm outfit-regular">
                  © 2024 Edukai. Fait avec
                </span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </div>
              <span className="text-white/80 text-sm outfit-regular">
                par l&apos;équipe Edukai
              </span>
            </div>

            {/* Équipe */}
            <div className="text-center sm:text-right">
              <p className="text-white/60 text-sm outfit-regular mb-2">
                Développé par
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-end space-y-1 sm:space-y-0 sm:space-x-2">
                {teamMembers.map((member, index) => (
                  <div key={member} className="flex items-center justify-center sm:justify-end">
                    <span className="text-white/80 text-sm satoshi-medium">
                      {member}
                    </span>
                    {index < teamMembers.length - 1 && (
                      <span className="text-white/60 mx-2 hidden sm:inline">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission finale */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm outfit-regular max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            <span className="font-semibold text-white satoshi-medium">Notre mission :</span> 
            {" "}Aider les étudiants à apprendre plus efficacement en révolutionnant 
            la création de matériel de révision grâce à l&apos;intelligence artificielle.
          </p>
        </div>
      </div>

      {/* Pattern background subtil */}
      <div className="absolute inset-0 wave-pattern opacity-5"></div>
    </footer>
  );
} 