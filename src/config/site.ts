type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "oniguy4649",
  description:
    "Blog platform built with Next.js, shadcn/ui, prisma and markdown.",
  url: "https://next-blog-cj.vercel.app/",
  ogImage: "https://next-blog-cj.vercel.app/og",
  links: {
    twitter: "https://x.com/oniguy4649",
    github: "https://github.com/oniguy4649",
  },
};
