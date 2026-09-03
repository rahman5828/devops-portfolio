"use client";

import { motion } from "motion/react";

const focusAreas = [
  {
    number: "01",
    title: "Cloud Infrastructure",
    description:
      "Building practical cloud environments with a focus on reliability, scalability, and clean infrastructure practices.",
    tags: ["AWS", "Terraform", "Linux"],
  },
  {
    number: "02",
    title: "DevOps & Automation",
    description:
      "Working with containers, CI/CD pipelines, Git-based workflows, and automation to make delivery more repeatable.",
    tags: ["Docker", "GitHub Actions", "CI/CD"],
  },
  {
    number: "03",
    title: "DevSecOps",
    description:
      "Bringing security and quality checks into development and deployment workflows instead of treating them as an afterthought.",
    tags: ["Security", "Scanning", "Automation"],
  },
  {
    number: "04",
    title: "AI Infrastructure",
    description:
      "Exploring the infrastructure side of AI systems, including RAG, LLM deployment, and AI-powered DevOps tooling.",
    tags: ["RAG", "LLM", "AI Ops"],
  },
];

const technologies = [
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Git",
  "GitHub Actions",
  "Linux",
  "Python",
  "CI/CD",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-40 h-[420px] w-[420px] rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-100px] h-[420px] w-[420px] rounded-full bg-slate-100 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Building systems,
            <br />
            <span className="text-slate-500">learning by doing.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I&apos;m Abdul Rahman, a DevOps-focused engineer interested in
            cloud infrastructure, automation, CI/CD, DevSecOps, and the
            infrastructure behind modern AI systems.
          </p>
        </motion.div>

        {/* Main visual area */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Profile / trust card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-xl"
          >
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              {/* Status */}
              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to Work
              </div>

              {/* Terminal-style identity */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-5 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>

                <p className="font-mono text-sm text-slate-500">
                  ~/devops-engineer
                </p>

                <p className="mt-3 font-mono text-lg">
                  <span className="text-blue-400">$</span>{" "}
                  whoami
                </p>

                <p className="mt-2 font-mono text-xl font-semibold">
                  Abdul Rahman
                </p>

                <p className="mt-4 font-mono text-sm leading-7 text-slate-400">
                  DevOps · Cloud · DevSecOps
                  <br />
                  Automation · AI Infrastructure
                </p>
              </div>

              {/* Evidence-first statement */}
              <div className="mt-8 border-l-2 border-blue-500 pl-5">
                <p className="text-sm font-semibold text-slate-200">
                  Practical over theoretical.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  I learn by building, testing, troubleshooting, documenting,
                  and improving real projects.
                </p>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/rahman5828"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:border-blue-400/50 hover:bg-blue-500/10"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/rahman-devops/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:border-blue-400/50 hover:bg-blue-500/10"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <div className="space-y-8">
            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                How I approach engineering
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <div className="mb-3 text-2xl">⌘</div>
                  <h3 className="font-semibold text-slate-950">
                    Understand
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Understand the system before trying to automate it.
                  </p>
                </div>

                <div>
                  <div className="mb-3 text-2xl">⚙</div>
                  <h3 className="font-semibold text-slate-950">
                    Automate
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Remove repetitive work with reliable automation.
                  </p>
                </div>

                <div>
                  <div className="mb-3 text-2xl">↗</div>
                  <h3 className="font-semibold text-slate-950">
                    Improve
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Measure, troubleshoot, document, and keep improving.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Focus areas */}
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-sm text-blue-600">
                      {item.number}
                    </span>

                    <span className="text-slate-300 transition group-hover:text-blue-500">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Current toolkit
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Technologies I&apos;m actively working with and learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom credibility note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500">
            This portfolio is a work in progress. Projects and experience are
            presented based on actual work and learning, with ongoing projects
            clearly identified rather than overstated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}