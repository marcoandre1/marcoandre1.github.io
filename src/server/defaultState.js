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
      id: 1,
      name: "meeting-API",
      image: meetingAPI,
      url: "https://github.com/marcoandre1/meeting-API",
      repo: "https://github.com/marcoandre1/meeting-API",
      bio: [
        {
          language: "en",
          text: "Meeting API developped with Laravel.",
        },
        {
          language: "fr",
          text: "Meeting API développé avec Laravel.",
        },
        {
          language: "es",
          text: "Meeting API desarollado con Laravel",
        },
      ],
    },
    {
      id: 2,
      name: "speakers-app",
      image: speakersApp,
      url: "https://modokemdev.com/speakers-app/",
      repo: "https://github.com/marcoandre1/speakers-app",
      bio: [
        {
          language: "en",
          text:
            "Speakers App is a Next.js application deployed to GitHub Pages.",
        },
        {
          language: "fr",
          text:
            "Speakers App est une application Next.js déployé sur GitHub Pages.",
        },
        {
          language: "es",
          text:
            "Speakers App es una aplicación Next.js desplegada sobre GitHub Pages.",
        },
      ],
    },
    {
      id: 3,
      name: "nextjs-blog",
      image: nextjsBlog,
      url: "https://modokemdev.com/nextjs-blog/",
      repo: "https://github.com/marcoandre1/nextjs-blog",
      bio: [
        {
          language: "en",
          text: "Next.js blog app deployed to GitHub Pages using gh-pages.",
        },
        {
          language: "fr",
          text:
            "Aplication Next.js de type blog déployé sur GitHub Pages à l'aide de gh-pages.",
        },
        {
          language: "es",
          text:
            "Aplicación Next.js de tipo blog desplegada sobre GitHub Pages con la ayuda de gh-pages.",
        },
      ],
    },
  ],
  languages: [
    {
      id: "en",
      htmlTitle: "ModokemDev | en",
      name: "English",
      title: "Welcome to ModokemDev",
      subTitle: "Projects",
      description: "C# developer at day, Dragon Rider at night.",
    },
    {
      id: "fr",
      htmlTitle: "ModokemDev | fr",
      name: "Français",
      title: "Bienvenue à ModokemDev",
      subTitle: "Projets",
      description: "Développeur C# le jour, Dragon Rider la nuit.",
    },
    {
      id: "es",
      htmlTitle: "ModokemDev | es",
      name: "Español",
      title: "Bienvenido a ModokemDev",
      subTitle: "Proyectos",
      description: "Desarollador C# de día, Dragon Rider de noche.",
    },
  ],
  bios: [
    {
      id: 1,
      language: "en",
      firstTitle: "Who am I?",
      firstContent:
        "My name is ModokemDev. I am an enthusiast web developer. I spend some of my time learning web technologies, mainly for fun, but also to be a better web developer.",
      secondTite: "So what have you been learning?",
      secontContent:
        "Oh man, it's hard to keep track of everything. But here is what I can remember. My first experience with programming was probably at primary school with something called Scratch 😺. I think it is still around. As a child, I remember my dad giving me a thick book to learn Visual Basic (Yes, I know ...🙄). The book came with a floppy disk 💾 (I am not that old ...). When I was a teenager I took some classes to learn Visual Basic, MySQL and C++. I forgot most of it to be honest. Don't ask me why but I ended up studying chemistry at university. I officially started my developer journey when I got into software engineering at university.",
    },
    {
      id: 2,
      language: "fr",
      firstTitle: "Qui suis-je?",
      firstContent:
        "Je m'appelle ModokemDev. Je suis un passionné du développement web. Je passe une partie de mon temps à apprendre des technologies web, surtout pour m'amuser, mais aussi pour devenir un meilleur développeur web.",
      secondTite: "Alors, qu'as-tu appris?",
      secontContent:
        "C'est difficile de garder la trace de tout. Mais voici ce dont je peux me rappeler. Ma première expérience en informatique doit remonter au primaire quand j'ai utiliser le logiciel scratch 😺. Je pense que le logiciel existe toujours. Alors que j'étais enfant, je me rappelle que mon père m'a donnée une brique pour apprendre Visual Basic (Oui, je sais ...🙄). Le livre venait avec une disquette 💾 (Je ne suis pas si vieux ...). Pendant, mon adolescence j'ai pris des cours de Visual Basic, MySQL and C++. J'ai pas mal tout oublié pour être honnête. Ne me demandez pas pourquoi mais je me suis retrouvé en chimie à l'université. J'ai officiellement commencé mon parcours en tant que développeur quand je suis rentré en génie logiciel à l'université.",
    },
    {
      id: 3,
      language: "es",
      firstTitle: "¿Quién soy?",
      firstContent:
        "Mi nombre es ModokemDev. Me apasiona el desarrollo web. Dedico parte de mi tiempo a aprender tecnologías web, principalmente por diversión, pero también para mejorar mis habilidades en informática.",
      secondTite: "¿Y qué has estado aprendiendo?",
      secontContent:
        "Pues, es difícil hacer un seguimiento de todo. Pero esto es lo que puedo recordar. Mi primera experiencia en informática probablemente fue en primaria con Scratch 😺. Creo que todavía se puede encontrar. Siendo niño, recuerdo que mi padre me dio un libro para aprender Visual Basic (Sí, lo sé ...🙄). El libro venía con un disquete 💾 (No soy tan viejo ...). Cuando era adolescente tomé algunas clases para aprender Visual Basic, MySQL and C++. Para ser honesto, se me olvidó casi todo. No me pregunten porqué pero termine estudiando química en la universidad. Comencé oficialmente mi jornada como desarrollador web cuando entré en ingeniería de software en la universidad.",
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
