// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //*steps to solve:
    // convert number to string
    //if  the number is < 0 (negative) , we will reverse it and put "-" 
    // create a recursion function if number ends with 0 remove last char
    const verifyNegative=(arr)=>{
    const removedMinusArr= arr.slice(1)
    let result=""
    const prosecedArr= removedMinusArr.reduce((rev,char)=>{
        rev=char+rev
       return result= rev
     },"")
    return "-"+ prosecedArr
    }

    let cleanedArr=[]
    const removeZero= (arr)=>{
       if(arr[arr.length-1]==="0"){
        cleanedArr= arr.slice(0,arr.length-1);
        return removeZero(cleanedArr)
      
       }else{
        return cleanedArr
       }
    }
    const reverseNormal=(arr)=>{  
      let result=""
      arr.reduce((rev,char)=>{

        rev= char+rev 
        return result = rev
      },"")
      return result
    }
  const strArr= n.toString().split("");


  if(strArr[0]==="-"){
    if( strArr[strArr.length-1]==="0"){

        const removedZeroArr= removeZero(strArr)

        return verifyNegative(removedZeroArr)
      }else{
      return verifyNegative(strArr)
      }
  }else if( strArr[strArr.length-1] === "0"){
      const removedZeroArr= removeZero(strArr);

     return reverseNormal(removedZeroArr)


  }else{
    return reverseNormal(strArr)
  }
  
}  

console.log(reverseInt(157))

module.exports = reverseInt;
