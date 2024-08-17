import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NureTimetableAPI documentation',
  tagline: 'Get maximum data with only one request!',
  favicon: 'img/app-icon-green.svg',

  // Set the production url of your site here
  url: 'http://music-soul1-1.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/NureTimetableAPI.Docs/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'music-soul1-1', // Usually your GitHub org/user name.
  projectName: 'NureTimetableAPI.Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/music-soul1-1/NureTimetableAPI.Docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/music-soul1-1/NureTimetableAPI.Docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'NureTimetableAPI.Docs',
      logo: {
        alt: 'NureTimetableAPI.Docs Logo',
        src: 'img/app-icon-green.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/music-soul1-1/NureTimetableAPI',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'NURE-related projects',
          items: [
            {
              label: 'App',
              href: 'https://github.com/music-soul1-1/nure-timetable',
            },
            {
              label: 'API',
              href: 'https://github.com/music-soul1-1/NureTimetableAPI',
            },
            {
              label: '.NET library',
              href: 'https://github.com/music-soul1-1/NureTimetableAPI.DotNetLib',
            },
            {
              label: 'Docs',
              href: 'https://github.com/music-soul1-1/NureTimetableAPI.Docs',
            },
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} music-soul-1. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: ['json', 'csharp'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
