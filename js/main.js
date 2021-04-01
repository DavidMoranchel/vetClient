$(document).ready(async () => {
  const data = await fetch("http://localhost:8000/api/owners/", {
    headers: {
      Authorization: `Token ${authtoken}`,
    },
  });
  const json = await data.json();
  console.log(data, json);
  const owners = json.map((owner) => {
    return `
      <tr>
        <th scope="row">${owner.id}</th>
        <td>${owner.first_name}</td>
        <td>${owner.last_name}</td>
      </tr>
    `;
  });
  $("#owners-list").html(owners);
});
