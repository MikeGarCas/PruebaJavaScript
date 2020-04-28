//Arreglo y SubArreglo - ejercicio 1

//  Resultado de la suma de los números - ejercicio 2
function numSum(n, m){
    var sum = 0;
    for(i = n; i <= m; i++){
        sum += i; 
    }
    console.log(sum)
}
numSum(3,6);

// función para quitar duplicados -3
var myArr = [ 1, 2, 3, 'foo', 'bar', 'Hello World', 2, 3, 'bar', 1, 4, 5];
const newArr = []
const myObj = []

myArr.forEach(el => !(el in myObj) && (myObj[el] = true) && newArr.push(el))
console.log(newArr)

// Encontrar la n-ésima de un número en un arreglo forma 1 - ejercicio 4

var myArray = [ 7, 2, 5, 9, 8, 3];
var k = 2;

for(var i = 0; i < 10; i++ ){
  k += k;
  for(var j = 0; j < myArray.length; j++){
    if(myArray.indexOf(k) > 0){
      console.log(k)
    }
  }
}

// Encontrar la n-ésima de un número en un arreglo forma 2 - ejercicio 4
var myArray = [ 7, 2, 5, 9, 8, 3];
var k = 2;
var numero = myArray.find(elemento => elemento == Math.pow(k,3));
console.log(numero);

// parentesís balanceados - ejercicios 5

const parentesis = function (cadena){
    const pila = [];
    for(let parent of cadena){
      if(parent == '('){
        pila.push(parent)
      }
  
      if(parent == ')'){
        pila.pop();  
      }  
  
      if(parent == '['){
        pila.push(parent)
      }
      if(parent == ']'){
        pila.pop()
      }
    }
    return pila.length == 0
  }
  console.log(parentesis('(()[)'));

  // Clases y números de salones ejercicio 6
  
function horarioClases(horario){
    contador = 0;
    for(var i = 0; i < horario.length; i++){
      var primerH = horario[i].primeraClase.horaInicio
      var segH = horario[i].primeraClase.horaFin
      var a = primerH.replace(/:/g,'')
      var b = segH.replace(/:/g,'')
      console.log('a',a)
      console.log('b',b)
  
      //segundaClase
      var primerH2 = horario[i].segundaClase.horaInicio
      var segH2 = horario[i].segundaClase.horaFin
      var c = primerH2.replace(/:/g,'')
      var d = segH2.replace(/:/g,'')
      console.log('c',c)
      console.log('d', d)
      
  
      //tercera horarioClases
      var primerH3 = horario[i].terceraClase.horaInicio
      var segH3 = horario[i].terceraClase.horaFin
      var e = primerH3.replace(/:/g,'')
      var f = segH3.replace(/:/g,'')
      console.log('e', e)
      console.log('f', f)
    
      if ( (a > c && a > e) && (b < d && b < f) ){
        contador++;
      }
      if( (a < c && a < e) && (b > d && b > f)){
        contador++;
      }
      if((c < a && c < e) && (d > d && d > f)){
        contador++;
      }
  
      if((c > a && c > e) && (d < d && d < f)){
        contador++;
      }
  
       if((e > a && e > c) && (f < d && f < b)){
        contador++;
      }
  
      if((e < a && e < c) && (f > d && f > b)){
        contador++;
      }
    }
    console.log(contador);
  }
  
  var horario = [{
    "primeraClase":{
      "horaInicio": "11:00",
      "horaFin" : "14:00"
    },
    "segundaClase":{
      "horaInicio": "12:00",
      "horaFin" : "15:00"
    },
    "terceraClase":{
      "horaInicio": "14:30",
      "horaFin" : "16:00"
    },
  }]
  horarioClases(horario);




