import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Shield, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Production Systems",
    description: "Building and maintaining systems that serve real users at scale",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimizing APIs and databases for maximum efficiency",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Implementing robust authentication and data protection",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Mentoring developers and driving technical decisions",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-peach/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mt-3">
            Senior Backend Developer
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a Senior Backend Developer with hands-on experience building and 
              maintaining production systems. My focus is on creating{" "}
              <span className="text-primary font-medium">high-performance</span>,{" "}
              <span className="text-primary font-medium">scalable</span>, and{" "}
              <span className="text-primary font-medium">secure</span> backend 
              architectures.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I've worked across healthcare, SaaS, AI-based platforms, and 
              marketplace applications. I'm comfortable owning backend systems 
              end-to-end—from initial design to production deployment.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond coding, I mentor junior developers and actively contribute 
              to system design decisions that shape how products evolve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-elevated p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
