# Patitas en Casa

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Stack](https://img.shields.io/badge/Stack-PERN-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

**Patitas en Casa** is a Full-Stack web platform designed to facilitate and manage the pet adoption process, connecting verified shelters with potential adopters. The project implements a modern architecture based on containerized microservices to ensure scalability and a consistent development environment.

## Technologies & Architecture

This project uses a robust **PERN Stack** (PostgreSQL, Express, React/Next.js, Node.js) focused on developer experience (DX):

* **Frontend:** [Next.js 14+](https://nextjs.org) (App Router), TypeScript, TailwindCSS.
* **Backend:** Node.js, Express.js (REST API with TypeScript).
* **Database:** PostgreSQL.
* **Infrastructure (DevOps):**
    * **Docker & Docker Compose:** Container orchestration.
    * **Nginx:** Reverse Proxy configuration.

## Project Structure

The project follows an organized **monorepo** architecture:

```text
PatitasEnCasa/
├── docker-compose.yml    # Service Orchestration (API, App, DB, Nginx)
├── .env                  # Environment Variables (Gitignored)
├── nginx/                # Reverse Proxy Configuration
├── adoptions-api/        # Backend (Express + TypeScript)
│   ├── src/
│   └── Dockerfile
└── adoptions-app/        # Frontend (Next.js + TypeScript)
    ├── src/
    └── Dockerfile
