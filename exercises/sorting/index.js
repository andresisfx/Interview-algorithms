// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
 
     for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length-1-i; j++) {
            
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
                
            }
        }
        
        
     }
     return arr
}

function selectionSort(arr) {
   
    for (let i = 0; i < arr.length; i++) {
       
       for (let j = 0; j < arr.length; j++) {
       
          while (arr[j]>arr[j+1]) {
            [arr[j],arr[j+1]] = [arr[j+1] , arr[j]]
            j--
          }
       }
        
    }
    return arr
}

function mergeSort(arr) {
  // Caso base: un arreglo de 0 o 1 elemento ya está ordenado
  if (arr.length <= 1) {
    return arr;
  }

  // Dividir el arreglo en dos mitades
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Ordenar recursivamente y luego fusionar
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Comparar elementos de ambos arreglos
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Agregar los elementos restantes
  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}


module.exports = { bubbleSort, selectionSort, mergeSort, merge };
