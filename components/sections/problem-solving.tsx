"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Award, Bookmark } from 'lucide-react';
import Link from 'next/link';

type Platform = {
  name: string;
  url: string;
  username: string;
  icon: React.ReactNode;
  className: string;
};

const platforms: Platform[] = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/arnob1115/",
    username: "arnob1115",
    icon: <Code className="w-8 h-8" />,
    className: "bg-[#FFA116]/10 border-[#FFA116]/30 hover:bg-[#FFA116]/20 text-[#FFA116]",
  },
  {
    name: "GeeksForGeeks",
    url: "https://geeksforgeeks.org/arno67rd/",
    username: "arno67rd",
    icon: <Bookmark className="w-8 h-8" />,
    className: "bg-[#2F8D46]/10 border-[#2F8D46]/30 hover:bg-[#2F8D46]/20 text-[#2F8D46]",
  },
  {
    name: "CodeForces",
    url: "https://codeforces.com/Arnobkashi/",
    username: "Arnobkashi",
    icon: <Award className="w-8 h-8" />,
    className: "bg-[#1F8ACB]/10 border-[#1F8ACB]/30 hover:bg-[#1F8ACB]/20 text-[#1F8ACB]",
  },
];

const ProblemSolving = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Problem Solving
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my competitive programming profiles
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`border rounded-lg p-6 transition-all ${platform.className}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {platform.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{platform.name}</h3>
                <p className="mb-4 text-muted-foreground">{platform.username}</p>
                <Link 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-current rounded-full text-sm hover:bg-background/50 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;