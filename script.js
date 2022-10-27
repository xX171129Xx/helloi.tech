var encEmail = "MTcxMTI5QHN0dWRlbnQudmFuc2Qub3Jn";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));