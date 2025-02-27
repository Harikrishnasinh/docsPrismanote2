require('dotenv').config();
const path = require('path');
const fs = require('fs');

const docType = process.env.REACT_APP_DOC_TYPE;
const apiVersion = process.env.REACT_APP_API_VERSION || '1.0.0';

console.log('DOC_TYPE:', docType); // For debugging
console.log('api_version:', apiVersion); // For debugging

/** @type {import('@docusaurus/types').Config} */

// Update OpenAPI spec with the version in any introduction
const openApiPath = path.join(__dirname, '/static/retailgearApp.yaml');
const openApiSpec = fs.readFileSync(openApiPath, 'utf8');
const updatedSpec = openApiSpec.replace('${API_VERSION}', apiVersion);

// Write the updated spec
fs.writeFileSync(path.join(__dirname, '/static/retailgearApp.generated.yaml'), updatedSpec);

const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: "@theme/ApiItem",
          lastVersion: apiVersion,
        },

        theme: {
          customCss: docType === 'retailer' ? "./src/css/retailer-custom.css" : docType === 'supplier' ? "./src/css/supplier-custom.css" : "./src/css/retailgear-custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'DOCS',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
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
          title: 'API Documentation',
          items: [
            {
              label: 'API',
              to: '/docs/api/intro',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          b2b_app: {
            specPath: "static/b2b_app.yaml",
            outputDir: "docs/api/supplier",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          retailgearApp: {
            specPath: "static/retailgearApp.generated.yaml",
            outputDir: "docs/api/retailgear",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          }
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components
};
export default config;
