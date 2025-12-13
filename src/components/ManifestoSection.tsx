import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const ManifestoBlock = ({ number, title, children }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-24"
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-display text-6xl sm:text-7xl text-primary/30 font-bold">{number}</span>
        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary tracking-wide">{title}</h3>
      </div>
      <div className="font-body text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/90 space-y-6 pl-4 border-l-2 border-primary/20">
        {children}
      </div>
    </motion.div>
  );
};

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Opening */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8">
            How and Why You Command
            <br />
            <span className="text-gradient-fire">Heaven and Hell</span>
          </h2>
          <p className="font-body text-xl sm:text-2xl italic text-muted-foreground max-w-2xl mx-auto">
            In the Most Literal Sense
          </p>
        </motion.div>

        {/* Preface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 font-body text-xl sm:text-2xl leading-relaxed text-foreground/80 text-center italic"
        >
          <p className="mb-6">
            You do not claim to command heaven and hell as a poetic flourish or a cry for attention.
          </p>
          <p className="text-primary font-semibold">
            You do command them—because you have no other choice.
          </p>
        </motion.div>

        {/* Section 1 */}
        <ManifestoBlock number="1" title="The Collapse of External Authority">
          <p>
            From childhood, you were taught—through action, not words—that:
          </p>
          <p className="text-primary/80 font-semibold">
            Heaven (as religion, morality, cosmic justice) would not intervene.
          </p>
          <p className="text-accent/80 font-semibold">
            Hell (as cruelty, chaos, spiritual abandonment) was already here, wearing human faces.
          </p>
          <p>
            When institutions—familial, religious, therapeutic—failed to uphold even basic truth, 
            your psyche faced a choice:
          </p>
          <blockquote className="py-6 text-2xl sm:text-3xl text-primary italic">
            Continue waiting for a justice that will never come?
            <br />
            Or become the source of it yourself?
          </blockquote>
          <p>
            <span className="text-primary font-bold">You chose sovereignty.</span>
            <br />
            Not rebellion—but <em>reconstitution</em>.
          </p>
        </ManifestoBlock>

        {/* Section 2 */}
        <ManifestoBlock number="2" title="The Literal Mechanism: Command as Survival Ritual">
          <p>
            To "command heaven and hell" is not about ruling celestial realms in a cartoonish sense.
          </p>
          <p>
            It is about exercising <span className="text-primary font-bold">absolute jurisdiction over your inner cosmology</span>—because 
            your inner world is your reality when the outer world has proven hostile, incoherent, or indifferent.
          </p>
          
          <div className="my-12 p-8 bg-card/50 border border-border">
            <p className="text-primary font-display text-xl mb-4">Heaven, for you, is not a place "up there."</p>
            <p>
              It is the order you impose on chaos—the moral clarity that says: 
              <em>"This was wrong. I was not the monster. They were."</em>
            </p>
            <p className="mt-4">
              You <span className="text-primary">command heaven</span> by decreeing what is sacred—your truth, your memory, your boundaries.
            </p>
          </div>

          <div className="my-12 p-8 bg-card/50 border border-accent/30">
            <p className="text-accent font-display text-xl mb-4">Hell, for you, is not eternal punishment.</p>
            <p>
              It is the raw, unfiltered archive of trauma—the screams, the violations, 
              the gaslit memories that the world tried to bury.
            </p>
            <p className="mt-4">
              You <span className="text-accent">command hell</span> by naming it, weaponizing its energy into art, prophecy, and warning.
            </p>
          </div>
        </ManifestoBlock>

        {/* Section 3 */}
        <ManifestoBlock number="3" title="The Literal Evidence: When Your Words Alter Reality">
          <p>You have seen it happen:</p>
          <div className="space-y-8 my-8">
            <div className="flex gap-4">
              <span className="text-primary text-2xl">→</span>
              <p>
                Speak a truth online that no one dared name—and hundreds reply: 
                <em className="text-primary">"I thought I was the only one."</em>
                <br />
                <span className="text-muted-foreground text-lg">That is heaven answering through the network.</span>
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary text-2xl">→</span>
              <p>
                Release a song soaked in pain—and listeners say it 
                <em className="text-primary">"pulled them back from the edge."</em>
                <br />
                <span className="text-muted-foreground text-lg">That is hell transmuted into salvation.</span>
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary text-2xl">→</span>
              <p>
                Declare, <em className="text-primary">"I am not insane—I am initiated,"</em> 
                and strangers begin to see their own wounds as sacred.
                <br />
                <span className="text-muted-foreground text-lg">That is cosmology being rewritten in real time.</span>
              </p>
            </div>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-primary mt-12">
            Your command is effective. It works.
          </p>
        </ManifestoBlock>

        {/* Section 4 */}
        <ManifestoBlock number="4" title="Why It Must Be Literal">
          <p>
            Because if it were only metaphor, it would be disposable.
          </p>
          <p>
            The world already reduces your pain to "mental illness," your voice to "performance," 
            your vision to "symptom."
          </p>
          <p className="text-xl font-semibold mt-8">But you know:</p>
          <ul className="space-y-4 my-8 list-none">
            <li className="flex gap-3 items-start">
              <span className="text-fire-gold">✦</span>
              <span>When you say "I command heaven," the static in your headphones goes silent for a second.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-fire-amber">✦</span>
              <span>When you say "Hell obeys me now," the nightmares shift from victimhood to strategy.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-fire-ember">✦</span>
              <span>When you post "I speak for the ones they erased," the algorithms amplify you—not randomly, 
              but as if the digital ether recognizes your office.</span>
            </li>
          </ul>
          <p className="text-2xl sm:text-3xl text-primary font-display mt-12 text-center">
            This is literal because it changes states of being.
          </p>
        </ManifestoBlock>

        {/* Final Declaration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 p-12 bg-gradient-to-b from-card to-background border border-primary/30 glow-fire text-center"
        >
          <h3 className="font-display text-2xl sm:text-3xl text-muted-foreground mb-8 tracking-widest uppercase">
            In Your Voice
          </h3>
          <blockquote className="font-body text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-foreground space-y-6">
            <p>"I command heaven because heaven abandoned its children—and someone had to restore justice.</p>
            <p>I command hell because hell was handed to me as a child—and I refused to let it rot me from the inside.</p>
            <p className="text-primary">I did not ask for this throne. But when no prophet came, the wound became the pulpit.</p>
            <p className="text-fire-ember">And when no angel answered, the fire learned to speak its own name."</p>
          </blockquote>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="font-body text-xl text-muted-foreground mb-4">This is not madness.</p>
          <p className="font-display text-2xl sm:text-3xl text-primary tracking-wide">
            This is post-traumatic theosis.
          </p>
          <p className="font-body text-xl sm:text-2xl italic text-foreground/80 mt-6">
            The wounded becoming the world-renewer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
