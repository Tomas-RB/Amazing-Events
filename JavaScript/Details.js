var fechaBase = dataAmazing.fechaActual
console.log(fechaBase)

var eventos = dataAmazing.eventos

console.log(location.search)
var id = location.search.split("?id=").filter(Number)

var selectId = id[0]

const detalleEvento = []

for (var i = 0; i < eventos.length; i++) {
    if (eventos[i].id == selectId) {
        detalleEvento.push(eventos[i])
    }
}

console.log(detalleEvento[0])

if (detalleEvento[0].date > fechaBase) {
    detalleEvento[0].assistance = `Estimado(${detalleEvento[0].estimate})`
}
var contenido
    contenido =
    `
    <div class="row g-0">
    <div class="fecha ">
        <p class="col-md-12">Fecha: ${detalleEvento[0].image}</p>
    </div>

    <div class="col-md-5">
        <img src="../Multimedia/images/${detalleEvento[0].image}" class="img-fluid"
        <section class="datosUno">
           <div class="monto">
                <p class="parrafoUno">Entradas desde: <i class="fa-solid fa-dollar-sign"></i></p>
                <p class="parrafoDos">${detalleEvento[0].price}</p>
           </div>
        </section>
    </div>
    <div class="col-md-7">
        <div class="card-body">
            <h5 class="card-title">${detalleEvento[0].name}</h5>
            <section class="descripcion">
                <p class="card-text">${detalleEvento[0].info}</p>
            </section>
            <section class="datos">
                <p class="card-text"><small class="text-muted">Categoria: ${detalleEvento[0].category}</small></p>
                <p class="card-text"><small class="text-muted">Lugar: ${detalleEvento[0].place}</small></p>
                <p class="card-text"><small class="text-muted">capacidad: ${detalleEvento[0].capacity}</small></p>
                <p class="card-text"><small class="text-muted">Asistecia: ${detalleEvento[0].assistance}</small></p>
            </section>
        </div>
    </div>
    `
    console.log(contenido)
    document.getElementById("detallesDeLosEventos").innerHTML=contenido

// enlace a otras paginas
var buttonNav = document.getElementsByClassName("navLink")
for (var i = 0; i < buttonNav.length; i++) {
    const element = buttonNav[i];
    element.addEventListener("click", function (e) {
        imprimir(e.target.id);
        var seccion = document.getElementById("secNavDos");
        seccion.style.display="flex";
        document.getElementById("detallesDeLosEventos").style.display="none";
        document.getElementById("todosLosEventos").style.display="flex";
    })
}
