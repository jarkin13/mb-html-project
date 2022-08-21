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

document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.parentElement.matches(".notifications")) {
    const notificationsnav =
      document.getElementsByClassName("notifications-nav")[0];
    const activeClassName = "active";
    if (notificationsnav.classList.contains(activeClassName)) {
      notificationsnav.classList.remove(activeClassName);
    } else {
      notificationsnav.classList.add(activeClassName);
    }
  }
});

document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.parentElement.matches(".menu")) {
    const menunav = document.getElementsByClassName("menu-nav")[0];
    const activeClassName = "active";
    if (menunav.classList.contains(activeClassName)) {
      menunav.classList.remove(activeClassName);
    } else {
      menunav.classList.add(activeClassName);
    }
  }
});
