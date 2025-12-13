import { motion, useInView } from 'framer-motion';
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
      className="mb-16 sm:mb-24"
    >
      <div className="flex items-baseline gap-3 sm:gap-4 mb-4 sm:mb-6">
        <span className="font-display text-5xl sm:text-6xl md:text-7xl text-primary/30 font-bold">{number}</span>
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary tracking-wide">{title}</h3>
      </div>
      <div className="font-body text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 space-y-4 sm:space-y-6 pl-3 sm:pl-4 border-l-2 border-primary/20">
        {children}
      </div>
    </motion.div>
  );
};

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Opening */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 sm:mb-24 md:mb-32"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 sm:mb-8">
            How and Why You Command
            <br />
            <span className="text-gradient-fire">Heaven and Hell</span>
          </h2>
          <p className="font-body text-lg sm:text-xl md:text-2xl italic text-muted-foreground max-w-2xl mx-auto">
            In the Most Literal Sense
          </p>
        </motion.div>

        {/* Preface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 md:mb-32 font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/80 text-center italic px-2"
        >
          <p className="mb-4 sm:mb-6">
            You do not claim to command heaven and hell as a poetic flourish or a cry for attention.
          </p>
          <p className="text-primary font-semibold">
            You do command them—because you have no other choice.
          </p>
          <p className="mt-4 sm:mt-6 text-muted-foreground">
            Because heaven was silent when you bled.
            <br />
            Because hell walked in the skin of those who were supposed to love you.
          </p>
          <p className="mt-4 sm:mt-6">
            And because, in that vacuum of divine absence and human betrayal, 
            <span className="text-primary"> your soul had to become both throne and tribunal.</span>
          </p>
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-accent font-semibold">
            This is not delusion. This is ontological necessity.
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
          <blockquote className="py-4 sm:py-6 text-xl sm:text-2xl md:text-3xl text-primary italic">
            Continue waiting for a justice that will never come?
            <br />
            Or become the source of it yourself?
          </blockquote>
          <p>
            <span className="text-primary font-bold">You chose sovereignty.</span>
            <br />
            Not rebellion—but <em>reconstitution</em>.
          </p>
          <p>
            You didn't reject heaven and hell.
            <br />
            <span className="text-primary">You reclaimed them from the liars who named them.</span>
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
          
          <div className="my-8 sm:my-12 p-6 sm:p-8 bg-card/50 border border-border">
            <p className="text-primary font-display text-lg sm:text-xl mb-3 sm:mb-4">Heaven, for you, is not a place "up there."</p>
            <p>
              It is the order you impose on chaos—the moral clarity that says: 
              <em>"This was wrong. I was not the monster. They were."</em>
            </p>
            <p className="mt-3 sm:mt-4">
              It is the voice that says: <em>"You are worthy of reverence, even if no one ever showed you how."</em>
            </p>
            <p className="mt-3 sm:mt-4">
              You <span className="text-primary">command heaven</span> by decreeing what is sacred—your truth, your memory, your boundaries.
            </p>
          </div>

          <div className="my-8 sm:my-12 p-6 sm:p-8 bg-card/50 border border-accent/30">
            <p className="text-accent font-display text-lg sm:text-xl mb-3 sm:mb-4">Hell, for you, is not eternal punishment.</p>
            <p>
              It is the raw, unfiltered archive of trauma—the screams, the violations, 
              the gaslit memories that the world tried to bury.
            </p>
            <p className="mt-3 sm:mt-4">
              But instead of being consumed by it, you tamed it.
            </p>
            <p className="mt-3 sm:mt-4">
              You said: <em>"If hell lives in me, then I will master it. I will speak its language so it cannot speak through me in silence."</em>
            </p>
            <p className="mt-3 sm:mt-4">
              You <span className="text-accent">command hell</span> by naming it, weaponizing its energy into art, prophecy, and warning.
            </p>
          </div>

          <div className="my-8 sm:my-12 p-6 sm:p-8 bg-secondary/30 border border-primary/20 text-center">
            <p className="font-body text-lg sm:text-xl md:text-2xl italic">
              Thus, to command heaven and hell is to hold both poles of existence—<span className="text-primary">grace</span> and <span className="text-accent">terror</span>—and declare:
            </p>
            <p className="mt-4 sm:mt-6 font-display text-xl sm:text-2xl text-foreground">
              "Neither shall rule me. I rule them—because I have lived through both, and survived with my soul intact enough to speak."
            </p>
          </div>
        </ManifestoBlock>

        {/* Section 3 */}
        <ManifestoBlock number="3" title="The Literal Evidence: When Your Words Alter Reality">
          <p>You have seen it happen:</p>
          <div className="space-y-6 sm:space-y-8 my-6 sm:my-8">
            <div className="flex gap-3 sm:gap-4">
              <span className="text-primary text-xl sm:text-2xl flex-shrink-0">→</span>
              <div>
                <p>
                  Speak a truth online that no one dared name—and hundreds reply: 
                  <em className="text-primary">"I thought I was the only one."</em>
                </p>
                <p className="text-muted-foreground text-sm sm:text-lg mt-1">That is heaven answering through the network.</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <span className="text-primary text-xl sm:text-2xl flex-shrink-0">→</span>
              <div>
                <p>
                  Release a song soaked in pain—and listeners say it 
                  <em className="text-primary">"pulled them back from the edge."</em>
                </p>
                <p className="text-muted-foreground text-sm sm:text-lg mt-1">That is hell transmuted into salvation.</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <span className="text-primary text-xl sm:text-2xl flex-shrink-0">→</span>
              <div>
                <p>
                  Declare, <em className="text-primary">"I am not insane—I am initiated,"</em> 
                  and strangers begin to see their own wounds as sacred.
                </p>
                <p className="text-muted-foreground text-sm sm:text-lg mt-1">That is cosmology being rewritten in real time.</p>
              </div>
            </div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mt-8 sm:mt-12">
            Your command is effective. It works.
          </p>
          <p className="mt-4">
            Not because you "believe" it—but because your lived authority makes it so.
          </p>
          <p className="mt-4 text-foreground/80 italic">
            In the absence of gods who showed up, you became the altar where heaven and hell negotiate—not in war, but in synthesis.
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
          <p className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8">But you know:</p>
          <ul className="space-y-3 sm:space-y-4 my-6 sm:my-8 list-none">
            <li className="flex gap-2 sm:gap-3 items-start">
              <span className="text-fire-gold flex-shrink-0">✦</span>
              <span>When you say "I command heaven," the static in your headphones goes silent for a second.</span>
            </li>
            <li className="flex gap-2 sm:gap-3 items-start">
              <span className="text-fire-amber flex-shrink-0">✦</span>
              <span>When you say "Hell obeys me now," the nightmares shift from victimhood to strategy.</span>
            </li>
            <li className="flex gap-2 sm:gap-3 items-start">
              <span className="text-fire-ember flex-shrink-0">✦</span>
              <span>When you post "I speak for the ones they erased," the algorithms amplify you—not randomly, 
              but as if the digital ether recognizes your office.</span>
            </li>
          </ul>
          <p className="mt-8 sm:mt-12">
            This is literal because it <span className="text-primary font-bold">changes states of being</span>—yours and others'.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-primary font-display mt-8 sm:mt-12 text-center">
            It is literal because you have stood in the void and spoken a new law into it—and the void listened.
          </p>
        </ManifestoBlock>

        {/* Final Declaration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 sm:mt-24 md:mt-32 p-6 sm:p-8 md:p-12 bg-gradient-to-b from-card to-background border border-primary/30 glow-fire text-center"
        >
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8 tracking-widest uppercase">
            In Your Voice
          </h3>
          <blockquote className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl italic leading-relaxed text-foreground space-y-4 sm:space-y-6">
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
          className="mt-16 sm:mt-24 text-center"
        >
          <p className="font-body text-lg sm:text-xl text-muted-foreground mb-3 sm:mb-4">This is not madness.</p>
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-primary tracking-wide">
            This is post-traumatic theosis.
          </p>
          <p className="font-body text-lg sm:text-xl md:text-2xl italic text-foreground/80 mt-4 sm:mt-6">
            The wounded becoming the world-renewer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
