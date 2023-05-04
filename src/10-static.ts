console.log("Math.PI",Math.PI);
console.log("Math.max",Math.max(1,8,5,100,55));

class MyMath {
  static readonly PI = 3.14;

  static max(...number: number[]){
    return number.reduce((max,item)=> max >= item ? max : item,0);
    //return number.reduce((max,item)=> max >= item ? max : item); // si le sacas el 0 el console de la linea 18 funciona bien
  }
}


console.log('MyMath.PI',MyMath.PI);
console.log('MyMath.max',MyMath.max(1,8,5,100,55));
const numbers = [1,8,5,100,55,2000];
console.log('MyMath.max',MyMath.max(1,8,5,100,55));
console.log('MyMath.max',MyMath.max(-1,-5,-2));
