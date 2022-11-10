window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
});
var encEmail = "MTcxMTI5QHN0dWRlbnQudmFuc2Qub3Jn";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));