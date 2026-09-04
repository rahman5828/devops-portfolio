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
    company: "PearlThoughts",
    role: "DevOps Engineer Intern",
    period: "Aug 2026 – Present",
    description:
      "Working through practical DevOps engineering tasks covering Linux, Git/GitHub, Docker, CI/CD and reproducible application environments.",
    points: [
      "Containerized and configured application environments using Docker and Docker Compose.",
      "Worked with CI workflows, integration testing, debugging and reproducible local environments.",
      "Improved understanding of deployment workflows, health checks, dependencies and engineering documentation.",
    ],
  },
  {
    company: "Saasta — AttendX",
    role: "DevOps Engineer Trainee",
    period: "Jul 2026 – Aug 2026",
    description:
      "Worked on infrastructure, deployment and cloud migration activities for a multi-service AttendX environment.",
    points: [
      "Optimized a ~35-container local environment and migrated suitable workloads toward managed cloud services.",
      "Reduced infrastructure resource consumption by more than 85% through architecture and resource optimization.",
      "Worked with FastAPI services, PostgreSQL migrations, Docker, AWS EC2, GitHub Actions, CloudWatch and SonarCloud.",
    ],
  },
  {
    company: "Elevate Labs",
    role: "DevOps Intern",
    period: "Aug 2025 – Sep 2025",
    description:
      "Built foundational experience across CI/CD, containers, cloud infrastructure, infrastructure as code and monitoring.",
    points: [
      "Worked with Jenkins, GitHub Actions, Docker and Kubernetes.",
      "Practiced AWS deployment workflows and Terraform-based infrastructure automation.",
      "Worked with Prometheus, Grafana, CloudWatch, Python and Bash automation.",
    ],
  },
];

