// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Angga',
  tagline:
    'I do work focused on Backend, Cloud, DevOps, and Infrastructure. Occasionally, I also do Frontend engineering.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.GH_USER, // Usually your GitHub org/user name.
  projectName: process.env.GH_REPO, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  plugins: [
    './src/plugins/tailwindcss',
    [
      './src/plugins/blog-extension',
      {
        blogDescription:
          'My ideas, thoughts, knowledge, experience, and journey poured into blog articles. I will be focusing on my work in tech but I might occasionally post about other topics that I find interesting.',
        showReadingTime: true,
        routeBasePath: '/blog'
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        // TODO: Create projects section
        /* docs: { */
        /*   sidebarPath: require.resolve('./sidebars.js'), */
        /*   // Please change this to your repo. */
        /*   // Remove this to remove the "edit this page" links. */
        /*   editUrl: */
        /*     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/' */
        /* }, */
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  customFields: {
    repoId: process.env.GH_REPO_ID,
    category: process.env.GH_DISCUSSION_CATEGORY,
    categoryId: process.env.GH_DISCUSSION_CATEGORY_ID
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      metadata: [{ name: 'twitter:card', content: 'img/me.png' }],
      colorMode: {
        defaultMode: 'dark'
      },
      // Replace with your project's social card
      image: 'img/me.png',
      navbar: {
        title: 'Angga',
        logo: {
          alt: 'Angga Logo',
          src: 'img/me.png'
        },
        items: [
          // TODO: use this as project options
          /* { */
          /*   type: 'docSidebar', */
          /*   sidebarId: 'tutorialSidebar', */
          /*   position: 'left', */
          /*   label: 'Tutorial' */
          /* }, */
          { to: '/blog', label: 'Blog', position: 'right' },
          { to: '/resume', label: 'Resume', position: 'right' },
          { to: '/about', label: 'About', position: 'right' }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          /* { */
          /*   title: 'Docs', */
          /*   items: [ */
          /*     { */
          /*       label: 'Tutorial', */
          /*       to: '/docs/intro' */
          /*     } */
          /*   ] */
          /* }, */
          {
            title: 'Contacts',
            items: [
              {
                html: `<a class="footer__icon-link fa-brands fa-github fa-xl" href="https://github.com/${process.env.GH_USER}"></a>`
              },
              {
                html: `<a class="footer__icon-link fa-brands fa-linkedin fa-xl" href="https://linkedin.com/in/nayyara-airlangga-raharjo"></a>`
              },
              {
                html: `<a class="footer__icon-link fa-regular fa-envelope fa-xl" href="mailto:nayyara.airlangga@gmail.com"></a>`
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Archive',
                to: '/blog/archive'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Angga`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }
}

module.exports = config
