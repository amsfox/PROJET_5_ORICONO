let validationCommande = document.getElementById("validationCommande")

let confirmation = JSON.parse(localStorage.getItem("confirmation")) // recuperation des informations stockées dans le localstorage depuis la page panier
//console.log(confirmation)

// Création d'un message personnalisé
let message = document.createElement("p")
message.textContent = "Nous vous remercions pour votre commande " + confirmation.lastName // rajouter innerhtml pour mettre le nom en gras !!!
validationCommande.appendChild(message)


// réation ligne avec identifiant commande
let commande = document.getElementById("commande")
let identifiantCommande = document.createElement("p")
identifiantCommande.textContent = "Identifiant : " + confirmation.identifiant
commande.appendChild(identifiantCommande)

// Création ligne avec le prix total de la commande
let prix = document.createElement("p")
prix.textContent = "prix : " + confirmation.sommeTotale + " EUR"
commande.appendChild(prix)
