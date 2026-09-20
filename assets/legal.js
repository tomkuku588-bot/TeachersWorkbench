(function () {
  var supportedLanguages = ["zh", "en"];
  var fallbackLanguage = "zh";

  function readStoredLanguage() {
    try {
      return window.localStorage.getItem("teachers-workbench-legal-language");
    } catch (error) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      window.localStorage.setItem("teachers-workbench-legal-language", language);
    } catch (error) {
      return;
    }
  }

  function getRequestedLanguage() {
    var queryLanguage = new URLSearchParams(window.location.search).get("lang");
    if (supportedLanguages.indexOf(queryLanguage) !== -1) {
      return queryLanguage;
    }

    var storedLanguage = readStoredLanguage();
    if (supportedLanguages.indexOf(storedLanguage) !== -1) {
      return storedLanguage;
    }

    return fallbackLanguage;
  }

  function applyLanguage(language) {
    var nextLanguage = supportedLanguages.indexOf(language) !== -1 ? language : fallbackLanguage;
    document.documentElement.lang = nextLanguage === "en" ? "en" : "zh-CN";

    document.querySelectorAll("[data-lang]").forEach(function (element) {
      element.hidden = element.getAttribute("data-lang") !== nextLanguage;
    });

    document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang-switch") === nextLanguage));
    });

    storeLanguage(nextLanguage);
  }

  document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang-switch"));
    });
  });

  applyLanguage(getRequestedLanguage());
}());
