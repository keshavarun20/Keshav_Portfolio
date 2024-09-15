export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Project",
    href: "#project",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "FitFlex-A Gym App",
    desc: "Fit Flex Clone is a replica of the popular fitness platform, designed to offer users a streamlined interface for managing workouts and tracking progress. It includes features like workout plans, progress tracking, and user profiles, all built with a focus on intuitive design and functionality.",
    subdesc:
      "Built as a unique Software-as-a-Service app with React.js, Tailwind CSS, FitFlex is designed for optimal performance and scalability.",
    liveLink: "https://react-fit-flex.netlify.app/",
    texture: "/textures/project/fit-flex.mp4",
    logo: "/assets/logo_ff.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "NASA APOD Viewer",
    desc: "NASA APOD Viewer is a sleek app that showcases NASA's Astronomy Picture of the Day, offering users a window into space exploration. With daily images and detailed descriptions, it brings the universe closer.",
    subdesc:
      "Built using React and Tailwind CSS, the app delivers a clean, responsive experience. It dynamically fetches and displays the latest images and information from NASA’s APOD API, making space exploration accessible and visually engaging.",
    liveLink: "https://nasa-react-apod-app.netlify.app/",
    texture: "/textures/project/apod.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "HCC - Web based Health Care Clinical Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "Developed using Laravel, PHP, MySQL, Bootstrap, HTML, CSS, and JavaScript, the system provides a modern, responsive interface. It ensures secure, real-time management of patient data, streamlining healthcare workflows at the Hatton Consultation Centre.",
    githubRepo: "https://github.com/keshavarun20/my-project",
    texture: "/textures/project/hcc.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/laravel-2.svg",
      },
      {
        id: 2,
        name: "Javascript",
        path: "assets/logo-javascript.svg",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/html-1.svg",
      },
      {
        id: 4,
        name: "MySql",
        path: "/assets/xampp.svg",
      },
      {
        id: 5,
        name: "Bootstrap-5",
        path: "assets/bootstrap-5-1.svg",
      },
    ],
  },
  {
    title: "Simple Todo List - A React App",
    desc: "A minimalist and intuitive to-do list app built with React. It allows users to easily manage tasks with features like adding, editing, and deleting to-dos in a clean and simple interface.",
    subdesc:
      "Using React and CSS, the app provides a responsive and user-friendly experience, helping users stay organized and focused on their daily tasks.",
    githubRepo: "https://github.com/keshavarun20/todolist-reactjs",
    texture: "/textures/project/todolist.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css-3.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -10.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
