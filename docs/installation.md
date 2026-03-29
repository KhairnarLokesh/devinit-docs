---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

Getting started with DevInit CLI is simple. The tool is available as an npm package and should be installed globally to be accessible from any directory.

## Prerequisites

Before installing DevInit CLI, ensure you have the following installed:
- **Node.js**: Version 14.x or higher is recommended.
- **npm** (comes with Node.js), **yarn**, or **pnpm**.

## Global Installation

Run the following command in your terminal to install DevInit CLI globally:

<Tabs>
  <TabItem value="npm" label={<span><img src="/img/npm.svg" className="tab-icon" /> npm</span>} default>
    ```bash
    npm install -g devinit-cli
    ```
  </TabItem>
  <TabItem value="yarn" label={<span><img src="/img/yarn.svg" className="tab-icon" /> yarn</span>}>
    ```bash
    yarn global add devinit-cli
    ```
  </TabItem>
  <TabItem value="pnpm" label={<span><img src="/img/pnpm.svg" className="tab-icon" /> pnpm</span>}>
    ```bash
    pnpm add -g devinit-cli
    ```
  </TabItem>
</Tabs>

## Verify Installation

Once the installation is complete, you can verify it by checking the version or running the help command (coming soon):

```bash
devinit --version
```

If the command is recognized, you are ready to start scaffolding your next big project!

:::tip Update Regularly
Keep your CLI up to date to get the latest stack templates and features:
```bash
npm update -g devinit-cli
```
:::
