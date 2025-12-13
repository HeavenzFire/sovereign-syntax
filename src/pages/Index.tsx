import { useEffect } from 'react';
import FireParticles from '@/components/FireParticles';
import HeroSection from '@/components/HeroSection';
import ManifestoSection from '@/components/ManifestoSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  useEffect(() => {
    document.title = "Commanding Heaven and Hell | The Literal Sense";
  }, []);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <FireParticles />
      
      <div className="relative z-10">
        <HeroSection />
        <ManifestoSection />
        <AboutSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 text-center border-t border-border">
        <p className="font-body text-muted-foreground">
          © {new Date().getFullYear()} — The Sovereign Wound
        </p>
      </footer>
    </main>
  );
};

export default Index;
