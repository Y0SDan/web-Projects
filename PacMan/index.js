var canvas = document.getElementById("animacion") //Obtenemos el elemento canvas
var ctx = canvas.getContext('2d')                 //Obtenemos el contexto del canvas

var img = new Image()   //Creamos un objeto imagen
img.src = "sprites.png" //Le asignamos la ruta de la imagen

/*************************** PacMan *****************/

var x = 0                  //Posición en x de pacMan
var y = 0                  //Posición en y de pacMan
var indice = 0             //Indice para la animación de pacMan
var avance_pacMan_x = 0    //avance de pacMan en x
var avance_pacMan_y = 0    //avance de pacMan en y
var pasos = 20              //Cantidad de pasos que dara pacMan

/************* Matrices de animación de pacMan **************/
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
/**********************************************************************/    

document.addEventListener("keydown",detectarTecla) //keydown -> presionar tecla

function detectarTecla(e) {
    if(e.keyCode == 39) { //Right
        avance_pacMan_x = 1 * pasos;
        avance_pacMan_y = 0
    }
    if(e.keyCode == 37) { //Left
        avance_pacMan_x = -1 * pasos;
        avance_pacMan_y = 0
    }
    if(e.keyCode == 38) { //up
        avance_pacMan_y = -1 * pasos;
        avance_pacMan_x = 0
    }
    if(e.keyCode == 40) { //down
        avance_pacMan_y = 1 * pasos;
        avance_pacMan_x = 0
    }
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

 //   console.log(indice)
}

/*************************** Phantoms *****************/
//BLINKY (RED)------------------------------------------------------------------------
var blinky_x = 0
var blinky_y = 0
var indice_blinky = 0            
var avance_blinky_x = 0   
var avance_blinky_y = 0   
var pasos_blinky = -20
var bx1
var by1            

let blinkyR = //R -> Right
    [
        [1,4,35,38,35,38],    //Derecha
        [1,54,35,38,35,38]    //Derecha
    ]
let blinkyL = //L -> Left
    [
        [1,204,35,38,35,38],    //izquierda
        [1,254,35,38,35,38]     //izquierda
    ]

function drawBlinky(){

    if(blinky_x == 0 && blinky_y == 0){
        blinky_x = bx1
        blinky_y = by1
    }
    if(pasos_blinky < 0){
        ctx.clearRect(blinky_x,blinky_y,35,38)
        ctx.drawImage(img,blinkyL[indice_blinky][0],blinkyL[indice_blinky][1],blinkyL[indice_blinky][2],blinkyL[indice_blinky][3],blinky_x,blinky_y,blinkyL[indice_blinky][4],blinkyL[indice_blinky][5])
        indice_blinky = (indice_blinky + 1) % 2
        avance_blinky_x = 1 * pasos_blinky
        blinky_x += avance_blinky_x
    }
    if(pasos_blinky > 0){
        ctx.clearRect(blinky_x,blinky_y,35,38)
        ctx.drawImage(img,blinkyR[indice_blinky][0],blinkyR[indice_blinky][1],blinkyR[indice_blinky][2],blinkyR[indice_blinky][3],blinky_x,blinky_y,blinkyR[indice_blinky][4],blinkyR[indice_blinky][5])
        indice_blinky = (indice_blinky + 1) % 2
        avance_blinky_x = 1 * pasos_blinky
        blinky_x += avance_blinky_x        
    }
    
    
    if(detectarColisionBlinky()){
        pasos_blinky = pasos_blinky * (-1)
    }
}

function detectarColisionBlinky(){
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[i].length; j++) {
            if(map[i][j] === '-') {
                wallX = j * bWidth;
                wallY = i * bHeight;
                nextBlinkyX = blinky_x + avance_blinky_x;
                nextBlinkyY = blinky_y + avance_blinky_y;
                if(nextBlinkyX < wallX + bWidth && nextBlinkyX + 35 > wallX && nextBlinkyY < wallY + bHeight && nextBlinkyY + 38 > wallY) {
                    return true;
                }
                if(nextBlinkyX < x + 33 && nextBlinkyX + 33 > x && nextBlinkyY < y + 33 && nextBlinkyY + 33 > y) {
                    // Blinky colisiona con Pac-Man
                    console.log("Blinky colisionó con Pac-Man");
                }
            }
        }
    }
    return false;
}
/***********************************POWER PACMAN ********************/
let blinkyAzul = false;
let circuloX = 100; // Posición inicial del círculo en el eje x
let circuloY = 100; // Posición inicial del círculo en el eje y

