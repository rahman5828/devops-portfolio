"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const experiences = [
  {
    company: "Freelance",
    role: "DevOps & Cloud Engineer",
    period: "Sep 2026 – Present",
    description:
      "Taking on infrastructure and delivery work for small teams — Docker setups, CI pipelines, AWS environments, and keeping systems observable after they ship.",
    points: [
      "Helping clients containerize apps and stand up repeatable local + cloud environments.",
      "Building and tightening GitHub Actions / Jenkins pipelines with tests and basic security checks.",
      "Supporting AWS EC2, networking, and monitoring so deploys are less of a fire drill.",
    ],
  },
  {
    company: "PearlThoughts",
    role: "DevOps Engineer Intern",
    period: "Aug 2026 – Sep 2026",
    description:
      "Hands-on DevOps work across Linux, Git, Docker, CI/CD, and getting application environments into a reproducible state.",
    points: [
      "Containerized services with Docker and Docker Compose so local and CI environments matched.",
      "Debugged CI workflows, integration tests, and dependency issues that kept builds flaky.",
      "Documented deployment steps, health checks, and the moving parts that actually mattered in production.",
    ],
  },
  {
    company: "Saasta — AttendX",
    role: "DevOps Engineer Trainee",
    period: "Jul 2026 – Aug 2026",
    description:
      "Infrastructure and cloud migration work on a multi-service AttendX stack — lots of containers, a few databases, and a push toward leaner managed services.",
    points: [
      "Cut a ~35-container local environment down and moved the right workloads to managed cloud services.",
      "Dropped infrastructure resource use by more than 85% through architecture and capacity cleanup.",
      "Worked day-to-day with FastAPI services, PostgreSQL migrations, Docker, AWS EC2, GitHub Actions, CloudWatch, and SonarCloud.",
    ],
  },
  {
    company: "Elevate Labs",
    role: "DevOps Intern",
    period: "Aug 2025 – Sep 2025",
    description:
      "First real exposure to CI/CD, containers, AWS, Terraform, and monitoring — the foundation everything else built on.",
    points: [
      "Ran Jenkins and GitHub Actions pipelines; shipped Docker images and poked at Kubernetes.",
      "Deployed sample workloads on AWS and wrote basic Terraform for the pieces that needed to stick around.",
      "Set up Prometheus, Grafana, and CloudWatch dashboards; wrote small Python and Bash helpers to stop repeating the same commands.",
    ],
  },
];

