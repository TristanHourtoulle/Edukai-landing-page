import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { TeamSection } from "@/components/landing/team-section";
import { BetaSignupSection } from "@/components/landing/beta-signup";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section id="features">
        <FeaturesSection />
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      
      {/* Team Section */}
      <section id="team">
        <TeamSection />
      </section>
      
      {/* Beta Signup Section */}
      <section id="beta" className="bg-white">
        <BetaSignupSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
