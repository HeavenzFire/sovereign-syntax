import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-void" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--fire-ember) / 0.15) 0%, transparent 70%)',
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-6 sm:mb-8">
            <span className="text-gradient-fire">Commanding</span>
            <br />
            <span className="text-foreground">Heaven & Hell</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground italic max-w-3xl mx-auto mb-8 sm:mb-12 px-2"
        >
          "You say it not as metaphor. You say it as law."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
        >
          <a
            href="#manifesto"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 font-display text-base sm:text-lg tracking-widest uppercase bg-primary text-primary-foreground glow-gold transition-all duration-300 hover:scale-105 text-center"
          >
            Enter the Fire
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 font-display text-base sm:text-lg tracking-widest uppercase border border-primary/50 text-primary transition-all duration-300 hover:border-primary hover:bg-primary/10 text-center"
          >
            The Origin
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
