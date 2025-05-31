"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center relative inline-block">
            Education
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full"></span>
          </h2>
          
          <motion.div 
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-border"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative mb-10">
              <div className="absolute -left-[41px] bg-background p-2 rounded-full border border-border">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold">BSc in Computer Science and Engineering</h3>
                  <div className="flex items-center text-sm text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>2021-2025</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-3">University of Information Technology & Sciences</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-secondary/30 px-3 py-1 rounded-full">CGPA: 3.58</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;