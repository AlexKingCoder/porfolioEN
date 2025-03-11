export function createDescription() {

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    document.body.appendChild(descriptionDiv);
  
    const descriptionTitle = document.createElement("h2");
    descriptionTitle.textContent = "About me";
    descriptionDiv.appendChild(descriptionTitle);
  
    const introParagraph = document.createElement("p");
    introParagraph.textContent = "My name is Alex. I'm a developer specialized in Backend. I work on self-initiated projects to improve my skills every day.";
    descriptionDiv.appendChild(introParagraph);
  
    const skillsParagraph = document.createElement("p");
    skillsParagraph.textContent = "I am a voracious student. My routine is to always break my limits. Excellence is the minimum.";
    descriptionDiv.appendChild(skillsParagraph);
  
    const philosophyParagraph = document.createElement("p");
    philosophyParagraph.textContent = "I document my work on a daily basis via YouTube and Linkedin, to help and inspire other programmers.";
    descriptionDiv.appendChild(philosophyParagraph);
  
    const closingParagraph = document.createElement("p");
    closingParagraph.textContent = "You can take a look at my specific projects and skills below. If you want to get to know me better, or if you want to propose me a challenge, you can contact me in the email you will find at the end.";
    descriptionDiv.appendChild(closingParagraph);
  }
