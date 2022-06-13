function verification() {

    var nom = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var naissance =document.getElementById("naissance");
    var adresse = document.getElementById("adresse");
    var mail = document.getElementById("mail");
    var tel = document.getElementById("tel");
    var sexe = document.getElementById("choix");
    var commentaire = document.getElementById("comment");
     

    if(nom.value == ""){
        document.getElementById("messageDerreur").innerHTML = "Veuillez saisie votre nom";
        return false;
    }

    if(lastname.value == ""){
        document.getElementById("messageDerreur").innerHTML = "Veuillez saisie votre prenom";
        return false;
    }
    if(naissance.value == ""){
        document.getElementById("messageDerreur").innerHTML = "Veuillez saisie votre date de naissance";
        return false;
    }
    if(adresse.value == ""){
        document.getElementById("messageDerreur").innerHTML = "Veuillez saisie votre votre";
        return false;
    }


    if(mail.value == ""){
        document.getElementById("messageDerreur").innerHTML = "Veuillez saisie votre email";
        return false;
    }
    if(tel.value == ""){
        document.getElementById("messageDerreur").innerHTML = "Veuillez saisie votre numero de telephone";
        return false;
    }
    if(sexe.value == ""){

        
            document.getElementById("messageDerreur").innerHTML = "Veuillez saisie votre sexe";
            return false;
        
    }
    if(commentaire.value == ""){
        document.getElementById("messageDerreur").innerHTML = "Veuillez saisie votre commentaire";
        return false;
    }




  return true;
 //Enregistrer les donnes dans dans notre Localstorag 

}

