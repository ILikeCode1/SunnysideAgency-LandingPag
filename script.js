let mobileMenu = document.getElementById("mobileMenu");
let mobileNav = document.getElementById("mobileNav");

// Activates mobile menu when clicked
mobileMenu.addEventListener("click", mobileMenuT);

function mobileMenuT() {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "block";
    mobileMenu.style.opacity = 0.7;
  } else {
    mobileNav.style.display = "none";
    mobileMenu.style.opacity = 1;
  }
}

// Prevents mobile menu from appearing in desktop site
var e = window.matchMedia("(min-width: 750px)");
e.addListener(mediaQuery);

function mediaQuery(e) {
  if (e.matches) {
    mobileNav.style.display = "none";
  }
}
