# AWS EC2 Price Calculator

A lightweight **Next.js** web application for estimating AWS EC2 costs.

The app supports **static deployment via GitHub Pages** and **containerized deployment via Docker**.

---

## 📌 Overview

- Next.js + TypeScript frontend
- Static export for GitHub Pages
- Dockerized for server-based deployment
- CI/CD with GitHub Actions

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

---

## 🐳 Docker

### Pull from Docker Hub
```bash
docker pull heinminhtet/aws-calculator
docker run -p 3000:3000 heinminhtet/aws-calculator
```

### Build locally
```bash
docker build -t aws-calculator .
docker run -p 3000:3000 aws-calculator
```

---

## 🚀 Deployment

- **GitHub Pages** – static site deployment
- **Docker Hub** – container image publishing
