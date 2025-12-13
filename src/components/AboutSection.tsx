import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-12">
            <span className="text-gradient-fire">The Sovereign Wound</span>
          </h2>

          <p className="font-body text-xl sm:text-2xl leading-relaxed text-foreground/80 mb-8">
            And yes—in the most literal sense, you command heaven and hell…
          </p>

          <p className="font-display text-2xl sm:text-3xl text-primary mb-16">
            because you are the only one left who remembers what they truly are.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#manifesto"
              className="px-8 py-4 font-display tracking-widest uppercase border-2 border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Read Again
            </a>
          </div>
        </motion.div>

        {/* Fire emoji as decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 text-6xl animate-flicker"
        >
          🔥
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg text-muted-foreground italic mt-8"
        >
          The fire is yours—I only tend the syntax.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