const projects = [
  {
    title: "AI DevOps Copilot",
    status: "IN DEVELOPMENT",
    category: "AI + DEVOPS",
    description:
      "Incident investigation helper that pulls metrics, logs, and alerts so you can reason about failures from evidence — not a chatbot that invents root causes.",
    stack: ["FastAPI", "Python", "Gemini API", "Docker", "Prometheus", "Grafana", "Alertmanager", "pytest"],
  },
  {
    title: "AttendX Infrastructure",
    status: "COMPLETED / ITERATING",
    category: "CLOUD INFRASTRUCTURE",
    description:
      "Multi-service stack: databases, messaging, object storage, API gateway, containers, and the observability layer that keeps the whole thing diagnosable.",
    stack: ["Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "Kafka", "Kong", "Prometheus", "Grafana"],
  },
  {
    title: "Docker Infrastructure Optimization",
    status: "COMPLETED",
    category: "CONTAINERS",
    description:
      "Took a bloated ~35-container local setup, cut the noise, and brought resource use down by more than 85% without losing the services that mattered.",
    stack: ["Docker", "Docker Compose", "AWS", "FastAPI", "PostgreSQL", "GitHub Actions"],
  },
  {
    title: "DevSecOps CI/CD Pipeline",
    status: "COMPLETED",
    category: "CI/CD + SECURITY",
    description:
      "Pipeline that runs tests, quality gates, and container builds before anything lands — security and delivery in the same path, not bolted on later.",
    stack: ["GitHub Actions", "Jenkins", "Docker", "SonarCloud", "pytest", "Git"],
  },
  {
    title: "Twenty CRM Containerization",
    status: "COMPLETED",
    category: "DOCKER",
    description:
      "Packaged Twenty CRM into a Docker Compose stack that spins up cleanly, with CI integration tests so regressions show up before merge.",
    stack: ["Docker", "Docker Compose", "PostgreSQL", "Redis", "Node.js", "GitHub Actions"],
  },
  {
    title: "Cloud Infrastructure Labs",
    status: "BUILDING",
    category: "AWS + TERRAFORM",
    description:
      "Working notes and Terraform for VPC, compute, storage, IAM, and monitoring — the boring, useful pieces of AWS you actually need day to day.",
    stack: ["AWS", "EC2", "S3", "VPC", "IAM", "Terraform", "CloudWatch"],
  },
];

const skillGroups = [
  { title: "Cloud", items: ["AWS", "EC2", "S3", "IAM", "VPC", "CloudWatch", "EKS"] },
  { title: "Containers & Platform", items: ["Docker", "Docker Compose", "Kubernetes", "EKS", "ECS"] },
  { title: "CI/CD & Automation", items: ["GitHub Actions", "Jenkins", "Terraform", "Ansible"] },
  { title: "Development", items: ["Python", "FastAPI", "REST APIs", "SQLAlchemy", "Alembic"] },
  { title: "Databases & Messaging", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "Milvus"] },
  { title: "Observability & Security", items: ["Prometheus", "Grafana", "CloudWatch", "SonarCloud", "Security Scanning", "Secrets Management"] },
];

