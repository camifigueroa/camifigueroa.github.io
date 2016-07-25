//2016 07 24
//funciona con p5.js
//estoy hciendo un lienzo de un color cualquiera
//con una fomra o elipse que sigue al mouse
// color en termino de p5js es por defecto RGB
// y cada valor va entre 0 y 255
// colores se dicen de 4 formar distintas
//1 es escala de grises, 0 es negro y 255 blanco
//3 es RGB, red , green and blue, 0 es nada, 255 es todo

//VARIABLES
//las variables son espacios de memoria en el pc que almancenan valores y que cambian durante la ejecucion
//para crear una variable , se tiene que declarar
//declara se hace una sola vez, UNA SOLA VEZ
//se hace así en javascript
var diametro; 
//solo despues de declara podemos asignarle un valor pero solo despues de declarar
diametro = 90


//existen dos tipos de variables
//variables globales y locales
// globales estan declaradas FUERA del cuerpo de alguna funcion
// las locales son declaradas DENTRO del cuerpo de alguna funcion


//setup()corre una vez al principio  
function setup() {
  //crear un lienzo y se escribe asi (dimHor, dimVer);
  createCanvas(windowWidth, windowHeight );
  
  //crear variable local verde

  var verde = 012;
  //atajo: se puede declarar y asignar un valor inicial en una misma linea asi
  // var verde = 255
  
  
  //pintar el fondo del lienzo
  //usar comando backgroung(color);
  background (080, verde, 050); 
  

}

//draw() corre luego de setup, 60 veces por segundo
function draw() {
  
   background (080, 012, 050); 
  
  //crear una elipse en el mouse
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);
  
  //aumentar diametro en 1
  // a la variable diametro, asignale el valor del resultado de
  //valor actual de la variable diametro+1
  //diametro= diametro+1
  
}
//WindowResized () es ejecutada cada vez que la ventana del color cambia de tamaño
function windowResized() {
  //resizeCanvas() crea un nuevo lienzo
  resizeCanvas(windowWidth, windowHeight);
  
    //pintar el fondo del lienzo
  //usar comando backgroung(color);
  background (080, 012, 050); 
 
}
