"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
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
  hidden: {
    opacity: 0,
  },
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
    period: "AUG 2026 — PRESENT",
    company: "PearlThoughts",
    role: "DevOps Engineer Intern",
    type: "CURRENT",
    description:
      "Hands-on DevOps engineering work across Linux, Git/GitHub, Docker, CI/CD and reproducible application environments. Building practical infrastructure skills through real engineering tasks and continuous troubleshooting.",
    tags: ["Linux", "Git", "Docker", "CI/CD", "GitHub"],
  },
  {
    period: "JUL 2026 — AUG 2026",
    company: "Saasta · AttendX",
    role: "DevOps Engineer Trainee",
    type: "COMPLETED",
    description:
      "Worked on a large containerized application environment and infrastructure modernization. Focused on Docker, FastAPI services, managed cloud infrastructure, CI/CD, migrations, observability and performance validation.",
    tags: [
      "AWS",
      "Docker",
      "FastAPI",
      "GitHub Actions",
      "CloudWatch",
      "SonarCloud",
    ],
  },
  {
    period: "AUG 2025 — SEP 2025",
    company: "Elevate Labs",
    role: "DevOps Intern",
    type: "COMPLETED",
    description:
      "Built foundational experience with CI/CD automation, containers, Kubernetes, AWS, Terraform, monitoring and scripting while working through practical DevOps tasks.",
    tags: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "AI DevOps Copilot",
    subtitle: "Evidence-driven incident intelligence",
    status: "IN DEVELOPMENT",
    statusClass: "border-violet-200 bg-violet-50 text-violet-700",
    description:
      "An AI-powered DevOps investigation system designed to reason over infrastructure evidence instead of behaving like a generic chatbot.",
    details: [
      "FastAPI backend",
      "Prometheus / Grafana / Alertmanager",
      "Docker & Docker Compose",
      "Gemini-powered investigation",
      "pytest regression testing",
    ],
    stack: ["Python", "FastAPI", "AI", "Docker", "Prometheus"],
    github: "https://github.com/rahman5828/ai-devops-copilot",
    featured: true,
  },
  {
    number: "02",
    title: "AttendX Infrastructure",
    subtitle: "Distributed application infrastructure",
    status: "REAL-WORLD WORK",
    statusClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    description:
      "Worked across a complex infrastructure environment involving databases, messaging, object storage, API gateway, observability and container orchestration.",
    details: [
      "PostgreSQL + PostGIS",
      "Redis + ClickHouse + Milvus",
      "Kafka / RabbitMQ",
      "Kong API Gateway",
      "Prometheus + Grafana + Loki",
      "Docker Compose / Kubernetes / Helm",
    ],
    stack: ["AWS", "Docker", "Kubernetes", "Kafka", "Grafana"],
    featured: true,
  },
  {
    number: "03",
    title: "Docker Infrastructure Optimization",
    subtitle: "From resource-heavy local stack to lean architecture",
    status: "COMPLETED",
    statusClass: "border-blue-200 bg-blue-50 text-blue-700",
    description:
      "Optimized a large local container environment containing roughly 35 containers and moved key workloads toward managed cloud services and a significantly lighter runtime.",
    details: [
      "35-container baseline",
      "85%+ infrastructure resource reduction",
      "Managed cloud services",
      "Docker image optimization",
      "AWS EC2 deployment",
    ],
    stack: ["Docker", "AWS", "EC2", "Cloud"],
    featured: false,
  },
  {
    number: "04",
    title: "CI/CD DevSecOps Pipeline",
    subtitle: "Build → Test → Scan → Deploy",
    status: "COMPLETED",
    statusClass: "border-blue-200 bg-blue-50 text-blue-700",
    description:
      "Implemented practical CI/CD workflows with automated testing and code-quality/security checks to make deployments more repeatable.",
    details: [
      "GitHub Actions",
      "Jenkins",
      "SonarCloud",
      "Automated validation",
      "Deployment workflows",
    ],
    stack: ["GitHub Actions", "Jenkins", "SonarCloud"],
    featured: false,
  },
  {
    number: "05",
    title: "PearlThoughts Docker + CI Work",
    subtitle: "Containerization and debugging",
    status: "ENGINEERING WORK",
    statusClass: "border-amber-200 bg-amber-50 text-amber-700",
    description:
      "Worked through Docker Compose, multi-stage builds, health checks, persistent services and CI validation while debugging failures by tracing the actual execution path.",
    details: [
      "Multi-stage Dockerfile",
      "Docker Compose",
      "PostgreSQL + Redis",
      "Health checks",
      "CI integration testing",
    ],
    stack: ["Docker", "Compose", "Node.js", "CI/CD"],
    featured: false,
  },
  {
    number: "06",
    title: "AWS DevOps Engineer Assignment",
    subtitle: "Cloud infrastructure implementation",
    status: "ACTIVE",
    statusClass: "border-cyan-200 bg-cyan-50 text-cyan-700",
    description:
      "A practical AWS-focused implementation covering infrastructure configuration, IAM, networking, compute and deployment-oriented DevOps workflows.",
    details: ["AWS EC2", "IAM", "VPC", "Cloud infrastructure", "Automation"],
    stack: ["AWS", "EC2", "IAM", "VPC"],
    github: "https://github.com/rahman5828/aws-devops-engineer-assignment",
    featured: false,
  },
];

