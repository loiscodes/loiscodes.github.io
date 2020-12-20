const createMenuItemClickEvent = (menuitem) =>
  document.querySelector(`.${menuitem}`).addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector(`#${menuitem}-section`).offsetTop,
      behavior: "smooth",
    });
  });
const highlightMenuItemOnActivate = (link) => {
  if (document.querySelector(`.active`)) {
    document.querySelector(`.active`).classList.remove("active");
  }
  document.querySelector(`.${link}`).classList.add("active");
};
window.addEventListener("scroll", (win) => {
  const position = window.scrollY;
  const elementHeight = document.querySelector(`#hero-section`).clientHeight;
  const navHeight = document.querySelector(`nav`).clientHeight + 45;
  const aboutSectionElement = document.querySelector(`#about-section`);
  const contactSectionElement = document.querySelector("#contact-section");
  const skillsSectionElement = document.querySelector("#skills-section");

  if (position > elementHeight - navHeight) {
    document.querySelector("nav").classList.add("fixHeader");
  } else {
    document.querySelector("nav").classList.remove("fixHeader");
    document.querySelector(".active")?.classList?.remove("active");
  }
  console.log(
    position > elementHeight - document.querySelector("nav").clientHeight
  );
  if (
    position > aboutSectionElement.offsetTop - navHeight &&
    position < aboutSectionElement.offsetTop + elementHeight
  ) {
    highlightMenuItemOnActivate("about");
  } else if (
    position > skillsSectionElement.offsetTop - navHeight &&
    position < skillsSectionElement.offsetTop + elementHeight
  ) {
    highlightMenuItemOnActivate("skills");
  } else if (
    position >
    contactSectionElement.offsetTop - elementHeight - navHeight
  ) {
    highlightMenuItemOnActivate("contact");
  }
});

// on click arrow move to top
document
  .querySelector(".hero-scroll-to-top")
  .addEventListener("click", (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

createMenuItemClickEvent("about");
createMenuItemClickEvent("skills");
createMenuItemClickEvent("contact");
