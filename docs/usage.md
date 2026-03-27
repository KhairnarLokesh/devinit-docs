---
sidebar_position: 3
---

# Getting Started

The core philosophy of DevInit CLI is simplicity through interaction. You don't need to memorize complex flags or configuration files to start a project.

## Your First Project

To begin, open your terminal in the directory where you want your project to live and run:

```bash
devinit
```

## The Interactive Workflow

Once you run `devinit`, the tool will guide you through a series of intuitive prompts:

1.  **Project Name**: Enter the name of your application. A folder with this name will be created.
2.  **Setup Mode**: 
    - **Quick Setup (Beginner)**: Uses recommended defaults to get you up and running instantly.
    - **Custom Setup (Advanced)**: Allows you to choose specific configurations for your stack.
3.  **Select Stack**: Choose from the available technology stacks (MERN, MEAN, Next.js).
4.  **Confirmation**: Review your choices and confirm to begin the setup.

## What Happens Next?

DevInit performs several operations automatically:
- **Folder Creation**: Manages the root directory and sub-directories (e.g., `client` and `server`).
- **Dependency Installation**: Runs the appropriate install commands for your chosen stack.
- **Boilerplate Generation**: Writes essential files like `app.js`, `index.js`, `.env`, and basic routing.
- **UI Scaffolding**: Injects starter styles and components if selected.

Once the process finishes, you can navigate into your project and start developing!

```bash
cd my-app
```
