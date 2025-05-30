"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Domain Expertise",
    skills: ["Data Structure and Algorithm", "Web Development"],
  },
  {
    title: "Programming Languages",
    skills: ["C++", "JavaScript", "Python"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "Tailwind CSS", "Next.js", "PostgreSQL", "Prisma", "Auth.js", "Vercel"],
  },
  {
    title: "ML Frameworks & Libraries",
    skills: ["TensorFlow", "NumPy", "Scikit-learn", "Streamlit"],
  },
  {
    title: "Software & Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit and areas of expertise
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-sm bg-secondary/30 px-3 py-1 rounded-full transition-all hover:bg-secondary/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;