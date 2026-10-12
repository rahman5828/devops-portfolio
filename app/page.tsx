"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const experiences = [
  {
    company: "Freelance",
    role: "DevOps & Cloud Engineer",
    period: "Sep 2026 – Present",
    summary:
      "Infrastructure and delivery work for small teams: Docker environments, CI pipelines, AWS setups, and basic observability after deploy.",
    points: [
      "Containerize apps and stand up repeatable local and cloud environments.",
      "Build and tighten GitHub Actions / Jenkins pipelines with tests and quality checks.",
      "Support AWS EC2, networking, and monitoring so releases are less risky.",
    ],
  },
  {
    company: "PearlThoughts",
    role: "DevOps Engineer Intern",
    period: "Aug 2026 – Sep 2026",
    summary:
      "Hands-on work across Linux, Git, Docker, CI/CD, and getting application environments into a reproducible state.",
    points: [
      "Containerized services with Docker and Compose so local and CI environments matched.",
      "Debugged flaky CI workflows, integration tests, and dependency issues.",
      "Documented deployment steps, health checks, and the parts that mattered in practice.",
    ],
  },
  {
    company: "Saasta — AttendX",
    role: "DevOps Engineer Trainee",
    period: "Jul 2026 – Aug 2026",
    summary:
      "Infrastructure and cloud migration on a multi-service AttendX stack: containers, databases, and a push toward leaner managed services.",
    points: [
      "Reduced a ~35-container local environment and moved suitable workloads to managed cloud services.",
      "Cut infrastructure resource use by more than 85% through architecture and capacity cleanup.",
      "Day-to-day work with FastAPI, PostgreSQL, Docker, AWS EC2, GitHub Actions, CloudWatch, and SonarCloud.",
    ],
  },
  {
    company: "Elevate Labs",
    role: "DevOps Intern",
    period: "Aug 2025 – Sep 2025",
    summary:
      "First structured exposure to CI/CD, containers, AWS, Terraform, and monitoring.",
    points: [
      "Ran Jenkins and GitHub Actions pipelines; built and shipped Docker images; explored Kubernetes basics.",
      "Deployed sample workloads on AWS and wrote basic Terraform for resources that needed to persist.",
      "Set up Prometheus, Grafana, and CloudWatch; wrote small Python and Bash helpers for repetitive tasks.",
    ],
  },
];

