const skills = [
  {
    name: "HTML",
    icon_url: "https://img.icons8.com/color/50/000000/html-5--v1.png",
    category: ["all", "frontend"],
  },
  {
    name: "CSS",
    icon_url: "https://img.icons8.com/color/50/000000/css3.png",
    category: ["all", "frontend"],
  },
  {
    name: "JavaScript",
    icon_url: "https://img.icons8.com/color/50/000000/javascript--v2.png",
    category: ["all", "frontend"],
  },
  {
    name: "React",
    icon_url: "https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png",
    category: ["all", "frontend"],
  },

  {
    name: "Redux",
    icon_url: "https://img.icons8.com/?size=48&id=jD-fJzVguBmw&format=png",
    category: ["all", "frontend"],
  },
  {
    name: "Next JS",
    icon_url:
      "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
    category: ["all", "frontend"],
  },
  {
    name: "Node JS",
    icon_url: "https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png",
    category: ["all", "backend"],
  },
  {
    name: "Express JS",
    icon_url:
      "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
    category: ["all", "backend"],
  },
  {
    name: "MongoDB",
    icon_url:
      "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
    category: ["all", "database"],
  },
  {
    name: "SQL",
    icon_url:
      "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000",
    category: ["all", "database"],
  },
  {
    name: "Python",
    icon_url:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEVHcEwBVJc3caE2bJdKir3z2mL/6m05daZAfa5Jd5nsyUUqbKFHZ3flw0Towzv+2Uz842rmwTgANYDeuzlFgrL/6nD94WL20ETvxzf50T5Jh7lAfKxAf7E9eqv/5GX/4Fz/6HH/3VNFhbc1cKD/2kowapr/1Dj/10H+/v786a2dt851nL7c5OukoiX2AAAAHHRSTlMAf0dz/ovF/qRkVcoZX2noqUpnMo7r88Ww1sbqk9MnjgAAAR1JREFUKJFl0etygyAQBWCCEIJGozE1TWu9C8b2/Z+vsEscA+ef882RXSBky5nKKJL0TMJINrBhGOr6JwmYMrYCmQhfb8PfstYWhRhlgOvya3vCYBRgPWJPjAHSEwTsDeVpC9h8zfOc41RfjMES7p/jPF8/uq6r4DSwGocBQ2y4Qay5JcAsNk1zMZcW2iwNtW1rr2Yz4eyQg/UlkS9LDi4SrO/7AtGY5EeXCmr9NMWE4qDRscM0rjZNuiQEl0h3BLVJa7PKNxzI/ZrWd4ORHRTwVQNTqrBXlJgdLL79UqlP9yJSUg5WZbFNmmVZsXsZjqddbHTqvSffJmmVynx0p6nn8gwwdZMAFh6SOy6n1DbnW/eB9PDHcSnjotx//wNQ0jN2CWQnkAAAAABJRU5ErkJggg==",
    category: ["all", "frontend"],
  },
  {
    name: "Numpy",
    icon_url:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcExNlc9Nq89Nq89Nq89Nq89Nr89Nq89Nq89Nns9Nps9Nq89Nq89Nq89Nq89Nd89Nq89Nd89Nd89Ndc9Nd89Nd89Nd89Nd89Nd89Nd89FlH+4AAAAGnRSTlMAH11ouOwwrf4KFMZ8TZw81qrNXbn/UHjrjGxZf74AAAEJSURBVHgBrZJFggQxCEWBWPMz5X7/i05Iu+2a8no40G+ERfgbcj4E7z7jmE5FfHwD6pIAksMfa9M6fUCQXGyyKFi7FOwVN9j05jC0IFWp731zddkxXN+3UWPrG8Dl3gFRK+RhnIgNBUuoIWZtUstnOC/Las4tsEUmKmr+Dmdzzy5nx2gizMMdLh1hm7Q6DPIKB3vMDCukwoQ7XDqURxctrCDkRukK930Z+A5VwBFXOA7LPg1nGHwkdjnxDXbFtFoGL0zqHxMa6SiuC4Qwu5dSRuWCakEun+QB6rSPWkwNwrpUYXudC1YlHpeHUnxDj6LbHWqjryt0LSVFehfexlJKEtAn0Q5oQL+Qf6D1EW3rF4ehAAAAAElFTkSuQmCC",
    category: ["all", "data-analysis"],
  },
  {
    name: "Pandas",
    icon_url:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAArlBMVEX///8MBFTzaEgLAlQAAEwAAEaLiqIAAEqPjqanprgAAEH5+fsAAETyXTiFhJ72lIH72dPzZEIAAE9WVHyAf5rd3OTp6e3i4uhdW4H4rqH5v7TzYDzyWTKVlKqtrLycm7C3tsXEw867ush1c5EAADQAADuop7gAAD5PTXloZohxcI46N2tDQXA4NWgxL2UrKGIkIF8dGFwVD1nyUiT96eX5u7DyTRz7z8f1jHdHRHNPg4UvAAACz0lEQVR4nO3dXXPSQBSA4SIkaRDQQqzYgqSmKNRvW7X9/3/MTi90hNnT3dkTdjd932vYk2cywwCTbI6Ooizr90wN8tAHZxeEGOo44Tj0wdkFIYYgxBCEGOo4YRn64OyC4FA1MVa981n4cIQPA2Mjr29jhyO09sEBQWkSBAgqkyBAUJkEAYLKJAgQVCZBgKAyCQIElUkQIKhMao2w0jr6RydBgKAyCQIElUkQIKhMggBBZRIECCqTIBgXLiDYT4IAQWVSOEI5mxvbeBHqzXy+3W6vrpqmqarJJD++b7lcru6rNQl5NjU29CKU/1bevXYp+6hKGBjf28/8CIXxtdNPLoQSAgQIEROcPpHiJHAWfAiXI2PriQPhczjCK6HTNAguCYT+l/QJX10I79MncBZaInyDEAHhO4QICD/SJ/RcCG+jJPQhQIDwsPIUggfh9oW5szQIixNj4zdpEMbPjJ27EAYQIEB4WLmAAAFCVwh7K0OAACFVwggCBAVCb+8aGwgQIECAkCThemxs4UR47kCoVQkvhW7SILjUBcLQvE/gOg3CRVMZa9IgOAUBgkoQIKgEAYJKEJ4W4VRo95ubGuGxDbzbu/g/UkKQGyTr9AnhzsKN9EM7DcJP4e+OXy6/2sIRzs7NfzotHBaGAAECBAgQIEDQJ1xACE/IIECAAAECBAgQukQQbkW8ToPwW7gh9DYNglMQIECAAAECBAgQIEB4UoR6MzN253ANRkBCKWxC7nL/QkiC0l0kECBAgAAhXoLSVuH7hOHU8MiMoljrEl4LOWwVvk+4m/334JI8//vcknK1u7AfwSUngk8QhCDYB0EIgn0QhCDYB0EIgn0QhCDYB0EIgn0QhCDYB0EIgn0QhCDYB0EIgn0QhCDYB0EIgn0QhCDYB0EIgn0QhCDYF8lW4T61uFV4NTFWpUE4WBBiCEIMQYghCDEEIYYgxBCEEP0B8xnSEGsee60AAAAASUVORK5CYII=",
    category: ["all", "data-analysis"],
  },

  {
    name: "Power-Bi",
    icon_url:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Analysts_PBI?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&qlt=99&fmt=png-alpha&fit=constrain",
    category: ["all", "data-Analysis"],
  },

  {
    name: "Chakra UI",
    icon_url: "https://img.icons8.com/?size=48&id=r9QJ0VFFrn7T&format=png",
    category: ["all", "frontend"],
  },
  {
    name: "Material UI",
    icon_url: "https://img.icons8.com/?size=48&id=gFw7X5Tbl3ss&format=png",
    category: ["all", "frontend"],
  },

  {
    name: "Tailwind",
    icon_url: "https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png",
    category: ["all", "frontend"],
  },

  {
    name: "BootStrap",
    icon_url: "https://img.icons8.com/?size=48&id=EzPCiQUqWWEa&format=png",
    category: ["all", "frontend"],
  },
  {
    name: "Webflow",
    icon_url: "https://img.icons8.com/?size=48&id=ktrJ12qa5f65&format=png",
    category: ["all", "frontend"],
  },
  {
    name: "Figma",
    icon_url: "https://img.icons8.com/?size=48&id=zfHRZ6i1Wg0U&format=png",
    category: ["all", "frontend"],
  },

  {
    name: "Vercel",
    icon_url:
      "data:image/png;base64,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",
    category: ["all"],
  },
];

