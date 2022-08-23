const dropdownBtn = document.getElementById("dropdown-btn");

const dropdownContent = document.getElementById("dropdown-content");

dropdownBtn.onclick = function () {
  dropdownContent.classList.toggle("show-list");
};
