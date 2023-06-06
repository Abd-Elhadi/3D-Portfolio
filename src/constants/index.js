import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    amanleek,
    tenzies,
    quizgame,
    notesapp,
    memegenerator,
    elzerotemplate,
    specialdesign,
    memorygame,
    discoverpage,
    chatgptclone
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
const experiences = [
  
    {
      title: "Software Engineer",
      company_name: "Amanleek",
      icon: amanleek,
      iconBg: "#E6DEDD",
      date: "August 2022 - October 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with product manager and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Spotify Clone",
      description:
        "Lyrics is an elegant, responsive & mobile-friendly React.js music application with a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you and worldwide top charts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "rapidapi",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: discoverpage,
      source_code_link: "https://github.com/Abd-Elhadi/Spotify-Clone",
      live_site_link: "https://my-spotifyclone-app.netlify.app/",
    },
    {
      name: "ChatGPT Clone",
      description:
        "This app is a ChatGPT Clone using OpenAIs gpt-3.5-turbo Model.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: chatgptclone,
      source_code_link: "https://github.com/Abd-Elhadi/Chat-GPT-Clone",
    },
    {
      name: "Quiz Game App",
      description:
        "Quiz Game is a WebApp that access trivia questions from the Open Trivia Database API and score players based on their answers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: quizgame,
      source_code_link: "https://github.com/Abd-Elhadi/Quiz-Game-App",
      live_site_link: "https://quiz-app-aom.netlify.app/",
    },
    {
      name: "Tenzies",
      description:
        "Tenzies is a fun dice game that you can play with your friends and family. The game requires you to roll the dice and try to match the numbers on the dice with the numbers on the board.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tenzies,
      source_code_link: "https://github.com/Abd-Elhadi/Tenzies-Game",
      live_site_link: "https://tenzies-game-aom.netlify.app/",
    },
    {
      name: "Note App",
      description:
        "Markdown Notes App, is a web application that allows users to create, update and deleted notes. It also persists the notes on local storage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: notesapp,
      source_code_link: "https://github.com/Abd-Elhadi/Markdown-Notes-App",
      live_site_link: "https://notes-app-aom.netlify.app/",
    },
    {
      name: "Meme Generator",
      description:
        "Meme Generator is a React app that retrieves meme images from the Imgflip API and displays random images to the page. It also allows the user to add top and bottom texes to the image.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: memegenerator,
      source_code_link: "https://github.com/Abd-Elhadi/Meme-Generator",
      live_site_link: "https://meme-generator-aom.netlify.app/",
    },
    {
      name: "Elzero Template",
      description:
        "This is a project for creating Elzero Template using HTML and CSS. I created it to practice my coding skills by building realistic projects.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: elzerotemplate,
      source_code_link: "https://github.com/Abd-Elhadi/Elzero-Template",
      live_site_link: "https://elzero-template-aom.netlify.app/",
    },
    {
      name: "Memory Game",
      description:
        "Uncover two matching symbols at once to eliminate them from the game. Eliminate all cards as fast as you can to win the game.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: memorygame,
      source_code_link: "https://github.com/Abd-Elhadi/Memory-Game",
      live_site_link: "https://memory-game-aom.netlify.app/",
    },
    {
      name: "Special Design",
      description:
        "",
      tags: [
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: specialdesign,
      source_code_link: "https://github.com/Abd-Elhadi/Special-Template",
      live_site_link: "https://special-templpate-aom.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };