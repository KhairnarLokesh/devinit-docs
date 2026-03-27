---
sidebar_position: 5
---

# Features

DevInit CLI is packed with features designed to eliminate "init-fatigue." Here is a deep dive into what makes it special.

## 1. Multi-Stack Support
DevInit isn't tied to a single framework. It supports the industry's most popular full-stack architectures:
- **MERN**: MongoDB, Express, React, Node.js.
- **MEAN**: MongoDB, Express, Angular, Node.js.
- **Next.js**: The full-stack React framework.

## 2. Dual Setup Modes
Tailor the experience to your expertise level:
- **Quick Setup**: Skips the granular questions and sets up a standard, best-practice project structure. Perfect for hackathons or tutorials.
- **Custom Setup**: Gives you the steering wheel. Future updates will allow choosing between CSS frameworks (Tailwind, Bootstrap) and specific DB drivers.

## 3. Intelligent Boilerplate Generation
Stop copying and pasting base configurations. DevInit automatically generates:
- **Backend Core**: Express server setup with pre-configured Middleware (CORS, JSON parsing).
- **Environment Management**: `.env` file generation with standard keys (PORT, DATABASE_URL).
- **Frontend Scaffolding**: Utilizes official scaffolding tools (like `create-vite` or `create-next-app`) under the hood for a standard experience.

## 4. Automatic Dependency Resolution
DevInit detects your preferred package manager or defaults to `npm` to ensure all necessary libraries—from `mongoose` to `chalk`—are installed and ready for use as soon as the CLI finishes.

## 5. Starter UI Injection
For MERN stacks, DevInit provides an optional "Starter UI." This includes basic layouts and styling examples to give you a visual head-start, so you aren't looking at a blank page.

## 6. Real-time Feedback
Using `chalk` and custom logic, the CLI provides clear, color-coded feedback for every action (Executing, Installing, Success) so you always know exactly what's happening.
