import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Big Scale",
    role: "Backend Developer",
    period: "Sep 2025 – Present",
    location: "Remote",
    product: "Healthray.com",
    productUrl: "https://healthray.com",
    description: "Healthcare Platform",
    highlights: [
      "Working on a healthcare management system used by hospitals",
      "Developed and maintained HRMS module for staff, payroll, and internal workflows",
      "Built Store & Asset Management module to manage hospital inventory and assets",
      "Designed secure APIs and optimized database performance",
      "Ensured scalability, data integrity, and system reliability in healthcare environments",
    ],
  },
  {
    company: "PAR Solutions",
    role: "Lead / Senior Backend Developer",
    period: "Dec 2021 – Sep 2025",
    location: "Remote",
    highlights: [
      "Built scalable backend services for multiple SaaS and GenAI-based products",
      "Designed microservices using Docker and RabbitMQ",
      "Optimized MongoDB queries and Redis caching (35% faster APIs)",
      "Implemented CI/CD pipelines with GitHub Actions",
      "Deployed systems on AWS with zero-downtime strategies",
      "Mentored junior developers and enforced backend best practices",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-peach/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mt-3">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-secondary" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />

              <div className="card-elevated p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {exp.company}
                    </h3>
                    <p className="text-accent font-medium">{exp.role}</p>
                  </div>
                  <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {exp.product && (
                  <div className="mb-4 pb-4 border-b border-border">
                    <a
                      href={exp.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.product}</span>
                      <span className="text-muted-foreground">
                        ({exp.description})
                      </span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
