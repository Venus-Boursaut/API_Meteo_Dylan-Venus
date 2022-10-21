"use strict";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c681c124b8mshc8bc3567696761bp15bd67jsn94e3ff097d4d',
        'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    }
};

fetch('https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&language=%20fr&country=FR&q=Toulouse&type=CITY', options)
    .then(response => response.json())
    .then((response) => {
        let position = response[0].coordinates;

        console.log(position);

        apiMetoFrance(position);
    })
    .then(response => console.log(response))


function apiMetoFrance(val) {
    fetch(`https://api.open-meteo.com/v1/meteofrance?latitude=${val.latitude}&longitude=${val.longitude}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .then(response => console.log(response))
}





//menu nav 

let meteoMenu = document.createElement("div");
let apparitionLi = document.querySelector("ul li:last-of-type");
let htmlMenu = document.querySelector("menu");


meteoMenu.innerHTML = "<span></span>";
meteoMenu.classList.add("meteo-menu");

window.addEventListener("resize", () => {
    meteoDisplay();
    if (window.innerWidth > 768) {
        meteoMenu.remove();
    }
})

window.addEventListener("load", () => {
    meteoDisplay();
})

/**
 * Affiche le burger menu a partir du moment ou on atteint une resolution inferrieur a 768 px
 * @author Vénus Boursaut
 * @version 1.0
 */
function meteoDisplay() {
    if (window.innerWidth <= 768 && !apparitionLi.contains(meteoMenu)) {
        apparitionLi.prepend(meteoMenu);
    }
}

meteoMenu.addEventListener("click", () => {
    meteoMenu.classList.toggle("active");
    htmlMenu.classList.toggle("active");
    console.log("cliker")
})

