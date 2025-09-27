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
    

let newArr=[]
const numberOfElements = Math.ceil(array.length/size)+1
console.log(numberOfElements)
    recurringArray(array)
   function recurringArray(array){

        if(newArr.length>=size){
            return 
        }else{

        let  minArr= [];
        for(let i =0;i<numberOfElements;i++){
           
                minArr.push(array[i])
           
              
        }
        
            newArr.push(minArr);
            recurringArray(array.slice(numberOfElements-1,array.length))
          console.log("aqui",array.slice(numberOfElements-1,array.length))
        }
    }      
    return newArr
}

console.log(chunk([2,5,8,9,6,3,2,5,8,7,65,6,5,8,6,0],5))
module.exports = chunk;