let myTechnicalSkills = document.getElementById("myTechnicalSkills");
let all_filter_btn = document.querySelector(".all_filter_btn");
let frontend_filter_btn = document.querySelector(".frontend_filter_btn");
let backend_filter_btn = document.querySelector(".backend_filter_btn");
all_filter_btn.classList.add("active_tech_skills");
all_filter_btn.addEventListener("click", () => {
  filterSkills("all");
  all_filter_btn.classList.add("active_tech_skills");
  frontend_filter_btn.classList.remove("active_tech_skills");
  backend_filter_btn.classList.remove("active_tech_skills");
});

frontend_filter_btn.addEventListener("click", () => {
  filterSkills("frontend");
  all_filter_btn.classList.remove("active_tech_skills");
  frontend_filter_btn.classList.add("active_tech_skills");
  backend_filter_btn.classList.remove("active_tech_skills");
});
backend_filter_btn.addEventListener("click", () => {
  filterSkills("backend");
  all_filter_btn.classList.remove("active_tech_skills");
  frontend_filter_btn.classList.remove("active_tech_skills");
  backend_filter_btn.classList.add("active_tech_skills");
});

function displaySkills(skills) {
  myTechnicalSkills.innerHTML = null;
  skills.forEach((skill) => {
    let itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "service-item padd-15");
    itemContainer.innerHTML = `<div class="service-item-inner">
        <div class="">
          <img src=${skill.icon_url} width="50px" height="50px" marginBottom="100px"/>
        </div>
        <h4>${skill.name}</h4>
      </div>`;

    myTechnicalSkills.append(itemContainer);
  });
}

function filterSkills(basis) {
  let filtered = skills.filter((el) => {
    return el.category.includes(basis);
  });
  displaySkills(filtered);
}

displaySkills(skills);
