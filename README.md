# Patitas en Casa
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Stack](https://img.shields.io/badge/Stack-PERN-green)

**Patitas en Casa** is a Full-Stack web platform designed to facilitate and manage the pet adoption process, connecting verified shelters with potential adopters. The project implements a modern architecture based on containerized microservices.

## Technologies & Architecture
This project uses a robust and modern stack focused on scalability and developer experience (DX):
* **Frontend:** [Next.js](https://nextjs.org) (React framework), TypeScript, TailwindCSS.
* **Backend:** Node.js, Express.js (Integrated via API routes/custom server).
* **Database:** PostgreSQL.
* **Infrastructure (DevOps):**
    * **Docker & Docker Compose:** For container orchestration and a consistent development environment.
    * **Nginx:** Configured as a Reverse Proxy.

## Project Structure

The project follows an organized monorepo architecture to facilitate deployment.

```text
.
├── docker-compose.yml    # Orchestrate services (App, DB, Nginx)
├── default.conf          # Nginx Configuration (Reverse Proxy)
├── .env                  # Environment Variables
└── adoptions-app/        # Next.js App Source Code
    ├── src/
    ├── public/
    └── Dockerfile        # Building image instructions. 