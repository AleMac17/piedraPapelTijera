let jugador=0;
let computadora=0;
let vecesJugadas=0;

let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");
let piedraPc = document.getElementById("piedra-pc");
let papelPc = document.getElementById("papel-pc");
let tijeraPc = document.getElementById("tijera-pc");



function juego(mano){
    let manoComputadora = parseInt(Math.random()*3+1);
    switch(mano){
        case papel: mano=2;break;
        case piedra: mano=1;break;
        case tijera: mano=3;break;}
    if(mano ==manoComputadora){
            if(manoComputadora==1){
            piedraPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"}else if (manoComputadora==2){papelPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"}else tijeraPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"
            
        }
    if(mano ==1 && manoComputadora == 2){
        computadora++;
        papelPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"
        
    }
    if(mano ==1 && manoComputadora == 3){
        jugador++;
        tijeraPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"
    }
    if(mano ==2 && manoComputadora == 1){
        jugador++;
        piedraPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"
    }
    if(mano ==2 && manoComputadora == 3){
        computadora++;
        tijeraPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"
    }
    if(mano ==3 && manoComputadora == 1){
        computadora++;
        piedraPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"
    }
    if(mano ==3 && manoComputadora == 2){
        jugador++;
        papelPc.style="background:linear-gradient(to bottom, #f2f34f 5%, #f2f34f 100%);"
    }
    document.getElementById("puntaje-persona").textContent=jugador;
    document.getElementById("puntaje-pc").textContent=computadora;
    restartColor()
}
function restartColor(){
    setTimeout(() => {  papelPc.style="background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);"
    piedraPc.style="background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);"
    tijeraPc.style="background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);" }, 500);
    
}

/*do {let mano = prompt("Ingrese : papel, piedra o tijera");
    switch(mano){
    case "papel": mano=1;break;
    case "piedra": mano=2;break;
    case "tijera": mano=3;break;
    default: alert("Sos un pelotudo, te dije papel,piedra o tijera");
}*/

/*if(mano == manoComputadora){
    alert("Empataste, el puntaje total de computadora es" +computadora+" tu puntaje es "+jugador);
}
if(mano ==1 && manoComputadora == 2){
    jugador++;
    alert("Ganaste, el puntaje total de computadora es "+computadora+" tu puntaje es "+jugador);
}
if(mano ==1 && manoComputadora == 3){
    computadora++;
    alert("Perdiste, el puntaje total de computadora es "+computadora+" tu puntaje es "+jugador);
}
if(mano ==2 && manoComputadora == 1){
    computadora++;
    alert("Perdiste, el puntaje total de computadora es "+computadora+" tu puntaje es "+jugador);
}
if(mano ==2 && manoComputadora == 3){
    jugador++;
    alert("Ganaste, el puntaje total de computadora es "+computadora+" tu puntaje es "+jugador);
}
if(mano ==3 && manoComputadora == 1){
    jugador++;
    alert("Ganaste, el puntaje total de computadora es "+computadora+" tu puntaje es "+jugador);
}
if(mano ==3 && manoComputadora == 2){
    computadora++;
    alert("Perdiste, el puntaje total de computadora es "+computadora+" tu puntaje es "+jugador);
}*/