"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full"></span>
          </h2>
          
          <motion.p 
            className="text-lg leading-relaxed mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Software developer with a strong foundation in Data Structure and Algorithm. I&apos;ve solved 700+ problems 
            across coding platforms and developed several web and AI/ML-focused projects. Eager to leverage my technical 
            expertise to solve real-world challenges while continuously learning and growing in a collaborative environment.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-card shadow-sm border border-border rounded-lg p-6 flex flex-col items-center justify-center w-36 h-36">
              <p className="text-3xl font-bold text-primary">700+</p>
              <p className="text-sm text-muted-foreground text-center">Problems Solved</p>
            </div>
            
            <div className="bg-card shadow-sm border border-border rounded-lg p-6 flex flex-col items-center justify-center w-36 h-36">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground text-center">Projects Completed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;