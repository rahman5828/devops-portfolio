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
      "Multi-service stack: databases, messaging, object storage, API gateway, containers, and the observability layer that keeps the whole thing diagnosable.",
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
      "Took a bloated ~35-container local setup, cut the noise, and brought resource use down by more than 85% without losing the services that mattered.",
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
      "Pipeline that runs tests, quality gates, and container builds before anything lands — security and delivery in the same path, not bolted on later.",
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
      "Packaged Twenty CRM into a Docker Compose stack that spins up cleanly, with CI integration tests so regressions show up before merge.",
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
      "Working notes and Terraform for VPC, compute, storage, IAM, and monitoring — the boring, useful pieces of AWS you actually need day to day.",
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
    title: "Automate the boring parts",
    text: "If you do it twice, script it. Prefer small, readable automation over clever one-offs.",
  },
  {
    number: "02",
    title: "Make it observable",
    text: "Logs and metrics should answer the first questions you ask at 2 a.m. — not create new ones.",
  },
  {
    number: "03",
    title: "Chase the root cause",
    text: "Guess less. Follow the signals until you know why it broke, then fix that.",
  },
  {
    number: "04",
    title: "Ship evidence, not claims",
    text: "List a tool only if you have used it on something real and can talk through the trade-offs.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950 p-10">
      <h1 className="text-4xl font-black">Abdul Rahman</h1>
      <p className="mt-4 text-slate-600">Portfolio update in progress — full page restoring. Refresh in a moment.</p>
      <p className="mt-2 text-sm text-slate-400">Freelance · DevOps & Cloud · Sep 2026 – Present</p>
    </main>
  );
}
