const navbar = document.getElementById("navbar");
const learnMore = document.getElementById("learnMore");
const about = document.getElementById("about");

//Show or hide navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classlist.add("show");
  } else {
    navbar.classlist.remove("show");
  }
});

//Learn More button
learnMore.addEventListener("click", () => {
  about.scrollIntoView({
    behavior: "smooth"
  });
});
