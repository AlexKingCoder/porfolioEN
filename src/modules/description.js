export function createDescription() {

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    document.body.appendChild(descriptionDiv);
  
    const descriptionTitle = document.createElement("h2");
    descriptionTitle.textContent = "About me";
    descriptionDiv.appendChild(descriptionTitle);
  
    const introParagraph = document.createElement("p");
    introParagraph.textContent = "Hello there! My name is Alex and I'm a full stack developer (with a special passion for the backend). I have a varied and growing experience in all kinds of technologies, from ES6, Mongo, React, and I'm currently studying a specialization in AI focused on the enterprise.";
    descriptionDiv.appendChild(introParagraph);
  
    const skillsParagraph = document.createElement("p");
    skillsParagraph.textContent = "I work actively in the development and improvement of various applications. I also have a widely distributed YouTube channel, with which I have acquired social media marketing and outreach skills. In addition, I have worked remotely for a high-impact company (Secretos de la Vida), so I am strong in remote work and team leadership.";
    descriptionDiv.appendChild(skillsParagraph);
  
    const philosophyParagraph = document.createElement("p");
    philosophyParagraph.textContent = "I am a well-trained, neat and creative developer. I am committed to a job well done and continuous training. I love working in a team. Being also a graduate in Education, I am passionate about helping my colleagues, both technically and emotionally.";
    descriptionDiv.appendChild(philosophyParagraph);
  
    const closingParagraph = document.createElement("p");
    closingParagraph.textContent = "You can have a look at my specific projects and skills below. If you want to know more about me, you also have my contact details :)";
    descriptionDiv.appendChild(closingParagraph);
  }