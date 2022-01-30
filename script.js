let mobileMenu = document.getElementById("mobileMenu");
let mobileNav = document.getElementById("mobileNav");

mobileNav.style.display = "none";
mobileMenu.style.opacity = 1;

mobileMenu.onclick = function mobileMenuT() {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "block";
    mobileMenu.style.opacity = 0.7;
  } else {
    mobileNav.style.display = "none";
    mobileMenu.style.opacity = 1;
  }
};
