const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    theme: {
      primaryColor: '#35393d',
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: { disableSearch: true },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {},
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nevellus',
  tagline: 'Documentation Portal',
  url: 'https://docs.nevellus.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'nevellus',
  projectName: 'nevellus-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nevellusdex/nevellus-docs/edit/master',
          versions: {
            current: {
              label: 'current',
            },
          },
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    // Redocusaurus Config
    redocusaurus,
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Nevellus',
        logo: {
          alt: 'Nevellus Logo',
          src: 'img/nevelluslogo.png',
          href:'https://nevellus.com',
        },
        items: [
          {
            to: '/docs/Developers/Overview',
            label: 'Contracts',
            position: 'left',
          },
          {
            to: '/docs/Developers/Subgraphs/Overview',
            label: 'Subgraphs',
            position: 'left',
          },
          {
            to: '/docs/Developers/Packages/Overview',
            label: 'Packages',
            position: 'left',
          },
          {
            to: '/docs/Governance/Current%20Governance%20Model',
            label: 'Governance',
            position: 'left',
          },
          {
            to: '/docs/Ecosystem/Build%20on%20Nevellus',
            label: 'Ecosystem',
            position: 'left',
          },
          {
            to: '/docs/FAQ/General%20FAQ',
            label: 'FAQ',
            position: 'right',
          },
          {
            href: 'https://github.com/nevellusdex',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GitHub',
            items: [
              {
                label: 'nevellus',
                href: 'https://github.com/nevellusdex',
              },
              {
                label: 'nevellus-docs',
                href: 'https://github.com/nevellusdex/nevellus-docs',
              },
              {
                label: 'nevellus-sdk',
                href: 'https://github.com/nevellusdex/sdk',
              },
              {
                label: 'Deployment Addresses',
                to: '/docs/Developers/Deployment%20Addresses',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Home',
                href: 'https://nevellus.com/',
              },
              {
                label: 'App',
                href: 'https://app.nevellus.com/',
              },
              {
                label: 'Analytics',
                href: 'https://app.nevellus.com/analytics',
              },
              {
                label: 'Press Kit (off)',
                href: 'https://drive.google.com/file/tbd',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Governance (off)',
                href: 'https://forum.nevellus.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/vBeZa6EkyC',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nevellus',
              },
              {
                label: 'Blog (off)',
                href: 'https://medium.com/nevellus',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
