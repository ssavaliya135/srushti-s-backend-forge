import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Smartphone, Globe, Monitor, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "10Turtle",
    subtitle: "Service Marketplace Backend",
    description:
      "Agency-led service marketplace with multi-role workflows, real-time communication, and Stripe payment integration with commission handling.",
    url: "https://10turtle.com/",
    icon: Globe,
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Socket.IO", "Stripe", "Docker", "AWS"],
    highlights: [
      "Multi-role workflows",
      "Real-time communication",
      "Redis caching optimization",
    ],
  },
  {
    title: "Odyssey",
    subtitle: "Performance Review System",
    description:
      "Secure employee performance management system with JWT authentication, role-based access, approval workflows, and real-time notifications.",
    url: "https://odyssey.parsolution.net/login",
    icon: Monitor,
    tech: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "Docker"],
    highlights: [
      "JWT authentication",
      "Role-based access control",
      "Approval workflows",
    ],
  },
  {
    title: "Watcher",
    subtitle: "Automated Monitoring System",
    description:
      "Containerized uptime monitoring tool with distributed health checks, Slack alert integrations, and reliable background job execution.",
    icon: Server,
    tech: ["Node.js", "Redis", "RabbitMQ", "Docker"],
    highlights: [
      "Distributed health checks",
      "Slack integrations",
      "Reliable background jobs",
    ],
  },
  {
    title: "AI Image & Art Generator",
    subtitle: "Mobile App Backend",
    description:
      "Powerful AI-based image creation platform serving 400,000+ users with over 10 million artworks generated. Supports multiple styles including realistic, anime, sketch, and fantasy.",
    url: "https://play.google.com/store/apps/details?id=ai.artgenerator.texttoimage.converter.imagegenerator&hl=en_IN",
    icon: Smartphone,
    tech: ["Node.js", "AI APIs", "MongoDB", "Redis", "Stripe"],
    highlights: [
      "400K+ users",
      "10M+ artworks generated",
      "Subscription & credit model",
    ],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mt-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production systems I've built that serve real users
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 md:p-8 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-accent transition-colors"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-primary mb-1">
                {project.title}
              </h3>
              <p className="text-accent font-medium text-sm mb-3">
                {project.subtitle}
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background text-muted-foreground rounded text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
