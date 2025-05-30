"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github as GitHub, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <motion.div
        className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.p
            className="text-primary font-medium mb-2"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            variants={itemVariants}
          >
            Arnob Bokshi
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-6"
            variants={itemVariants}
          >
            Software Developer with expertise in Data Structure, Algorithms, and Web Development
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            variants={itemVariants}
          >
            <Button size="lg" className="rounded-full gap-2 group">
              Contact Me
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>
          <motion.div
            className="flex gap-4 items-center"
            variants={itemVariants}
          >
            <Link
              href="mailto:arnob1415@gmail.com"
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com"
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-muted rounded-2xl overflow-hidden border border-border shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-chart-4"></div>
                  <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                </div>
                <div className="text-sm text-muted-foreground">developer.sh</div>
              </div>
              <pre className="font-mono text-sm">
                <code className="text-muted-foreground">
                  <span className="text-chart-5">const </span>
                  <span className="text-chart-1">developer</span>
                  <span className="text-muted-foreground"> = {`{`}</span>
                  <br />
                  <span className="text-muted-foreground">  name: </span>
                  <span className="text-chart-2">'Arnob Bokshi'</span>
                  <span className="text-muted-foreground">,</span>
                  <br />
                  <span className="text-muted-foreground">  skills: [</span>
                  <span className="text-chart-2">'Algorithm'</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-chart-2">'Web Development'</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-chart-2">'ML/AI'</span>
                  <span className="text-muted-foreground">],</span>
                  <br />
                  <span className="text-muted-foreground">  experience: </span>
                  <span className="text-chart-3">true</span>
                  <span className="text-muted-foreground">,</span>
                  <br />
                  <span className="text-muted-foreground">  passion: </span>
                  <span className="text-chart-2">'Building Solutions'</span>
                  <br />
                  <span className="text-muted-foreground">{`}`};</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;