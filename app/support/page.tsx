import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { ArrowLeft, HelpCircle, Mail, MessageCircle, Zap, Users, Clock, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Support et aide - Edukai",
  description: "Centre d&apos;aide Edukai. Trouvez des réponses à vos questions, contactez notre équipe et accédez aux ressources d&apos;aide.",
};

const faqs = [
  {
    category: "Généralités",
    icon: HelpCircle,
    color: "from-blue-500 to-blue-600",
    questions: [
      {
        question: "Qu'est-ce qu'Edukai ?",
        answer: "Edukai est une plateforme d&apos;apprentissage utilisant l&apos;intelligence artificielle pour transformer automatiquement vos cours en quiz interactifs et fiches de révision personnalisées. Notre objectif est de révolutionner la façon dont les étudiants abordent leurs révisions."
      },
      {
        question: "Quand sera disponible la version complète ?",
        answer: "La beta d&apos;Edukai sera lancée en juillet 2025. Les premiers inscrits à la beta auront un accès prioritaire et des avantages exclusifs."
      },
      {
        question: "Comment fonctionne l&apos;IA d&apos;Edukai ?",
        answer: "Notre IA analyse le contenu de vos cours (PDF, documents, notes) et génère automatiquement des quiz adaptés à votre niveau et style d&apos;apprentissage. Plus vous utilisez la plateforme, plus elle s&apos;adapte à vos besoins."
      }
    ]
  },
  {
    category: "Beta et inscription",
    icon: Users,
    color: "from-purple-500 to-purple-600", 
    questions: [
      {
        question: "Comment rejoindre la beta ?",
        answer: "Rendez-vous sur notre page d&apos;accueil et remplissez le formulaire d&apos;inscription à la beta. Nous acceptons seulement les 1000 premiers inscrits pour garantir une expérience optimale."
      },
      {
        question: "Quels sont les avantages de la beta ?",
        answer: "Les beta testeurs bénéficient d&apos;un accès prioritaire, de fonctionnalités premium gratuites, d&apos;un support dédié et d&apos;un tarif préférentiel à vie."
      },
      {
        question: "Puis-je annuler mon inscription à la beta ?",
        answer: "Oui, vous pouvez vous désinscrire à tout moment en nous contactant à contact@edukai.fr. Vos données seront supprimées conformément à notre politique de confidentialité."
      }
    ]
  },
  {
    category: "Technique",
    icon: Zap,
    color: "from-green-500 to-green-600",
    questions: [
      {
        question: "Quels formats de fichiers sont supportés ?",
        answer: "Edukai supporte les PDF, documents Word, images (JPG, PNG), et prochainement les PowerPoint et autres formats de cours. Notre IA s'améliore constamment pour supporter plus de formats."
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer: "Absolument. Nous utilisons un chiffrement de niveau bancaire pour protéger vos données. Consultez notre politique de confidentialité pour plus de détails sur la protection de vos informations."
      },
      {
        question: "Puis-je utiliser Edukai sur mobile ?",
        answer: "Oui, Edukai sera disponible en version web responsive et nous développons actuellement des applications mobiles natives pour iOS et Android."
      }
    ]
  }
];

const supportChannels = [
  {
    title: "Email",
    description: "Pour toute question ou demande d&apos;aide",
    contact: "contact@edukai.fr",
    icon: Mail,
    color: "from-blue-500 to-blue-600",
    responseTime: "24-48h"
  },
  {
    title: "Instagram",
    description: "Suivez nos actualités et posez vos questions",
    contact: "@edukaifr",
    icon: MessageCircle,
    color: "from-pink-500 to-purple-600",
    responseTime: "Quelques heures",
    link: "https://www.instagram.com/edukaifr/"
  }
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50/50 to-green-50/50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="satoshi-medium">Retour à l&apos;accueil</span>
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-100 mb-6">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Centre d&apos;aide
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 satoshi-bold">
                Comment pouvons-nous
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mt-2">
                  vous aider ?
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 outfit-regular leading-relaxed">
                Trouvez des réponses à vos questions ou contactez notre équipe. 
                Nous sommes là pour vous accompagner dans votre expérience Edukai.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 satoshi-bold">
                  Questions fréquentes
                </h2>
                <p className="text-lg text-gray-600 outfit-regular">
                  Les réponses aux questions les plus courantes sur Edukai
                </p>
              </div>

              <div className="space-y-12">
                {faqs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 satoshi-bold">
                        {category.category}
                      </h3>
                    </div>

                    <div className="grid gap-6">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 satoshi-medium">
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 outfit-regular leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 satoshi-bold">
                  Besoin d&apos;aide supplémentaire ?
                </h2>
                <p className="text-lg text-gray-600 outfit-regular">
                  Notre équipe est disponible pour répondre à vos questions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <channel.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 satoshi-medium">
                          {channel.title}
                        </h3>
                        <p className="text-gray-600 mb-3 outfit-regular">
                          {channel.description}
                        </p>
                        <div className="space-y-2">
                          {channel.link ? (
                            <a 
                              href={channel.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium satoshi-medium transition-colors"
                            >
                              {channel.contact}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <a 
                              href={`mailto:${channel.contact}`}
                              className="text-blue-600 hover:text-blue-700 font-medium satoshi-medium transition-colors"
                            >
                              {channel.contact}
                            </a>
                          )}
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>Réponse sous {channel.responseTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Help */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-2xl p-8 border border-gray-100 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 satoshi-medium">
                  Vous n&apos;avez pas trouvé votre réponse ?
                </h3>
                <p className="text-gray-600 mb-6 outfit-regular">
                  N&apos;hésitez pas à nous contacter directement. Notre équipe se fera un plaisir 
                  de vous aider et d&apos;améliorer notre centre d&apos;aide avec votre question.
                </p>
                <a 
                  href="mailto:contact@edukai.fr"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold satoshi-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 