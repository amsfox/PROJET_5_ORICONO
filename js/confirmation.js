let validationCommande = document.getElementById("validationCommande")

let infosCommande = JSON.parse(localStorage.getItem("infosCommande"))
console.log(infosCommande)

// message personnalisé
let message = document.createElement("p")
message.textContent = "Nous vous remercions pour votre commande " + infosCommande.nomClient // rajouter innerhtml pour mettre le nom en gras !!!
validationCommande.appendChild(message)


//identifiant commande
let commande = document.getElementById("commande")
let identifiantCommande = document.createElement("p")
identifiantCommande.textContent = "identifiant : " + "xxxxxxxx"
commande.appendChild(identifiantCommande)

let prix = document.createElement("p")
prix.textContent = "prix : " + infosCommande.sommeTotale
commande.appendChild(prix)
