$("#owners-create-form").on("submit", async (event) => {
  event.preventDefault();
  const firstName = $("#firstName").val();
  if (!firstName) {
    $("#firstName").addClass("is-invalid");
    return;
  } else {
    $("#firstName").removeClass("is-invalid");
  }
  const lastName = $("#lastName").val();
  if (!lastName) {
    $("#lastName").addClass("is-invalid");
    return;
  } else {
    $("#lastName").removeClass("is-invalid");
  }
  const email = $("#email").val();
  if (!email) {
    $("#email").addClass("is-invalid");
    $("#email-feedback").text("Please insert an email.");
    return;
  } else {
    $("#email").removeClass("is-invalid");
  }
  const phone = $("#phone").val();
  if (!phone) {
    $("#phone").addClass("is-invalid");
    $("#phone-feedback").text("Please insert a phone.");
    return;
  } else {
    $("#phone").removeClass("is-invalid");
  }
  const address = $("#address").val();
  if (!address) {
    $("#address").addClass("is-invalid");
    return;
  } else {
    $("#address").removeClass("is-invalid");
  }
  console.log("submit", firstName, lastName, email, phone, address);

  try {
    const data = await fetch("http://localhost:8000/api/owners/create/", {
      method: "POST",
      headers: {
        Authorization: "Token 5f809ab0c09d3779325cc3530ceffb7cb20f3679",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        address,
      }),
    });
    const json = await data.json();
    if (data.status === 400) {
      if (json.email) {
        $("#email").addClass("is-invalid");
        $("#email-feedback").text(json.email[0]);
      }
      if (json.phone) {
        $("#phone").addClass("is-invalid");
        $("#phone-feedback").text(json.phone[0]);
      }
    }

    console.log(json, "error de django configurado");
  } catch (error) {
    console.log(error);
  }

  // window.location.href = "/";
});
