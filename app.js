/* - Escribe una función que reciba 2 parámetros
   - Parámetro 1 - Un string
   - Parámetro 2 - Un array de strings
- La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];`
   - `bigWords('bocina', myArray);`*/

let myArray=['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
let palabra = 'banco';

   function bigWords(palabra, myArray){
    let palabrAEvaluar= myArray[0];
    let newArray=[];
    for(let i =0; i<myArray.length; i++){
        if(palabrAEvaluar.length > palabra.length){
           newArray.push(myArray[i]);
        }//if
    }//if

    return newArray;
   }// cierre de funcion

   let resultado = bigWords(palabra, myArray);
    console.log(resultado);
  

   /*2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

- Escribe una función que reciba 1 parámetro
   - Parámetro 1 - Un array de strings
- La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento **<li></li>**.
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'escritorio'];`
   - `printArray(myArray);`
   - Output - `<li>insecto</li>
               <li>bootcamp</li>
               <li>escritorio</li>*/
const lista = document.getElementById("lista");
let array2 = ['insecto', 'bootcamp', 'escritorio'];

function imprime(array2){
    for(let k=0; k<array2.length; k++){
        lista.insertAdjacentHTML=("afterbegin, `<li>${array2[k]}</li>`");
        //lista.insertAdjacentHTML
    }
}

imprime(array2);


