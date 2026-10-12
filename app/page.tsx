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

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-[#0a0a0b] text-zinc-300 antialiased">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#0a0a0b]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-emerald-400">&gt;_</span>
            <span className="text-zinc-100">rahman</span>
            <span className="hidden text-zinc-600 sm:inline">/devops</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs text-zinc-500 transition-colors hover:text-emerald-400"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-emerald-500/15 px-3 py-1.5 font-mono text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/30 transition-colors hover:bg-emerald-500/25"
            >
              resume.pdf
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
        {open && (
          <nav className="border-t border-zinc-800 px-5 py-3 md:hidden">
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
        <section className="border-b border-zinc-800/80">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
            <p className="font-mono text-xs tracking-wide text-emerald-400/90">
              devops · cloud · platform · ai infrastructure
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
              Abdul Rahman V A
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Early-career engineer focused on infrastructure that stays boring after it ships —
              containers that start cleanly, pipelines that catch problems early, and AWS environments
              you can actually operate.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Open to full-time DevOps / Cloud / Platform roles and selective freelance work.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg border border-zinc-800 bg-[#111113]">
              <div className="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                <span className="ml-2 font-mono text-[10px] text-zinc-600">status · read-only</span>
              </div>
              <div className="grid gap-px bg-zinc-800 sm:grid-cols-3">
                {[
                  ["focus", "containers · ci/cd · aws"],
                  ["status", "freelancing · open to roles"],
                  ["stack", "docker · k8s · terraform · python"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-[#111113] px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">{k}</p>
                    <p className="mt-1 font-mono text-xs text-zinc-300">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400"
              >
                View work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-zinc-700 bg-transparent px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
              >
                Resume
              </a>
              <a
                href="https://github.com/rahman5828"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-2 py-2.5 font-mono text-sm text-zinc-500 transition-colors hover:text-emerald-400"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/rahman-devops/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-2 py-2.5 font-mono text-sm text-zinc-500 transition-colors hover:text-emerald-400"
              >
                linkedin
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-zinc-800/80">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-emerald-400/80">$ ls projects/</p>
                <h2 className="mt-1 text-xl font-semibold text-zinc-50">Work</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Problem, approach, outcome. Status is explicit.
                </p>
              </div>
              <a
                href="https://github.com/rahman5828"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-zinc-500 hover:text-emerald-400"
              >
                github.com/rahman5828 →
              </a>
            </div>

            <div className="mt-10 space-y-5">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="rounded-lg border border-zinc-800 bg-[#111113] p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-100">{p.title}</h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                        {p.tag}
                      </p>
                    </div>
                    <span className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                      {p.status}
                    </span>
                  </div>

                  <dl className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                    <div>
                      <dt className="font-mono text-[11px] text-emerald-500/80">problem</dt>
                      <dd className="mt-0.5">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] text-emerald-500/80">approach</dt>
                      <dd className="mt-0.5">{p.approach}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] text-emerald-500/80">outcome</dt>
                      <dd className="mt-0.5">{p.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 font-mono text-[11px] text-zinc-500"
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
                        className="font-mono text-[11px] text-emerald-500/80 hover:text-emerald-400"
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

        <section id="experience" className="border-b border-zinc-800/80">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="font-mono text-xs text-emerald-400/80">$ cat experience.log</p>
            <h2 className="mt-1 text-xl font-semibold text-zinc-50">Experience</h2>

            <ol className="mt-10">
              {experiences.map((e, i) => (
                <li
                  key={e.company + e.period}
                  className={`grid gap-1 border-t border-zinc-800 py-7 sm:grid-cols-[150px_1fr] sm:gap-8 ${
                    i === experiences.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div>
                    <p className="font-mono text-xs text-zinc-500">{e.period}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-300">{e.company}</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">{e.role}</h3>
                    <ul className="mt-2 space-y-1.5">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-2 text-sm leading-6 text-zinc-400">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500/60" />
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

        <section id="skills" className="border-b border-zinc-800/80">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="font-mono text-xs text-emerald-400/80">$ which tools</p>
            <h2 className="mt-1 text-xl font-semibold text-zinc-50">Skills</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Tools used on real work or structured practice — not a wish list.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g) => (
                <div
                  key={g.title}
                  className="rounded-lg border border-zinc-800 bg-[#111113] p-4"
                >
                  <h3 className="font-mono text-xs text-emerald-400/80">{g.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{g.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-zinc-800/80">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="font-mono text-xs text-emerald-400/80">$ whoami</p>
            <h2 className="mt-1 text-xl font-semibold text-zinc-50">About</h2>
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
              <div className="rounded-lg border border-zinc-800 bg-[#111113] p-5">
                <h3 className="font-mono text-xs text-emerald-400/80">education</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  B.E. Computer Science and Engineering
                  <br />
                  Mother Teresa College of Engineering and Technology
                  <br />
                  2021 – 2025 · CGPA 7.6 · First Class
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-[#111113] p-5">
                <h3 className="font-mono text-xs text-emerald-400/80">certifications</h3>
                <ul className="mt-2 space-y-1 text-sm text-zinc-400">
                  <li>AWS Cloud Practitioner — AWS Cloud Quest</li>
                  <li>Linux Essentials — Besant Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="font-mono text-xs text-emerald-400/80">$ cat contact.txt</p>
            <h2 className="mt-1 text-xl font-semibold text-zinc-50">Contact</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Open to full-time DevOps, Cloud, and Platform roles, and selective freelance work.
            </p>
            <ul className="mt-8 space-y-3 font-mono text-sm">
              <li>
                <a
                  href="mailto:abdulrahman6148@gmail.com"
                  className="text-emerald-400 hover:underline"
                >
                  abdulrahman6148@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rahman5828"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-emerald-400"
                >
                  github.com/rahman5828
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rahman-devops/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-emerald-400"
                >
                  linkedin.com/in/rahman-devops
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-emerald-400"
                >
                  resume.pdf
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-6 font-mono text-[11px] text-zinc-600 sm:flex-row sm:justify-between sm:px-6">
          <span>abdul rahman v a · devops · cloud · platform</span>
          <span>built with next.js</span>
        </div>
      </footer>
    </div>
  );
}
