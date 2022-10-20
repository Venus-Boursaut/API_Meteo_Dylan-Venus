let body = document.querySelector("body")
let select = document.querySelector("select")

//select.addEventListener("", ()=>{    
fetch("https://api.open-meteo.com/v1/forecast?latitude=50.49&longitude=2.55&hourly=temperature_2m").then((reponse) => {
    if (reponse.ok === true) {
        reponse.json().then((data) => {
            console.log(data)
        })
    }
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Experiment completed")
})



//menu nav 

let meteoMenu = document.createElement("div");
let apparitionLi = document.querySelector("ul li:last-of-type");
let htmlMenu = document.querySelector("menu");


meteoMenu.innerHTML="<span></span>";
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


meteoMenu.addEventListener("click", () =>{
    meteoMenu.classList.toggle("active");
    htmlMenu.classList.toggle("active");
    console.log("cliker")
})


//})