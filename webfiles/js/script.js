"use strict";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c681c124b8mshc8bc3567696761bp15bd67jsn94e3ff097d4d',
        'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    }
};

let saisi = document.getElementsByClassName("saisie")[0];
let temp = document.getElementsByClassName("temp")[0];
let date = document.getElementsByClassName("date")[0];


saisi.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {

        fetch(`https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&language=%20fr&q=${saisi.value}&type=CITY`, options)
            .then(response => response.json())
            .then((response) => {
                let position = response[0].coordinates;
                console.log(position);
                apiMetoFrance(position);
            })
            .catch(err => {
                const filtre = new RegExp('coordinates', 'i');

                if (filtre.test(err)){
                    console.log("mauvaise syntax");
                    let error = document.getElementsByClassName("erreur-ville")[0];
                    let erreurH2 = document.createElement("h2");
                    erreurH2.textContent = "mauvaise syntaxe";
                    erreurH2.setAttribute("class", "erreur-lu");
                    error.appendChild(erreurH2);
                } else console.error(err);

            })
            .finally(() => console.log("experiment finish"));
    }
})

function apiMetoFrance(val) {
    fetch(`https://api.open-meteo.com/v1/meteofrance?latitude=${val.latitude}&longitude=${val.longitude}&hourly=temperature_2m&current_weather=true&past_days=7&timezone=auto`)
        .then(response => response.json())
        .then(response => {
            if ( document.getElementsByClassName("erreur-ville")[0].childElementCount !== 0){
                document.getElementsByClassName("erreur-lu")[0].remove();
            }
            console.log(response);
            temp.textContent = response.current_weather.temperature + response.hourly_units.temperature_2m;
            date.textContent = response.current_weather.time;
        })
        .catch(err => console.error(err))
        .finally(() => console.log("experiment finish"));
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

