import "../css/core.scss"
// import "../css/index.scss"
import footer_comp from "./components/footer.js";
import header_comp from "./components/header.js";

[footer_comp, header_comp].forEach((cmp) => {
  customElements.define(cmp.name, cmp.component);
});

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

const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.parentNode.classList.toggle("active");
  });
}

window.send_email = (form)=> {
  // Get form input values
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;
  const company = form.elements['company'].value;
  const phone = form.elements['phone'].value;

  // Construct mailto URL
  const subject = encodeURIComponent('Message from ' + name);
  const body = encodeURIComponent(message + '\n\nSent by: ' + email + '\n\n' + company + '\n\n ' + phone);
  const mailtoUrl = 'mailto:info@resq.systems' +
      '?subject=' + subject +
      '&body=' + body;
  console.log("Redirecting to:" + mailtoUrl);
  // Open the mail client
  window.location.href = mailtoUrl;
}