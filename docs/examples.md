---
sidebar_position: 6
---

# Examples

Seeing is believing. Here is a typical walkthrough of using DevInit CLI to scaffold a MERN project.

## Scaffolding a MERN Project

This example demonstrates the **Quick Setup** flow for a project named `my-awesome-app`.

### Command Execution

```bash
devinit
```

### Terminal Interaction

When prompted, here is what the interaction looks like:

```text
Welcome to DevInit (Next-Gen Stack Setup Assistant)!

? Enter the project name: my-awesome-app
? Select setup mode: Quick Setup (Beginner)
? Select the stack: MERN Stack
? Ready to create MERN Stack project "my-awesome-app"? Yes
```

### Output Logs

The CLI then performs the heavy lifting:

```text
Starting MERN Stack setup...

> Executing: npm create vite@latest client -- --template react
> Executing: npm install express mongoose cors dotenv
> Executing: node setup-ui.js

Finished: DevInit: my-awesome-app successfully created!
```

## Next Steps

Once complete, follow the post-setup summary:

1.  **Navigate to project**: `cd my-awesome-app`
2.  **Start Backend**: `cd server && npm run dev`
3.  **Start Frontend**: `cd client && npm run dev`

---

## Example Folder Structure

After the setup, your directory will look something like this:

```text
my-awesome-app/
├── client/          # Vite/React Frontend
├── server/          # Express/Node Backend
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env.example
└── package.json
```
