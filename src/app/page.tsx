"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Shield, Cloud, Cpu, Terminal, ExternalLink, ArrowDown, Briefcase, GraduationCap, Award } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const projects = [
  {
    name: "OmniGuard MoMo AML",
    description: "Serverless fraud detection pipeline using Amazon SageMaker, Neptune graph analytics, and AWS Entity Resolution to detect mule rings and smurfing in real time. Automated 93.5% of alert triage through a 3-tier confidence engine.",
    tags: ["AWS SageMaker", "Neptune", "Machine Learning", "Fraud Detection"],
    repo: "https://github.com/Steven256-debug/omniguard-momo-aml"
  },
  {
    name: "OmniSync MoMo Reconciliation Engine",
    description: "Event-driven serverless architecture reconciling mobile money payments in real time across MTN, Telecel, and AT. Replaced manual reconciliation with a unified live ledger and HMAC-secured webhooks.",
    tags: ["AWS Lambda", "DynamoDB", "Event-Driven", "React"],
    repo: "https://github.com/Steven256-debug/omnisync-momo-reconciliation"
  },
  {
    name: "MediChain (AWS GenAI Hackathon - 3rd Place)",
    description: "AI-powered patient health records platform built on a full AWS backend utilizing Cognito, DynamoDB, Lambda, and Bedrock.",
    tags: ["AWS Bedrock", "GenAI", "HealthTech"],
    repo: "#"
  },
  {
    name: "Machine Learning Projects",
    description: "Developed a Credit Card Fraud classification model, Diabetes risk prediction model, and a California Housing Price regression model.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    repo: "#"
  }
];

