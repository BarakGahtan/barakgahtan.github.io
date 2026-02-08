(function () {
  var toggle = document.getElementById("dark-mode-toggle");
  var iconSun = toggle ? toggle.querySelector(".icon-sun") : null;
  var iconMoon = toggle ? toggle.querySelector(".icon-moon") : null;

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (iconSun && iconMoon) {
      if (theme === "dark") {
        iconSun.style.display = "none";
        iconMoon.style.display = "inline";
      } else {
        iconSun.style.display = "inline";
        iconMoon.style.display = "none";
      }
    }
  }

  // Check saved preference, then system preference
  var saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  }

  // Toggle on click
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  // Listen for system preference changes
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
  }
})();
