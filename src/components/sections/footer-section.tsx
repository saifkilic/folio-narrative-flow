import { motion } from "framer-motion";

export const FooterSection = () => {
  return (
    <footer className="py-16 bg-background border-t border-primary/20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                Alex Chen
              </h3>
              <p className="text-muted-foreground">
                Full-Stack Developer & Digital Craftsman
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-muted-foreground mb-2">
                © 2024 Alex Chen. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground/60">
                Built with React, TypeScript & Framer Motion
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-primary/10 text-center"
          >
            <p className="text-sm text-muted-foreground/60">
              "Code is poetry written in logic, and every line tells a story."
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};