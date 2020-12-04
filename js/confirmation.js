let validationCommande = document.getElementById("validationCommande")

let confirmation = JSON.parse(localStorage.getItem("confirmation"))
console.log(confirmation)

// message personnalisé
let message = document.createElement("p")
message.textContent = "Nous vous remercions pour votre commande " + confirmation.lastName // rajouter innerhtml pour mettre le nom en gras !!!
validationCommande.appendChild(message)


//identifiant commande
let commande = document.getElementById("commande")
let identifiantCommande = document.createElement("p")
identifiantCommande.textContent = "Identifiant : " + confirmation.identifiant
commande.appendChild(identifiantCommande)

let prix = document.createElement("p")
prix.textContent = "prix : " + confirmation.sommeTotale + " EUR"
commande.appendChild(prix)
