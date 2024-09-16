let tabella = document.getElementById("Gioco");
let restartButton = document.getElementById("Restart");
var matrice =[];
let turnoP = true;
let gameOver = false;
let altezza = [5,5,5,5,5,5,5];
let players = ['g','r'];
restartButton.onclick = start;
for(let i = 0; i < 6; i++){
    matrice[i] = [];
    for(let j = 0; j < 7; j++){
        matrice[i][j] = `v${i}${j}`;
        let blocco = document.createElement("div");
        blocco.id = `${i}${j}`
        blocco.addEventListener("click", click);
        blocco.style = "border: 1px solid black; width: 50px; height: 50px; float: left";
        tabella.appendChild(blocco);
    }
}

function click(){
    if(!gameOver){
        if(altezza[this.id[1]] >= 0){
            if(turnoP){
                document.getElementById(`${altezza[this.id[1]]}${this.id[1]}`).style = " border: 1px solid black; width: 50px; height: 50px; float: left; background-color:yellow";
                matrice[altezza[this.id[1]]][this.id[1]] = 'y'
                turnoP = false; 
            }
            else{
                document.getElementById(`${altezza[this.id[1]]}${this.id[1]}`).style = " border: 1px solid black; width: 50px; height: 50px; float: left; background-color:red";
                matrice[altezza[this.id[1]]][this.id[1]] = 'r'
                turnoP = true;
            }
            altezza[this.id[1]]--;
        }
        controllaVittoria();
    }
}

function controllaVittoria(){
    if(!turnoP){
        for(let i = 0; i < 6; i++){
            for(let j = 0; j < 7; j++){
                if(matrice[i][j] == 'y'){
                    let contO = 1, contV = 1, contObD = 1, contObS = 1;
                    for(let f = 1 ; f < 4; f++){
                        if(matrice[i][j + f] == 'y'){
                            contO++;
                        }
                        if(i+f>= 0 && i+f <6){
                            if(matrice[i+f][j] == 'y'){
                                contV++;
                            }
                        }
                        if(i+f>= 0 && i+f <6){
                            if(matrice[i+f][j + f] == 'y'){
                                contObD++;
                            }
                        }
                        if(i+f>= 0 && i+f <6){
                            if(matrice[i+f][j - f] == 'y'){
                                contObS++;
                            }
                        }
                    }
                    if(contO==4 || contV == 4 || contObD == 4 || contObS == 4){
                        console.log("giallo Ha Vinto");
                        gameOver = true;
                        break;
                    }
                }
                    
            }
        }
    }
    else{
        for(let i = 0; i < 6; i++){
            for(let j = 0; j < 7; j++){
                if(matrice[i][j] == 'r'){
                    let contO = 1, contV = 1, contObD = 1, contObS = 1;
                    for(let f = 1 ; f < 4; f++){
                        if(matrice[i][j + f] == 'r'){
                            contO++;
                        }
                        if(i+f>= 0 && i+f <6){
                            if(matrice[i+f][j] == 'r'){
                                contV++;
                            }
                        }
                        if(i+f>= 0 && i+f <6){
                            if(matrice[i+f][j + f] == 'r'){
                                contObD++;
                            }
                        }
                        if(i+f>= 0 && i+f <6){
                            if(matrice[i+f][j - f] == 'r'){
                                contObS++;
                            }
                        }
                    }
                    if(contO==4 || contV == 4 || contObD == 4 || contObS == 4){
                        console.log("Rosso Ha Vinto");
                        gameOver = true;
                        break;
                    }
                }
                    
            }
        }
    }
    
}

function start(){
    matrice =[];
    turnoP = true;
    gameOver = false;
    altezza = [5,5,5,5,5,5,5];
    players = ['g','r'];
    tabella.innerHTML = "";
    for(let i = 0; i < 6; i++){
        matrice[i] = [];
        for(let j = 0; j < 7; j++){
            matrice[i][j] = `v${i}${j}`;
            let blocco = document.createElement("div");
            blocco.id = `${i}${j}`
            blocco.addEventListener("click", click);
            blocco.style = "border: 1px solid black; width: 50px; height: 50px; float: left";
            tabella.appendChild(blocco);
        }
    }
}