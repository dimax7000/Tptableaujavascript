var selectedRow = null;
function verification(e) {
    e.preventDefault();
    var RecupereTable = recupere();
    if(selectedRow == null){
        remplirTableaux(RecupereTable);
    }


   

}
function recupere(){
   var RecupereTable = {};
   RecupereTable["nom"] = document.getElementById("name").value;
   RecupereTable["lastname"] = document.getElementById("lastname").value;
   RecupereTable["naissance"] = document.getElementById("naissance").value;
   RecupereTable["adresse"] = document.getElementById("adresse").value;
   RecupereTable["mail"] = document.getElementById("mail").value;
   RecupereTable["tel"] = document.getElementById("tel").value;
   RecupereTable["choix"] = document.getElementById("choix").value;
   RecupereTable["comment"] = document.getElementById("comment").value;
   
   return RecupereTable;

}

function remplirTableaux(data){

    var table = document.getElementById("remplir").getElementsByTagName("tbody")[0];
    var newROW = table.insertRow(table.length);
    var cel1 = newROW.insertcell(0);
    cel1.innerHTML = `<input type="checkbox"/>`;
    var cel2 = newROW.insertcell(1);
    cel2.innerHTML = data.nom;
    var cel3 = newROW.insertcell(2);
    cel3.innerHTML = data.lastname;
    var cel4 = newROW.insertcell(3);
    cel4.innerHTML = data.naissance;
    var cel5 = newROW.insertCell(4);
    cel5.innerHTML = data.adresse;
    var cel6 = newROW.insertcell(5);
    cel6.innerHTML = data.mail;
    var cel7 =newROW.insertcell(6);
    cel7.innerHTML = data.tel;
    var cel8 = newROW.insertCell(7);
    cel8.innerHTML = choix;
    var cel9 = newROW.insertCell(8);
    cel9.innerText = `<a><i class="fa-solid fa-pencil"></i></a>   <a><i class="fa-solid fa-eye"></i></a>   <a><i class="fa-solid fa-xmark"></i></a>  <a><i class="fa-solid fa-comment"></i></a>`;
  


}