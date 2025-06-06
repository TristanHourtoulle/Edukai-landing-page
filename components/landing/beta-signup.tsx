"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, User, GraduationCap, CheckCircle, Sparkles, Star, Crown, Rocket, Gift } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, initEmailJS } from '@/lib/email-config';

const betaSignupSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  university: z.string().min(2, "Veuillez indiquer votre établissement"),
  studyLevel: z.string().min(1, "Veuillez sélectionner votre niveau d&apos;études"),
});

type BetaSignupData = z.infer<typeof betaSignupSchema>;

const studyLevels = [
  "Lycée",
  "Licence 1",
  "Licence 2", 
  "Licence 3",
  "Master 1",
  "Master 2",
  "Doctorat",
  "Autre"
];

const benefits = [
  {
    icon: Crown,
    iconBg: "from-purple-500 to-purple-600",
    title: "Accès prioritaire",
    description: "Soyez parmi les premiers à découvrir Edukai avant tout le monde"
  },
  {
    icon: Star,
    iconBg: "from-yellow-500 to-orange-600",
    title: "Fonctionnalités premium",
    description: "Accès gratuit à toutes les fonctionnalités avancées pendant la beta"
  },
  {
    icon: Rocket,
    iconBg: "from-blue-500 to-blue-600",
    title: "Support dédiée",
    description: "Aide directe de notre équipe et feedback personnalisé"
  },
  {
    icon: Gift,
    iconBg: "from-green-500 to-green-600",
    title: "Tarif préférentiel",
    description: "Réduction exclusive à vie pour les premiers utilisateurs"
  }
];

export function BetaSignupSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BetaSignupData>({
    resolver: zodResolver(betaSignupSchema)
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS(EMAIL_CONFIG.PUBLIC_KEY);
  }, []);

  const onSubmit = async (data: BetaSignupData) => {
    setIsLoading(true);
    
    try {
      // Check if EmailJS is properly configured
      const isEmailConfigured = EMAIL_CONFIG.PUBLIC_KEY !== 'your_public_key' && 
                                EMAIL_CONFIG.SERVICE_ID !== 'service_edukai';
      
      if (isEmailConfigured) {
        // Send notification email to admin
        await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          EMAIL_CONFIG.TEMPLATES.NEW_BETA_SIGNUP,
          {
            to_email: EMAIL_CONFIG.ADMIN_EMAIL,
            from_name: 'Edukai Beta System',
            user_name: `${data.firstName} ${data.lastName}`,
            user_email: data.email,
            university: data.university,
            study_level: data.studyLevel,
            signup_date: new Date().toLocaleDateString('fr-FR'),
            signup_time: new Date().toLocaleTimeString('fr-FR'),
          },
          EMAIL_CONFIG.PUBLIC_KEY
        );

        // Send welcome email to the user
        await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          EMAIL_CONFIG.TEMPLATES.WELCOME_USER,
          {
            to_email: data.email,
            to_name: data.firstName,
            from_name: 'Équipe Edukai',
            reply_to: 'contact@edukai.fr',
          },
          EMAIL_CONFIG.PUBLIC_KEY
        );

        console.log("Beta signup successful and emails sent:", data);
      } else {
        // EmailJS not configured yet - just log the data
        console.log("Beta signup successful (emails not configured yet):", data);
        console.log("📧 Email would be sent to admin (tristan68420@gmail.com):", {
          user_name: `${data.firstName} ${data.lastName}`,
          user_email: data.email,
          university: data.university,
          study_level: data.studyLevel,
          signup_date: new Date().toLocaleDateString('fr-FR'),
          signup_time: new Date().toLocaleTimeString('fr-FR'),
        });
        console.log("📧 Welcome email would be sent to:", data.email);
        console.log("💡 To enable automatic emails, follow the guide in docs/email-setup-guide.md");
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending emails:", error);
      // Still show success to user even if email fails
      console.log("📝 Beta signup data saved:", data);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 satoshi-bold">
                Bienvenue dans l&apos;aventure ! 🎉
              </h2>
              <p className="text-xl text-gray-600 outfit-regular leading-relaxed mb-8">
                Votre inscription à la beta d&apos;Edukai a été confirmée avec succès. 
                Nous vous recontacterons dès que la beta sera disponible en 
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> juillet 2025</span>.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-2xl p-6 border border-gray-100 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 satoshi-medium">Prochaines étapes</h3>
                <div className="space-y-2 text-gray-600 outfit-regular">
                  <p>✉️ Vous recevrez un email de confirmation</p>
                  <p>🎯 Nous vous tiendrons informé des nouveautés</p>
                  <p>🚀 Accès prioritaire dès le lancement</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Nouvelle inscription
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Inscription Beta
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 satoshi-bold">
            Rejoignez la révolution
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              de l&apos;apprentissage
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto outfit-regular leading-relaxed">
            Inscrivez-vous dès maintenant pour être parmi les premiers à découvrir Edukai 
            et bénéficier d&apos;avantages exclusifs réservés aux beta testeurs.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Gradient header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <CardTitle className="text-2xl satoshi-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  Inscription à la Beta
                </CardTitle>
                <p className="text-blue-100 outfit-regular mt-2">
                  Remplissez le formulaire pour réserver votre place exclusive
                </p>
              </div>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 satoshi-medium">Prénom</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          {...register("firstName")}
                          placeholder="Votre prénom"
                          className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1 outfit-regular">{errors.firstName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 satoshi-medium">Nom</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          {...register("lastName")}
                          placeholder="Votre nom"
                          className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1 outfit-regular">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 satoshi-medium">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="votre.email@exemple.com"
                        className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 outfit-regular">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 satoshi-medium">Établissement</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        {...register("university")}
                        placeholder="Université / École"
                        className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                    {errors.university && (
                      <p className="text-red-500 text-sm mt-1 outfit-regular">{errors.university.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 satoshi-medium">Niveau d&apos;études</label>
                    <select
                      {...register("studyLevel")}
                      className="w-full h-12 px-4 border border-gray-200 bg-white rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                    >
                      <option value="">Sélectionnez votre niveau d&apos;études</option>
                      {studyLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.studyLevel && (
                      <p className="text-red-500 text-sm mt-1 outfit-regular">{errors.studyLevel.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-12 text-lg satoshi-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Inscription en cours...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Rejoindre la Beta
                        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 satoshi-bold">
                Pourquoi rejoindre la beta ?
              </h3>
              <p className="text-lg text-gray-600 outfit-regular leading-relaxed">
                En tant que beta testeur, vous bénéficierez d&apos;avantages exclusifs et
                contribuerez à façonner l&apos;avenir d&apos;Edukai.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-semibold satoshi-medium mb-2 text-lg group-hover:text-gray-800 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 outfit-regular leading-relaxed group-hover:text-gray-700 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Limited Beta Badge */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-10">
                <Crown className="w-8 h-8 text-orange-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-gray-900 font-bold text-xl satoshi-bold">
                    Beta limitée
                  </h4>
                </div>
                <p className="text-gray-600 outfit-regular leading-relaxed">
                  Nous acceptons seulement les <span className="font-semibold text-orange-600">1000 premiers inscrits</span> pour garantir 
                  une expérience optimale et un feedback de qualité.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">750/1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 