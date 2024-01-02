import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Juliano Sirtori",
  initials: "JS",
  location: "Maringá, Paraná, Brazil",
  locationLink: "https://www.google.com/maps/place/Maring%C3%A1+-+PR",
  about:
    "Desenvolvedor Front-end. Eu crio interações entre usuários e tecnologia!",
  summary:
    "Profissional de Desenvolvimento Front-End com mais de 5 anos de experiência, especializado em projetos de diversas complexidades, incluindo colaborações em iniciativas internacionais. Sou um indivíduo curioso e apaixonado por tecnologia, constantemente em busca de novos aprendizados. Possuo formação como Tecnólogo em Análise e Desenvolvimento de Sistemas, e atualmente estou focado no desenvolvimento com tecnologias como React, TypeScript e Node. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/13910051?v=4",
  personalWebsiteUrl: "https://julianosirtori.dev",
  contact: {
    email: "julianosirtori@gmail.com",
    tel: "+5542998225461",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/julianosirtori/julianosirtori.dev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/juliano-sirtori/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/julianosirtori",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Rocketseat",
      degree: "Bootcamp ",
      start: "2019",
      end: "2019",
    },
    {
      school: "UniGuairacá",
      degree: "Tecnólogo em Analise e Desenvolvimento de Sistemas",
      start: "2015",
      end: "2010",
    },
  ],
  work: [
    {
      company: "CI&T",
      link: "https://ciandt.com/br/pt-br/home",
      badges: [],
      title: "Front-end Web Developer",
      start: "2022",
      end: "Atual",
      description:
        "Atuação com consultoria em projetos internacionais e nacionais. Tecnologias: Node, Javascript, Typescript, React, Next.js",
    },
    {
      company: "Aiqfome",
      link: "https://aiqfome.com/",
      badges: [],
      title: "Front-end Web Developer",
      start: "2020",
      end: "2022",
      description:
        "Implementado soluções internas e externas no setor de delivery. Tecnologias: Javascript, Typescript, React, PHP, Laravel, Next.js.",
    },
    {
      company: "Grupo Superpão",
      link: "https://superpao.com.br",
      badges: [],
      title: "Full Stack Developer",
      start: "2018",
      end: "2020",
      description:
        "Criação de soluções internas, e desenvolvimento de soluções de BI. Tecnologias: QlickView, Javascript, React, Laravel.",
    },
    {
      company: "RP Info Sistemas",
      link: "https://www.rpinfo.com.br/",
      badges: [],
      title: "Full Stack Developer",
      start: "2017",
      end: "2018",
      description:
        "Desenvolvimento e manutenção de software voltada para area de varejo. Tecnologias: Android, Java, Javascript, JQuery, SQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Android",
    "React Native/Expo",
    "Docker",
    "CI/CD",
  ],
  projects: [
    {
      title: "Life in Weeks",
      techStack: [
        "Self Project",
        "Typescript",
        "Next.js"
      ],
      description: "Life in Weeks é um projeto para ajudá-lo a ver quanto tempo resta em sua vida.",
      link: {
        label: "Life in Weeks",
        href: "https://life-in-weeks.julianosirtori.dev/",
      },
    },
    {
      title: "Portfólio",
      techStack: [
        "Self Project",
        "Typescript",
        "React",
        "Next.js",
        "Vercel",
        "Lighthouse"
      ],
      description: "Meu portfólio onde eu posto alguns artigos, desenvolvido com next.js.",
      link: {
        label: "julianosirtori.dev",
        href: "https://www.julianosirtori.dev",
      },
    },
    {
      title: "Miniapp",
      techStack: [
        "Javascript",
        "React",
        "Next.js",
        "Laravel",
        "PHP",
      ],
      description: "Integração do app do aiqfome no super app da magalu.",
      link: {
        label: "Aiqfome no super app do magalu",
        href: "https://www.youtube.com/watch?v=M9-LPj11ZtU",
      },
    },
    {
      title: "Geraldo",
      techStack: [
        "Javascript",
        "Vue 2",
        "PHP",
        "Cake php",
      ],
      description: "Gerenciador do restaurante do aiqfome. Nele o restaurante poderá gerenciar cardápio, receber pedidos entre outras funçòes.",
      link: {
        label: "Geraldo",
        href: "https://geraldo-restaurantes.aiqfome.com/",
      },
    },
    {
      title: "Task",
      techStack: [
        "Android Nativo",
        "Java",
        "Java Play",
        "MVVM",
        "Javascript",
        "JQuery",
      ],
      description: "Gerenciador de rotinas diárias para supermercados. Impressão de etiquetas, auditoria entre outras funções.",
      link: {
        label: "Task",
        href: "https://www.rpinfo.com.br/produto/task/79",
      },
    },
  ],
} as const;
