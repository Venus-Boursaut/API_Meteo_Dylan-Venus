let body = document.querySelector("body")
let select = document.querySelector("select")


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c681c124b8mshc8bc3567696761bp15bd67jsn94e3ff097d4d',
        'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    }
};

fetch('https://spott.p.rapidapi.com/places/autocomplete?limit=10&skip=0&language=%20fr&country=FRA&q=Paris&type=CITY', options).then((response) => {
    if (response.ok === true) {
        console.log(response)
        console.log(response.json())

        response.json().then((data)=> {
            console.log(data)
        })

    }
})
    .then(response => console.log(response))
    .catch((err) => { console.error(err) }).finally(() => console.log("Experiment completed"));

// if (reponse.ok === true) {
//     reponse.json().then((data) => {
//         console.log(data)
//     })



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

