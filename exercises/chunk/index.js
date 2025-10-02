// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //  let resultArr=[]
  //  recurringArr(array)
  //  function recurringArr(arr){
  //     let newArr=[]
  //     if(arr.length===0){
  //       return
  //     }else{
  //           for (let i = 0; i < size; i++) {
  //                 if(arr[i]===undefined){
  //                   break
  //                 }else{
  //                   console.log("aquí arr[i]",arr[i])
  //                   newArr.push(arr[i])
  //                 }
                
                
  //           }
  //           resultArr.push(newArr)
            
  //       }
  //       console.log("Aqui new arr",newArr)
  //       recurringArr(arr.slice(newArr.length,arr.length+1))
  //  }
  // return resultArr


  //*-----------------------SECOND SOLUTION---------------------
  //  const chunked=[];
  //  for(let element of array){
  //     const last= chunked[chunked.length-1]
  //     if(!last||last.length===size){
  //        chunked.push([element])
  //     }else{
  //       last.push(element)
  //     }
  //  }
  //  return chunked

  //*-----------------------THIRD SOLUTION---------------------

  const chunk= []
  let index = 0;

  while (index<array.length) {
    chunk.push(array.slice(index, index + size))
    index += size
  }
  return chunk
}

console.log(chunk([2,5,8,9,6,3,2,5,8,7,65,6,5,8,6,0],20))
module.exports = chunk;
