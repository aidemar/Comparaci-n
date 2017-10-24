var comparar = function(arreglo1, arreglo2) {
  if(arreglo1.length !== arreglo2.length) {
    return false
  } else {
    document.write("Son iguales");
    for(var 1= 0; i < arreglo1.length; i +=1) {
      if(areglo1[i] !== arreglo2[i]){
          return false;

      }
    }
    return true;
  }
}
var array1 = [1,2,3,4,5,6,7,8,9,10];
var array2 = [1,2,3,4,5,6,7,8,9,10];

comparar(array1, array2);
