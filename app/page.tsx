import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Education from '@/components/sections/education';
import Skills from '@/components/sections/skills';
import ProblemSolving from '@/components/sections/problem-solving';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Education />
      <Skills />
      <ProblemSolving />
      <Projects />
      <Contact />
    </div>
  );
}