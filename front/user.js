const recupData = async () => {
  const userData = await fetch("https://jsonplaceholder.org/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const recupUser = await userData.json();
  return recupUser;
};

window.addEventListener("DOMContentLoaded", async () => {
  const recupFunction = await recupData();
  const cardUsers = document.querySelector(".cardUsers");
  if (cardUsers === null) {
    return alert("Notre 'cardUsers' n'as pas été recuperer");
  }
  recupFunction.forEach((element) => {
    cardUsers.innerHTML += `
            <div class="user">
                <h3><ins>N°</ins><span> ${element.id} </span></h3>
                <h3><ins>Nom</ins></h3>
                <p>${element.firstname}</p>
                <h3><ins>Prenom</ins></h3>
                <p>${element.lastname}</p>
                <h3><ins>Ville</ins></h3>
                <p>${element.address.suite}</p>
                <h3><ins>Date</ins></h3>
                <p>${element.birthDate}</p>
                <h3><ins>Email</ins></h3>
                <p>${element.email}</p>
            </div>  
        `;
  });
});

const buton = document.querySelector(".button");
buton.addEventListener("click", async () => {
  const inpt = document.querySelector(".input");
  const id = parseInt(inpt.value);
  console.log(id);

  const data = await fetch(`https://jsonplaceholder.org//users?id=${id})`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const mesId = await data.json();
  const dataId = await mesId;
  console.log();

  const cardUsers = document.querySelector(".cardUsers");
  if (cardUsers === null) {
    return console.log("La variable est null");
  }
  cardUsers.innerHTML += `
        <div class="user">
        <h3>N°<span> ${dataId.id} </span></h3>
        <h3>Nom</h3>
        <p>${dataId.firstName}</p>
        <h3>Prenom</h3>
        <p>${dataId.lastName}</p>
        <h3>Ville</h3>
        <p>${dataId.address.suite}</p>
        <h3>Date</h3>
        <p>${dataId.birthDate}</p>
        <h3>Email</h3>
        <p>${dataId.email}</p>
        </div>
        `;
});
