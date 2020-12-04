// Variables utilisées pour le panier

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

// fonction pour additionner les montants des differents produits du panier
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
// Déclaration des variables
let nomClient = document.getElementById("nomClient")
let prenomClient = document.getElementById("prenomClient")
let adresseClient = document.getElementById("adresseClient")
let villeClient = document.getElementById("villeClient")
let mailClient = document.getElementById("mailClient")
console.log(nomClient.value)

//evenlisterner soumission formulaire
let soumettre = document.getElementById("soumettre")
soumettre.addEventListener("click", function(e) {
    //e.preventDefault()
    //console.log("clic soumettre")
    let contact = { // création d'un objet contact
        firstName : nomClient.value,
        lastName : prenomClient.value,
        address : adresseClient.value,
        city : villeClient.value,
        email : mailClient.value,
    }

    let products = []; // Création d'un tableau Products dans lequel seront rajoutés les Id des produits du panier
    for (let i = 0; i < panier.length; i++) {
        products.push(panier[i].id)
    }

    // Création de la variable infoscommande qui sera envoyée au serveur avec la requête POST
    let infosCommande = {
        contact,
        products
    }
    console.log(infosCommande)

    // Création de la variable confirmation qui sera stockée dans le local storage pour récupérer les info à aficher sur la page confirmation
    let confirmation = {
        lastName : prenomClient.value,
        sommeTotale : sommeTotale,
        identifiant : nomClient.value + Date.now(), // créer un id unique qui est la combinaison du nom + date sous forme Timestamp
    }

    localStorage.setItem("confirmation",JSON.stringify(confirmation)) // données à placer dans le localstorage pour recuperer dans la page confirmation

    //requête http POST pour envoyer les données infoscommande au serveur
    ajaxPost("http://localhost:3000/api/teddies/order", infosCommande)

    // vider l'item panier du local storage une fois le formulaire validé
    localStorage.removeItem("panier");
})


