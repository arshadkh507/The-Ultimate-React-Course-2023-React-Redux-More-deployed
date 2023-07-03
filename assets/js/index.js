/*
==========================================================
 Sidebar Toggling
==========================================================*/

const toggleButton = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

/*
==========================================================
 Theme Toggling
==========================================================*/

const themeToggle = document.getElementById("theme-toggle");
const themeText = document.getElementById("text");
const body = document.querySelector("body");

// add a click event listener to the theme toggle element
themeToggle.addEventListener("click", () => {
  // toggle the 'bg-dark' and 'bg-white' classes on the body element
  body.classList.toggle("bg-dark");
  body.classList.toggle("bg-white");

  // toggle the icon between sun and moon
  const icon = themeToggle.querySelector(".icon i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");

  const currentText = themeText.textContent;
  if (currentText === "Theme") {
    themeText.textContent = "Dark";
  } else if (currentText === "Dark") {
    themeText.textContent = "Light";
  } else {
    themeText.textContent = "Theme";
  }
});

/*
==========================================================
 Active li on clicking and Hide sidebar if widow-width < 992px and click on li of sidebar
==========================================================*/

const listItem = document.querySelectorAll(".sidebar_inner li");

listItem.forEach((li) => {
  li.addEventListener("click", () => {
    listItem.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    if (window.innerWidth <= 992) {
      sidebar.classList.toggle("open");
      toggleButton.classList.toggle("active");
    }
  });
});
