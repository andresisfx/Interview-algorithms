// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const cleanedStr1=stringA.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/g,"").toLowerCase();
    const cleanedStr2=stringB.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/g,"").toLowerCase();
     if(cleanedStr1===cleanedStr2){
        return false
     }
    const mapA= new Map();
    const mapB= new Map();
    
    for(let char of cleanedStr1){
      
          if(!mapA.get(char)){

              mapA.set(char,1)
          }else{
              mapA.set(char,mapA.get(char)+1)

          }

    }
    for(let char of cleanedStr2){
       
          if(!mapB.get(char)){

              mapB.set(char,1)
          }else{
              mapB.set(char,mapB.get(char)+1)

          }

    }
    console.log(mapA)
    console.log(mapB)
    
    for(let [key,value] of mapA.entries()){
       
       if(mapA.size!==mapB.size){
        return false
       } 
       if(mapB.get(key)||mapA.get(key)!==value){
        return false
       }
    }
    return true
}
console.log(anagrams('rail safety', 'fairy tales')) 
console.log( anagrams('RAIL! SAFETY!', 'fairy tales')) 
console.log(anagrams('Hi there', 'Bye there')) 
console.log(anagrams('hello', '')) 
module.exports = anagrams;
