const container = document.getElementById("firefly-container");
const NUMBER_OF_FIREFLIES = 18;
for(let i = 0; i < NUMBER_OF_FIREFLIES; i++){
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    const size = Math.random() * 4 + 2;
    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;
    firefly.style.left = `${Math.random()*100}vw`;
    firefly.style.top = `${Math.random()*100}vh`;
    firefly.style.animationDuration =
        `${18 + Math.random()*18}s, ${3 + Math.random()*5}s`;
    firefly.style.animationDelay =
        `${Math.random()*10}s, ${Math.random()*5}s`;
    container.appendChild(firefly);
}

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
