
var texto
let textoHTML = document.getElementById("form")
let ulNombreEventos = document.getElementById("eventos")
let arrayAFiltrar = []

function changeTemplateLayout() {
    switch (initialState.paginaANavegar) {
        case "EventosPasados":
            let eventosPasados = eventos.filter(evento => evento.date < fechaBase)
            arrayAFiltrar = eventosPasados
            pintarHTML(eventosPasados)
            eventsCategories(eventosPasados)
            break;
        case "EventosFuturos":
            let eventosFuturos = eventos.filter(evento => evento.date < fechaBase)
            arrayAFiltrar = eventosFuturos
            pintarHTML(eventosFuturos)
            eventsCategories(eventosFuturos)
            break;
        case "Contactos":

        textoHTML.innerHTML = 
        `
        <div class="formContact">
            <div class="form-floating mb-3 nameContact">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mailContact">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Mail</label>
            </div>
            <div class="form-floating comment">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                    style="height: 100px"></textarea>
                <label for="floatingTextarea2">Mensagge</label>
            </div>
        </div>
        <button type="button" class="btn btn-danger buttonColor buttonContact">submit</button>
        `
        ulNombreEventos.innerHTML = ""
        break;
        default:
            setState("paginaANavegar", "Home")
            let InitAppStyle = document.getElementById("Home")
            InitAppStyle.style.backgroundColor = "pink"
            InitAppStyle.disabled = true
            arrayAFiltrar = eventos
            pintarHTML(eventos)
            eventsCategories(eventos)
    }
}

function pintarHTML(array) {
    let nombreEventosHTML = ""
    array.map(evento =>
        nombreEventosHTML +=
        `
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
    )
    ulNombreEventos.innerHTML = nombreEventosHTML
    textoHTML.innerHTML = ""
}

var inputSearch = document.getElementById("inputSearch")
inputSearch.addEventListener("keyup", function (evento) { capturaEvento(evento) })

function capturaEvento(evento) {
    //capturo lo que el usuario ingresa en el input
    var datoInput = evento.target.value

    //a lo capturado le quito espacios en blanco anteriores y posteriores con el trim()
    //ademas a lo ingresado lo paso todo a minuscula con toLowerCase()
    var datoSinEspacio = datoInput.trim().toLowerCase()

    //aplico un filtro a todos los eventos donde el nombre del evento incuya lo que ingreso el usuario
    //con los metodos trim() y toLowerCase()
    var filtrado = arrayAFiltrar.filter(evento => evento.name.toLowerCase().includes(datoSinEspacio))
    pintarHTML(filtrado)
}


function eventsCategories(array){
let categories = eventos.map(evento => evento.category)

let unica = new Set(categories)

let lastCategories = [...unica]

let categoriasEventos = ""
lastCategories.map(category =>
    categoriasEventos +=
    `
    <div class="checks" id="checkCategories">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">${category}</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">${category}</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">${category}</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">${category}</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">${category}</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">${category}</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">${category}</label>
    </div>
    <form class="d-flex formMain" role="search">
        <input class="form-control me-2" id="inputSearch" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-danger buttonColor" type="button">search</button>
    </form>
</div>
    `
    )

    document.getElementById("checkCategories").innerHTML = categoriasEventos
}