"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navigationItems = [
  { name: "Fonctionnalités", href: "#features" },
  { name: "Comment ça marche", href: "#how-it-works" },
  { name: "Équipe", href: "#team" },
  { name: "Beta", href: "#beta" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener noreferrer");
    } else if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        sessionStorage.setItem('scrollTarget', href);
        router.push("/");
        
        const scrollToTarget = () => {
          const target = sessionStorage.getItem('scrollTarget');
          if (target) {
            setTimeout(() => {
              const element = document.querySelector(target);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                sessionStorage.removeItem('scrollTarget');
              }
            }, 300);
          }
        };

        setTimeout(scrollToTarget, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Enhanced responsive header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/80 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Responsive Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/Pingus Icon.png"
                  alt="Edukai Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:scale-105">
                Edukai
              </span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200 cursor-pointer hover:scale-105 transform"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                onClick={() => handleNavigation("#beta")}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-medium px-4 xl:px-6 py-2.5 rounded-full text-sm"
              >
                <span className="hidden xl:inline">Rejoindre la Beta</span>
                <span className="xl:hidden">Beta</span>
                <ArrowRight className="ml-1 xl:ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span 
                    className={`absolute top-1 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                    }`}
                  />
                  <span 
                    className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span 
                    className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu with Advanced Animations */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-16 sm:top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-500 ease-out ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100 scale-100' 
              : '-translate-y-8 opacity-0 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 sm:p-8">
            {/* Menu Items with Staggered Animation */}
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`transform transition-all duration-500 ease-out ${
                    isMobileMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 100 + 100}ms` : '0ms'
                  }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer font-medium py-4 px-4 rounded-xl hover:bg-blue-50/80 hover:scale-[1.02] transform group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                      {item.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>
            
            {/* CTA Button with Animation */}
            <div 
              className={`pt-6 mt-6 border-t border-gray-200/50 transform transition-all duration-500 ease-out ${
                isMobileMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? '500ms' : '0ms'
              }}
            >
              <Button
                onClick={() => handleNavigation("#beta")}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl py-4 text-base"
              >
                <span>Rejoindre la Beta</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 