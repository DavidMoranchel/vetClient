$("#logOut").on("click", () => {
  localStorage.removeItem("authtoken");
  window.location.href = "/login.html";
});
