"use client";

import { useState } from "react";

const experiences = [
  {
    period: "Sep 2026 – Present",
    role: "DevOps & Cloud Engineer",
    company: "Freelance",
    points: [
      "Infrastructure and delivery for small teams — Docker, CI pipelines, AWS, observability.",
      "Containerize apps, tighten GitHub Actions / Jenkins, support EC2 and monitoring.",
    ],
  },
  {
    period: "Aug 2026 – Sep 2026",
    role: "DevOps Engineer Intern",
    company: "PearlThoughts",
    points: [
      "Linux, Git, Docker, CI/CD, reproducible application environments.",
      "Debugged flaky CI workflows; documented deploys and health checks.",
    ],
  },
  {
    period: "Jul 2026 – Aug 2026",
    role: "DevOps Engineer Trainee",
    company: "Saasta — AttendX",
    points: [
      "Multi-service AttendX stack: containers, databases, cloud migration.",
      "Reduced ~35-container local environment; >85% resource cut locally.",
      "FastAPI, PostgreSQL, Docker, AWS EC2, GitHub Actions, CloudWatch, SonarCloud.",
    ],
  },
  {
    period: "Aug 2025 – Sep 2025",
    role: "DevOps Intern",
    company: "Elevate Labs",
    points: [
      "Jenkins, GitHub Actions, Docker images, Kubernetes fundamentals.",
      "AWS sample deploys, basic Terraform, Prometheus / Grafana / CloudWatch.",
    ],
  },
];

