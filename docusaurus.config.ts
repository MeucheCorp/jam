import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "MeucheJam",
  tagline: "",
  favicon: "img/favicon.ico",

  url: "https://jam.meucheroume.fr/",
  baseUrl: "/",

  organizationName: "MeucheCorp",
  projectName: "jam",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo_meuche_sans_fond - Copy.png",
    navbar: {
      title: "MeucheJam",
      logo: {
        alt: "MeucheRoume",
        src: "img/logo_meuche_sans_fond - Copy.png",
      },
      items: [
        { to: "/Infos", label: "Infos", position: "left" },
        { to: "/Inscriptions", label: "Inscriptions", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
