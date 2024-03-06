//JUEGO DE DADOS
const { Console } = require('console'); //importo el modulo "console" de node js

const rli = require('readline').createInterface({ /*importa el modulo readline 
y crea una interfaz de lectura "Readline interface"*/
    input: process.stdin, //configura la entrada estandar de datos
    output: process.stdout //configura la salida estandar de datos

});
    /*>>> A partir de aquí se puede usar la interface "rli" para realizar
    operaciones de lectura y escritura*/

function input(prompt) { /* define una función llamada "input" que recibe un 
"prompt" como entrada.*/
    /* Promises es una forma de manejar operaciones 
    asincrónicas en JavaScript. En este caso, la operación asincrónica 
    es esperar a que el usuario introduzca algo a través del prompt, en este caso
    nuestra pregunta*/
    return new Promise ((callbackFn, errorFn) => {
        rli.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}
//>>>> INICIA CODIGO
const main = async () => { /*Creo funcion "main" */
    let jugarDeNuevo = true;
    while(jugarDeNuevo) { /* Creo While para poder hacer el loop al teminar de tirar
        los dados y volver a preguntar si quiero o no seguir jugando con la 
        funcion "pregunta"*/
        
        /* Creo una funcion para la pregunta incluyendo
        "async" (async y await: se ejecutan de manera asincrónica dentro del programa)
        porque estoy dentro de una funcion llamada "main" con propiedad "async" */
        async function pregunta() { 
            let respuesta = await input("Tirar los Dados: (Responde S/N) "); /*hago la pregunta*/
        if(respuesta.toLowerCase() === "s") { /* la respuesta verifica si esta en miniscula*/
            
        // Creo mi array
         const dados = ["1", "2", "3", "4", "5", "6", "PIERDES TURNO"];

        /* Hago "Math.floor" para redondear a numeros enteros los elementos del array. 
        (no lo hago con "Math.round", porque me genera en algunas ocasiones "Undefined") */

        /* El Math.random genera aleatoriamente pero para que recorra todo el array hasta 
        el final uso "length"*/
        // Debe multiplicarse por el array (Es decir por la cantidad de elementos dentro del array)
        const crearAleatoriedad = Math.floor(Math.random() * dados.length);
        const crearAleatoriedad2 = Math.floor(Math.random() * dados.length);

         // Creo variable llamando el array y la variable del random
        const dadoI = dados[crearAleatoriedad];
        const dadoII = dados[crearAleatoriedad2];

        // Imprimo
        console.log("¡ESTOS SON TUS NUMEROS!");
        console.log("Dado I: " + dadoI);
        console.log("Dado II: " + dadoII);

        }else {
            console.log("Que pena que no quieras jugar")
            process.exit(); /*Cierra mi programa */
        }
        
    }
    await pregunta(); /*llama la función*/

         }
    


    



    rli.close(); /*Cierra el rli*/
};

main(); /* cierra la funcion "main"*/