const experience = [
  {
    role: "Research Assistant, AI & Knowledge Systems",
    company: "Institutional Research Project",
    desc: "Contributed to RAG-based institutional knowledge systems, improving response accuracy through data structuring and retrieval optimization."
  },
  {
    role: "AI Developer, Academic Performance Analytics",
    company: "University Project",
    desc: "Developed AI-powered academic analytics tools, applying ML to identify trends and academic risk indicators."
  },
  {
    role: "IT Helpdesk Support Technician",
    company: "Amansie West Rural Bank PLC",
    desc: "Delivered Tier-1 IT support and maintained enterprise systems, improving documentation and ticket workflows."
  },
  {
    role: "Cybersecurity Virtual Intern",
    company: "DATACOM",
    desc: "Conducted simulated risk assessments and APT breach analysis, aligning mitigation strategies with NIST standards."
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDFDFD] text-gray-900 selection:bg-gray-900 selection:text-white font-sans relative overflow-x-hidden">
      
      {/* LUSH LANDSCAPE BACKGROUND */}
      <motion.div 
        style={{ y: bgY }}
        className="fixed inset-0 z-0 origin-top"
      >
        <Image 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2560&auto=format&fit=crop"
          alt="Lush Mountain Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 z-10" />
      </motion.div>

      {/* FLOATING PILL NAVBAR */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 w-full z-50 flex justify-center px-4"
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-3 rounded-full flex items-center gap-8">
          <div className="font-semibold tracking-tight text-gray-900 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            S. Asante-Poku
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#competencies" className="hover:text-gray-900 transition-colors">Competencies</a>
            <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
            <a href="#work" className="hover:text-gray-900 transition-colors">Projects</a>
          </div>
          <a href="/resume.pdf" target="_blank" className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Resume
          </a>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <motion.div style={{ opacity: contentOpacity }} className="flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/70 backdrop-blur-md border border-white/40 shadow-sm px-4 py-1.5 rounded-full text-sm font-medium text-gray-800 mb-8 flex items-center gap-2"
          >
            Machine Learning & Cybersecurity Engineer
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 mb-6 drop-shadow-sm px-4">
              Build with intelligence.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed mb-10 font-medium drop-shadow-sm px-4"
          >
            Cloud & AI Solutions Developer blending applied machine learning, hands-on AWS service design, and cybersecurity fundamentals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <a 
              href="#work"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-gray-800 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div 
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/20 backdrop-blur-md px-5 py-2 rounded-full text-white/90 text-xs font-semibold tracking-widest border border-white/10"
        >
          SCROLL <ArrowDown className="w-3 h-3 animate-bounce" />
        </motion.div>
      </section>

      {/* CONTENT SECTIONS OVER WHITE FROSTED BACKGROUND */}
      <div className="relative z-20 bg-white/70 backdrop-blur-3xl border-t border-white/40 pt-24 pb-12 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-32">

          {/* COMPETENCIES */}
          <section id="competencies">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Core Competencies</h2>
              <p className="text-gray-600 text-lg">A unified approach to AI, infrastructure, and security.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Cpu, title: "Machine Learning & AI", desc: "Retrieval-Augmented Generation (RAG), Explainable AI (XAI), Classification, Regression, and Anomaly Detection.", tags: ["Python", "Scikit-learn", "Pandas", "NumPy"] },
                { icon: Cloud, title: "Cloud Computing (AWS)", desc: "Designing, building, and deploying production-grade serverless and event-driven AWS architectures.", tags: ["Lambda", "SageMaker", "DynamoDB", "API Gateway"] },
                { icon: Shield, title: "Cybersecurity", desc: "Risk assessment, threat and APT analysis, Dark Web operations, and secure system design.", tags: ["NIST Framework", "Amazon Macie", "Blue Team"] },
                { icon: Terminal, title: "Web & Systems", desc: "Full-stack web development and CI/CD automation for high-performance applications.", tags: ["React", "JavaScript", "SQL", "GitHub Actions"] }
              ].map((item, i) => (
                <div key={i} className="bg-white/60 border border-white/50 shadow-sm p-8 rounded-[2rem] hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-emerald-600 mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Professional Experience</h2>
              <p className="text-gray-600 text-lg">Applied research, AI development, and cybersecurity.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {experience.map((exp, i) => (
                <div key={i} className="bg-white/60 border border-white/50 shadow-sm p-8 rounded-[2rem] flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-emerald-50 p-4 rounded-2xl shrink-0">
                    <Briefcase className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <p className="text-emerald-700 font-medium text-sm mb-4">{exp.company}</p>
                    <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WORK / PROJECTS */}
          <section id="work">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-gray-600 text-lg">Architectural solutions driving measurable value.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="bg-white/60 border border-white/50 shadow-sm p-8 md:p-12 rounded-[2rem] hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{project.name}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-2xl">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-sm font-medium px-4 py-1.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a href={project.repo} target="_blank" className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-full shrink-0 flex items-center justify-center text-gray-400 group-hover:text-emerald-600 group-hover:shadow-md group-hover:scale-105 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION & CERTIFICATIONS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/60 border border-white/50 shadow-sm p-8 md:p-12 rounded-[2rem]">
              <GraduationCap className="w-8 h-8 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900">BSc Information Technology</h4>
                  <p className="text-gray-500 text-sm mb-1">Pentecost University, Accra, Ghana</p>
                  <p className="text-gray-400 text-xs font-medium">Jan 2023 - June 2026</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Fundamental Theories of Data Science</h4>
                  <p className="text-gray-500 text-sm mb-1">The University of Tokyo</p>
                  <p className="text-gray-400 text-xs font-medium">Expected August 2026</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 border border-white/50 shadow-sm p-8 md:p-12 rounded-[2rem]">
              <Award className="w-8 h-8 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Certifications</h3>
              <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span><strong>AWS Certified Cloud Practitioner</strong> (Amazon Web Services)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span><strong>Google Certified Cybersecurity Professional</strong> (Google)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span><strong>Introduction to Dark Web Operations</strong> (Security Blue Team)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span><strong>Cybersecurity Virtual Internship, APT Breach Analysis</strong> (DATACOM)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* RESUME CTA BANNER */}
          <section className="bg-emerald-900 text-white rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover" />
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold tracking-tight mb-6">Looking for the full picture?</h2>
            <p className="relative z-10 text-emerald-100 text-lg max-w-2xl leading-relaxed mb-10">
              Download my complete curriculum vitae to see a detailed breakdown of my experience, tech stack, and certifications.
            </p>
            <a 
              href="/resume.pdf"
              target="_blank"
              className="relative z-10 bg-white text-emerald-900 px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3 text-lg"
            >
              <Download className="w-5 h-5" /> Download Full CV (PDF)
            </a>
          </section>

          {/* FOOTER */}
          <footer id="contact" className="border-t border-gray-200/60 pt-16 pb-12 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="font-semibold tracking-tight text-gray-900 text-xl mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                Steven Asante-Poku Jnr
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed mb-2">
                steventesla756@gmail.com
              </p>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                Accra, Ghana
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <a href="https://github.com/Steven256-debug" target="_blank" className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/stevenasante-poku-jnr/" target="_blank" className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </footer>
          
          <div className="text-center text-sm font-medium text-gray-400 pb-8">
            © {new Date().getFullYear()} Steven Asante-Poku Jnr. All rights reserved.
          </div>

        </div>
      </div>
    </div>
  );
}
