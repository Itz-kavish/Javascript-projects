// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const link = document.querySelector(".links");
const taskbar = document.querySelector(".nav-toggle");

taskbar.addEventListener("click", function () {
  link.classList.toggle("show-links");
});
