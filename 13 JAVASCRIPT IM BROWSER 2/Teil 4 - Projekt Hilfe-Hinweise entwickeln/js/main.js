"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const helpElements = document.querySelector("[data-help]");

  for (const element in helpElements) {
    if (!element.attributes["data-help"]) {
      continue;
    }

    element.addEventListener("click", (event) => {
      event.preventDefault();

      const helpText = element.attributes["data-help"].value;
      alert(helpText);
    });
  }
});
