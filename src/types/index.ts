export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export type Theme = "light" | "dark" | "system";

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
    docs: string;
  };
} 