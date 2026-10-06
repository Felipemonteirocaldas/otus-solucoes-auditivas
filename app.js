document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const closeMenu = (restoreFocus = false) => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    menu.hidden = expanded;
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.setAttribute("aria-label", expanded ? "Abrir menu" : "Fechar menu");
  });
  menu
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => closeMenu()));
  document.querySelector(".header-inner .logo").addEventListener("click", () => closeMenu());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) closeMenu(true);
  });
  const desktop = window.matchMedia("(min-width: 801px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
});
