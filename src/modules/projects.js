export function createProjects() {

    const projectsDiv = document.createElement("div");
    projectsDiv.id = "projects";
    document.body.appendChild(projectsDiv);

const projectsTitle = document.createElement("h2");
projectsTitle.textContent = "My Projects";
projectsDiv.appendChild(projectsTitle);

const projects = [
  {
    name: "Multiverse Patrols",
    thumbnail: "/projects/multiversePatrols.png",
    version: "v1.0 (14/02/2025)",
    description: "Narrative game designed with React.",
    link: "https://multiversepatrols.netlify.app",
    code: "https://github.com/AlexKingCoder/multiversepatrols"
  },
  {
    name: "Ice Dream",
    thumbnail: "/projects/iceDreamBackend.png",
    version: "v0.9.1 (25/01/2025)",
    description: "Complete backend designed for the future Ice Dream application.",
    link: "https://github.com/AlexKingCoder/iceDream",
    code: "https://github.com/AlexKingCoder/iceDream"
  },
  {
    name: "Story Flipper",
    thumbnail: "/projects/storyFlipper.png",
    version: "v1.1 (19/12/2024)",
    description: "Application that generates ideas for writing amazing stories.",
    link: "https://storyflipper.netlify.app",
    code: "https://github.com/AlexKingCoder/storyflipper"
  },
  {
    name: "Audi",
    thumbnail: "/projects/audiSpain.png",
    version: "v1.0 (11/11/2024)",
    description: "Replica of the Audi Spain website.",
    link: "https://audispain.netlify.app",
    code: "https://github.com/AlexKingCoder/audi-spain"
  },
  {
    name: "Educando Héroes",
    thumbnail: "/projects/logoEducandoHeroes.png",
    version: "En desarrollo",
    description: "Channel focused on education and personal development.",
    link: "https://youtube.com/@educandoheroes",
    code: "https://www.youtube.com/@educandoheroes/videos"
  }
];

const projectsList = document.createElement("div");
projectsList.classList.add("projects-list");

projects.forEach(project => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");

  const projectName = document.createElement("h3");
  projectName.textContent = project.name;
  
  const projectThumbnail = document.createElement("img");
  projectThumbnail.src = project.thumbnail;
  projectThumbnail.alt = `Miniatura de ${project.name}`;
  projectThumbnail.classList.add("project-thumbnail");
  
  const projectVersion = document.createElement("span");
  projectVersion.classList.add("project-version");
  projectVersion.textContent = `Version: ${project.version}`;

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  
  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  projectLink.target = "_blank";
  projectLink.textContent = "🔎Take a look!";

  const projectCode = document.createElement("a");
  projectCode.href = project.code;
  projectCode.target = "_blank";
  projectCode.textContent = "🧬Want to see the code?";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  buttonContainer.appendChild(projectLink);
  buttonContainer.appendChild(projectCode);

  projectItem.appendChild(projectName);
  projectItem.appendChild(projectThumbnail);
  projectItem.appendChild(projectVersion);
  projectItem.appendChild(projectDescription);
  projectItem.appendChild(buttonContainer);

  projectsList.appendChild(projectItem);
});

projectsDiv.appendChild(projectsList);
}