function dibujarCirculo() {
    ctx.beginPath();
    ctx.arc(circuloX, circuloY, 15, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
}

function detectarColisionPacman() {
    if(pacman_x < circuloX + 30 && pacman_x + 33 > circuloX && pacman_y < circuloY + 30 && pacman_y + 33 > circuloY) {
        blinkyAzul = true;
    }
}

function dibujarBlinky() {
    ctx.fillStyle = blinkyAzul ? "blue" : "red";
    ctx.fillRect(blinky_x, blinky_y, 35, 38);
}
/*************************** Escenario (Boundary) -> borde, limite *****************/

var bWidth = 40  //El ancho de cada cuadro
var bHeight = 40  //El alto de cada cuadro

var boundaryPositionX = 0 //La posición en x de cada cuadro
var boundaryPositionY = 0 //La posición en y de cada cuadro

var x1  //Seran las posiciones en donde inicializaremos a pacMan
var y1  //Seran las posiciones en donde inicializaremos a pacMan
var cx = -1//seran las coordenadas de la esquina superior izquierda del cuadro
var cy = -1//seran las coordenadas de la esquina superior izquierda del cuadro

let map     = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', '-', ' ', '-', ' ', '-', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-', '-', 'f', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', '-', 'f', 'f', 'f', '-', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-', 'f', 'f', 'f', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', '-', '-', '-', '-', '-', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', '-', ' ', '-', ' ', '-', '-', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map2 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map3 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map4 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map5 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map6 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map7 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map8 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map9 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

let map10 = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', '-', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

function drawBoundary(map){
    map.forEach((row, i) => {
        row.forEach((symbol, j) => {
            boundaryPositionX = bWidth * j;
            boundaryPositionY = bHeight * i;
            if(i == 11 && j == 6){
                x1 = boundaryPositionX
                y1 = boundaryPositionY
            }
            if(i == 4 && j == 7){
                bx1 = boundaryPositionX
                by1 = boundaryPositionY
            }
            switch (symbol) {
                case '-':
                    ctx.fillStyle = 'blue';
                    ctx.fillRect(boundaryPositionX, boundaryPositionY, bWidth, bHeight)
                    cx = boundaryPositionX
                    cy = boundaryPositionY
                    break;
            }
        });
    });
}

/*************************** Colisión *****************/
let wallX
let wallY
let nextX
let nextY

function detectarColision(){
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[i].length; j++) {
            if(map[i][j] === '-') {
                wallX = j * bWidth;
                wallY = i * bHeight;
                nextX = x + avance_pacMan_x;
                nextY = y + avance_pacMan_y;
                if(nextX < wallX + bWidth && nextX + 33 > wallX && nextY < wallY + bHeight && nextY + 33 > wallY) {
                    avance_pacMan_x = 0;
                    avance_pacMan_y = 0;            
                }
                if(avance_pacMan_x == 0 && avance_pacMan_y == 0) {
                    ctx.clearRect(x,y,33,33)
                    ctx.drawImage(img,pacmanL[indice][0],pacmanL[indice][1],pacmanL[indice][2],pacmanL[indice][3],x,y,pacmanL[indice][4],pacmanL[indice][5])
                    indice = (indice + 1) % 3
                    //dibujaPacman()
                }
            }
            if(map[i][j] === ' '){
                wallX = j * bWidth;
                wallY = i * bHeight;
                nextX = x + avance_pacMan_x;
                nextY = y + avance_pacMan_y;
                if(nextX < wallX + bWidth && nextX + 33 > wallX && nextY < wallY + bHeight && nextY + 33 > wallY) {
                    map[i][j] = 'p'
                    score ++;
                    
                }
                //map[i][j] = 'p'
            }
        }
    }
}

/*************************** Puntos *****************/
let pointPositionX
let pointPositionY

function drawRoundedRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (stroke) {
        ctx.stroke();
    }
    if (fill) {
        ctx.fill();
    }        
}

function drawPoints(map) {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[i].length; j++) {
            // Si la celda es un pasillo, dibujar un punto
            if(map[i][j] === ' ') {
                pointPositionX = bWidth * j + bWidth / 2;
                pointPositionY = bHeight * i + bHeight / 2;
                ctx.fillStyle = 'white';
                drawRoundedRect(ctx, pointPositionX - bWidth / 8, pointPositionY - bWidth / 8, bWidth / 4, bWidth / 4, bWidth / 16, true, false);
            }
        }
    }
}

/*************************** SCORE**********************/
var score = 0

function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, 500, 620);
}
/*************************** WINNER WINNER CHICKEN DINNER **********************/
function noMorePoints() {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[i].length; j++) {
            if(map[i][j] === ' ') {
                return false;
            }
        }
    }
    return true;
}


/*************************** ANIMACIÓN *****************/

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBoundary(map)
    drawPoints(map)
    dibujaPacman()
    drawBlinky()
    detectarColision()
    drawScore()

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

    if(noMorePoints()) {
        console.log('No more points to eat. Game over!');
        return;
    }
}

img.onload = function() { //
    setInterval(draw,100)
}