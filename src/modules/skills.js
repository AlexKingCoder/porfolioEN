export function createSkills() {

    const skillsDiv = document.createElement("div");
    skillsDiv.id = "skills";
    document.body.appendChild(skillsDiv);
  
    const skillsTitle = document.createElement("h2");
    skillsTitle.textContent = "My Skills";
    skillsDiv.appendChild(skillsTitle);
    
    const skills = [
      {
        title: "Frontend Development",
        description: "Flexible proficiency in HTML, SCSS and JavaScript."
      },
      {
        title: "Backend Development",
        description: "Experience with Node.js, Express and Multer."
      },
      {
        title: "Databases",
        description: "Design and optimisation of MongoDB and Postgre."
      },
      {
        title: "React",
        description: "Specialisation in React, DND and Hook-form."
      },
      {
        title: "Chakra UI",
        description: "Customised UI design and programming."
      },
      {
        title: "GitHub Commands",
        description: "Advanced commands for project development."
      },
      {
        title: "Wordpress",
        description: "Experience in web design with Wordpress."
      },
      {
        title: "Sony Vegas",
        description: "Video editing and podcasting."
      },
      {
        title: "Pixlr & GIMP",
        description: "Graphic and thumbnail editing"
      },
      {
        title: "Creativity and innovation",
        description: "Expert in finding solutions and constant improvements."
      },
      {
        title: "Leadership and coaching",
        description: "Experience in teamwork and mentoring."
      },
    ];
  
    const skillsList = document.createElement("div");
    skillsList.classList.add("skills-list");
    
    skills.forEach(skill => {
      const skillItem = document.createElement("div");
      skillItem.classList.add("skill-item");
  
      const skillTitle = document.createElement("h3");
      skillTitle.textContent = skill.title;
      
      const skillDescription = document.createElement("p");
      skillDescription.textContent = skill.description;
      
      skillItem.appendChild(skillTitle);
      skillItem.appendChild(skillDescription);
  
      skillsList.appendChild(skillItem);
    });
  
    skillsDiv.appendChild(skillsList);
  }
