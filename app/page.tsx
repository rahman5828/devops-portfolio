"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Line = { type: "in" | "out" | "err" | "sys"; text: string };

const PROMPT = "rahman@portfolio:~$";

const skillGroups: Record<string, string[]> = {
  Cloud: ["AWS", "EC2", "S3", "IAM", "VPC", "CloudWatch"],
  Containers: ["Docker", "Docker Compose", "Kubernetes"],
  "CI/CD & IaC": ["GitHub Actions", "Jenkins", "Terraform"],
  "Languages & APIs": ["Python", "FastAPI", "Bash"],
  "Data & messaging": ["PostgreSQL", "Redis", "Kafka"],
  Observability: ["Prometheus", "Grafana", "CloudWatch", "SonarCloud"],
};

const experiences = [
  {
    period: "Sep 2026 – Present",
    role: "DevOps & Cloud Engineer",
    company: "Freelance",
    lines: [
      "Infrastructure and delivery for small teams.",
      "Docker environments, CI pipelines, AWS setups, basic observability.",
    ],
  },
  {
    period: "Aug 2026 – Sep 2026",
    role: "DevOps Engineer Intern",
    company: "PearlThoughts",
    lines: [
      "Linux, Git, Docker, CI/CD, reproducible app environments.",
      "Debugged flaky CI; documented deploys and health checks.",
    ],
  },
  {
    period: "Jul 2026 – Aug 2026",
    role: "DevOps Engineer Trainee",
    company: "Saasta — AttendX",
    lines: [
      "Multi-service AttendX stack: containers, DBs, cloud migration.",
      "Cut ~35-container local env; >85% resource reduction locally.",
      "FastAPI, PostgreSQL, Docker, AWS EC2, GitHub Actions, CloudWatch, SonarCloud.",
    ],
  },
  {
    period: "Aug 2025 – Sep 2025",
    role: "DevOps Intern",
    company: "Elevate Labs",
    lines: [
      "Jenkins, GitHub Actions, Docker, Kubernetes basics.",
      "AWS sample deploys, basic Terraform, Prometheus/Grafana/CloudWatch.",
    ],
  },
];

type Project = {
  id: string;
  aliases: string[];
  title: string;
  status: string;
  repo?: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  notes: string;
};

