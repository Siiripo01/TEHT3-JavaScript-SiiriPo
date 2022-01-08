let issURL = 'https://api.wheretheiss.at/v1/satellites/25544';

async function tiedot(){
    let vastaus = await fetch(issURL);
    let tietoja = await vastaus.json();
    let { latitude, longitude } = tietoja;

    document.getElementById("leveysaste").textContent = latitude;
    document.getElementById("pituusaste").textContent = longitude;
}

document.getElementById("nappiText").textContent = "Näytä lisää tietoa";

tiedot();

async function lisatietoja(){
    let vastaus = await fetch(issURL);
    let tietoja = await vastaus.json();
    let { altitude, velocity, visibility } = tietoja;

    document.getElementById("korkeus").textContent = altitude;
    document.getElementById("nopeus").textContent = velocity;
    document.getElementById("nakyvyys").textContent = visibility;

    document.getElementById("lisatietoa").style.display = "inline-block";

    document.getElementById("nappiText").textContent = "Päivitä tiedot";
}