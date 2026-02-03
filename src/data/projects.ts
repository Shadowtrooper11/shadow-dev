export interface Project {
    id: number;
    title: string;
    description: string;
    link?: string;
    imageUrl: string;
    tags?: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Hexlite Studios Website",
    description: "Official website for Hexlite Studios.",
    link: "https://hexlitestudios.com",
    imageUrl: "https://hexlitestudios.com/assets/hexlite-DzxGh15D.png",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Chris Productions Website",
    description: "Official website for Chris Productions.",
    link: "https://chrisproductions.com",
    imageUrl: "https://chrisproductions-production.up.railway.app/hero.png",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  }
];