const projects: Project[] = [
  {
    id: "docker-opt",
    aliases: ["docker", "optimization", "docker-opt", "infra-opt"],
    title: "Docker Infrastructure Optimization",
    status: "Completed",
    problem:
      "Local multi-service stack grew to ~35 containers, high RAM use, slow startup. Much of it did not need to run on a developer machine.",
    approach:
      "Mapped local vs managed-cloud needs. Trimmed Compose, adjusted limits, moved suitable services (e.g. DBs) toward managed AWS where appropriate.",
    outcome:
      ">85% reduction in local infrastructure resource consumption while keeping services needed for dev/test. Context: local env only, not a production cluster claim.",
    stack: ["Docker", "Docker Compose", "AWS", "FastAPI", "PostgreSQL", "GitHub Actions"],
    notes: "Internship work (AttendX / Saasta).",
  },
  {
    id: "attendx",
    aliases: ["attendx", "saasta"],
    title: "AttendX Infrastructure",
    status: "Completed / iterating",
    problem:
      "Multi-service workforce platform needed coherent infra across DBs, messaging, gateway, containers, and observability.",
    approach:
      "Container and cloud setup: PostgreSQL, Redis, Kafka, Kong, Docker/K8s paths, Prometheus/Grafana on AWS.",
    outcome:
      "Workable multi-service environment with clearer deploy paths and service health visibility.",
    stack: ["Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "Kafka", "Kong", "Prometheus", "Grafana"],
    notes: "Trainee/internship work. Not sole ownership of full production system.",
  },
  {
    id: "cicd",
    aliases: ["cicd", "pipeline", "devsecops"],
    title: "DevSecOps CI/CD Pipeline",
    status: "Completed",
    problem:
      "Inconsistent builds; quality/security gates easy to skip or run only after the fact.",
    approach:
      "GitHub Actions + Jenkins: tests, SonarCloud gates, container builds before merge and image publish.",
    outcome:
      "Repeatable path tying testing, quality, and container delivery together.",
    stack: ["GitHub Actions", "Jenkins", "Docker", "SonarCloud", "pytest", "Git"],
    notes: "Internship and personal practice.",
  },
  {
    id: "twenty",
    aliases: ["twenty", "crm", "twenty-crm"],
    title: "Twenty CRM Containerization",
    status: "Completed",
    problem:
      "Needed reproducible local env and CI integration tests that fail early on regressions.",
    approach:
      "Docker Compose (PostgreSQL, Redis, Node services); integration tests in GitHub Actions.",
    outcome: "Clean local spin-up; CI surfaces regressions before merge.",
    stack: ["Docker", "Docker Compose", "PostgreSQL", "Redis", "Node.js", "GitHub Actions"],
    notes: "Personal containerization exercise.",
  },
  {
    id: "copilot",
    aliases: ["copilot", "ai-devops", "ai"],
    title: "AI DevOps Copilot",
    status: "In development",
    repo: "https://github.com/rahman5828/ai-devops-copilot",
    problem:
      "Incident investigation starts with scattered metrics/logs/alerts. Chatbots that invent root causes are not useful.",
    approach:
      "Helper that pulls operational signals (Prometheus, Grafana, Alertmanager) and supports investigation via FastAPI + Gemini API. Tests where practical.",
    outcome:
      "Work in progress. Not a production incident-response platform. Goal: evidence-driven investigation, not autonomous remediation.",
    stack: ["FastAPI", "Python", "Gemini API", "Docker", "Prometheus", "Grafana", "Alertmanager", "pytest"],
    notes: "Personal project. Explicitly in development.",
  },
  {
    id: "labs",
    aliases: ["labs", "terraform", "cloud-labs"],
    title: "Cloud Infrastructure Labs",
    status: "Building",
    problem:
      "Need practical, documented experience with day-to-day AWS building blocks.",
    approach:
      "Small Terraform/console exercises: VPC, EC2, S3, IAM, CloudWatch.",
    outcome: "Growing notes and Terraform snippets. Not a multi-account production platform.",
    stack: ["AWS", "EC2", "S3", "VPC", "IAM", "Terraform", "CloudWatch"],
    notes: "Learning labs / personal experiments.",
  },
];

const QUICK = ["about", "projects", "experience", "skills", "resume", "contact"] as const;

function findProject(name: string): Project | undefined {
  const q = name.toLowerCase().trim();
  return projects.find(
    (p) =>
      p.id === q ||
      p.aliases.includes(q) ||
      p.title.toLowerCase().includes(q),
  );
}

function runCommand(raw: string): Line[] {
  const input = raw.trim();
  if (!input) return [];

  const [cmd, ...rest] = input.split(/\s+/);
  const arg = rest.join(" ").trim();
  const c = cmd.toLowerCase();

  const out = (text: string): Line[] =>
    text.split("\n").map((t) => ({ type: "out" as const, text: t }));

  switch (c) {
    case "help":
      return out(
        [
          "Available commands",
          "─────────────────",
          "  help                 Show this list",
          "  about                Who I am and what I focus on",
          "  skills               Technical skills by category",
          "  experience           Internships and roles",
          "  projects             Project list (status + stack)",
          "  project <name>       Detailed case study",
          "  education            Degree and certifications",
          "  resume               Open resume PDF",
          "  github               Open GitHub profile",
          "  linkedin             Open LinkedIn profile",
          "  contact              Email and links",
          "  whoami               Identity",
          "  pwd                  Portfolio path (simulated)",
          "  clear                Clear the screen",
          "  history              Commands in this session",
          "",
          "Examples:  project docker-opt   |   project copilot",
          "Tip: use the chips below if you prefer not to type.",
        ].join("\n"),
      );

    case "about":
      return out(
        [
          "Abdul Rahman V A",
          "DevOps Engineer · Cloud Infrastructure · Platform · Exploring AI Infra",
          "",
          "Early-career engineer. I work on containers that start cleanly,",
          "pipelines that catch problems early, and AWS setups you can operate.",
          "",
          "Open to full-time DevOps / Cloud / Platform roles and selective freelance.",
          "I prefer evidence over claims — a tool is on the list only if I have",
          "used it on real work and can discuss the trade-offs.",
        ].join("\n"),
      );

    case "skills": {
      const lines = ["Technical skills", "────────────────"];
      for (const [group, items] of Object.entries(skillGroups)) {
        lines.push(`  ${group.padEnd(18)} ${items.join(", ")}`);
      }
      lines.push("");
      lines.push("Only skills backed by portfolio, resume, or documented work.");
      return out(lines.join("\n"));
    }

    case "experience": {
      const lines = ["Experience", "──────────"];
      for (const e of experiences) {
        lines.push("");
        lines.push(`${e.period}`);
        lines.push(`  ${e.role} @ ${e.company}`);
        for (const l of e.lines) lines.push(`  · ${l}`);
      }
      return out(lines.join("\n"));
    }

    case "projects": {
      const lines = [
        "Projects",
        "────────",
        "Use: project <name>   e.g. project docker-opt | project copilot",
        "",
      ];
      for (const p of projects) {
        lines.push(`  ${p.id.padEnd(14)} ${p.status.padEnd(22)} ${p.title}`);
        lines.push(`                 ${p.stack.slice(0, 5).join(", ")}${p.stack.length > 5 ? ", …" : ""}`);
        if (p.repo) lines.push(`                 ${p.repo}`);
        lines.push("");
      }
      return out(lines.join("\n"));
    }

    case "project": {
      if (!arg) {
        return [
          {
            type: "err",
            text: "Usage: project <name>   try: docker-opt | attendx | cicd | twenty | copilot | labs",
          },
        ];
      }
      const p = findProject(arg);
      if (!p) {
        return [
          {
            type: "err",
            text: `Unknown project "${arg}". Run "projects" for the list.`,
          },
        ];
      }
      const lines = [
        p.title,
        "─".repeat(Math.min(p.title.length, 48)),
        `Status   ${p.status}`,
      ];
      if (p.repo) lines.push(`Repo     ${p.repo}`);
      lines.push("");
      lines.push("Problem");
      lines.push(`  ${p.problem}`);
      lines.push("");
      lines.push("Approach");
      lines.push(`  ${p.approach}`);
      lines.push("");
      lines.push("Outcome");
      lines.push(`  ${p.outcome}`);
      lines.push("");
      lines.push(`Stack    ${p.stack.join(", ")}`);
      lines.push(`Notes    ${p.notes}`);
      return out(lines.join("\n"));
    }

    case "education":
      return out(
        [
          "Education",
          "─────────",
          "  B.E. Computer Science and Engineering",
          "  Mother Teresa College of Engineering and Technology",
          "  2021 – 2025 · CGPA 7.6 · First Class",
          "",
          "Certifications",
          "──────────────",
          "  AWS Cloud Practitioner — AWS Cloud Quest",
          "  Linux Essentials — Besant Technologies",
        ].join("\n"),
      );

    case "resume":
      if (typeof window !== "undefined") {
        window.open("/resume.pdf", "_blank", "noopener,noreferrer");
      }
      return out("Opening /resume.pdf …");

    case "github":
      if (typeof window !== "undefined") {
        window.open("https://github.com/rahman5828", "_blank", "noopener,noreferrer");
      }
      return out("Opening https://github.com/rahman5828 …");

    case "linkedin":
      if (typeof window !== "undefined") {
        window.open(
          "https://www.linkedin.com/in/rahman-devops/",
          "_blank",
          "noopener,noreferrer",
        );
      }
      return out("Opening LinkedIn …");

    case "contact":
      return out(
        [
          "Contact",
          "───────",
          "  Email     abdulrahman6148@gmail.com",
          "  GitHub    https://github.com/rahman5828",
          "  LinkedIn  https://www.linkedin.com/in/rahman-devops/",
          "  Resume    /resume.pdf",
          "",
          "Open to full-time DevOps / Cloud / Platform roles and selective freelance.",
        ].join("\n"),
      );

    case "whoami":
      return out(
        "abdul rahman v a — devops · cloud · platform · exploring ai infrastructure",
      );

    case "pwd":
      return out("/home/rahman/portfolio");

    case "clear":
      return [{ type: "sys", text: "__CLEAR__" }];

    case "history":
      return [{ type: "sys", text: "__HISTORY__" }];

    case "date":
      return out(new Date().toUTCString());

    default:
      return [
        {
          type: "err",
          text: `Command not found: ${cmd}. Type "help" for available commands.`,
        },
      ];
  }
}

const welcome: Line[] = [
  { type: "sys", text: "Abdul Rahman V A — portfolio shell" },
  { type: "sys", text: "DevOps · Cloud · Platform · Exploring AI Infrastructure" },
  { type: "sys", text: "" },
  {
    type: "sys",
    text: 'Type a command and press Enter. Try "help", or use the chips below.',
  },
  { type: "sys", text: "" },
];

export default function Home() {
  const [lines, setLines] = useState<Line[]>(welcome);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const execute = useCallback((raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setHistory((h) => {
      if (h[h.length - 1] === trimmed) return h;
      return [...h, trimmed];
    });
    setHistIdx(-1);

    const result = runCommand(trimmed);

    if (result.length === 1 && result[0].text === "__CLEAR__") {
      setLines([]);
      setInput("");
      return;
    }

    if (result.length === 1 && result[0].text === "__HISTORY__") {
      setLines((prev) => {
        const block: Line[] = [
          { type: "in", text: `${PROMPT} ${trimmed}` },
          ...history.map((h, i) => ({
            type: "out" as const,
            text: `  ${String(i + 1).padStart(3)}  ${h}`,
          })),
          ...(history.length === 0
            ? [{ type: "out" as const, text: "  (empty)" }]
            : []),
        ];
        return [...prev, ...block];
      });
      setInput("");
      return;
    }

    setLines((prev) => [
      ...prev,
      { type: "in", text: `${PROMPT} ${trimmed}` },
      ...result,
    ]);
    setInput("");
  }, [history]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      execute(input);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = histIdx < 0 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next);
      setInput(history[next] ?? "");
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx < 0) return;
      const next = histIdx + 1;
      if (next >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(next);
        setInput(history[next] ?? "");
      }
    }
  };

  return (
    <div
      className="flex min-h-dvh flex-col bg-[#0c0c0e] text-zinc-300"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-zinc-800 bg-[#141416] px-3 py-2 sm:px-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        </div>
        <p className="flex-1 truncate text-center font-mono text-xs text-zinc-500">
          rahman@portfolio — bash
        </p>
        <span className="w-10" />
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-3 py-4 font-mono text-[13px] leading-6 sm:px-5 sm:text-sm sm:leading-7"
      >
        <div className="mx-auto max-w-3xl">
          {lines.map((line, i) => (
            <div
              key={i}
              className={
                line.type === "in"
                  ? "text-zinc-100"
                  : line.type === "err"
                    ? "text-red-400/90"
                    : line.type === "sys"
                      ? "text-zinc-500"
                      : "text-zinc-400 whitespace-pre-wrap"
              }
            >
              {line.text || "\u00a0"}
            </div>
          ))}

          <div className="mt-1 flex items-center gap-2">
            <span className="shrink-0 text-emerald-500/90">{PROMPT}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              aria-label="Terminal command input"
              className="min-w-0 flex-1 bg-transparent text-zinc-100 caret-emerald-400 outline-none"
            />
          </div>
          <div ref={bottomRef} className="h-4" />
        </div>
      </div>

      <div className="shrink-0 border-t border-zinc-800 bg-[#141416] px-3 py-3 sm:px-5">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-2">
          {QUICK.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => execute(cmd)}
              className="rounded border border-zinc-700 bg-zinc-900/80 px-2.5 py-1 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              {cmd}
            </button>
          ))}
        </div>
        <p className="mx-auto mt-2 max-w-3xl font-mono text-[10px] text-zinc-600 sm:text-xs">
          Simulated shell — no access to a real machine. Links open in a new tab.
        </p>
      </div>
    </div>
  );
}
