// Sticky navigation on scroll
const header = document.querySelector("header");
document.addEventListener("scroll", () => {
  let scrTop = document.documentElement.scrollTop;
  if (scrTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  };
});

// Dark mode on click
// const btnTheme = document.querySelector("#btn-theme");
// btnTheme.addEventListener("click", () => {
//   btnTheme.classList.toggle("fa-moon");
//   btnTheme.classList.toggle("fa-sun");
// });

// Open menu on click
const btnApp = document.querySelectorAll(".btn-app");
const btnArrow = document.querySelectorAll(".btn-arrow");
const appDtl = document.querySelectorAll(".app-dtl");
for (let i = 0; i < btnApp.length; i++) {
  btnApp[i].addEventListener("click", () => {
    btnApp[i].classList.toggle("open");
    btnArrow[i].classList.toggle("fa-caret-down");
    btnArrow[i].classList.toggle("fa-caret-up");
    appDtl[i].classList.toggle("hidden");
  });
}