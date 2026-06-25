(function initSiteHeader() {
  const toggle = document.querySelector(".menu-toggle, .home-process-menu-toggle");
  const menu = document.querySelector(".nav-menu, .home-process-nav-menu");
  if (!toggle || !menu) return;

  const setMenuOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("open"));
  });

  menu.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    setMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020 && menu.classList.contains("open")) {
      setMenuOpen(false);
    }
  });
})();
