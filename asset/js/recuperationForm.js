let nom = document.getElementById("name").value;
let prenom = document.getElementById("lastname").value;
let naissanceDate = document.getElementById("naissance").value;
let address = document.getElementById("adresse").value;
let mail = document.getElementById("mail").value;
let tel = document.getElementById("tel").value;
let sexe = document.getElementById("choix");
let commentaire = document.getElementById("comment").value;
let message = document.getElementById("messageDerreur");

 //verification des champs au remplissage
  function verification(){

    if(nom == "" ){
        message.innerHTML = "Tous les champs sont obligatoires";
        return false;

    }
    if(prenom == "" ){
        message.textContent = "<strong>Tous les champs sont obligatoires</strong>";
        return false;

    }
    if(naissanceDate == "" ){
        message.textContent = "<strong>Tous les champs sont obligatoires</strong>";
        return false;

    }
    if(address == "" ){
        message.textContent = "<strong>Tous les champs sont obligatoires</strong>";
        return false;

    }
    if(mail == "" ){
        message.textContent = "<strong>Tous les champs sont obligatoires</strong>";
        return false;

    }
    if(sexe == "" ){
        message.textContent = "<strong>Tous les champs sont obligatoires</strong>";
        return false;

    }
    if(commentaire == "" ){
        message.textContent = "<strong>Tous les champs sont obligatoires</strong>";
        return false;

    }

    
    
    
    
    
    
              
}

 //vider les champs 
  function videLeschamps(){
      document.getElementById("remplir").reset();

  }


 //Enregistrer les donnes dans dans notre Localstorage












 //Ajouter les donner au tableau





