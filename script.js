window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

document.addEventListener("click", function (event) {
  const clickedElement = event.target;

  if (clickedElement.parentElement.matches(".user-menu")) {
    const userMenuNav = document.getElementsByClassName("user-menu-nav")[0];
    const activeClassName = "active";

    if (userMenuNav.classList.contains(activeClassName)) {
      userMenuNav.classList.remove(activeClassName);
    } else {
      userMenuNav.classList.add(activeClassName);
    }
  }
});
