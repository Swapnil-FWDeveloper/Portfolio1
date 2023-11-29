const Projects = [
  {
    name: "Mini Projects",
    about:
      "Mini projects are small projects that I've built for my learning. I have created some awesome mini projects using HTML, CSS, JavaScript, and React.",
    img: "https://miro.medium.com/max/828/1*Xnl2yu56eM87iDKUUybWRQ.png",
    gitrepo: "https://github.com/Swapnil-FWDeveloper/Mini-Projects",
    tech_stack: "HTML | CSS | JAVASCRIPT | REACT ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
    ],
    project_link: "https://github.com/Swapnil-FWDeveloper/Mini-Projects",
    project_type: "Individual Project",
    category: ["all", "frontend"],
  },
  {
    name: "Wether App",
    about:
      "Stylecraze is a product website that provides the facility of beauty products for women and also provides articles according to brands. StyleCraze’s articles are accurate, current, relevant, and actionable.",
    img: "https://cdn-images-1.medium.com/v2/resize:fit:800/1*IH-ovX38RC5V_IqM8L2k7Q.png",
    gitrepo:
      "https://github.com/Swapnil-FWDeveloper/Mini-Projects/tree/main/WheatherApp",
    tech_stack: "HTML | CSS | JAVASCRIPT",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://creative-yeot-85a53b.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "frontend"],
  },
  {
    name: "Bluestone.com",
    about:
      "Zappos.com is an E-commerce website which retails shoes, clothing, accessories, handbags, etc.",
    img: "https://cdn-images-1.medium.com/v2/resize:fit:800/1*9ZgeEnW108UbHKKNkoDrtw.png",
    gitrepo: "https://github.com/Swapnil-SDS/Bluestone-clone",
    video: "",
    tech_stack: "HTML | CSS | JavaScript ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://bluestoneclone.netlify.app/",
    project_type: "Group Project",
    category: ["all", "html", "frontend"],
  },
  {
    name: "Lenskart.com",
    about:
      "Lenskart is an Indian optical retail chain that provides eyeglasses, sunglasses, and contact-lenses online and offline.",
    img: "https://cdn-images-1.medium.com/v2/resize:fit:800/1*G74c7Y5ZfISZpE8Dzpm8tg.png",
    gitrepo: "https://github.com/Swapnil-FWDeveloper/Lenskart-Clone",
    tech_stack: "HTML | CSS | JavaScript ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://glittering-cucurucho-a9b3ca.netlify.app/",
    project_type: "Group Project",
    category: ["all", "frontend"],
  },
  {
    name: "Meesho.com",
    about:
      "Meesho is an online marketplace for buying and selling products. It offers a wide variety of products and a reseller program.",
    img: "https://cdn-images-1.medium.com/v2/resize:fit:800/1*Kj9AE2sAsSmd2j2gUF7b-w.png",
    gitrepo: "https://github.com/Swapnil-FWDeveloper/Mesho-Clone",
    tech_stack: "React| Redux | Material UI ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://mesho-clone.vercel.app/",
    project_type: "Individual Project",
    category: ["all", "frontend"],
  },
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");

let backend_projects = document.querySelector(".backend_projects");
// let other_projects = document.querySelector(".other_projects");
let frontend_projects = document.querySelector(".frontend_projects");
all_projects.classList.add("active_tech_project");

all_projects.addEventListener("click", () => {
  filterProjects("all");
  all_projects.classList.add("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});
backend_projects.addEventListener("click", () => {
  filterProjects("backend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.add("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});

frontend_projects.addEventListener("click", () => {
  filterProjects("frontend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.add("active_tech_project");
});

function filterProjects(basis) {
  let filtered = Projects.filter((el) => {
    return el.category.includes(basis);
  });
  displayProjectData(filtered);
}

function displayProjectData(Projects) {
  projects__container.innerHTML = null;
  Projects.reverse().forEach((pro) => {
    let main = document.createElement("div");
    main.setAttribute("class", "portfolio-item padd-15");
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>

      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack} 
      </div>

      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
     
      
    </div>
  </div>
    `;
    projects__container.append(main);
  });
}

displayProjectData(Projects);
