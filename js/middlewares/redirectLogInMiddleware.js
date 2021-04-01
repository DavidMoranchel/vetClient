const authtoken = localStorage.getItem("authtoken");
if (!authtoken) {
  window.location.href = "/login.html";
}
