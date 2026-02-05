export interface Project {
    id: number;
    slug: string;
    link?: string;
    imageUrl: string;
    tags?: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    slug: "hexlite",
    link: "https://hexlitestudios.com",
    imageUrl: "https://hexlitestudios.com/assets/hexlite-DzxGh15D.png",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    slug: "chrisproductions",
    link: "https://musician-sitev2-production.up.railway.app/",
    imageUrl: "https://chrisproductions-production.up.railway.app/hero.png",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  }
];
