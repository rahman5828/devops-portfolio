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
