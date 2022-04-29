// Base variables
const body = document.querySelector("body");

// Header variables
const header = document.querySelector("header");
const hdrLogo = document.querySelector("#hdr-logo");
const btnTheme = document.querySelector("#btn-theme");

// Main variables
const btnApp = document.querySelectorAll(".btn-app");
const btnArrow = document.querySelectorAll(".btn-arrow");
const appDtl = document.querySelectorAll(".app-dtl");
const appDtlImg = document.querySelectorAll(".app-dtl>img");
const btnProfile = document.querySelector("#btn-profile p");

// Sticky navigation on scroll
document.addEventListener("scroll", () => {
  let scrTop = document.documentElement.scrollTop;
  scrTop > 50 ? header.classList.add("sticky") : header.classList.remove("sticky");
});

// Open menu on click
for (let i = 0; i < btnApp.length; i++) {
  btnApp[i].addEventListener("click", () => {
    btnApp[i].classList.toggle("open");
    btnArrow[i].classList.toggle("fa-caret-down");
    btnArrow[i].classList.toggle("fa-caret-up");
    appDtl[i].classList.toggle("hidden");
  });
};
// Dark mode on click
btnTheme.addEventListener("click", () => {
  // Toggle button
  toggleDark(btnTheme, "fa-moon");
  toggleDark(btnTheme, "fa-sun");
  // Toggle dark class
  let clsDark = "dark"
  toggleDark(body, clsDark);
  toggleDark(hdrLogo, clsDark);
  toggleDark(btnProfile, clsDark);
  toggleDarkLoop(appDtl, clsDark);
  toggleDarkLoop(appDtlImg, clsDark);
});
function toggleDark(elmt, cls) {
  elmt.classList.toggle(cls);
};
function toggleDarkLoop(elmt, cls) {
  for (let i = 0; i < elmt.length; i++) {
    elmt[i].classList.toggle(cls);
  };
};
// Set dark whenever system theme change
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    btnTheme.click();
  });
// Set dark if system theme is dark on first load
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnTheme.click();
};