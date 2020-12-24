export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Dev",
    },
    {
      id: "U2",
      name: "C. Eeyo",
    },
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1",
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1",
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "Refactor tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Meet with CTO",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Compile ES6",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false,
    },
    {
      name: "Update component snapshots",
      id: "T4",
      group: "G2",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Production optimizations",
      id: "T5",
      group: "G3",
      owner: "U1",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great work!",
    },
  ],
  languages: [
    {
      name: "English",
      id: "en",
      title: "Dashboard",
      description: "C# developer at day, Dragon Rider at night.",
    },
    {
      name: "Français",
      id: "fr",
      title: "Tableau de bord",
      description: "Développeur C# le jour, Dragon Rider la nuit.",
    },
    {
      name: "Español",
      id: "es",
      title: "Tablero",
      description: "Desarollador C# de día, Dragon Rider de noche.",
    },
  ],
};