const projects = [
  {
    title: "Docker Infrastructure Optimization",
    status: "Completed",
    period: "2026",
    problem:
      "A multi-service local stack had grown to roughly 35 containers. Resource use was high, startup was slow, and much of the stack did not need to run on a developer machine.",
    approach:
      "Mapped which services were required locally versus which could move to managed cloud services. Trimmed Compose definitions, adjusted resource limits, and shifted databases and supporting services where it made sense.",
    outcome:
      "More than 85% reduction in local infrastructure resource consumption while keeping the services that mattered for development and testing.",
    stack: ["Docker", "Docker Compose", "AWS", "FastAPI", "PostgreSQL", "GitHub Actions"],
    notes: "Internship work (AttendX / Saasta). Metric applies to the local environment optimization, not a production cluster-wide claim.",
  },
  {
    title: "AttendX Infrastructure",
    status: "Completed / iterating",
    period: "2026",
    problem:
      "Multi-service application environment needed coherent infrastructure across databases, messaging, object storage, API gateway, containers, and observability.",
    approach:
      "Worked through container and cloud setup for the stack: PostgreSQL, Redis, Kafka, Kong, Docker/Kubernetes paths, and monitoring with Prometheus and Grafana on AWS.",
    outcome:
      "A workable multi-service environment with clearer deployment paths and visibility into service health.",
    stack: ["Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "Kafka", "Kong", "Prometheus", "Grafana"],
    notes: "Internship / trainee work. Not a sole ownership claim over the full production system.",
  },
  {
    title: "DevSecOps CI/CD Pipeline",
    status: "Completed",
    period: "2025–2026",
    problem:
      "Builds and checks were inconsistent; security and quality gates were easy to skip or run only after the fact.",
    approach:
      "Combined automated tests, SonarCloud quality gates, and container builds into GitHub Actions and Jenkins workflows so checks run before merge and image publish.",
    outcome:
      "A repeatable pipeline path that ties testing, quality, and container delivery together instead of treating security as a separate step.",
    stack: ["GitHub Actions", "Jenkins", "Docker", "SonarCloud", "pytest", "Git"],
    notes: "Built and practiced across internship and personal work.",
  },
  {
    title: "Twenty CRM Containerization",
    status: "Completed",
    period: "2026",
    problem:
      "Twenty CRM needed a reproducible local environment and CI integration tests that failed early on regressions.",
    approach:
      "Packaged the app with Docker Compose (PostgreSQL, Redis, Node.js services) and wired integration tests into GitHub Actions.",
    outcome:
      "Clean local spin-up and CI checks that surface regressions before merge.",
    stack: ["Docker", "Docker Compose", "PostgreSQL", "Redis", "Node.js", "GitHub Actions"],
    notes: "Personal / practical containerization exercise.",
  },
  {
    title: "AI DevOps Copilot",
    status: "In development",
    period: "2026",
    problem:
      "Incident investigation often starts with scattered metrics, logs, and alerts. A chatbot that invents root causes is not useful; evidence is.",
    approach:
      "Building a helper that pulls operational signals (Prometheus, Grafana, Alertmanager) and supports investigation with structured context via FastAPI and the Gemini API. Covered by tests where practical.",
    outcome:
      "Work in progress. Not a production incident-response platform. Goal is evidence-driven investigation, not autonomous remediation.",
    stack: ["FastAPI", "Python", "Gemini API", "Docker", "Prometheus", "Grafana", "Alertmanager", "pytest"],
    notes: "Personal project. Status is explicitly in development.",
  },
  {
    title: "Cloud Infrastructure Labs",
    status: "Building",
    period: "Ongoing",
    problem:
      "Need practical, documented experience with the AWS building blocks used in day-to-day platform work.",
    approach:
      "Small Terraform and console exercises covering VPC, EC2, S3, IAM, and CloudWatch — focused on what is actually required to run and observe workloads.",
    outcome:
      "Growing set of notes and Terraform snippets. Not a production multi-account platform.",
    stack: ["AWS", "EC2", "S3", "VPC", "IAM", "Terraform", "CloudWatch"],
    notes: "Learning labs and personal experiments.",
  },
];

const skillGroups = [
  { title: "Cloud", items: ["AWS", "EC2", "S3", "IAM", "VPC", "CloudWatch"] },
  { title: "Containers", items: ["Docker", "Docker Compose", "Kubernetes"] },
  { title: "CI/CD & IaC", items: ["GitHub Actions", "Jenkins", "Terraform"] },
  { title: "Languages & APIs", items: ["Python", "FastAPI", "Bash"] },
  { title: "Data & messaging", items: ["PostgreSQL", "Redis", "Kafka"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "CloudWatch", "SonarCloud"] },
];

const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="text-sm font-semibold tracking-tight text-zinc-900">
            Abdul Rahman
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Resume
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-700 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-zinc-200 bg-zinc-50 px-5 py-3 md:hidden" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-sm text-zinc-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block py-2.5 text-sm font-medium text-zinc-900"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_220px] lg:items-start lg:gap-16 lg:py-24">
            <div>
              <p className="text-sm font-medium text-zinc-500">
                DevOps · Cloud · Platform · Exploring AI infrastructure
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Abdul Rahman
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">
                Early-career engineer focused on making infrastructure reliable and boring in the
                right ways: containers that start cleanly, pipelines that catch problems early, and
                AWS environments you can actually operate.
              </p>
              <p className="mt-3 max-w-xl text-base leading-7 text-zinc-600">
                Open to full-time DevOps / Cloud / Platform roles and selective freelance work.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  View work
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/rahman5828"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-2 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rahman-devops/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-2 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[200px] lg:mx-0 lg:max-w-none">
              <div className="relative aspect-square overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm">
                <Image
                  src="/profile.png"
                  alt="Portrait of Abdul Rahman"
                  fill
                  priority
                  sizes="220px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Work</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Selected projects with problem, approach, and outcome. Status is explicit.
                </p>
              </div>
              <a
                href="https://github.com/rahman5828"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
              >
                github.com/rahman5828 →
              </a>
            </div>

            <div className="mt-10 space-y-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                      <span className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-medium text-zinc-700">
                        {project.status}
                      </span>
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <dl className="mt-5 space-y-4 text-sm leading-6 text-zinc-600">
                    <div>
                      <dt className="font-medium text-zinc-900">Problem</dt>
                      <dd className="mt-1">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-zinc-900">Approach</dt>
                      <dd className="mt-1">{project.approach}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-zinc-900">Outcome</dt>
                      <dd className="mt-1">{project.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-5 text-zinc-400">{project.notes}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Experience</h2>
            <p className="mt-1 text-sm text-zinc-500">Roles and the work that came with them.</p>

            <ol className="mt-10 space-y-0">
              {experiences.map((exp, i) => (
                <li
                  key={`${exp.company}-${exp.period}`}
                  className={`grid gap-2 border-t border-zinc-200 py-8 sm:grid-cols-[160px_1fr] sm:gap-8 ${
                    i === experiences.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs font-medium text-zinc-500">{exp.period}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-900">{exp.company}</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900">{exp.role}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{exp.summary}</p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-6 text-zinc-600">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="skills" className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Skills</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Tools I have used on real work or structured practice — not a wish list.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-zinc-900">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">About</h2>
            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-zinc-600">
              <p>
                B.E. Computer Science and Engineering from Mother Teresa College of Engineering and
                Technology (2021–2025, CGPA 7.6). Building toward roles in DevOps, cloud, and platform
                engineering, with a growing interest in the infrastructure under ML and AI workloads.
              </p>
              <p>
                I learn by shipping small systems, breaking them, fixing them, and writing down what
                actually mattered. Prefer evidence over claims: a tool only belongs on the list if I
                have used it on something real and can discuss the trade-offs.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-sm font-semibold text-zinc-900">Education</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  B.E. Computer Science and Engineering
                  <br />
                  Mother Teresa College of Engineering and Technology
                  <br />
                  2021 – 2025 · CGPA 7.6 · First Class
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="text-sm font-semibold text-zinc-900">Certifications</h3>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                  <li>AWS Cloud Practitioner — AWS Cloud Quest</li>
                  <li>Linux Essentials — Besant Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-zinc-50">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Contact</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
              Open to full-time DevOps, Cloud, and Platform roles, and selective freelance work.
              Happy to talk about pipelines, AWS, containers, or observability for AI systems.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:abdulrahman6148@gmail.com"
                  className="font-medium text-zinc-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  abdulrahman6148@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rahman-devops/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rahman5828"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>Abdul Rahman · DevOps · Cloud · Platform</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </div>
  );
}