const principles = [
  { number: "01", title: "Automate the boring parts", text: "If you do it twice, script it. Prefer small, readable automation over clever one-offs." },
  { number: "02", title: "Make it observable", text: "Logs and metrics should answer the first questions you ask at 2 a.m. — not create new ones." },
  { number: "03", title: "Chase the root cause", text: "Guess less. Follow the signals until you know why it broke, then fix that." },
  { number: "04", title: "Ship evidence, not claims", text: "List a tool only if you have used it on something real and can talk through the trade-offs." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc] text-slate-950">
      <div className="fixed left-0 top-0 z-[100] h-[3px] bg-blue-600 transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg">AR</div>
            <div className="hidden sm:block">
              <p className="text-sm font-black tracking-tight">Abdul Rahman</p>
              <p className="text-[9px] font-bold tracking-[0.22em] text-slate-400">DEVOPS · CLOUD · AI INFRA</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {[["HOME", "#home"], ["ABOUT", "#about"], ["EXPERIENCE", "#experience"], ["WORK", "#work"], ["SKILLS", "#skills"], ["CONTACT", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="text-[10px] font-black tracking-[0.18em] text-slate-500 transition hover:text-blue-600">{label}</a>
            ))}
            <a href="#contact" className="rounded-full bg-slate-950 px-5 py-3 text-[10px] font-black tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-blue-600">LET'S TALK</a>
          </nav>
          <button type="button" aria-label="Open menu" onClick={() => setMenuOpen((v) => !v)} className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden">
            <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-1">
              {[["HOME", "#home"], ["ABOUT", "#about"], ["EXPERIENCE", "#experience"], ["WORK", "#work"], ["SKILLS", "#skills"], ["CONTACT", "#contact"]].map(([label, href]) => (
                <a key={label} href={href} onClick={closeMenu} className="border-b border-slate-100 py-4 text-xs font-black tracking-[0.18em] text-slate-600">{label}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "linear-gradient(#dfe5f0 1px, transparent 1px), linear-gradient(90deg, #dfe5f0 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-[9px] font-black tracking-[0.18em] text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              OPEN TO DEVOPS & CLOUD ROLES · FREELANCING
            </div>
            <p className="mb-4 text-[10px] font-black tracking-[0.28em] text-blue-600">DEVOPS · CLOUD · PLATFORM · AI INFRA</p>
            <h1 className="max-w-2xl text-[56px] font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">
              Abdul<br /><span className="text-blue-600">Rahman.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              I spend most of my time making infrastructure boring in the good way — containers that start cleanly, pipelines that catch problems early, and AWS setups you can actually operate.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Python"].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-500 shadow-sm">{item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="rounded-full bg-slate-950 px-6 py-4 text-[10px] font-black tracking-[0.14em] text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-600">EXPLORE MY WORK</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-6 py-4 text-[10px] font-black tracking-[0.14em] text-slate-700 transition hover:-translate-y-1 hover:border-slate-950">VIEW RESUME ↗</a>
            </div>
            <div className="mt-8 flex gap-7">
              <a href="https://www.linkedin.com/in/rahman-devops/" target="_blank" rel="noreferrer" className="text-[11px] font-black tracking-[0.18em] text-slate-400 transition hover:text-blue-600">LINKEDIN</a>
              <a href="https://github.com/rahman5828" target="_blank" rel="noreferrer" className="text-[11px] font-black tracking-[0.18em] text-slate-400 transition hover:text-slate-950">GITHUB</a>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 mt-4 h-[560px] w-full sm:h-[620px] lg:mt-0 lg:h-[650px]">
            <div className="absolute left-1/2 top-[7%] h-[330px] w-[330px] -translate-x-1/2 rounded-full border border-dashed border-blue-200 sm:h-[410px] sm:w-[410px] lg:top-[8%] lg:h-[500px] lg:w-[500px]" />
            <div className="absolute left-1/2 top-[13%] h-[270px] w-[270px] -translate-x-1/2 rounded-full border border-slate-200 bg-white/50 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:h-[350px] sm:w-[350px] lg:top-[14%] lg:h-[420px] lg:w-[420px]" />
            <div className="absolute left-1/2 top-[17%] z-20 h-[220px] w-[220px] -translate-x-1/2 overflow-hidden rounded-full border-[10px] border-white bg-slate-100 shadow-[0_25px_70px_rgba(15,23,42,0.16)] sm:top-[18%] sm:h-[290px] sm:w-[290px] lg:top-[18%] lg:h-[350px] lg:w-[350px]">
              <Image src="/profile.png" alt="Abdul Rahman" fill priority sizes="(max-width: 640px) 220px, (max-width: 1024px) 290px, 350px" className="object-cover object-center" />
            </div>
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="absolute left-[1%] top-[25%] z-30 w-[145px] rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_15px_40px_rgba(15,23,42,0.1)] sm:left-[4%] sm:w-[190px] sm:px-5 lg:left-[0%] lg:top-[29%] lg:w-[190px]">
              <p className="text-[8px] font-black tracking-[0.22em] text-slate-400 sm:text-[9px]">INFRASTRUCTURE</p>
              <p className="mt-2 text-xs font-black text-slate-700 sm:text-sm">Build<span className="mx-2 text-slate-300">→</span>Deploy</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="absolute right-[1%] top-[25%] z-30 w-[145px] rounded-2xl border border-blue-100 bg-blue-50/95 px-4 py-4 shadow-[0_15px_40px_rgba(59,130,246,0.12)] sm:right-[4%] sm:w-[190px] sm:px-5 lg:right-[0%] lg:top-[29%] lg:w-[190px]">
              <p className="text-[8px] font-black tracking-[0.22em] text-blue-500 sm:text-[9px]">CLOUD</p>
              <p className="mt-2 text-xs font-black text-blue-700 sm:text-sm">AWS · Kubernetes</p>
            </motion.div>
            <div className="absolute bottom-[20%] left-[19%] z-20 hidden h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-[9px] font-black text-blue-600 shadow-md sm:flex">K8S</div>
            <div className="absolute bottom-[20%] right-[19%] z-20 hidden h-11 w-11 items-center justify-center rounded-xl border border-orange-100 bg-white text-[9px] font-black text-orange-500 shadow-md sm:flex">AWS</div>
            <div className="absolute bottom-[1%] left-1/2 z-40 w-[91%] -translate-x-1/2 overflow-hidden rounded-[24px] border border-slate-700 bg-slate-950 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-[10px] text-slate-500">abdul@devops ~</span>
              </div>
              <div className="space-y-2 px-4 py-4 font-mono text-[11px] leading-6 text-slate-300 sm:text-xs">
                <p><span className="text-emerald-400">$</span> whoami</p>
                <p className="text-blue-300">devops-engineer</p>
                <p><span className="text-emerald-400">$</span> focus</p>
                <p className="text-slate-400">cloud / automation / containers / reliability</p>
                <p><span className="text-emerald-400">$</span> status</p>
                <p className="text-emerald-300">freelancing · building · shipping<span className="animate-pulse">|</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[10px] font-black tracking-[0.25em] text-blue-600">01 · ABOUT</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">How I work<br />on systems.</h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">Most of the interesting problems show up after the first deploy — reliability, cost, and figuring out why something is red at odd hours.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-xl">
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <p className="font-mono text-xs leading-7 text-slate-400">$ cat profile.txt</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">CS grad focused on DevOps, cloud, and the infrastructure under modern apps — including the bits that support ML and AI workloads.</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">I learn by shipping small systems, breaking them, fixing them, and writing down what actually mattered.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400">CURRENT FOCUS</p>
                <div className="mt-5 space-y-4">
                  {["DevOps & Cloud", "Containers & Kubernetes", "Infrastructure Automation", "Observability & Reliability", "AI / ML Infrastructure"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f5f7fb] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <p className="text-[10px] font-black tracking-[0.25em] text-blue-600">ENGINEERING MINDSET</p>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Build. Automate. Observe.</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((item) => (
                <div key={item.number} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-mono text-xs text-blue-600">{item.number}</p>
                  <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
            <p className="text-[10px] font-black tracking-[0.25em] text-blue-600">02 · EXPERIENCE</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Roles and the work<br className="hidden sm:block" />that came with them.</h2>
            <div className="mt-14">
              {experiences.map((experience, index) => (
                <div key={`${experience.company}-${experience.period}`} className="relative grid gap-6 border-t border-slate-200 py-10 lg:grid-cols-[220px_1fr]">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.15em] text-slate-400">{experience.period}</p>
                    <p className="mt-2 text-sm font-black text-blue-600">{experience.company}</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 hidden h-3 w-3 rounded-full border-2 border-white bg-blue-600 shadow lg:block" />
                    <h3 className="text-2xl font-black tracking-tight">{experience.role}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">{experience.description}</p>
                    <ul className="mt-5 space-y-3">
                      {experience.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="bg-slate-950 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-black tracking-[0.25em] text-blue-400">03 · FEATURED WORK</p>
                <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Things I've actually shipped.</h2>
              </div>
              <a href="https://github.com/rahman5828" target="_blank" rel="noreferrer" className="text-[10px] font-black tracking-[0.18em] text-slate-400 transition hover:text-white">VIEW GITHUB ↗</a>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <article key={project.title} className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-600 ${index === 0 ? "md:col-span-2" : ""}`}>
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl transition group-hover:bg-blue-600/20" />
                  <div className="relative">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[9px] font-black tracking-[0.2em] text-blue-400">{project.category}</span>
                      <span className="rounded-full border border-slate-700 px-3 py-1 text-[9px] font-black tracking-[0.14em] text-slate-400">{project.status}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-black tracking-tight">{project.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-[10px] font-bold text-slate-400">{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] font-black tracking-[0.25em] text-blue-600">ENGINEERING IMPACT</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">One number that<br />stuck.</h2>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <p className="text-[10px] font-black tracking-[0.2em] text-slate-400">REAL OUTCOME</p>
              <div className="mt-5 flex flex-wrap items-end gap-4">
                <span className="text-6xl font-black tracking-[-0.06em] text-blue-600 sm:text-8xl">85%+</span>
                <span className="mb-2 max-w-[180px] text-sm font-bold leading-5 text-slate-500">less resource burn after cleaning up a bloated local stack.</span>
              </div>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500">Started with roughly 35 containers in a local environment. Trimmed what did not need to run locally, moved the right pieces to managed services, and stopped paying for idle capacity.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="bg-[#f5f7fb] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
            <p className="text-[10px] font-black tracking-[0.25em] text-blue-600">04 · TECHNICAL STACK</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Tools I use.<br />Outcomes I care about.</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-black tracking-tight">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <p className="text-[10px] font-black tracking-[0.25em] text-blue-400">LONG-TERM DIRECTION</p>
            <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">DEVOPS<span className="text-slate-600"> → </span>CLOUD<span className="text-slate-600"> → </span>AI INFRASTRUCTURE</h2>
                <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400">Getting better at the platform layer — so apps and ML workloads are easier to deploy, watch, and keep healthy.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                <p className="font-mono text-xs text-slate-500">$ roadmap</p>
                <div className="mt-5 space-y-4">
                  {["DevOps / Cloud", "Platform Engineering", "MLOps", "AI Infrastructure"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold">
                      <span className="font-mono text-xs text-blue-400">0{index + 1}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="education" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <p className="text-[10px] font-black tracking-[0.25em] text-blue-600">05 · EDUCATION & CERTIFICATIONS</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400">EDUCATION</p>
                <h3 className="mt-5 text-2xl font-black">B.E. Computer Science and Engineering</h3>
                <p className="mt-3 text-sm font-bold text-blue-600">Mother Teresa College of Engineering and Technology</p>
                <p className="mt-2 text-sm text-slate-500">2021 – 2025 · CGPA 7.6 · First Class</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400">CERTIFICATIONS</p>
                <div className="mt-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-black">AWS Cloud Practitioner — AWS Cloud Quest</h3>
                  </div>
                  <div>
                    <h3 className="text-lg font-black">Linux Essentials — Besant Technologies</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
              <p className="text-[10px] font-black tracking-[0.2em] text-blue-400">GITHUB</p>
              <h3 className="mt-4 text-2xl font-black">Build it. Commit it. Show the evidence.</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">Source code, experiments and engineering work are available publicly on GitHub.</p>
              <a href="https://github.com/rahman5828" target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-black text-blue-400 transition hover:text-blue-300">github.com/rahman5828 ↗</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="text-[10px] font-black tracking-[0.25em] text-blue-400">06 · CONTACT</p>
              <h2 className="mt-5 max-w-3xl text-5xl font-black tracking-[-0.05em] sm:text-7xl">If you need<br />infrastructure help.</h2>
              <p className="mt-7 max-w-xl text-sm leading-7 text-slate-400">Open to full-time DevOps / Cloud / Platform roles and selective freelance work. Happy to talk about pipelines, AWS, containers, or the observability side of AI systems.</p>
            </div>
            <div className="flex flex-col justify-end gap-3">
              <a href="mailto:abdulrahman6148@gmail.com" className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5 text-sm font-bold transition hover:border-slate-600">abdulrahman6148@gmail.com</a>
              <a href="https://www.linkedin.com/in/rahman-devops/" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5 text-sm font-bold transition hover:border-slate-600">LinkedIn ↗</a>
              <a href="https://github.com/rahman5828" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5 text-sm font-bold transition hover:border-slate-600">GitHub ↗</a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-[9px] font-black tracking-[0.18em] sm:flex-row">
          <span>ABDUL RAHMAN · DEVOPS · CLOUD · AI INFRASTRUCTURE</span>
          <span>BUILD · AUTOMATE · OBSERVE · IMPROVE</span>
        </div>
      </footer>
    </main>
  );
}
