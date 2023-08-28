let countTache = 0;

function addTache() {

    let tache = document.getElementById("tache").value;
    let listeTache = document.getElementById("listTache");



    listeTache.innerHTML += '<br><div class="all actif" id="tnbDIV' + countTache + '"><label id="tnbLABEL' + countTache + '" class="form-label active">' + tache + '</label><button onclick="deleteTache(' + countTache + ')" type="button" class="btn btn-dark">Supprimer</button><button id="btnT' + countTache + '" onclick="finishTache(' + countTache + ')" type="button" class="btn btn-dark">Terminé</button><button id="btnA' + countTache + '" onclick="cancelTache(' + countTache + ')" type="button" class="btn btn-dark hidden">Annuler</button></div>';
    countTache++;
}

function deleteTache(idTache) {
    let tache = document.getElementById("tnbDIV" + idTache);
    tache.remove();
}

function finishTache(idTache) {
    let tacheDIV = document.getElementById("tnbDIV" + idTache);
    let tache = document.getElementById("tnbLABEL" + idTache);

    let btnA = document.getElementById("btnA" + idTache);
    let btnT = document.getElementById("btnT" + idTache);

    tache.classList.add("finish");
    tache.classList.remove("active");

    btnT.classList.add("hidden");
    btnA.classList.remove("hidden");

    tacheDIV.classList.remove("actif");
    tacheDIV.classList.add("fini");
}

function cancelTache(idTache) {
    let tacheDIV = document.getElementById("tnbDIV" + idTache);
    let tache = document.getElementById("tnbLABEL" + idTache);

    let btnA = document.getElementById("btnA" + idTache);
    let btnT = document.getElementById("btnT" + idTache);

    tache.classList.remove("finish");
    tache.classList.add("active");

    btnA.classList.add("hidden");
    btnT.classList.remove("hidden");

    tacheDIV.classList.remove("fini");
    tacheDIV.classList.add("actif");
}


const selectElement = document.getElementById("filtre");


selectElement.addEventListener("change", (event) => {

    let all = document.querySelectorAll(".all");
    let actif = document.querySelectorAll(".actif");
    let fini = document.querySelectorAll(".fini");

    switch (event.target.value) {
        case 'all':
            for (var i = 0; i < all.length; i++) {
                all[i].style.display = 'block';
            }
            break;
        case 'actif':
            for (var i = 0; i < actif.length; i++) {
                actif[i].style.display = 'block';
            }
            for (var i = 0; i < fini.length; i++) {
                fini[i].style.display = 'none';
            }
            break;
        case 'finish':
            for (var i = 0; i < actif.length; i++) {
                actif[i].style.display = 'none';
            }
            for (var i = 0; i < fini.length; i++) {
                fini[i].style.display = 'block';
            }
            break;
        default:
            break;
    }
});