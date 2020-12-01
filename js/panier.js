//const { json } = require("body-parser");

let panierContent = document.getElementById("panierContent");
let totalPanier = [];
let panier = JSON.parse(localStorage.getItem("panier"));

// boucle for

for (let i = 0; i < panier.length; i++) {
    let panierElt = panier[i]
        // création ligne tr
    let trElt = document.createElement("tr") // créer une ligne
    panierContent.appendChild(trElt) // inclure la ligne dans le tableau

    //créations cellules
    //nom article
    let article = document.createElement("td")
    article.textContent = panier[i].nom
    //console.log(article)
    trElt.appendChild(article)

    // couleur
    let couleur = document.createElement("td") // créer cellule article
    couleur.textContent = panier[i].couleur
    trElt.appendChild(couleur)

    // prix
    let prix = document.createElement("td")
    prix.textContent = panier[i].prix
    trElt.appendChild(prix)

    //quantité
    let quantite = document.createElement("td")
    quantite.textContent = panier[i].quantite
    trElt.appendChild(quantite)

    //total
    let total = document.createElement("td")
    total.textContent = panier[i].prix * panier[i].quantite
    trElt.appendChild(total)
    //console.log(total.textContent)
    
    // totalPanier
    totalPanier.push(parseFloat(total.textContent))
    //console.log(totalPanier)

       
}

function sommeTotalPanier(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}

//Fonction pour calculer la somme éléments du tableau
let sommeTotale = sommeTotalPanier(totalPanier)
//console.log(sommeTotale)

let prixTotal = document.getElementById("prixTotal")
prixTotal.textContent = sommeTotale + " EUR"

// Boutton supprimer storage (vider panier)
let viderPanier = document.getElementById("viderPanier");
viderPanier.addEventListener("click", function(e) {
    localStorage.clear();
});

//Partie formulaire

let nomClient = document.getElementById("nomClient")
let prenomClient = document.getElementById("prenomClient")
let mailClient = document.getElementById("mailClient")
//console.log(nomClient.value)

//evenlisterner soumission formulaire
let soumettre = document.getElementById("soumettre")
soumettre.addEventListener("click", function(e) {
    //e.preventDefault()
    //console.log("clic soumettre")
    let infosCommande = {
        nomClient : nomClient.value,
        prenomClient : prenomClient.value,
        mailClient : mailClient.value,
        sommeTotale : sommeTotale,
        identifiant : nomClient.value + Date.now(),
        panier
    }

    console.log(infosCommande)

    localStorage.setItem("infosCommande",JSON.stringify(infosCommande)) // données à placer dans le localstorage pour recuperer dans la page confirmation

    //requête http POST
    ajaxPost("http://localhost:3000/api/teddies/order", infosCommande)

    // vider l'item panier du local storage une fois le formulaire validé
    localStorage.removeItem("panier");
})
