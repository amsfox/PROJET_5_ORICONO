/* Requêtes AJAX */

// Fonction GET

function ajaxGet (url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la reponse de la requete
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url)
        }
    });
    req.addEventListener("error", function () {
        console.error("Erruer réseau avce l'url " + url)
    });
    req.send(null);

}


// Fonction POST

function ajaxPost(url, data) {
    var request = new XMLHttpRequest();
  
    request.onreadystatechange = function() {
      if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById('result').innerHTML = "<p>"+response.postData.text+"</p>";
      } else {
          console.error("Erreur envoi formulaire, Champs obligatoires non renseignés !")
      }
    }
  
    request.open('POST', url);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
  }
  

