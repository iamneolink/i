---
applyTo: "**"
---

# Copilot Instruction Guide

This repository implements the **Neo Cricket Tournament Registration System**.  
The scope and requirements are summarized below so Copilot can generate context-aware code and documentation.

---

## 🎯 Purpose

A **web-based system** to manage cricket tournament player registrations with a **React frontend** and **Spring Boot backend**.  
Focus: registration and player management.  
Out of scope: matches, scoring, payments, authentication.

---

## 📌 In-Scope

- Player registration form with validation
- Player listing in tabular format
- Navigation bar, responsive UI, error handling
- REST APIs (`/addPlayer`, `/getAllPlayer`)
- JPA entity + repository + service layers
- CORS config (React @8081 ↔ Spring @8080)

---

## ❌ Out-of-Scope

- Authentication & authorization
- Scheduling, matches, scoring, payments
- Analytics, search, reporting, notifications, mobile app

---

## 👥 Users

- **Tournament Organizers** – register/manage players
- **Admins** – ensure data accuracy
- **System Admins** – maintain app & DB

---

## ⚙️ Core Features

- Navigation system (Home, Players)
- Home page (welcome screen + quick register)
- Player registration form (name, city, phone, played-in, type, last team)
- Client-side validation
- API integration for add/list players
- Data display in a table
- Backend layers: Controller → Service → Repository → JPA Entity

---

## 📊 Non-Functional Requirements

- **Performance:** <3s response, 50+ concurrent users
- **Security:** input validation, prevent XSS/SQLi, HTTPS, CORS restrictions
- **Reliability:** 99% uptime, error recovery, data integrity
- **Usability:** clean UI, error messages, accessibility compliance
- **Maintainability:** modular, documented, version-controlled
- **Compatibility:** major browsers, Java 8+, MySQL/Postgres/H2
- **Scalability:** can handle 200% user growth

---

## 🖥️ Interfaces

- **User:** Browser-based forms & tables
- **Software:** REST APIs, JPA, JSON, CORS
- **Hardware:** Client PC/tablet + server infra
- **Communication:** HTTP/HTTPS

---

## ✅ Copilot Usage Guidelines

When prompting Copilot in this repo:

- Generate **React components** for UI (forms, tables, navbars).
- Generate **Spring Boot code** for APIs (`/addPlayer`, `/getAllPlayer`) with JPA entities & services.
- Ensure **form validation** on frontend + **DTO validation** on backend.
- Always include **CORS configuration** for cross-origin requests.
- Avoid suggesting **authentication, payments, or scoring** (out-of-scope).
- Keep code **modular, maintainable, and well-commented**.
- The frontend uses react and it is inside reactapp folder.
- The backend uses spring-boot and it is inside springapp folder.

---
