import "../css/core.scss"
import "../css/index.scss"
import "../css/section_transitions.scss"
import footer_comp from "./components/footer.js";
import header_comp from "./components/header.js";

[footer_comp, header_comp].forEach((cmp) => {
  customElements.define(cmp.name, cmp.component);
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  const x = document.getElementById("mobile-nav");
  if (x.className === "mobile-nav") {
    x.className += " responsive";
  } else {
    x.className = "mobile-nav";
  }
}
document.getElementById("nav-button").addEventListener("click", toggleNav);
document.querySelectorAll(".mobile-nav").forEach((item) => {
  item.addEventListener("click", toggleNav);
})

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { entry.target.classList.toggle("visible_on_screen", entry.isIntersecting) })
}, {
  threshold: 0.3,
})
document.querySelectorAll("section").forEach(section => {
  observer.observe (section)
})