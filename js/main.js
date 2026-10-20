(function () {
  "use strict";

  /* Tema claro / oscuro: por defecto el del navegador; el botón fuerza uno y lo recuerda. */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  function isDark() { return root.dataset.theme ? root.dataset.theme === "dark" : media.matches; }
  function sync() { toggle.setAttribute("aria-label", isDark() ? "Cambiar a tema claro" : "Cambiar a tema oscuro"); }
  toggle.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
  media.addEventListener("change", sync);
  sync();

  /* Sección activa en la navegación (aria-current). */
  var links = [].slice.call(document.querySelectorAll(".nav-desktop a, .nav-mobile a"));
  var targets = [].slice.call(document.querySelectorAll("main section[id], footer[id]"));
  var ticking = false;
  function update() {
    ticking = false;
    var line = window.innerHeight * 0.4;
    var bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    var current = targets[0];
    if (bottom) current = targets[targets.length - 1];
    else targets.forEach(function (t) { if (t.getBoundingClientRect().top <= line) current = t; });
    links.forEach(function (l) {
      var id = l.getAttribute("href").slice(1);
      /* "Inicio" agrupa Sobre mí; "Experiencia" agrupa Educación y Habilidades */
      var group = { "sobre-mi": "inicio", "educacion": "experiencia", "habilidades": "experiencia" }[current.id] || current.id;
      if (id === group) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
