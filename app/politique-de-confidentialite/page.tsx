import { Navigation } from "@/components/landing/navigation";
import { Footer } from "@/components/landing/footer";
import { ArrowLeft, Shield, Eye, Lock, Database, Cookie, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité - Edukai",
  description: "Politique de confidentialité et protection des données personnelles d&apos;Edukai. Découvrez comment nous protégeons vos informations.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Politique de confidentialité
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 satoshi-bold">
                Protection de vos
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                  données personnelles
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 outfit-regular leading-relaxed">
                Chez Edukai, nous nous engageons à protéger votre vie privée et à traiter vos données personnelles 
                avec le plus grand soin et en toute transparence.
              </p>
              
              <div className="mt-8 text-sm text-gray-500 outfit-regular">
                <p>Dernière mise à jour : 15 décembre 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                {/* Section 1 */}
                <div className="mb-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 satoshi-bold mb-3">1. Collecte des données</h2>
                      <div className="space-y-4 text-gray-600 outfit-regular">
                        <p>
                          Nous collectons les données que vous nous fournissez directement lors de :
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Votre inscription à la beta d&apos;Edukai</li>
                          <li>L&apos;utilisation de nos services</li>
                          <li>Vos interactions avec notre plateforme</li>
                          <li>Vos communications avec notre équipe</li>
                        </ul>
                        <p>
                          Les données collectées incluent : nom, prénom, adresse email, établissement d&apos;enseignement, 
                          niveau d&apos;études, et les contenus que vous uploadez pour générer des quiz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 satoshi-bold mb-3">2. Utilisation des données</h2>
                      <div className="space-y-4 text-gray-600 outfit-regular">
                        <p>
                          Vos données personnelles sont utilisées pour :
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Fournir et améliorer nos services d&apos;apprentissage</li>
                          <li>Personnaliser votre expérience utilisateur</li>
                          <li>Vous tenir informé des nouveautés et mises à jour</li>
                          <li>Analyser l&apos;utilisation de la plateforme pour l&apos;optimiser</li>
                          <li>Assurer la sécurité et prévenir la fraude</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 satoshi-bold mb-3">3. Protection et sécurité</h2>
                      <div className="space-y-4 text-gray-600 outfit-regular">
                        <p>
                          Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Chiffrement des données en transit et au repos</li>
                          <li>Accès restreint aux données personnelles</li>
                          <li>Surveillance continue de nos systèmes</li>
                          <li>Formations régulières de notre équipe sur la sécurité</li>
                          <li>Audits de sécurité périodiques</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 satoshi-bold mb-3">4. Cookies et technologies similaires</h2>
                      <div className="space-y-4 text-gray-600 outfit-regular">
                        <p>
                          Nous utilisons des cookies pour :
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Assurer le bon fonctionnement de la plateforme</li>
                          <li>Mémoriser vos préférences</li>
                          <li>Analyser l&apos;utilisation de nos services</li>
                          <li>Améliorer votre expérience utilisateur</li>
                        </ul>
                        <p>
                          Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="mb-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 satoshi-bold mb-3">5. Vos droits</h2>
                      <div className="space-y-4 text-gray-600 outfit-regular">
                        <p>
                          Conformément au RGPD, vous disposez des droits suivants :
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
                          <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                          <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                          <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                          <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
                          <li><strong>Droit à la limitation :</strong> demander la restriction du traitement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 satoshi-bold mb-3">Contact</h2>
                      <div className="space-y-4 text-gray-600 outfit-regular">
                        <p>
                          Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                          vous pouvez nous contacter :
                        </p>
                        <div className="space-y-2">
                          <p><strong>Email :</strong> contact@edukai.fr</p>
                          <p><strong>Responsable de la protection des données :</strong> Équipe Edukai</p>
                        </div>
                        <p>
                          Nous nous engageons à répondre à vos demandes dans les meilleurs délais et au plus tard 
                          dans un délai d&apos;un mois suivant la réception de votre demande.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 