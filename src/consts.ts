import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "Clément Sebastiao webpage",
  DESCRIPTION: "Webpage of Clément Sebastiao.",
  EMAIL: "clse@itu.dk",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 2,
  SITEURL: 'https://csebastiao.github.io' // Update here to link the RSS icon to your website rss
};

export const HIGHLIGHTAUTHOR = "Clément S"

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Homepage of my website.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION:
    "My CV.",
};

export const TAGS: Metadata = {
  TITLE: "TAGS",
  DESCRIPTION:
    "Tags to filter blog posts.",
};

export const ABOUT: Metadata = {
  TITLE: "ABOUT",
  DESCRIPTION:
    "A self-introduction.",
};