/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
  strings: ["", "Software Developer...", "Full Stack Developer..."],
  typeSpeed: 70,
  BackSpeed: 60,
  loop: false,
});

var typedName = new Typed(".name", {
  strings: ["", "Swapnil Shende", "Swapnil Shende"],
  typeSpeed: 100,
  BackSpeed: 30,
  loop: false,
});
/* ============================== Aside =============================*/

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  //console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

//handburger
let Arr1 = document.querySelector(".navbar-collapse");
let section = document.querySelectorAll(".nav-item");
console.log(section.length);
for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("click", () => {
    Arr1.classList.remove("show");
  });
}

window.addEventListener("scroll", () => {
  Arr1.classList.remove("show");
});
function resume() {
  window.open(
    "https://drive.google.com/file/d/1sB3tjOWTOVewdJfX_ShGAvHPvuCikDWq/view?usp=sharing"
  );
}
