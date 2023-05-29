const fechaBase = dataAmazin.fechaActual
const eventos = dataAmazin.eventos
const eventosPasados = []
const eventosFuturos = []

for (var i = 0; i < eventos.length; i++) {
    if (eventos[i].date > fechaBase) {
        eventosFuturos.push(eventos[i])
    } else {
        eventosPasados.push(eventos[i])
    }
}

function recorrerArray(parametro) {
    for (var i = 0; i < parametro.length; i++) {
        console.log(parametro[i])
    }
}

console.log(fechaBase)
console.log(eventos)
console.log(eventosFuturos)
console.log(eventosPasados)

var nombreBoton
var buttonNav = document.getElementsByClassName("navLink")
for (var i = 0; i < buttonNav.length; i++) {
    const element = buttonNav[i];
    element.addEventListener("click", function (e) {
        console.log(e.target.innerText)
        imprimir(e.target.id);
    })
}

function imprimir(id) {
    switch (id) {
        case "upcoming":
            display(eventosFuturos)
            break;
        case "past":
            display(eventosPasados)
            break;
        default:
            display(eventos)
    }
}

function display(array) {
    var url;
    var imageUrl;
    if (location.pathname == "/Pages/Details.html") {
        url = "./Details.html"
        imageUrl = "../multimedia/images/"
    } else {
        url = "./Pages/Details.html"
        imageUrl = "./multimedia/images/"
    }
    var html = "";
    for (var i = 0; i < array.length; i++) {
        html += `
        <div class="card" style="width: 18rem;">
                <img src="${imageUrl}${array[i].image}" class="card-img-top" alt="${array[i].name}">
                <div class="card-body">
                    <h5 class="card-title">${array[i].name}</h5>
                    <p class="card-text">${array[i].description}</p>
                    <div class="contentCardPrice">
                        <a href="${url}?id=${array[i].id}" class="btn btn-danger buttonColor">Ver mas...</a>
                        <p>$${array[i].price}</p>
                    </div>
                </div>
        </div>
    `
        console.log(html)
    }
    document.getElementById("todosLosEventos").innerHTML = html;
}
navegacion("Home")

function navegacion(id) {
    switch (id) {
        case "upcoming":
            buttonNav[0].classList.remove(`active`),
                buttonNav[1].classList.add(`active`),
                buttonNav[2].classList.remove(`active`),
                document.getElementById("tiempo").innerHTML = "Upcoming Events",
                document.getElementById("secNavDos").classList.add(`navUpcoming`),
                display(eventosFuturos)
            break;

        case "past":
            buttonNav[0].classList.remove(`active`),
                buttonNav[1].classList.remove(`active`),
                buttonNav[2].classList.add(`active`),
                document.getElementById("tiempo").innerHTML = "Past Events",
                document.getElementById("secNavDos").classList.add(`navPast`),
                display(eventosPasados)
            break;

        default:
            buttonNav[0].classList.add(`active`),
                buttonNav[1].classList.remove(`active`),
                buttonNav[2].classList.remove(`active`),
                document.getElementById("tiempo").innerHTML = "Home",
                document.getElementById("secNavDos").classList.add(`navHome`),
                display(eventos)
    }
}

imprimir("home")


