const toggleBtn = document.getElementById("toggle-btn");
const toggleText1 = document.getElementById("toggle-text-1");
const toggleText2 = document.getElementById("toggle-text-2");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("open");
  toggleText1.classList.toggle("show");
  toggleText1.classList.toggle("hide");
  toggleText2.classList.toggle("hide");
  toggleText2.classList.toggle("show");
});
