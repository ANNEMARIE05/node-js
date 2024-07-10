const userData = async()=>{
    const mesUser = await fetch("https://jsonplaceholder.org/users",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
   
        }
    })
    const resultUser = await mesUser.json()
    return resultUser
}

window.addEventListener("DOMContentLoaded", async ()=>{
    const user = await userData()
    const retourUser = document.querySelector(".cardUsers")
    if (retourUser===null) {
        return("La div n'as pas été selectionné");
    }
    user.forEach(element => {
        retourUser.innerHTML+=`
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
        `
    });
})

const btn = document.querySelector(".button")
btn.addEventListener('click', async ()=>{
    const recup = document.querySelector(".input")
    const id = parseInt(recup.value)

    const data = await fetch(`https://jsonplaceholder.org//users?id=${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if (id>0 && id<=30) {
        let erreur = document.querySelector(".erreur")
        erreur.style.display='none'
        const result = await data.json()
        const mesdata = await result
        let cardUsers = document.querySelector(".cardUsers")
        cardUsers.style.display='block'
        cardUsers.innerHTML =`
        <div class="user">
            <h3> N°<span> ${mesdata.id} </span></h3>
            <h3>Nom</h3>
            <p>${mesdata.firstname}</p>
            <h3>Prenom</h3>
            <p>${mesdata.lastname}</p>
            <h3>Ville</h3>
            <p>${mesdata.address.suite}</p>
            <h3>Date</h3>
            <p>${mesdata.birthDate}</p>
            <h3>Email</h3>
            <p>${mesdata.email}</p>
        </div>`
    }else{
        let cardUsers = document.querySelector(".cardUsers")
        cardUsers.style.display='none'
        let erreur = document.querySelector(".erreur")
        erreur.style.display='block'
        erreur.innerHTML=`L'id ${id} n'existe pas !!!`
        erreur.style.color ="red"
        
    }
})