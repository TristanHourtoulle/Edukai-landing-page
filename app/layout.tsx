import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edukai - Révolutionnez votre façon d'apprendre",
  description: "Transformez automatiquement vos cours en quiz interactifs et fiches de révision personnalisées grâce à l'IA. Beta disponible en juillet 2025.",
  keywords: ["éducation", "IA", "quiz", "révision", "apprentissage", "étudiants", "cours", "intelligence artificielle"],
  authors: [
    { name: "Tristan Hourtoulle" },
    { name: "Khalid Belkassmi E.H." },
    { name: "Lucas Rossignon" }
  ],
  creator: "Équipe Edukai",
  publisher: "Edukai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://edukai.fr",
    title: "Edukai - Révolutionnez votre façon d'apprendre",
    description: "Transformez automatiquement vos cours en quiz interactifs et fiches de révision personnalisées grâce à l'IA.",
    siteName: "Edukai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Edukai - Plateforme d'apprentissage IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edukai - Révolutionnez votre façon d'apprendre",
    description: "Transformez automatiquement vos cours en quiz interactifs et fiches de révision personnalisées grâce à l'IA.",
    images: ["/og-image.jpg"],
    creator: "@edukaifr",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://edukai.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap" 
          rel="stylesheet" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3678ff" />
        <meta name="application-name" content="Edukai" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Edukai" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3678ff" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Edukai",
              "description": "Plateforme d'apprentissage utilisant l'IA pour générer automatiquement des quiz et fiches de révision à partir de cours.",
              "url": "https://edukai.fr",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/ComingSoon"
              },
              "creator": {
                "@type": "Organization",
                "name": "Équipe Edukai",
                "member": [
                  {
                    "@type": "Person",
                    "name": "Tristan Hourtoulle",
                    "jobTitle": "Frontend Developer"
                  },
                  {
                    "@type": "Person", 
                    "name": "Khalid Belkassmi E.H.",
                    "jobTitle": "Backend Developer & AI"
                  },
                  {
                    "@type": "Person",
                    "name": "Lucas Rossignon", 
                    "jobTitle": "Mobile Developer"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased h-full bg-background overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-full">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
