// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars.js'),
      breadcrumbs: true,
      editUrl: 'qubetics',
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('develop'),
  defineSection('validate'),
  defineSection('protocol'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Qubetics Docs',
  tagline: 'Develop on Qubetics',
  url: 'https://docs.qubetics.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Qubetics', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    project: {
      name: "Qubetics",
      denom: "Qubetics",
      ticker: "TICS",
      binary: "qubeticsd",
      testnet_denom: "tics",
      testnet_ticker: "TICS",
      rpc_url: "https://qubetics.lava.build",
      rpc_url_testnet: "https://qubetics-testnet.lava.build",
      rpc_url_local: "http://localhost:8545/",
      chain_id: "9030",
      testnet_chain_id: "9029",
      latest_version: "1.0.0",
      mainnet_version: "1.0.0",
      testnet_version: "1.0.0",
      version_number: "1",
      testnet_version_number: "1",
      testnet_evm_explorer_url: "https://testnet.qubetics.work/",
      evm_explorer_url: "https://ticsscan.com/",
      testnet_cosmos_explorer_url: "Coming Soon",
      cosmos_explorer_url: "Coming Soon",
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3JSJBBPS3L',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    ...SECTIONS,
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Qubetics Docs',
        logo: {
          href: '/',
          alt: 'Qubetics Logo',
          src: 'img/qubetics.png',
        },
        items: [
          {
            position: 'left',
            label: 'Develop',
            to: '/develop',
          },
          {
            position: 'left',
            label: 'Validate',
            to: '/validate',
          },
          {
            position: 'left',
            label: 'Protocol',
            to: '/protocol',
          },
          {
            position: 'right',
            label: 'Tools',
            to: '/develop/tools',
          },
          {
            position: 'right',
            label: 'Networks',
            to: '/develop/api/networks',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/qubetics',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/KHfSNbzdSE',
              },   
              {
                label: 'Twitter',
                href: 'https://x.com/qubetics?mx=2',
              },
            ],
          },
          {},
          {},
          {},
          {},
          {},
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://medium.com/@innerly_ai/qubetics-and-the-future-of-blockchain-scalability-security-and-interoperability-19b24c75e1ba',
              },
              {
                label: 'Qubetics GitHub',
                href: 'https://github.com/Qubetics',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "Qubetics Docs", 
          content: "Official Qubetics Docs. Come discover why we are the the home for native, cross-chain applications."
        },
        {
          name: "author",
          content: "The Qubetics Core Team @Qubetics"
        },
        {
          name: "keywords",
          content: "EMM, cross-chain, Cosmos SDK, IBC, fast-finality, native, cross-chain applications, EVM on Cosmos"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: 'DPTADG0ME1',
  
        // Public API key: it is safe to commit it
        apiKey: 'fbbcf85b58f500e5e4d301f9730f3526',
  
        indexName: 'qubeticsdocs',
  
        contextualSearch: true,
        searchParameters: {},
      },
    }),
};

module.exports = config;
