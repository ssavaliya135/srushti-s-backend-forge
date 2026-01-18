import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Srushti Savaliya. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            Built with <Heart className="w-4 h-4 text-accent fill-accent" /> using modern web technologies
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
