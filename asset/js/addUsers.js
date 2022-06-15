function addUsers(){
    var nom = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var naissance =document.getElementById("naissance").value;
    var adresse = document.getElementById("adresse").value;
    var mail = document.getElementById("mail").value;
    var tel = document.getElementById("tel").value;
    var sexe = document.getElementById("choix").value;
    var commentaire = document.getElementById("comment").value;

    var remplir = document.getElementById("remplir")[1];
    var newROW = remplir.insertRow(1);
     
    var cell1 = newROW.insertcell(0);
    var cell2 = newROW.insertcell(1);
    var cell3 = newROW.insertcell(2);
    var cell4 = newROW.insertcell(3);
    var cell5 = newROW.insertcell(4);
    var cell6 = newROW.insertcell(5);
    var cell7 = newROW.insertcell(6);
    var cell8 = newROW.insertcell(7);
    var cell9 = newROW.insertcell(8);
    var cell10 = newROW.insertcell(9);
    

    cell1.innerHtml = <input type="checkbox"/>;
    cell2.innerHtml =id ;
    cell3.innerHtml = nom;
    cell4.innerHtml = lastname;
    cell5.innerHtml = naissance;
    cell6.innerHtml = adresse;
    cell7.innerHtml = mail;
    cell8.innerHtml = tel;
    cell9.innerHtml = sexe;
    cell10.innerHtml = commentaire;
}