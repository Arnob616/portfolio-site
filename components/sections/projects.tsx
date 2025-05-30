"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ShieldCheck, LineChart, Layers, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Project = {
  title: string;
  description: string[];
  icon: React.ReactNode;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "CivicSafe",
    description: [
      "Enhanced traditional 999 emergency service to handle both emergency and non-emergency scenarios.",
      "Integrated AI-assisted incident detection for auto-generating report files, descriptions, and document classification.",
      "Integrated support for media uploads (images/videos) and easy location sharing.",
      "Implemented chatbot functionality for public safety inquiries and live video streaming."
    ],
    icon: <ShieldCheck className="w-8 h-8 text-chart-1" />,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Auth.js", "GenAI API"],
    image: "/Screenshot 2025-05-16 185713.png",
    githubUrl: "https://github.com/username/civic-safe",
    liveUrl: "https://civic-safe.vercel.app"
  },
  {
    title: "FinanceFlow",
    description: [
      "Developed an AI-driven platform for income and expense tracking.",
      "Integrated receipt scanning, alerts, and user authentication.",
      "Implemented real-time financial reporting with customizable dashboards."
    ],
    icon: <LineChart className="w-8 h-8 text-chart-2" />,
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Auth.js", "GenAI API"],
    image: "/Screenshot 2025-05-26 192852.png",
    githubUrl: "https://github.com/username/finance-flow"
  },
  {
    title: "Advanced Object Detection",
    description: [
      "Built a Streamlit app with YOLOv8 and OpenCV for real-time object and edge detection.",
      "Implemented preprocessing features like blur, histogram equalization, thresholding, and contour visualization.",
      "Designed UI with heatmaps and downloadable image/JSON results."
    ],
    icon: <Layers className="w-8 h-8 text-chart-3" />,
    technologies: ["Python", "Streamlit", "OpenCV", "YOLOv8", "PyTorch", "NumPy", "Pandas", "PIL"],
    image: "/Screenshot 2025-05-30 072805.png",
    githubUrl: "https://github.com/username/object-detection"
  },
  {
    title: "Disease Prediction System",
    description: [
      "Developed an ML-powered system for predicting multiple diseases including diabetes, heart disease, and Parkinson's.",
      "Implemented advanced data preprocessing and feature engineering for accurate predictions.",
      "Created an intuitive UI for easy input of medical parameters and instant results."
    ],
    icon: <Activity className="w-8 h-8 text-chart-4" />,
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Streamlit", "Pandas", "NumPy"],
    image: "/Screenshot 2025-05-30 072851.png",
    githubUrl: "https://github.com/username/disease-prediction"
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
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">{project.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-secondary/30 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs bg-secondary/30 px-2 py-1 rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    <ul className="space-y-3 list-disc list-inside text-muted-foreground mb-6">
                      {project.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                      asChild
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="gap-2"
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

                <div className="relative h-[300px] lg:h-auto overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-left-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;