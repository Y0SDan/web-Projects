var canvas = document.getElementById("animacion")
var ctx = canvas.getContext('2d')

var img = new Image()
img.src = "sprites.png"

var x = 0
var y = 0
var indice = 0
var avance_pacMan_x = 0
var avance_pacMan_y = 0
var pasos = 5

let pacmanR = //l -> Right
    [
        [852,5,33,33,33,33],    //Derecha
        [852,55,33,33,33,33],   //Derecha
        [852,105,33,33,33,33],  //Derecha
    ]
let pacmanL = //l -> Left
    [
        [852,305,33,33,33,33],  //izquierda
        [852,355,33,33,33,33],  //izquierda
        [852,405,33,33,33,33]   //izquierda
    ]
let pacmanU = //U -> Up
    [
        [852,454,33,33,33,33],  //izquierda
        [852,507,33,33,33,33],  //izquierda
        [852,564,33,33,33,33]   //izquierda
    ]    
let pacmanD = //D -> Down
    [
        [852,155,33,33,33,33],  //izquierda
        [852,205,33,33,33,33],  //izquierda
        [852,255,33,33,33,33]   //izquierda
    ]
img.onload = function() {
    setInterval(draw,100)
}



function dibujaPacman() {
    if(x == 0 && y == 0){
        //inicializaPacMan()
        x = x1
        y = y1
        ctx.clearRect(x,y,33,33)
        ctx.drawImage(img,pacmanL[indice][0],pacmanL[indice][1],pacmanL[indice][2],pacmanL[indice][3],x,y,pacmanL[indice][4],pacmanL[indice][5])
        indice = (indice + 1) % 3
        avance_pacMan_x = -1 * pasos
        avance_pacMan_y = 0
    }

    if(avance_pacMan_x == 1 * pasos) {
        ctx.clearRect(x,y,33,33)
        ctx.drawImage(img,pacmanR[indice][0],pacmanR[indice][1],pacmanR[indice][2],pacmanR[indice][3],x,y,pacmanR[indice][4],pacmanR[indice][5])
        indice = (indice + 1) % 3
    } 

    if(avance_pacMan_x == -1 * pasos) {
        ctx.clearRect(x,y,33,33)
        ctx.drawImage(img,pacmanL[indice][0],pacmanL[indice][1],pacmanL[indice][2],pacmanL[indice][3],x,y,pacmanL[indice][4],pacmanL[indice][5])
        indice = (indice + 1) % 3
    }

    if(avance_pacMan_y == -1 * pasos){
        ctx.clearRect(x,y,33,33)
        ctx.drawImage(img,pacmanU[indice][0],pacmanU[indice][1],pacmanU[indice][2],pacmanU[indice][3],x,y,pacmanU[indice][4],pacmanU[indice][5])
        indice = (indice + 1) % 3
    } 

    if(avance_pacMan_y == 1 * pasos){
        ctx.clearRect(x,y,33,33)
        ctx.drawImage(img,pacmanD[indice][0],pacmanD[indice][1],pacmanD[indice][2],pacmanD[indice][3],x,y,pacmanD[indice][4],pacmanD[indice][5])
        indice = (indice + 1) % 3
    }

    console.log(indice)
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawBoundary()
    dibujaPacman()
    
    if(avance_pacMan_x == 1*pasos){
        x += avance_pacMan_x
    }
    if(avance_pacMan_x == -1 * pasos){
        x += avance_pacMan_x
    }
    if(avance_pacMan_y == -1 * pasos){
        y += avance_pacMan_y
    }
    if(avance_pacMan_y == 1 * pasos){
        y += avance_pacMan_y
    }
}

document.addEventListener("keydown",detectarTecla)

function detectarTecla(e) {
    if(e.keyCode == 39) {
        avance_pacMan_x = 1 * pasos;
        avance_pacMan_y = 0
    }
    if(e.keyCode == 37) {
        avance_pacMan_x = -1 * pasos;
        avance_pacMan_y = 0
    }
    if(e.keyCode == 38) {
        avance_pacMan_y = -1 * pasos;
        avance_pacMan_x = 0
    }
    if(e.keyCode == 40) { // suponemos que es hacia abajo
        avance_pacMan_y = 1 * pasos;
        avance_pacMan_x = 0
    }
}

/*********** Escenario (Boundary) -> borde, limite *****************/
var bWidth = 40
var bHeight = 40

var x1 //Seran las posiciones en donde inicializaremos a pacMan
var y1 //Seran las posiciones en donde inicializaremos a pacMan

let map = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-', ' ', '-', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

function drawBoundary(){
    map.forEach((row, i) => {
        row.forEach((symbol, j) => {
            const boundaryPositionX = bWidth * j;
            const boundaryPositionY = bHeight * i;
            if(i == 10 && j == 6){
                x1 = boundaryPositionX
                y1 = boundaryPositionY
            }
            switch (symbol) {
                case '-':
                    ctx.fillStyle = 'blue';
                    ctx.fillRect(boundaryPositionX, boundaryPositionY, bWidth, bHeight);
                    break;
            }
        });
    });
}