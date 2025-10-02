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

    const mapA= new Map();
    const mapB= new Map();
    
    for(let char of cleanedStr1){
       if(cleanedStr2.includes(char)){
          if(!mapA.get(char)){

              mapA.set(char,1)
          }else{
              mapA.set(char,mapA.get(char)+1)

          }
       }else {
        continue
       }
    }
    for(let char of cleanedStr2){
       if(cleanedStr1.includes(char)){
          if(!mapB.get(char)){

              mapB.set(char,1)
          }else{
              mapB.set(char,mapB.get(char)+1)

          }
       }else {
        continue
       }
    }
    console.log(mapA)
    console.log(mapB)
    let verify
    for(let [key,value] of mapA.entries()){
       if(mapB.get(key)===mapA.get(key)){
        verify= true
       }else {
        verify=false
        
       }
       if(!verify){
        break
       }
    }
    return verify
}
console.log(anagrams('rail safety', 'fairy tales')) 
console.log( anagrams('RAIL! SAFETY!', 'fairy tales')) 
console.log(anagrams('Hi there', 'Bye there')) 
module.exports = anagrams;
