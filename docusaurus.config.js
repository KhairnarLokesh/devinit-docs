// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevInit CLI',
  tagline: 'Next-Gen Stack Setup Assistant',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://devinit-cli.docs',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KhairnarLokesh', // Usually your GitHub org/user name.
  projectName: 'DevInit', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs', // Changed from '/' to 'docs'
          editUrl:
            'https://github.com/KhairnarLokesh/DevInit/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'DevInit CLI',
        logo: {
          alt: 'DevInit Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/KhairnarLokesh/DevInit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'DevInit CLI',
            items: [
              {
                html: `
                  <div style="margin-top: 10px; color: #444; font-size: 0.9rem; line-height: 1.6;">
                    Providing a modern, high-performance foundation for Next-Gen full-stack applications.
                  </div>
                `,
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/',
              },
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Commands',
                to: '/docs/commands',
              },
              {
                label: 'Architecture',
                to: '/docs/architecture',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/KhairnarLokesh/DevInit',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/devinit',
              },
              {
                label: 'Twitter / X',
                href: 'https://twitter.com/devinit_cli',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevInit CLI. Built for modern developers.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
