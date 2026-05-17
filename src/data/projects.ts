export type WebApp = {
  title: string;
  repo: string;
  description: string;
  tags: string[];
  demo?: string;
  thumbnail: string;
};

export const WEB_APPS: WebApp[] = [
  {
    title: "Auxee",
    repo: "",
    demo: "https://auxee.com/",
    description:
      "Automate your desk research so you can focus on more strategic work. Auxee handles the searches, synthesizes results, and generates draft documents—so you don’t have to.",
    tags: ["Next.js", "Typescript", "Material UI", "AI SDK", "Node Js", "OpenAI APIs"],
    thumbnail: "/_static/projects/auxee.webp",
  },
  {
    title: "Safeherit",
    repo: "",
    demo: "https://safeherit.com/",
    description:
      "System designed to protect your legacy",
    tags: ["React Js", "Typescript", "Tailwind CSS", "Firebase", "Node Js"],
    thumbnail: "/_static/projects/safeherit.webp",
  },
  {
    title: "Humantryx",
    repo: "https://github.com/Malik-Haziq/humantryx",
    demo: "https://humantryx.vercel.app/",
    description:
      "AI powered human resource management system. Manage employees, track performance, and automate HR tasks with AI-driven insights.",
    tags: ["Next.js", "TRPC", "Better-Auth", "Drizzle", "Shadcn", "Pinecone", "Langchain", "OpenAI"],
    thumbnail: "/_static/projects/humantryx.png",
  },
    {
    title: "Zyrentis AI",
    // repo: "https://github.com/Malik-Haziq/humantryx",
    demo: "https://www.zyrentis.tech/",  
    description:
      " Zyrentis helps companies during technical interviews to find best engineers not vibe coders.",
    tags: ["React", "Next.js", "Node.js", "Typescript", "Tailwind CSS", "Shadcn", "OpenAI API"],
    thumbnail: "/_static/projects/zyrentis.png",
  },
  {
    title: "CWN Solutions",
    repo: "https://github.com/Malik-Haziq/CWN-Tech",
    demo: "http://codewithnaqvi.com/",
    description:
      "Software development agency",
    tags: ["React Js", "Tailwind CSS", "PHP"],
    thumbnail: "/_static/projects/cwn.webp",
  },
  {
    title: "The Elva Edit",
    tags: ["Typescript", "React", "Redux Toolkit", "Nodejs", "Supabase"],
    description:
      "E-commerce platform for The Elva Edit, a women's jewellery brand, featuring product listings, seamless shopping experience, and elegant UI.",
    thumbnail: "/_static/projects/theelva.png",
    demo: "https://www.theelvaedit.com/",

  },
  
] as WebApp[];

export type Tool = {
  title: string;
  repo: string;
  demo: string;
  description: string;
  techs: string[];
};

export const TOOLS: Tool[] = [
  {
    title: "zero-boiler",
    repo: "https://github.com/Malik-Haziq/zero-boiler",
    demo: "https://zeroboiler.netlify.app/",
    description:
      "zero boiler is an npm CLI tool that lets you start React projects with a production-ready setup.",
    techs: ["npm-package"],
  },
  {
    title: "Ocean Mist",
    repo: "https://github.com/Malik-Haziq/Ocean-Mist-Vscode-Theme",
    demo: "https://marketplace.visualstudio.com/items?itemName=MalikHaziq.ocean-mist",
    description:
      "Ocean Mist is a stunning VS Code theme made for developers to ease up their eyes while.",
    techs: ["VS Code Theme"],
  },
];
