const buttons = document.querySelectorAll(".cuadrado");
let turno = true;
let in_game = true;
const reiniciar = document.querySelector("#reiniciar");
let ganadasx=0;
let ganadas0=0;
let empates=0;

function update(){
    document.querySelector("#ganadasX").textContent="Juegos ganados de X: "+ ganadasx;
    document.querySelector("#ganadasY").textContent="Juegos ganados de 0: "+ ganadas0;
    document.querySelector("#empates").textContent="Juegos con Empates: "+ empates;
}

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", (e)=>{
        if(turno && e.target.innerHTML === "" && in_game){
            contador++;
            e.target.innerHTML = "O";
            turno = !turno;
            if(ganador()===0){
                document.querySelector("#winner").textContent="El Ganador fue O";
                ganadas0++;
                update();
            }
        }
        else if(e.target.innerHTML === "" && in_game){
            contador++;
            e.target.innerHTML = "X";
            turno = !turno;
            if(ganador()===1){
                document.querySelector("#winner").textContent="El Ganador fue X";
                ganadasx++;
                update();
            }
        }
        if(ganador()===-1){
            document.querySelector("#winner").textContent="Empate";
            empates++;
            update();
        }
    });
}

reiniciar.addEventListener("click",(e)=>{
    in_game=true;
    for(let i=0; i<buttons.length; i++){
        buttons[i].textContent="";
    }
    document.querySelector("#winner").textContent="";
    contador = 0;
});

const list = [[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]];

let contador = 0;
function ganador(){
    for(let i=0; i<list.length; i++){
        if(buttons[list[i][0]].textContent === "X" && buttons[list[i][1]].textContent ==="X"
        && buttons[list[i][2]].textContent === "X"){
            in_game = false;
            return 1;
        }
        else if(buttons[list[i][0]].textContent === "O" && buttons[list[i][1]].textContent ==="O"
        && buttons[list[i][2]].textContent === "O"){
            in_game=false;
            return 0;
        }

        if(contador===9){
            in_game=false;
            return -1;
        }
    }
}