const projects = [
  {
    title: "AI DevOps Copilot",
    status: "IN DEVELOPMENT",
    category: "AI + DEVOPS",
    description:
      "An evidence-driven infrastructure incident investigation system designed to help engineers understand failures using operational signals rather than acting as a simple chatbot.",
    stack: [
      "FastAPI",
      "Python",
      "Gemini API",
      "Docker",
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "pytest",
    ],
  },
  {
    title: "AttendX Infrastructure",
    status: "COMPLETED / ITERATING",
    category: "CLOUD INFRASTRUCTURE",
    description:
      "Infrastructure work across a multi-service application environment involving databases, messaging, object storage, API gateway, containers and observability.",
    stack: [
      "Docker",
      "Kubernetes",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Kong",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Docker Infrastructure Optimization",
    status: "COMPLETED",
    category: "CONTAINERS",
    description:
      "Optimized a large local container environment and reduced infrastructure resource consumption by more than 85% through architectural and resource improvements.",
    stack: [
      "Docker",
      "Docker Compose",
      "AWS",
      "FastAPI",
      "PostgreSQL",
      "GitHub Actions",
    ],
  },
  {
    title: "DevSecOps CI/CD Pipeline",
    status: "COMPLETED",
    category: "CI/CD + SECURITY",
    description:
      "A CI/CD workflow combining automated testing, code quality checks and container-oriented delivery practices.",
    stack: [
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "SonarCloud",
      "pytest",
      "Git",
    ],
  },
  {
    title: "Twenty CRM Containerization",
    status: "COMPLETED",
    category: "DOCKER",
    description:
      "Containerized Twenty CRM with a reproducible Docker Compose environment and improved CI integration testing.",
    stack: [
      "Docker",
      "Docker Compose",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "GitHub Actions",
    ],
  },
  {
    title: "Cloud Infrastructure Labs",
    status: "BUILDING",
    category: "AWS + TERRAFORM",
    description:
      "A growing collection of practical cloud infrastructure experiments covering networking, compute, storage, IAM, monitoring and infrastructure automation.",
    stack: [
      "AWS",
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "Terraform",
      "CloudWatch",
    ],
  },
];

const skillGroups = [
  {
    title: "Cloud",
    items: ["AWS", "EC2", "S3", "IAM", "VPC", "CloudWatch", "EKS"],
  },
  {
    title: "Containers & Platform",
    items: ["Docker", "Docker Compose", "Kubernetes", "EKS", "ECS"],
  },
  {
    title: "CI/CD & Automation",
    items: ["GitHub Actions", "Jenkins", "Terraform", "Ansible"],
  },
  {
    title: "Development",
    items: ["Python", "FastAPI", "REST APIs", "SQLAlchemy", "Alembic"],
  },
  {
    title: "Databases & Messaging",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Milvus",
    ],
  },
  {
    title: "Observability & Security",
    items: [
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "SonarCloud",
      "Security Scanning",
      "Secrets Management",
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "Automate repetitive work",
    text: "Turn repeated manual steps into reliable, understandable workflows.",
  },
  {
    number: "02",
    title: "Design for visibility",
    text: "Logs, metrics and clear signals should make systems easier to understand.",
  },
  {
    number: "03",
    title: "Fix the root cause",
    text: "Troubleshooting should follow evidence instead of assumptions.",
  },
  {
    number: "04",
    title: "Build before claiming",
    text: "Projects and measurable outcomes should support the technologies on the profile.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fc] text-slate-950">
      {/* Scroll progress */}
      <div
        className="fixed left-0 top-0 z-[100] h-[3px] bg-blue-600 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg">
              AR
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-black tracking-tight">Abdul Rahman</p>
              <p className="text-[9px] font-bold tracking-[0.22em] text-slate-400">
                DEVOPS · CLOUD · AI INFRA
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["HOME", "#home"],
              ["ABOUT", "#about"],
              ["EXPERIENCE", "#experience"],
              ["WORK", "#work"],
              ["SKILLS", "#skills"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[10px] font-black tracking-[0.18em] text-slate-500 transition hover:text-blue-600"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-slate-950 px-5 py-3 text-[10px] font-black tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              LET&apos;S TALK
            </a>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
          >
            <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-1">
              {[
                ["HOME", "#home"],
                ["ABOUT", "#about"],
                ["EXPERIENCE", "#experience"],
                ["WORK", "#work"],
                ["SKILLS", "#skills"],
                ["CONTACT", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-xs font-black tracking-[0.18em] text-slate-600"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
          ========================================================= */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-200 bg-white"
      >
        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(#dfe5f0 1px, transparent 1px), linear-gradient(90deg, #dfe5f0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10 lg:py-24">
          {/* Hero copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-20"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-[9px] font-black tracking-[0.18em] text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              OPEN TO ENTRY-LEVEL DEVOPS ROLES
            </div>

            <p className="mb-4 text-[10px] font-black tracking-[0.28em] text-blue-600">
              DEVOPS · CLOUD · DEVSECOPS · AI INFRASTRUCTURE
            </p>

            <h1 className="max-w-2xl text-[56px] font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">
              Abdul
              <br />
              <span className="text-blue-600">Rahman.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              I build, automate and troubleshoot cloud infrastructure —
              while extending that foundation into AI infrastructure and
              platform engineering.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Python"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold text-slate-500 shadow-sm"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-slate-950 px-6 py-4 text-[10px] font-black tracking-[0.14em] text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-600"
              >
                EXPLORE MY WORK
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white px-6 py-4 text-[10px] font-black tracking-[0.14em] text-slate-700 transition hover:-translate-y-1 hover:border-slate-950"
              >
                VIEW RESUME ↗
              </a>
            </div>

            <div className="mt-8 flex gap-7">
              <a
                href="https://www.linkedin.com/in/rahman-devops/"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-black tracking-[0.18em] text-slate-400 transition hover:text-blue-600"
              >
                LINKEDIN
              </a>

              <a
                href="https://github.com/rahman5828"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-black tracking-[0.18em] text-slate-400 transition hover:text-slate-950"
              >
                GITHUB
              </a>
            </div>
          </motion.div>

          {/* =====================================================
              HERO VISUAL
              MOBILE FIX:
              - Photo is always given its own visible area.
              - Terminal no longer covers the portrait.
              - Popups stay around the photo.
              - Desktop arrangement remains essentially unchanged.
              ===================================================== */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative z-10 mt-4 h-[560px] w-full sm:h-[620px] lg:mt-0 lg:h-[650px]"
          >
            {/* Outer technical ring */}
            <div className="absolute left-1/2 top-[7%] h-[330px] w-[330px] -translate-x-1/2 rounded-full border border-dashed border-blue-200 sm:h-[410px] sm:w-[410px] lg:top-[8%] lg:h-[500px] lg:w-[500px]" />

            {/* Inner ring */}
            <div className="absolute left-1/2 top-[13%] h-[270px] w-[270px] -translate-x-1/2 rounded-full border border-slate-200 bg-white/50 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:h-[350px] sm:w-[350px] lg:top-[14%] lg:h-[420px] lg:w-[420px]" />

            {/* =================================================
                PHOTO
                IMPORTANT: high z-index and separate positioning
                ================================================= */}
            <div className="absolute left-1/2 top-[17%] z-20 h-[220px] w-[220px] -translate-x-1/2 overflow-hidden rounded-full border-[10px] border-white bg-slate-100 shadow-[0_25px_70px_rgba(15,23,42,0.16)] sm:top-[18%] sm:h-[290px] sm:w-[290px] lg:top-[18%] lg:h-[350px] lg:w-[350px]">
              <Image
                src="/profile.png"
                alt="Abdul Rahman"
                fill
                priority
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 290px, 350px"
                className="object-cover object-center"
              />
            </div>

            {/* Left popup */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="absolute left-[1%] top-[25%] z-30 w-[145px] rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_15px_40px_rgba(15,23,42,0.1)] sm:left-[4%] sm:w-[190px] sm:px-5 lg:left-[0%] lg:top-[29%] lg:w-[190px]"
            >
              <p className="text-[8px] font-black tracking-[0.22em] text-slate-400 sm:text-[9px]">
                INFRASTRUCTURE
              </p>
              <p className="mt-2 text-xs font-black text-slate-700 sm:text-sm">
                Build
                <span className="mx-2 text-slate-300">→</span>
                Deploy
              </p>
            </motion.div>

            {/* Right popup */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute right-[1%] top-[25%] z-30 w-[145px] rounded-2xl border border-blue-100 bg-blue-50/95 px-4 py-4 shadow-[0_15px_40px_rgba(59,130,246,0.12)] sm:right-[4%] sm:w-[190px] sm:px-5 lg:right-[0%] lg:top-[29%] lg:w-[190px]"
            >
              <p className="text-[8px] font-black tracking-[0.22em] text-blue-500 sm:text-[9px]">
                CLOUD
              </p>
              <p className="mt-2 text-xs font-black text-blue-700 sm:text-sm">
                AWS · Kubernetes
              </p>
            </motion.div>

            {/* Small technology markers */}
            <div className="absolute bottom-[20%] left-[19%] z-20 hidden h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-[9px] font-black text-blue-600 shadow-md sm:flex lg:bottom-[20%]">
              K8S
            </div>

            <div className="absolute bottom-[20%] right-[19%] z-20 hidden h-11 w-11 items-center justify-center rounded-xl border border-orange-100 bg-white text-[9px] font-black text-orange-500 shadow-md sm:flex lg:bottom-[20%]">
              AWS
            </div>

            {/* =================================================
                TERMINAL
                Mobile: lower on the visual so it cannot cover photo
                Desktop: same foreground effect
                ================================================= */}
            <div className="absolute bottom-[1%] left-1/2 z-40 w-[91%] -translate-x-1/2 overflow-hidden rounded-[24px] border border-slate-700 bg-[#09101f] shadow-[0_30px_80px_rgba(15,23,42,0.28)] sm:w-[84%] lg:bottom-[1%] lg:w-[86%]">
              <div className="flex items-center gap-2 border-b border-slate-700/80 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />

                <span className="ml-3 font-mono text-[10px] text-slate-500 sm:text-xs">
                  abdul@devops ~
                </span>
              </div>

              <div className="px-5 py-6 font-mono text-xs leading-7 sm:px-7 sm:py-7 sm:text-sm">
                <p className="text-slate-500">$ whoami</p>
                <p className="text-emerald-400">devops-engineer-intern</p>

                <p className="mt-2 text-slate-500">$ focus</p>
                <p className="text-blue-300">
                  cloud / automation / containers /
                  <br className="sm:hidden" /> reliability
                </p>

                <p className="mt-2 text-slate-500">$ status</p>
                <p className="text-emerald-400">
                  learning · building · shipping
                  <span className="ml-1 inline-block 