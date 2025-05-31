"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ShieldCheck, LineChart, Layers, Activity, ArrowRight, Sparkles, HeartPulse, Brain } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Project = {
  title: string;
  subtitle: string;
  description: string[];
  icon: React.ReactNode;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  accentColor: string;
  borderColor: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "CivicSafe",
    subtitle: "Public Safety Platform",
    description: [
      "AI-enhanced emergency service system",
      "Real-time incident detection & reporting",
      "Multimedia support & live streaming",
      "Chatbot for public inquiries"
    ],
    icon: <ShieldCheck className="w-6 h-6" />,
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "GenAI"],
    image: "/Screenshot 2025-05-16 185713.png",
    githubUrl: "https://github.com/arnob1111/IPSM",
    liveUrl: "https://civicsafe.vercel.app/",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-400/30",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "DetecAI",
    subtitle: "Computer Vision System",
    description: [
      "YOLOv8 object detection",
      "Advanced image preprocessing",
      "Real-time edge detection",
      "Custom visualization tools"
    ],
    icon: <Layers className="w-6 h-6" />,
    technologies: ["Python", "Streamlit", "OpenCV", "YOLOv8", "PyTorch"],
    image: "/Screenshot 2025-05-26 192852.png",
    githubUrl: "https://github.com/arnob1001/Smart-object-detection-app",
    accentColor: "text-orange-400",
    borderColor: "border-orange-400/30",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    title: "FinanceFlow",
    subtitle: "AI Financial Dashboard",
    description: [
      "Automated expense tracking",
      "Receipt scanning with OCR",
      "Real-time analytics",
      "Customizable dashboards"
    ],
    icon: <LineChart className="w-6 h-6" />,
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
    image: "/Screenshot 2025-05-30 072805.png",
    githubUrl: "https://github.com/arnob1001/AI-driven-financial-App",
    liveUrl: "https://ai-driven-financial-app-y4bp.vercel.app/",
    accentColor: "text-teal-400",
    borderColor: "border-teal-400/30",
    gradient: "from-teal-500 to-teal-600"
  },
  {
    title: "MediPredict",
    subtitle: "Multi-Disease Diagnostic",
    description: [
      "Parkinson's disease prediction",
      "Heart disease risk analysis",
      "Kidney function assessment",
      "Diabetes probability scoring"
    ],
    icon: <div className="relative">
      <HeartPulse className="w-6 h-6 absolute" />
      <Brain className="w-4 h-4 absolute -right-1 -bottom-1" />
    </div>,
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Streamlit"],
    image: "/Screenshot 2025-05-30 072851.png",
    githubUrl: "https://github.com/arnob1001/Multiple_disease_prediction",
    liveUrl: "https://multiplediseasepredictionapplication.streamlit.app/",
    accentColor: "text-blue-400",
    borderColor: "border-blue-400/30",
    gradient: "from-blue-500 to-blue-600"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="relative py-28 bg-gradient-to-b from-background via-background to-secondary/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Featured Work
            </span>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each project is a unique piece of development, crafted with precision and innovation
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-40 blur-md transition duration-500 group-hover:duration-200`}></div>
              
              {/* Main card */}
              <motion.div
                variants={hoverVariants}
                className={`relative bg-card/70 backdrop-blur-sm border ${project.borderColor} rounded-xl overflow-hidden transition-all duration-300 group-hover:border-primary/50 h-full`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                  <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                    <div>
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${project.accentColor} bg-opacity-10`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        <span className={`bg-gradient-to-r ${project.accentColor} to-foreground bg-clip-text text-transparent`}>
                          {project.title}
                        </span>
                      </h3>
                      <p className={`text-lg mb-6 font-medium ${project.accentColor}`}>
                        {project.subtitle}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {project.description.map((point, pointIndex) => (
                          <motion.li 
                            key={pointIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * pointIndex }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${project.accentColor} bg-current`}></div>
                            <span className="text-muted-foreground">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline"
                            className={`text-xs font-mono ${project.accentColor} border-border/50 bg-background/50 backdrop-blur-sm`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`gap-2 backdrop-blur-sm border-border/50 ${project.accentColor} hover:bg-background/80`}
                        asChild
                      >
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Source Code
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className={`gap-2 bg-gradient-to-r ${project.gradient} text-white shadow-md hover:shadow-lg transition-shadow`}
                          asChild
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="relative h-64 lg:h-full overflow-hidden bg-muted/20 border-l border-border/50">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/80 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent lg:hidden z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-left-top transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 group border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            asChild
          >
            <Link href="https://github.com/arnob1001" target="_blank">
              Explore More Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;