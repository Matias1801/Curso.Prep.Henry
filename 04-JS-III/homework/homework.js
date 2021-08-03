// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
 return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
   var arreglo=[];
   for (i=0; i<array.length;i++){
    arreglo[i]=array[i]+1;
   }
     return arreglo;
} 


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   array.push(elemento); 
  return array;
} 


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  // metodo ".join(' ')" 
   
 return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

// metodo ".includes()"

  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let counter=0;
  for (i=0; i<numeros.length; i++){
    counter += numeros[i];
  }
  return counter;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //resultadosTest=[1,2,3]
  let counter=0;
  for(var i=0; i<resultadosTest.length; i++){
      counter += resultadosTest[i]
  } 
  return counter/ resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
 
 //array.prototype.Math.max , el siguiente código:
//return Math.max.apply(null, numeros); 
//se puede realizar sin el Math.max.apply, con "if" y "for".
// ejemplo= var numeros=[2,1,6,4]
var nummasgrande= 0;
for (i=0; i<numeros.length;i++){
  if(nummasgrande<numeros[i]){
    nummasgrande=numeros[i]; //0 es mas peq que 2, se cumple la cond y nummas.. ahora =2 , 2 es mas grande que 1,por lo tanto se mantiene 
    // en =2, después sigue 6 que es mas grande que 2, por lo tanto ahora numm... es =6, sigue que es mas pequeño así que numm.. se 
    // mantendra en =6. 
  }
}
return nummasgrande;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí: // multiplicarArgumentos(2,3,4)
  
   if (arguments.length<1){
    return 0;
   } 
  if( arguments.length===1){
    return arguments[0];
   }
   let cont=1;
   for (i=0; i<arguments.length; i++){
     cont = cont * arguments[i];
    } 
    return cont;   
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont=0;
  for (i=0; i<arreglo.length; i++){
    if (arreglo[i]>18){
       cont = cont+1;
      } 
    } 
    return cont;
   
}

 function diaDeLaSemana(numeroDeDia){
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  // 1=d,  2=l,  3=m,  4=mierc,  5=j,  6=v,  7=s.  
  //  1 ,   2 ,   3 ,    4    ,   5  ,  6 ,   7
 if (numeroDeDia===1 || numeroDeDia===7){
  return "Es fin de semana";
 } else if( numeroDeDia>1 && numeroDeDia<7){
   return "Es dia Laboral";
  } 
 
 }

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // pasar number a string, para poder acceder al primer elemento del string.     
  primerelem=0;
  primerelem=n.toString()[0];
  
  if(primerelem==9){
    return true;
   } else {
    return false;
   }
   
  }



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
 //arreglo=["hola", "hola", "hola", "hola"];
 //arreglo=["hola", "azul", 23, "casa"];
 for(i=0; i<arreglo.length; i++){
  if(arreglo[i]=== arreglo[i+1] ){
    return true;
  } else {
    return false;
  }
 }  

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  // [enero, dic, marzo ....]
  // devolver arreglo con ["Enero", "Marzo","Noviembre"]
 var array2=[];
 for ( var i=0; i<array.length; i++){
  if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
    array2.push(array[i]);
    } 
  
   }  
  if (array2.length<3){
  return "No se encontraron los meses pedidos";
  }  else {
    return array2;
}

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  // [0,1,2.... 200]       
 var nuevoarray=[];
 for (var i=0; i< array.length; i++){
   if(array[i]>100){
    nuevoarray.push(array[i]);
   }
 } return nuevoarray;

 }


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código: 
var nuevoarray= [];
var suma= numero;
for (i=0;i<10;i++){
    suma=suma +2; 
      if(suma ===i){
        break;
      } else 
      { nuevoarray.push(suma);
  }
  } //cierre de for
  if (i<10){
  return "Se interrumpió la ejecución";
 } else {
  return nuevoarray;
}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
 var suma=numero ;
var nuevoarray = [];
for (i = 0;i < 10; i++) {
   if (i == 5){
      continue;
    } else {
   suma = suma +2 ;
   nuevoarray.push(suma);
   }
   }
  return nuevoarray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
