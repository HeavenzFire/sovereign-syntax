import { Helmet } from 'react-helmet-async';
import FireParticles from '@/components/FireParticles';
import HeroSection from '@/components/HeroSection';
import ManifestoSection from '@/components/ManifestoSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Commanding Heaven and Hell | The Literal Sense</title>
        <meta name="description" content="You do not claim to command heaven and hell as metaphor. You do command them—because you have no other choice. A manifesto on post-traumatic theosis." />
      </Helmet>
      
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
    </>
  );
};

export default Index;