const skillGroups = [
  {
    title: "Cloud",
    icon: "☁",
    items: ["AWS", "EC2", "S3", "IAM", "VPC", "CloudWatch", "EKS"],
  },
  {
    title: "Containers",
    icon: "▣",
    items: ["Docker", "Docker Compose", "Kubernetes", "EKS", "ECS", "Helm"],
  },
  {
    title: "Automation",
    icon: "↗",
    items: ["GitHub Actions", "Jenkins", "Terraform", "Ansible", "Bash"],
  },
  {
    title: "Observability",
    icon: "◉",
    items: ["Prometheus", "Grafana", "CloudWatch", "Loki", "Alertmanager"],
  },
  {
    title: "Development",
    icon: "</>",
    items: ["Python", "FastAPI", "REST APIs", "SQL", "Git", "GitHub"],
  },
  {
    title: "DevSecOps",
    icon: "◇",
    items: ["SonarCloud", "Security Scanning", "CI Quality Gates", "Secrets"],
  },
];

const principles = [
  {
    number: "01",
    title: "Build",
    text: "Start with a reproducible environment instead of manually configuring everything.",
  },
  {
    number: "02",
    title: "Automate",
    text: "Turn repeated deployment and validation steps into reliable workflows.",
  },
  {
    number: "03",
    title: "Observe",
    text: "Use logs, metrics and traces to understand what the system is actually doing.",
  },
  {
    number: "04",
    title: "Debug",
    text: "Follow evidence through the system instead of guessing from the first error.",
  },
  {
    number: "05",
    title: "Secure",
    text: "Treat security and code quality as part of delivery, not a final checkbox.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9fc] text-slate-950 selection:bg-blue-600 selection:text-white">
      {/* Scroll progress */}
      <div className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-[width] duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-900/10 transition-transform group-hover:rotate-6">
              AR
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-black tracking-tight">
                Abdul Rahman
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                DevOps · Cloud · AI Infra
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Work", "#work"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500 transition-colors hover:text-blue-600"
              >
                {label}
              </a>
            ))}

            <a
              href="mailto:abdulrahman6148@gmail.com"
              className="rounded-full bg-slate-950 px-5 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Let&apos;s Talk
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
            aria-label="Toggle navigation"
          >
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Work", "#work"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-20"
      >
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#dbe3ef 1px, transparent 1px), linear-gradient(90deg, #dbe3ef 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient blobs */}
        <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-200/25 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                Open to entry-level DevOps roles
              </span>
            </div>

            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-600">
              DevOps · Cloud · DevSecOps · AI Infrastructure
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
              Abdul
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Rahman.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-600 sm:text-xl">
              I build, automate and troubleshoot cloud infrastructure — while
              extending that foundation into AI infrastructure and platform
              engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform",
                "CI/CD",
                "Python",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-slate-900/10 transition-all hover:-translate-y-1 hover:bg-blue-600"
              >
                Explore My Work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-slate-700 transition-all hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600"
              >
                View Resume
                <span>↗</span>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/rahman-devops/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 transition-colors hover:text-blue-600"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/rahman5828"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-black uppercase tracking-[0.15em] text-slate-400 transition-colors hover:text-slate-950"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative aspect-square">
              {/* Outer technical ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[5%] rounded-full border border-dashed border-blue-300/70"
              />

              {/* Inner ring */}
              <div className="absolute inset-[11%] rounded-full border border-slate-200 bg-white/60 shadow-2xl shadow-blue-900/[0.04] backdrop-blur-sm" />

              {/* Portrait */}
              <div className="absolute left-1/2 top-[47%] aspect-square w-[61%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[10px] border-white shadow-2xl shadow-slate-900/20">
                <Image
                  src="/profile.png"
                  alt="Abdul Rahman"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* LEFT POPUP */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[1%] top-[22%] z-20 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl shadow-slate-900/10"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Infrastructure
                </p>

                <p className="mt-1.5 text-sm font-black tracking-tight text-slate-900">
                  Build → Deploy
                </p>
              </motion.div>

              {/* RIGHT POPUP */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[1%] top-[16%] z-20 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 shadow-xl shadow-blue-900/[0.06]"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">
                  Cloud
                </p>

                <p className="mt-1.5 text-sm font-black tracking-tight text-blue-700">
                  AWS · Kubernetes
                </p>
              </motion.div>

              {/* SMALL TECH MARKERS */}
              <div className="absolute bottom-[18%] left-[10%] z-10 rounded-xl border border-violet-100 bg-violet-50 px-3 py-2">
                <span className="text-[9px] font-black text-violet-700">
                  K8s
                </span>
              </div>

              <div className="absolute bottom-[18%] right-[10%] z-10 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2">
                <span className="text-[9px] font-black text-blue-700">
                  AWS
                </span>
              </div>

              {/* MAIN TERMINAL BLOCK */}
              <div className="absolute bottom-[1%] left-1/2 z-30 w-[86%] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-700 bg-[#0b1120] shadow-2xl shadow-slate-950/25">
                {/* Terminal header */}
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <span className="ml-3 font-mono text-[9px] text-slate-500">
                    abdul@devops ~
                  </span>
                </div>

                {/* Terminal content */}
                <div className="space-y-1.5 p-4 font-mono text-[10px] sm:p-5 sm:text-xs">
                  <p className="text-slate-500">$ whoami</p>

                  <p className="text-emerald-400">
                    devops-engineer-intern
                  </p>

                  <p className="pt-1 text-slate-500">$ focus</p>

                  <p className="text-blue-300">
                    cloud / automation / containers / reliability
                  </p>

                  <p className="pt-1 text-slate-500">$ status</p>

                  <p className="text-emerald-400">
                    learning • building • shipping
                    <span className="ml-1 inline-block animate-pulse">
                      ▌
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                01 / About
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Not just
                <br />
                <span className="text-slate-400">another resume.</span>
              </h2>
            </div>

            <div>
              <p className="text-xl font-semibold leading-8 text-slate-700 sm:text-2xl sm:leading-10">
                I&apos;m building my career around the systems behind modern
                software — infrastructure, automation, deployment,
                observability and reliability.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-500">
                My path has moved from learning the fundamentals, to
                pre-internship work, to hands-on DevOps engineering
                environments. I&apos;m now continuing that progression as a
                DevOps Engineer Intern while exploring the infrastructure
                challenges behind AI and LLM workloads.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Linux",
                  "Git",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "Terraform",
                  "CI/CD",
                  "Python",
                  "Observability",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Career progression */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.03]"
          >
            <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400">
                Career progression
              </p>
            </div>

            <div className="grid md:grid-cols-3">
              {[
                ["01", "PRE-INTERNSHIP", "Foundations", "Linux · Git · Docker"],
                [
                  "02",
                  "ENGINEER TRAINEE",
                  "Real infrastructure",
                  "AWS · CI/CD · Cloud",
                ],
                [
                  "03",
                  "DEVOPS ENGINEER INTERN",
                  "Current chapter",
                  "Automation · Reliability · Scale",
                ],
              ].map(([number, title, subtitle, skills], index) => (
                <div
                  key={title}
                  className={`relative p-7 sm:p-9 ${
                    index !== 2 ? "border-b md:border-b-0 md:border-r" : ""
                  } border-slate-200`}
                >
                  <span className="font-mono text-xs font-bold text-blue-600">
                    {number}
                  </span>

                  <p className="mt-8 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    {title}
                  </p>

                  <h3 className="mt-2 text-xl font-black">{subtitle}</h3>

                  <p className="mt-3 text-sm text-slate-500">{skills}</p>

                  {index < 2 && (
                    <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-2xl text-slate-300 md:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ENGINEERING APPROACH */}
      <section className="bg-slate-950 py-28 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                Engineering mindset
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Build it.
                <br />
                <span className="text-slate-500">Understand it.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
                I&apos;m less interested in memorizing tools and more
                interested in understanding what happens underneath them.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {principles.map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  className={`group bg-white/[0.025] p-7 transition-colors ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-blue-400">
                    {item.number}
                  </span>

                  <h3 className="mt-8 text-xl font-black">{item.title}</h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-white py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              02 / Experience
            </p>

            <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Where I&apos;ve
                <br />
                <span className="text-slate-300">been learning.</span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-slate-500">
                Every role has added another layer — fundamentals, real
                infrastructure, automation, troubleshooting and now broader
                DevOps engineering responsibility.
              </p>
            </div>
          </motion.div>

          <div className="mt-16">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="group relative grid gap-6 border-t border-slate-200 py-10 lg:grid-cols-[180px_1fr_220px]"
              >
                <div>
                  <p className="font-mono text-[10px] font-bold leading-5 text-slate-400">
                    {item.period}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-black tracking-tight">
                      {item.company}
                    </h3>

                    <span
                      className={`rounded-full border px-3 py-1 text-[8px] font-black uppercase tracking-[0.15em] ${
                        item.type === "CURRENT"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-bold text-blue-600">
                    {item.role}
                  </p>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2.5 py-1.5 text-[10px] font-bold text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start lg:justify-end">
                  <span className="font-mono text-xs text-slate-300 transition-colors group-hover:text-blue-500">
                    0{index + 1} /
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-[#f5f7fb] py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                03 / Selected work
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Things I&apos;ve
                <br />
                <span className="text-slate-300">actually built.</span>
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-sm leading-7 text-slate-500">
                A mixture of real engineering work, portfolio projects and
                systems currently being developed. Status labels are
                intentional — unfinished work stays unfinished.
              </p>
            </div>
          </motion.div>

          {/* Status legend */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
              Status
            </span>

            {[
              ["CURRENT", "bg-emerald-50 text-emerald-700 border-emerald-200"],
              ["COMPLETED", "bg-blue-50 text-blue-700 border-blue-200"],
              [
                "IN DEVELOPMENT",
                "bg-violet-50 text-violet-700 border-violet-200",
              ],
              ["ACTIVE", "bg-cyan-50 text-cyan-700 border-cyan-200"],
            ].map(([label, classes]) => (
              <span
                key={label}
                className={`rounded-full border px-3 py-1 text-[8px] font-black uppercase tracking-[0.12em] ${classes}`}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/[0.06] sm:p-9 ${
                  project.featured ? "lg:p-10" : ""
                }`}
              >
                <div className="absolute right-7 top-7 font-mono text-xs text-slate-200 transition-colors group-hover:text-blue-200">
                  {project.number}
                </div>

                <div className="flex flex-wrap items-center gap-2 pr-10">
                  <span
                    className={`rounded-full border px-3 py-1 text-[8px] font-black uppercase tracking-[0.13em] ${project.statusClass}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {project.subtitle}
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-7 space-y-2">
                  {project.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3 text-xs font-semibold text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-50 px-2.5 py-1.5 text-[10px] font-bold text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-blue-600 transition-colors hover:text-blue-800"
                  >
                    View repository
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-white py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="overflow-hidden rounded-[2rem] bg-slate-950 text-white"
          >
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

                <p className="relative text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                  A problem I worked on
                </p>

                <h2 className="relative mt-6 max-w-xl text-3xl font-black tracking-[-0.03em] sm:text-5xl">
                  When infrastructure gets heavy,
                  <span className="text-slate-500"> simplify it.</span>
                </h2>

                <p className="relative mt-6 max-w-xl text-sm leading-7 text-slate-400">
                  One of my practical infrastructure tasks involved a local
                  environment with roughly 35 containers consuming more than
                  16GB of RAM. The work focused on reducing unnecessary local
                  infrastructure and moving appropriate workloads toward
                  managed services.
                </p>

                <p className="relative mt-6 text-xs font-bold text-slate-500">
                  The result: an architecture using under 2GB of runtime
                  resources and more than 85% resource reduction.
                </p>
              </div>

              <div className="grid grid-cols-2 border-t border-white/10 lg:border-l lg:border-t-0">
                <div className="border-b border-r border-white/10 p-8 sm:p-12">
                  <p className="font-mono text-xs text-blue-400">BEFORE</p>
                  <p className="mt-7 text-5xl font-black sm:text-7xl">35</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    containers
                  </p>
                </div>

                <div className="border-b border-white/10 p-8 sm:p-12">
                  <p className="font-mono text-xs text-blue-400">AFTER</p>
                  <p className="mt-7 text-5xl font-black sm:text-7xl">
                    &lt;2
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    GB runtime
                  </p>
                </div>

                <div className="border-r border-white/10 p-8 sm:p-12">
                  <p className="font-mono text-xs text-blue-400">IMPACT</p>
                  <p className="mt-7 text-5xl font-black sm:text-7xl">85%</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    + reduction
                  </p>
                </div>

                <div className="p-8 sm:p-12">
                  <p className="font-mono text-xs text-blue-400">LESSON</p>
                  <p className="mt-7 text-xl font-black leading-7 sm:text-2xl">
                    Architecture matters.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[#f5f7fb] py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
              04 / Toolbox
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Tools I&apos;ve been
              <br />
              <span className="text-slate-300">
                getting my hands dirty with.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ delay: index * 0.04 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 font-mono text-xs font-bold text-white">
                    {group.icon}
                  </span>

                  <span className="font-mono text-[9px] text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-black">{group.title}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTION */}
      <section className="bg-white py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-xl shadow-slate-900/[0.03] sm:p-12 lg:p-16"
          >
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">
                  Where I&apos;m going
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  DevOps
                  <br />
                  <span className="text-slate-300">→ Cloud</span>
                  <br />
                  <span className="text-violet-600">
                    → AI Infrastructure
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-lg font-semibold leading-8 text-slate-700">
                  The goal isn&apos;t to collect tools. It&apos;s to understand
                  how reliable infrastructure is designed, deployed, observed
                  and scaled — including the infrastructure needed by modern
                  AI workloads.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-3">
                  {[
                    ["NOW", "DevOps fundamentals", "Linux · Docker · CI/CD"],
                    ["NEXT", "Cloud & Platform", "AWS · K8s · Terraform"],
                    ["LATER", "AI Infrastructure", "LLMs · RAG · MLOps"],
                  ].map(([label, title, text]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
                        {label}
                      </p>

                      <p className="mt-4 text-sm font-black">{title}</p>

                      <p className="mt-2 text-[11px] leading-5 text-slate-400">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-y border-slate-200 bg-[#f5f7fb] py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-3xl border border-slate-200 bg-white p-8"
          >
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
              Education
            </p>

            <h3 className="mt-7 text-xl font-black">
              B.E. Computer Science & Engineering
            </h3>

            <p className="mt-2 text-sm font-bold text-blue-600">
              Mother Teresa College of Engineering and Technology
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-500">
                2021 — 2025
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-500">
                CGPA 7.6
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-500">
                First Class
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white"
          >
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
              Certifications
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <p className="font-black">AWS Cloud Practitioner</p>
                <p className="mt-1 text-xs text-slate-500">AWS Cloud Quest</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="font-black">Linux Essentials</p>
                <p className="mt-1 text-xs text-slate-500">
                  Besant Technologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GITHUB */}
      <section className="bg-slate-950 py-28 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                Open source / GitHub
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                If you want to know how I work,
                <br />
                <span className="text-slate-500">look at the code.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
                Projects, experiments, infrastructure work and the things
                I&apos;m learning are documented publicly whenever possible.
              </p>
            </div>

            <a
              href="https://github.com/rahman5828"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-600"
            >
              github.com/rahman5828
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-900/20 sm:p-14 lg:p-20"
          >
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100">
                05 / Contact
              </p>

              <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Building something
                <br />
                interesting?
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                I&apos;m open to entry-level DevOps, Cloud and Platform
                Engineering opportunities, as well as conversations around
                infrastructure and AI workloads.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="mailto:abdulrahman6148@gmail.com"
                  className="rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-blue-700 transition-all hover:-translate-y-1 hover:bg-slate-950 hover:text-white"
                >
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/rahman-devops/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/25 bg-white/10 px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-1 hover:bg-white/20"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-[#f7f9fc]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black">Abdul Rahman</p>
            <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
              DevOps · Cloud · AI Infrastructure
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/rahman5828"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-slate-950"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rahman-devops/"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-blue-600"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-blue-600"
            >
              Resume
            </a>
          </div>

          <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-300">
            Built with Next.js · TypeScript · Motion
          </p>
        </div>
      </footer>
    </main>
  );
}