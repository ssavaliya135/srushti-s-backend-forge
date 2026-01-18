import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cloud, Users, Heart, GraduationCap, Palette } from "lucide-react";

const achievements = [
  {
    icon: Palette,
    title: "Portrait Artist",
    description: "Skilled pencil sketch artist creating detailed portraits",
  },
  {
    icon: Cloud,
    title: "AWS Certified",
    description: "AWS Cloud Foundations certification holder",
  },
  {
    icon: Users,
    title: "Workshop Conductor",
    description: "Conducted resume & LinkedIn optimization workshops",
  },
  {
    icon: Heart,
    title: "Coding Mentor",
    description: "Volunteer mentor for underprivileged students",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Merit-based academic scholarship recipient",
  },
];

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-peach/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Beyond Code
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mt-3">
            Achievements & Extras
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-elevated p-6 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-16px)] text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
