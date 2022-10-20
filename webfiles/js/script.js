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
//})