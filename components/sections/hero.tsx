"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github as GitHub, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

  // Floating animation for profile image
  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <motion.div
        className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Left Column - Text Content */}
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
            Competitive programmer with expertise in Data Structure & Algorithms, Web Development and foundational knowledge in AI/ML. 
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
              href="https://github.com/arnob1001"
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

        {/* Right Column - Enhanced Profile Image */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="relative"
            animate="float"
            variants={floatVariants}
          >
            {/* Main image container with gradient border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full z-10 overflow-hidden border-4 border-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-origin-border p-1 shadow-xl">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                <Image
                  src="/153275698.jpg"
                  alt="Arnob Bokshi"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Decorative floating elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-xl opacity-40 z-0"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-xl opacity-40 z-0"
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            {/* Animated rings */}
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-blue-500/30 z-0"
              animate={{
                scale: [1, 1.2, 1.4],
                opacity: [1, 0.8, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeOut"
              }}
              style={{ top: '-1rem', left: '-1rem', right: '-1rem', bottom: '-1rem' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;