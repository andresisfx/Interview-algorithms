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
  const aCharMap=buildCharMap(stringA)
  const bCharMap=buildCharMap(stringB)
   
  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length ){
    return false
  }

  for(let char in aCharMap){
      if( bCharMap[char]!==aCharMap[char]){
        return  false
      }
  }
  return true
}
function buildCharMap(str){
    const mapChar ={};

    for(let char of str.replace(/[^\w]/g).toLowerCase()){  // Alt + 94 para escribir "^""
        mapChar[char]=mapChar[char] + 1 ||1
    }
    return mapChar
}    
console.log("1",anagrams('rail safety', 'fairy tales')) 
console.log( "2",anagrams('RAIL! SAFETY!', 'fairy tales')) 
console.log("3",anagrams('Hi there', 'Bye there')) 
console.log("4",anagrams('hello', '')) 
module.exports = anagrams;
