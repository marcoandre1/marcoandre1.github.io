import meetingAPI from "../images/meeting-API.png";
import speakersApp from "../images/speakers-app.png";
import nextjsBlog from "../images/nextjs-blog.png";

export const defaultState = {
  users: [
    {
      id: 1,
      name: "ModokemDev",
    },
    {
      id: 2,
      name: "meltinglight",
    },
  ],
  projects: [
    {
      id: 1124,
      name: "meeting-API",
      image: meetingAPI,
      url: "https://github.com/marcoandre1/meeting-API",
      repo: "https://github.com/marcoandre1/meeting-API",
      bio: "Meeting API developped with Laravel.",
    },
    {
      id: 1530,
      name: "speakers-app",
      image: speakersApp,
      url: "https://modokemdev.com/speakers-app/",
      repo: "https://github.com/marcoandre1/speakers-app",
      bio: "Speakers App is a Next.js application deployed to GitHub Pages.",
    },
    {
      id: 10803,
      name: "nextjs-blog",
      image: nextjsBlog,
      url: "https://modokemdev.com/nextjs-blog/",
      repo: "https://github.com/marcoandre1/nextjs-blog",
      bio: "Next.js blog app deployed to GitHub Pages using gh-pages.",
    },
  ],
  languages: [
    {
      id: "en",
      htmlTitle: "Modokemdev | en",
      name: "English",
      title: "Welcome to Modokemdev",
      description: "C# developer at day, Dragon Rider at night.",
    },
    {
      id: "fr",
      htmlTitle: "Modokemdev | fr",
      name: "Français",
      title: "Bienvenue à Modokemdev",
      description: "Développeur C# le jour, Dragon Rider la nuit.",
    },
    {
      id: "es",
      htmlTitle: "Modokemdev | es",
      name: "Español",
      title: "Bienvenido a Modokemdev",
      description: "Desarollador C# de día, Dragon Rider de noche.",
    },
  ],
  pageNotFound: [
    {
      id: 404,
      htmlTitle: "404 - Page not found",
      name: "Page not found",
      title: "404 - Page not found",
      description: "You are lost!",
    },
  ],
};
