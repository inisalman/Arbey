// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dinokumentasi Arbey',
  tagline: 'Docs',
  favicon: 'img/favicon.ico',


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://arbey.salmanalfarisi.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'inisalman', // Usually your GitHub org/user name.
  projectName: 'arbey', // Usually your repo name.

  onBrokenLinks: 'throw',
 
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
      navbar: {
        title: 'Arbey',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Home',
           
          },
          {type: 'search', position: 'right'},
          
        ],
      },
      algolia: {
    appId: '3O6ZJSWAJO', // ganti
    apiKey: '465688d60accc06c1a33c9577ee98b1d', // ganti dengan Search-Only API Key
    indexName: 'Arbeynew', // ganti
    contextualSearch: true, // opsional, biar hasil sesuai halaman/docs
    searchParameters: {}, // opsional
    searchPagePath: 'search', // bikin halaman khusus /search
  },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dinokumentasi Arbey',
            items: [
              {
                label: 'Home',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Tindakan',
                href: '/',
              },
            ],
          },
          {
            title: 'Info',
            items: [
              {
                label: 'Dev',
                to: 'https://salmanalfarisi.id',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/inisalman/Arbey',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arbey Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};



export default config;


