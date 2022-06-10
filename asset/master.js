var heureDiv = document.getElementById('heure');
var dateDiv = document.getElementById('date');
var affichageHeure = function(){
    var today,annee,listeMois,mois,listeJours,jourNumero,jourNom,heures,minutes,secondes,deuxChiffres;
    today = new Date();
    annee = today.getFullYear();

    listeMois =["janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    mois = listeMois[today.getMonth()];
    jourNumero = today.getDay();
    listeJours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    jourNom = listeJours[today.getDay()];
    deuxChiffres = function(element){
                  if (element < 10) {
                    return element = "0" + element;

                  }else{
                    return element;
                  }
                }
  heures = deuxChiffres(today.getHours());
  minutes = deuxChiffres(today.getMinutes());
  secondes = deuxChiffres(today.getSeconds());

  heureDiv.textContent = heures + ":"  + minutes + ":" + secondes ;

  dateDiv.textContent = jourNumero + jourNom + "" + mois +"" + annee;
  setTimeout(affichageHeure,1000);


}