const projects = [
  {
    title: "Docker Infrastructure Optimization",
    status: "Completed",
    tag: "containers",
    problem:
      "Local multi-service stack had grown to ~35 containers with high RAM use and slow startup. Much of it did not belong on a developer machine.",
    approach:
      "Mapped what had to stay local vs what could move to managed cloud services. Trimmed Compose definitions, adjusted limits, shifted databases and supporting services where it made sense.",
    outcome:
      "More than 85% reduction in local infrastructure resource consumption while keeping services needed for development and testing. Metric applies to the local environment only.",
    stack: ["Docker", "Compose", "AWS", "FastAPI", "PostgreSQL", "GitHub Actions"],
    note: "Internship work · AttendX / Saasta",
  },
  {
    title: "AttendX Infrastructure",
    status: "Completed / iterating",
    tag: "platform",
    problem:
      "Multi-service workforce platform needed coherent infrastructure across databases, messaging, API gateway, containers, and observability.",
    approach:
      "Worked through container and cloud setup: PostgreSQL, Redis, Kafka, Kong, Docker/Kubernetes paths, Prometheus and Grafana on AWS.",
    outcome:
      "A workable multi-service environment with clearer deployment paths and visibility into service health.",
    stack: ["Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "Kafka", "Kong", "Prometheus"],
    note: "Trainee work · not sole ownership of production",
  },
  {
    title: "DevSecOps CI/CD Pipeline",
    status: "Completed",
    tag: "ci/cd",
    problem:
      "Builds and checks were inconsistent; quality and security gates were easy to skip or run only after the fact.",
    approach:
      "Combined automated tests, SonarCloud quality gates, and container builds into GitHub Actions and Jenkins so checks run before merge and image publish.",
    outcome:
      "A repeatable path that ties testing, quality, and container delivery together instead of bolting security on later.",
    stack: ["GitHub Actions", "Jenkins", "Docker", "SonarCloud", "pytest"],
    note: "Internship + personal practice",
  },
  {
    title: "AI DevOps Copilot",
    status: "In development",
    tag: "ai + ops",
    repo: "https://github.com/rahman5828/ai-devops-copilot",
    problem:
      "Incident investigation starts with scattered metrics, logs, and alerts. A chatbot that invents root causes is not useful.",
    approach:
      "Building a helper that pulls operational signals (Prometheus, Grafana, Alertmanager) and supports investigation with structured context via FastAPI and the Gemini API.",
    outcome:
      "Work in progress. Not a production incident-response platform. Goal is evidence-driven investigation, not autonomous remediation.",
    stack: ["FastAPI", "Python", "Gemini API", "Docker", "Prometheus", "Grafana"],
    note: "Personal project · explicitly in development",
  },
  {
    title: "Twenty CRM Containerization",
    status: "Completed",
    tag: "docker",
    problem:
      "Needed a reproducible local environment and CI integration tests that fail early on regressions.",
    approach:
      "Packaged the app with Docker Compose (PostgreSQL, Redis, Node services) and wired integration tests into GitHub Actions.",
    outcome: "Clean local spin-up; CI surfaces regressions before merge.",
    stack: ["Docker", "Compose", "PostgreSQL", "Redis", "Node.js", "GitHub Actions"],
    note: "Personal containerization exercise",
  },
  {
    title: "Cloud Infrastructure Labs",
    status: "Building",
    tag: "aws",
    problem:
      "Need practical, documented experience with the AWS building blocks used day to day.",
    approach:
      "Small Terraform and console exercises covering VPC, EC2, S3, IAM, and CloudWatch.",
    outcome: "Growing notes and Terraform snippets. Not a production multi-account platform.",
    stack: ["AWS", "EC2", "S3", "VPC", "IAM", "Terraform", "CloudWatch"],
    note: "Learning labs",
  },
];

const skillGroups = [
  { title: "Cloud", items: ["AWS", "EC2", "S3", "IAM", "VPC", "CloudWatch"] },
  { title: "Containers", items: ["Docker", "Docker Compose", "Kubernetes"] },
  { title: "CI/CD & IaC", items: ["GitHub Actions", "Jenkins", "Terraform"] },
  { title: "Languages", items: ["Python", "FastAPI", "Bash"] },
  { title: "Data", items: ["PostgreSQL", "Redis", "Kafka"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "CloudWatch", "SonarCloud"] },
];

const nav = [
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

function statusColor(status: string) {
  if (status.toLowerCase().includes("development") || status.toLowerCase().includes("building"))
    return "border-amber-500/30 bg-amber-500/10 text-amber-400";
  if (status.toLowerCase().includes("iterating"))
    return "border-sky-500/30 bg-sky-500/10 text-sky-400";
  return "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-[#070708] text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-100">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-emerald-500/[0.04] blur-3xl" />
        <div className="absolute -right-24 top-40 h-[360px] w-[360px] rounded-full bg-cyan-500/[0.03] blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070708]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 transition group-hover:bg-emerald-500/20">
              &gt;_
            </span>
            <span className="text-zinc-100">rahman</span>
            <span className="hidden text-zinc-600 sm:inline">/devops</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-md px-3 py-1.5 font-mono text-xs text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-zinc-200"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-md bg-gradient-to-b from-emerald-400 to-emerald-500 px-3 py-1.5 font-mono text-xs font-semibold text-zinc-950 shadow-[0_0_20px_-4px_rgba(52,211,153,0.5)] transition hover:from-emerald-300 hover:to-emerald-400"
            >
              resume.pdf
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition hover:bg-white/[0.04] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
        {open && (
          <nav className="border-t border-white/[0.06] px-5 py-3 md:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-mono text-sm text-zinc-400"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="block py-2.5 font-mono text-sm text-emerald-400"
            >
              resume.pdf
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative border-b border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] text-emerald-400/90">
                open to roles · freelancing
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Abdul Rahman V A
            </h1>
            <p className="mt-2 font-mono text-sm text-emerald-400/80">
              devops · cloud · platform · ai infrastructure
            </p>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-7">
              Early-career engineer focused on infrastructure that stays boring after it ships —
              containers that start cleanly, pipelines that catch problems early, and AWS environments
              you can actually operate.
            </p>

            <div className="mt-10 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[10px] text-zinc-600">
                  rahman@portfolio — status
                </span>
              </div>
              <div className="grid sm:grid-cols-3">
                {[
                  ["FOCUS", "containers · ci/cd · aws"],
                  ["STATUS", "freelancing · open to roles"],
                  ["STACK", "docker · k8s · terraform · python"],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`px-4 py-4 ${i < 2 ? "sm:border-r sm:border-white/[0.06]" : ""}`}
                  >
                    <p className="font-mono text-[10px] tracking-[0.15em] text-zinc-600">{k}</p>
                    <p className="mt-1.5 font-mono text-xs text-zinc-300">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center rounded-lg bg-gradient-to-b from-emerald-400 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-6px_rgba(52,211,153,0.55)] transition hover:from-emerald-300 hover:to-emerald-400"
              >
                View work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Resume
              </a>
              <a
                href="https://github.com/rahman5828"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2.5 font-mono text-sm text-zinc-500 transition hover:text-emerald-400"
              >
                github ↗
              </a>
              <a
                href="https://www.linkedin.com/in/rahman-devops/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2.5 font-mono text-sm text-zinc-500 transition hover:text-emerald-400"
              >
                linkedin ↗
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-emerald-400/70">$ ls projects/</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Work</h2>
                <p className="mt-1.5 text-sm text-zinc-500">
                  Problem, approach, outcome — status is explicit.
                </p>
              </div>
              <a
                href="https://github.com/rahman5828"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-zinc-500 transition hover:text-emerald-400"
              >
                github.com/rahman5828 →
              </a>
            </div>

            <div className="mt-10 space-y-4">
              {projects.map((p, idx) => (
                <article
                  key={p.title}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition duration-200 hover:border-emerald-500/20 hover:bg-white/[0.035] sm:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 font-mono text-xs text-zinc-600">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-zinc-50 transition group-hover:text-white">
                          {p.title}
                        </h3>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                          {p.tag}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${statusColor(p.status)}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <dl className="mt-5 space-y-3.5 border-t border-white/[0.04] pt-5 text-sm leading-6 text-zinc-400">
                    <div>
                      <dt className="mb-0.5 font-mono text-[11px] text-emerald-500/70">problem</dt>
                      <dd>{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="mb-0.5 font-mono text-[11px] text-emerald-500/70">approach</dt>
                      <dd>{p.approach}</dd>
                    </div>
                    <div>
                      <dt className="mb-0.5 font-mono text-[11px] text-emerald-500/70">outcome</dt>
                      <dd>{p.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/[0.06] bg-black/30 px-2 py-0.5 font-mono text-[11px] text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <p className="font-mono text-[11px] text-zinc-600">{p.note}</p>
                    {"repo" in p && p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[11px] text-emerald-500/80 transition hover:text-emerald-400"
                      >
                        repo →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="font-mono text-xs text-emerald-400/70">$ cat experience.log</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Experience</h2>

            <ol className="mt-10">
              {experiences.map((e, i) => (
                <li
                  key={e.company + e.period}
                  className={`grid gap-2 border-t border-white/[0.06] py-8 sm:grid-cols-[160px_1fr] sm:gap-10 ${
                    i === experiences.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div>
                    <p className="font-mono text-xs text-zinc-500">{e.period}</p>
                    <p className="mt-1.5 text-sm font-medium text-zinc-300">{e.company}</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-50">{e.role}</h3>
                    <ul className="mt-3 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-sm leading-6 text-zinc-400">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="skills" className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="font-mono text-xs text-emerald-400/70">$ which tools</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Skills</h2>
            <p className="mt-1.5 text-sm text-zinc-500">
              Tools used on real work or structured practice — not a wish list.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g) => (
                <div
                  key={g.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-emerald-500/15 hover:bg-white/[0.035]"
                >
                  <h3 className="font-mono text-xs tracking-wide text-emerald-400/80">{g.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-zinc-400">{g.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="font-mono text-xs text-emerald-400/70">$ whoami</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">About</h2>
            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-zinc-400">
              <p>
                B.E. Computer Science and Engineering from Mother Teresa College of Engineering and
                Technology (2021–2025, CGPA 7.6). Building toward DevOps, cloud, and platform roles,
                with a growing interest in the infrastructure under ML and AI workloads.
              </p>
              <p>
                I learn by shipping small systems, breaking them, fixing them, and writing down what
                actually mattered. Prefer evidence over claims.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <h3 className="font-mono text-xs text-emerald-400/80">education</h3>
                <p className="mt-2.5 text-sm leading-6 text-zinc-400">
                  B.E. Computer Science and Engineering
                  <br />
                  Mother Teresa College of Engineering and Technology
                  <br />
                  2021 – 2025 · CGPA 7.6 · First Class
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <h3 className="font-mono text-xs text-emerald-400/80">certifications</h3>
                <ul className="mt-2.5 space-y-1.5 text-sm text-zinc-400">
                  <li>AWS Cloud Practitioner — AWS Cloud Quest</li>
                  <li>Linux Essentials — Besant Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="font-mono text-xs text-emerald-400/70">$ cat contact.txt</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Contact</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Open to full-time DevOps, Cloud, and Platform roles, and selective freelance work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="mailto:abdulrahman6148@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5 font-mono text-sm text-emerald-400 transition hover:bg-emerald-500/10"
              >
                abdulrahman6148@gmail.com
              </a>
              <a
                href="https://github.com/rahman5828"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2.5 font-mono text-sm text-zinc-400 transition hover:border-white/20 hover:text-zinc-200"
              >
                github ↗
              </a>
              <a
                href="https://www.linkedin.com/in/rahman-devops/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2.5 font-mono text-sm text-zinc-400 transition hover:border-white/20 hover:text-zinc-200"
              >
                linkedin ↗
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2.5 font-mono text-sm text-zinc-400 transition hover:border-white/20 hover:text-zinc-200"
              >
                resume.pdf ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-6 font-mono text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>abdul rahman v a · devops · cloud · platform</span>
          <span>built with next.js</span>
        </div>
      </footer>
    </div>
  );
}
