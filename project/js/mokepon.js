const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
sectionReiniciar.style.display = 'none'
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorBoxes = document.getElementById('contenedorBoxes')

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let opcionesMokepones
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vidas){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './images/hipodoge.png', 5)

let capipepo = new Mokepon('Capipepo', './images/fuego.png', 5)

let ratigueya = new Mokepon('Ratigueya', './images/ratigueyaaaa.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
)

ratigueya.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionesMokepones = 
        `<input type="radio" name="mascota" id=${mokepon.nombre}/>
            <label class="box-edit" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>` 

            contenedorBoxes.innerHTML += opcionesMokepones
    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)

    botonTierra.addEventListener('click', ataqueTierra)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    
    sectionSeleccionarAtaque.style.display = 'flex'

    

    if (inputHipodoge.checked){
        alert('Seleccionaste a Hipodoge')
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        alert('Seleccionaste a Capipepo')
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        alert('Seleccionaste a Ratigueya')
    } else {
        alert('NO SELECCIONASTE LA MASCOTA')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } 
}

function ataqueFuego () {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua () {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra () {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo () {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA' 
    }
    combate()
}

function combate(){
    

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo =='TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }     
    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES!! GANASTE!!")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento papu, perdiste!!!!")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    

    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)