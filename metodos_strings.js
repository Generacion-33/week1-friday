//propiedad
const cadenaDeTexto = 'Hola soy una cadena de texto'

//string como array comparten esta propiedad: length

console.log(cadenaDeTexto);
console.log(cadenaDeTexto.length);
console.log(cadenaDeTexto[28 - 1]);//o
console.log(cadenaDeTexto[cadenaDeTexto.length - 1]);//o
console.log(cadenaDeTexto[cadenaDeTexto.length]);//undefined

//METODOS PARA STRING

//.indexOf(valor,indice) // El indexOf, recorre de izquierda a derecha y nos va a devoler la posicon del caracter que estemos especificando. Tener que nos devolver la primer coinicidencia. En caso que no se encuentre nos retornara -1

console.log('--indexOf--');

console.log(cadenaDeTexto.indexOf('H'));//0
console.log(cadenaDeTexto.indexOf('soy'));//5
console.log(cadenaDeTexto.indexOf('sofy'));//-1

console.log('--indexOf, con indice--');
console.log(cadenaDeTexto.indexOf('Hola', 7));//-1
console.log(cadenaDeTexto.indexOf('soy', 6)); //-1
console.log(cadenaDeTexto.indexOf('soy', 4)); //5
console.log(cadenaDeTexto.indexOf('d')); //15

//.lastIndexOf(valor,indice). El LastIndexOf, recorre de derecha a izquierda. es igual que el indexOf, con la diferencia que nos retorna la posicion del ultimo caracter del valor establecido. En caso que no lo encuentre, nos retornara -1

console.log('--lastIndexOf--');
console.log(cadenaDeTexto.lastIndexOf('soy'));
console.log(cadenaDeTexto.lastIndexOf('z')); //-1
console.log(cadenaDeTexto.lastIndexOf('de', 19)); //15
console.log(cadenaDeTexto.lastIndexOf('de')); //20


//includes(valor, indice) - Retorna true si la cadena especificada o caracter esta en el string. Caso contrario false
console.log('--includes--');
console.log(cadenaDeTexto.includes('Hola'));
console.log(cadenaDeTexto.includes('sofy'));
console.log(cadenaDeTexto.includes('Hola', 3));
console.log(cadenaDeTexto.includes('HOLA'));

//UPPERCASE
console.log('--UPPERCASE--');
const mayusuculas = cadenaDeTexto.toUpperCase()
console.log(mayusuculas);

//LOWERCASE
console.log('--LOWERCASE--');
const minusculas = cadenaDeTexto.toLowerCase()
console.log(minusculas);

//starsWith(valor,indice) - Retorna true, en caso de comenzar con una cadena especificada, o false en caso de no comenzar con ella
console.log('--startsWith--');
console.log(cadenaDeTexto.startsWith('Hola soy Jorge')); //false
console.log(cadenaDeTexto.startsWith('H')); //true
console.log(cadenaDeTexto.startsWith('Hola soy ')); //true
console.log(cadenaDeTexto.startsWith('Hola soy', 2)); //false
console.log(cadenaDeTexto.startsWith('Hola soy', 0)); //true (el cero es por default)

//endsWith(valor,indice) - Retorna true, en caso de finalizar con una cadena especificada, o false en caso de no finalizar con ella.
console.log('--endsWith--');
console.log(cadenaDeTexto.endsWith('texto'));//true
console.log(cadenaDeTexto.endsWith('texto', 26));//false
console.log(cadenaDeTexto.endsWith('texto', 28));//true
console.log(cadenaDeTexto.endsWith('text', 27));//true
console.log(cadenaDeTexto.endsWith('cadena', 19));//true

//charAt(indice). Retornara el valor que del indice en esa posicion. Si no existe retornara un string de logitud 0( string vacio) ""
console.log('--charAt--');
console.log(cadenaDeTexto.charAt(0)); //H
console.log(cadenaDeTexto.charAt(28)); //''
console.log(cadenaDeTexto.charAt(28).length); //0
console.log(cadenaDeTexto.charAt(3)); //a
console.log(cadenaDeTexto.charAt(4)); //' '
console.log(cadenaDeTexto.charAt(4).length); //1

//at(indice).  Retornara el valor que del indice en esa posicion. Si no existe retornara un undefined. Acepta numeros negativos
console.log('--at--');
console.log(cadenaDeTexto.at(0));//H
console.log(cadenaDeTexto.at(28));//undefined
console.log(cadenaDeTexto.at(-1));//o
console.log(cadenaDeTexto.at(-4));//e

//split(separador) Me convierte un string en un array. El split recibe nada mas y nada menos que un separador

const arrayDeString = cadenaDeTexto.split(' ')
console.log(arrayDeString);
const newString = 'hola-soy-Carlos'
const arrayString2 = newString.split('-')
console.log(arrayString2[1]);

//subString(indiceInicial, indiceFinal) Nos retorna una subCadena. 
console.log(cadenaDeTexto.substring(5, 19));
console.log(cadenaDeTexto.substring(1, 4));