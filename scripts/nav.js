const toggler = document.querySelector("#nav-toggler");
const navMobile = document.querySelector(".mobile-menu");

toggler.onclick = () => {
  if (navMobile.classList.contains("active"))
    navMobile.classList.remove("active");
  else navMobile.classList.add("active");
};
