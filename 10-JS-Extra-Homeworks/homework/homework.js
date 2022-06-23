// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = []
  for (let clave in objeto) {
    array.push([clave, objeto[clave]])
  }
  return array
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let cuentaCaracteres = {}
  for (let i = 0; i < string.length; i++) {
    let caracterActual = string.charAt(i)
    let caracterActualVisto = (cuentaCaracteres[caracterActual] !== undefined)
    if (caracterActualVisto) {
      cuentaCaracteres[caracterActual] += 1
    }
    else {
      cuentaCaracteres[caracterActual] = 1
    }
  }
  return (cuentaCaracteres)
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayuscula = "";
  let minuscula = "";

  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayuscula = mayuscula + s[i];
    }
    else {
      minuscula = minuscula + s[i];
    }
  }
  return (mayuscula + minuscula)
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  str = str.split(" ");
  var arrayEspejo = [];
  for(var i = 0; i < str.length; i++){
    var palabra = "";
    for(var j = str[i].length - 1; j >= 0; j--){
      palabra += str[i][j];
    }
    arrayEspejo.push(palabra);
  }
   return arrayEspejo.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí  
  let numToString=numero.toString()
  if(numToString.split("").reverse().join("") == numero) {
    return "Es capicua" 
  } 
  else  {
    return "No es capicua" 
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  let cadenaModificada = ""
  for(var i=0; i < cadena.length; i++) {
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      cadenaModificada = cadenaModificada + cadena[i];
    } 
  }
  return cadenaModificada 
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  let asc = arr.sort((a,b) => a.length - b.length);
  return asc
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  let interseccion = arreglo1.filter(x => arreglo2.includes(x));
  return interseccion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};