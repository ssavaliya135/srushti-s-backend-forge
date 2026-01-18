import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Workflow 
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript (ES2022)", "TypeScript", "Node.js", "Python", "SQL", "C"],
  },
  {
    icon: Server,
    title: "Backend & Architecture",
    skills: [
      "Express.js",
      "REST APIs",
      "Microservices",
      "WebSockets (Socket.IO)",
      "RabbitMQ",
      "Background Jobs (Agenda, node-cron)",
      "Redis Caching",
      "Rate Limiting",
      "Load Balancing (Nginx)",
    ],
  },
  {
    icon: Workflow,
    title: "Automation & AI Workflows",
    skills: [
      "n8n Automation Flows",
      "AI-powered Backend Integrations",
      "Event-driven Task Orchestration",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, SES)",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Containerized Deployments",
    ],
  },
  {
    icon: Shield,
    title: "Security & Testing",
    skills: [
      "JWT Authentication",
      "Role-Based Access Control",
      "Secure Payments (Stripe)",
      "Jest",
      "Postman",
      "Data Validation & Sanitization",
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mt-3">
            Technical Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable backend systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-primary text-lg">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background rounded-full text-sm text-foreground/80 border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
