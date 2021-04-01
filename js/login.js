$("#login-form").on("submit", async (event) => {
  event.preventDefault();
  const username = $("#username").val();
  if (!username) {
    $("#username").addClass("is-invalid");
    return;
  } else {
    $("#username").removeClass("is-invalid");
  }
  const password = $("#password").val();
  if (!password) {
    $("#password").addClass("is-invalid");
    return;
  } else {
    $("#password").removeClass("is-invalid");
  }

  try {
    const data = await fetch("http://localhost:8000/api/users/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const json = await data.json();
    console.log(data, json);
    if (data.status === 200) {
      localStorage.setItem("authtoken", json.token);
      window.location.href = "/";
    }
    // if (data.status === 400) {
    //   if (json.email) {
    //     $("#email").addClass("is-invalid");
    //     $("#email-feedback").text(json.email[0]);
    //   }
    //   if (json.phone) {
    //     $("#phone").addClass("is-invalid");
    //     $("#phone-feedback").text(json.phone[0]);
    //   }
    // }
  } catch (error) {
    console.log(error);
  }
});
