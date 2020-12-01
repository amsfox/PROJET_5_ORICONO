const urlParams = new URLSearchParams(window.location.search);  //URLSearchParams définit des méthodes utilitaires pour travailler avec la chaîne de requête (les paramètres GET) d’une URL.
const id = urlParams.get('id');
//console.log(id);

let panier = [];  // On crée un tableau dans lequel on va push les produits séléctionnés
let localPanier = JSON.parse(localStorage.getItem("panier"));  // on recupère le localstorage pour ne pas écraser les données avec la nouvelle séléction
//console.log(localPanier);
//console.log(localPanier)


ajaxGet("http://localhost:3000/api/teddies/" + id, function(reponse) { //fonction ajax pour la requête http (avec url des _id)
    let teddie = JSON.parse(reponse);
    //console.log(reponse)
    let produitNom = document.getElementById("produitNom");
    let produitImage = document.getElementById("produitImage");
    let choixCouleur = document.getElementById("choixCouleur") ;
    let color = document.getElementById("rest-color");

    //Nom ours
    let teddieName = document.createElement("h2");
    teddieName.textContent = teddie.name;
    produitNom.appendChild(teddieName);
    
    // num réf
    let produitRef = document.createElement("p");
    produitRef.textContent = "Référence : " + teddie._id;
    produitNom.appendChild(produitRef);

    //image
    let teddieImg = document.createElement("img");
    teddieImg.src = teddie.imageUrl;
    teddieImg.alt = teddie.name;
    teddieImg.classList.add("d-blok", "w-75", "shadow-lg", "border", "rounded", "mb-3");
    produitImage.appendChild(teddieImg);

    //Description
    let produitDescription = document.createElement("p");
    produitDescription.textContent = "Description : " + teddie.description;
    produitImage.appendChild(produitDescription);

    //choix couleur
        let teddieCouleurs = teddie.colors;
        for (let i = 0; i < teddieCouleurs.length; i++) {
            let teddieCouleur = teddieCouleurs[i];
            let option = document.createElement("option");
            option.textContent = teddieCouleur;
            choixCouleur.appendChild(option);
            //localStorage.setItem("couleurTest",teddieCouleur ) // test storage couleur
        };

    //stocker couleur selectionner dans une variable pour la recuperer ensuite dans localstorage panier ...
    choixCouleur.addEventListener("change", function(e) {
        let colorSelect = e.target.value;
        // let color = document.getElementById("rest-color")
        color.textContent = colorSelect;
    });

    //Prix
    let produitPrix = document.getElementById("produitPrix");
    let teddiePrix = document.createElement("h5");
    teddiePrix.textContent = teddie.price + "€";
    produitPrix.appendChild(teddiePrix);

    //quantité
    let quantite = document.getElementById("quantite");
    

    // bouton validation
    let ajouterAuPanier = document.getElementById("ajouterAuPanier");
    let buttonpanier = document.createElement("a");
    buttonpanier.href = "../html/panier.html";
    buttonpanier.textContent = "Ajouter au panier";
    buttonpanier.classList.add("btn", "btn-primary");
    ajouterAuPanier.appendChild(buttonpanier);

    //local storage
    buttonpanier.addEventListener("click", function(e) {
        //e.preventDefault()
        console.log("clic")
        let product = {
            nom : teddie.name,
            couleur : color.textContent,
            prix : teddie.price,
            quantite : parseFloat(quantite.value),
            id : teddie._id 
        };

        // if(localPanier==null) {
        //     panier.push(product);
        //     localStorage.setItem("panier", JSON.stringify(panier)); // transform l'objet au format json et le stocke dans localstorage 
        // }else{
        //     console.log(localPanier)
        //     if (localPanier.indexOf(product) === -1) {
        //         localPanier.push(product);
        //         localStorage.setItem("panier", JSON.stringify(localPanier))
        //     } else if (localPanier.indexOf(product) > -1) {
        //         localPanier[localPanier.indexOf(product)].quantite += product.quantite
                
                
        //     }
        //     // localPanier.push(product);
        //     // localStorage.setItem("panier", JSON.stringify(localPanier)); // transform l'objet au format json et le stocke dans localstorage
        // }
        console.log(product);
        if(localPanier==null) {
            panier.push(product);
            localStorage.setItem("panier", JSON.stringify(panier)); // transform l'objet au format json et le stocke dans localstorage 
            //localPanier = panier;
        }else{
            console.log("existe");
            var found = false
            for (let j = 0; j < localPanier.length; j++) {
                if (localPanier[j].id == product.id && localPanier[j].couleur == product.couleur) {
                    localPanier[j].quantite = localPanier[j].quantite + product.quantite
                    localStorage.setItem("panier", JSON.stringify(localPanier));
                    found = true
                    break
                }
            }
            if(!found) {
                console.log("push");
                localPanier[localPanier.length] = product; //****.
                console.log(localPanier);
                localStorage.setItem("panier", JSON.stringify(localPanier)); // transform l'objet au format json et le stocke dans localstorage
            }
            
        }






        
    })
   
})

/*
    if(localPanier==null) {
            panier.push(product);
            localStorage.setItem("panier", JSON.stringify(panier)); // transform l'objet au format json et le stocke dans localstorage 
        }else{
            localPanier.push(product);
            localStorage.setItem("panier", JSON.stringify(localPanier)); // transform l'objet au format json et le stocke dans localstorage
        }
*/