/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  var x = document.getElementById("mobile-nav");
  if (x.className === "mobile-nav") {
    x.className += " responsive";
  } else {
    x.className = "mobile-nav";
  }
}