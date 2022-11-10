let jugador=0;
let computadora=0;
let vecesJugadas=0;

let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");
let piedraPc = document.getElementById("piedra-pc");
let papelPc = document.getElementById("papel-pc");
let tijeraPc = document.getElementById("tijera-pc");

//let aCuanto = prompt("Al mejor de cuanto? 3 o 5")



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
   /* if(aCuanto==3){
        if(jugador==2){
            alert("felicitaciones, ganaste")
        }else if (computadora ==2){
            alert("felicitaciones, perdiste")
        }
    }
    if(aCuanto==5){
        if(jugador==3){
            alert("felicitaciones, ganaste")
        }else if (computadora ==3){
            alert("felicitaciones, perdiste")
        }
    }*/
}
function restartColor(){
    setTimeout(() => {  papelPc.style="background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);"
    piedraPc.style="background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);"
    tijeraPc.style="background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);" }, 500);
    
}
function noToques(){
    alert("No toques mis botones, los tuyos son los de arriba");
}