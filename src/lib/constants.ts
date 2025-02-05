import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Next.js Template",
  description: "A professional Next.js base template with TypeScript, TailwindCSS, and Shadcn/UI",
  url: "https://your-site.com",
  links: {
    github: "https://github.com/yourusername/your-repo",
    docs: "/docs"
  }
};

export const ITEMS_PER_PAGE = 10;

export const API_ENDPOINTS = {
  auth: "/api/auth",
  users: "/api/users",
  posts: "/api/posts"
} as const;

export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  profile: "/profile",
  settings: "/settings",
  docs: "/docs"
} as const; 