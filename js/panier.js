//const { json } = require("body-parser");

let panierContent = document.getElementById("panierContent")
console.log(panierContent)

//let commandes = [];
let totalPanier = []
let panier = JSON.parse(localStorage.getItem("panier"));

//console.log(JSON.parse(panier.length))
console.log(panier)




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
    console.log(totalPanier)

       
}

function sommeTotalPanier(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}

//Fonction pour calculer somme éléments du tableau
let sommeTotale = sommeTotalPanier(totalPanier)
console.log(sommeTotale)

let prixTotal = document.getElementById("prixTotal")
prixTotal.textContent = sommeTotale + " EUR"

// supprimer storage (vider panier)
let viderPanier = document.getElementById("viderPanier");
viderPanier.addEventListener("click", function(e) {
    localStorage.clear();
})



//Partie formulaire

let nomClient = document.getElementById("nomClient")
let prenomClient = document.getElementById("prenomClient")
let mailClient = document.getElementById("mailClient")

console.log(nomClient.value)
//créer local storage pour nom et total panier








//evenlisterner soumission formulaire
let soumettre = document.getElementById("soumettre")
soumettre.addEventListener("click", function(e) {
    e.preventDefault()
    
    //console.log("clic soumettre")

    let infosCommande = {
        nomClient : nomClient.value,
        prenomClient : prenomClient.value,
        mailClient : mailClient.value,
        sommeTotale : sommeTotale,
        panier
    }

    console.log(infosCommande)


    localStorage.setItem("infosCommande",JSON.stringify(infosCommande)) // données à placer dans le localstorage pour recuperer dans la page confirmation
 


    



    //ajouter le lien vers html confirmation
    onclick = 'window.location.href = "../html/confirmation.html";'

    //requête http POST
    ajaxPost("http://localhost:3000/api/teddies/order", infosCommande)

    // vider l'item panier du local storage une fois le formulaire validé
    //localStorage.removeItem("panier");
    
    


    


})












/*
//création ligne tr
var trElt = document.createElement("tr") // créer une ligne
panierContent.appendChild(trElt) // inclure la ligne dans le tableau

//créations cellules
//nom article
var article = document.createElement("th") // créer cellule article
article.textContent = product.nom
trElt.appendChild(article) // inclure la cellune dans la ligne
console.log(article)

//couleur article
var couleur = document.createElement("th") // créer cellule article
couleur.textContent = productt.couleur
trElt.appendChild(couleur) // inclure la cellune dans la ligne
console.log(couleur)

// prix
var prix = document.createElement("th") // créer cellule article
prix.textContent = product.prix
trElt.appendChild(prix) // inclure la cellune dans la ligne

// quantité
var nombreArticle = document.createElement("th") // créer cellule article
nombreArticle.textContent = product.quantite
trElt.appendChild(nombreArticle) // inclure la cellune dans la ligne
console.log(nombreArticle)


// total
var total = document.createElement("th") // créer cellule article
total.textContent = (product.prix * product.quantite)
trElt.appendChild(total) // inclure la cellune dans la ligne


//total panierContent
let prixTotal = document.getElementById("prixTotal")
*/