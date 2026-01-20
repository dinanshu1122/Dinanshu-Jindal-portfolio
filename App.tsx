
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Figma as FigmaIcon, 
  Layout, 
  Menu, 
  X, 
  ArrowUpRight, 
  BookOpen, 
  ChevronLeft,
  Cpu,
  Globe,
  Award,
  Briefcase
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  PROJECTS, 
  EXPERIENCES, 
  EDUCATION,
  CERTIFICATIONS
} from './constants';
import { Project } from './types';

// --- Simplified Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// --- Sections ---

const HeroSection: React.FC<{ onExplore: () => void }> = ({ onExplore }) => (
  <section id="home" className="min-h-[80vh] flex items-center py-20">
    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold tracking-wide mb-6">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Opportunities
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-8">
          Designing Digital <br />
          <span className="text-blue-500">Experiences.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
          I'm <span className="text-slate-100 font-medium">{PERSONAL_INFO.name}</span>, a CSE student focused on building intuitive, user-centric interfaces through engineering and design.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
          <button 
            onClick={onExplore} 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
          >
            View My Work <ArrowUpRight size={18} />
          </button>
          <div className="flex items-center gap-3">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:text-blue-500 transition-all"><Linkedin size={20} /></a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:text-blue-500 transition-all"><Github size={20} /></a>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative hidden md:block"
      >
        <div className="aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
            className="object-cover w-full h-full opacity-60" 
            alt="UI Development"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
            <Layout size={24} />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Focus</div>
            <div className="text-sm font-bold">UI/UX Design</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <section className="py-20">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <div>
        <h2 className="text-4xl font-bold font-display mb-8">About <span className="text-blue-500">Me</span></h2>
        <p className="text-lg text-slate-400 leading-relaxed mb-12">
          {PERSONAL_INFO.summary}
        </p>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Education</h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 transition-colors group-hover:border-blue-500/50">
                      <BookOpen size={18} />
                    </div>
                    {idx !== EDUCATION.length - 1 && <div className="w-px h-full bg-slate-800 my-2" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-500">{edu.period}</span>
                    <h4 className="text-xl font-bold text-slate-100">{edu.degree}</h4>
                    <p className="text-slate-400">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {CERTIFICATIONS.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Certifications</h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-blue-500/30 transition-all">
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                        <Award size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-100 mb-1">{cert.title}</h4>
                        <div className="text-blue-500 font-medium mb-2">{cert.issuer}</div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-3">{cert.description}</p>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-800/50 w-fit px-3 py-1 rounded-md">
                          Issued by: {cert.authority}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid gap-6">
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
          <Cpu className="text-blue-500 mb-6" size={32} />
          <h3 className="text-xl font-bold mb-4">Engineering Mindset</h3>
          <p className="text-slate-400">My background in Computer Science allows me to understand the technical constraints and possibilities behind every design.</p>
        </div>
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
          <Globe className="text-blue-500 mb-6" size={32} />
          <h3 className="text-xl font-bold mb-4">User-Centric Approach</h3>
          <p className="text-slate-400">I focus on creating accessible and intuitive digital products that solve real-world problems for users.</p>
        </div>
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
          <Code2 className="text-blue-500 mb-6" size={32} />
          <h3 className="text-xl font-bold mb-4">Scalable Architecture</h3>
          <p className="text-slate-400">Expertise in translating complex requirements into efficient, maintainable frontend structures.</p>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection: React.FC = () => (
  <section className="py-20">
    <h2 className="text-4xl font-bold font-display mb-12 text-center">Technical <span className="text-blue-500">Skillset</span></h2>
    <div className="grid md:grid-cols-3 gap-8">
      {SKILLS.map((group, idx) => (
        <div key={idx} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
          <h3 className="text-lg font-bold mb-6 text-slate-100">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ProjectsSection: React.FC<{ items: Project[] }> = ({ items }) => (
  <section className="py-20">
    <h2 className="text-4xl font-bold font-display mb-12">Featured <span className="text-blue-500">Projects</span></h2>
    <div className="grid lg:grid-cols-2 gap-10">
      {items.map((project, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -5 }}
          className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden group shadow-xl"
        >
          <div className="aspect-video overflow-hidden relative">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 right-4 px-4 py-1.5 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
              {project.tool}
            </div>
          </div>
          <div className="p-10">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-500 transition-colors">{project.title}</h3>
            <ul className="space-y-3 mb-10">
              {project.objective.map((obj, i) => (
                <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a href={project.designLink} target="_blank" rel="noreferrer" className="flex-1 py-3.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-center font-bold text-sm transition-all flex items-center justify-center gap-2">
                <FigmaIcon size={16} /> Design
              </a>
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-center font-bold text-sm transition-all flex items-center justify-center gap-2">
                <ExternalLink size={16} /> Prototype
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ExperienceSection: React.FC = () => (
  <section className="py-24">
    <div className="flex flex-col items-center mb-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-4"
      >
        <Briefcase size={14} /> My Journey
      </motion.div>
      <h2 className="text-4xl md:text-5xl font-bold font-display text-center">Work <span className="text-blue-500">Experience</span></h2>
    </div>

    <div className="max-w-4xl mx-auto relative px-6">
      {/* Timeline Vertical Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600/50 via-slate-800 to-transparent md:-translate-x-1/2 hidden sm:block" />

      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-0`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 shadow-[0_0_15px_rgba(37,99,235,0.5)] md:-translate-x-1/2 z-10 hidden sm:block" />

            {/* Content Side */}
            <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-[2rem] hover:border-blue-500/50 transition-all shadow-xl group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-blue-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-lg font-medium text-slate-300">
                      {exp.company}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="pt-4 flex gap-2">
                    <div className="h-1 w-8 bg-blue-600 rounded-full" />
                    <div className="h-1 w-2 bg-slate-800 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Empty Side (Desktop only) */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- App Controller ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
  ];

  const handleNav = (id: string) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isMerged = currentPage === 'home';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => handleNav('home')} className="text-2xl font-bold font-display tracking-tight">
            DINANSHU<span className="text-blue-500">.</span>
          </button>
          
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === link.id ? 'bg-blue-500/10 text-blue-500' : 'text-slate-400 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-400">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="fixed inset-0 z-40 bg-slate-950 pt-24 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => handleNav(link.id)} 
                className="text-3xl font-bold font-display text-left border-b border-slate-900 pb-4"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {isMerged && <HeroSection onExplore={() => handleNav('projects')} />}
            {(isMerged || currentPage === 'about') && <AboutSection />}
            {(isMerged || currentPage === 'skills') && <SkillsSection />}
            
            {/* Filter: Home doesn't show AI-Powered Symptoms Checker */}
            {isMerged && <ProjectsSection items={PROJECTS.filter(p => p.title !== "AI-Powered Symptoms Checker")} />}
            {currentPage === 'projects' && <ProjectsSection items={PROJECTS} />}
            
            {(isMerged || currentPage === 'experience') && <ExperienceSection />}
            
            {!isMerged && (
              <div className="py-20 flex justify-center">
                <button 
                  onClick={() => handleNav('home')} 
                  className="px-8 py-3 border border-slate-800 rounded-xl flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-500 hover:border-blue-500/30 transition-all"
                >
                  <ChevronLeft size={16} /> Back to Full Profile
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Contact Section */}
        <section className="py-20">
          <div className="bg-blue-600 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Let's build something together.</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto">Currently seeking internship opportunities to contribute and grow as a developer and designer.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <a href={`tel:${PERSONAL_INFO.phone}`} className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all flex flex-col items-center gap-4">
                  <Phone size={24} /> <span className="text-xs font-bold uppercase tracking-widest">Call</span>
                </a>
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all flex flex-col items-center gap-4"
                >
                  <Mail size={24} /> <span className="text-xs font-bold uppercase tracking-widest">Email</span>
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all flex flex-col items-center gap-4">
                  <Linkedin size={24} /> <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all flex flex-col items-center gap-4">
                  <Github size={24} /> <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold font-display">DINANSHU<span className="text-blue-500">.</span></div>
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Dinanshu Jindal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
