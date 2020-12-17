

ajaxGet("http://localhost:3000/api/teddies", function(reponse) { // fonction ajax pour la requête http
    let teddies = JSON.parse(reponse); // transformer les données JSON en JS
    let listeArticles = document.getElementById("listeArticles"); // attribuer une variable à ul

    for (let i = 0; i < teddies.length; i++) {   // Création de la boucle sur le array teddies pour afficher la liste des produits
        let teddie = teddies[i];
        let article = document.createElement("li"); // créer liste li
        article.classList.add("list-group-item");  // rajouter les classes Bootstrap
        listeArticles.appendChild(article); // mettre le li dans le UL

        //pour chaque item on crée l'élément + on lui assigne un textecontent + on le rajoute l'article
        
        // création h2 = nom de l'ours
        let teddieName = document.createElement("h2");
        teddieName.textContent = teddie.name;
        article.appendChild(teddieName);
        
        // image de l'ours
        let imageDiv = document.createElement("div");
        let teddieImg = document.createElement("img");
        teddieImg.src = teddie.imageUrl;
        teddieImg.alt = teddie.name;
        teddieImg.classList.add("d-blok", "w-75", "shadow-lg", "border", "rounded", "mb-3");
        imageDiv.appendChild(teddieImg);
        article.appendChild(imageDiv);

        // bouton "voir ce produit" avec lien vers la fiche du produit
        let buttonDiv = document.createElement("div");
        let button = document.createElement("a");
        button.href = "../html/produit.html?id=" + teddie._id;
        button.textContent = "Voir ce produit";
        button.classList.add("btn", "btn-primary");
        buttonDiv.appendChild(button);
        article.appendChild(buttonDiv);
        //console.log(teddie._id)
        //console.log(button.href)

    }       
})









