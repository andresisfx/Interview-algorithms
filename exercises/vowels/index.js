// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
//     let vowelsFinded=0
//   for(let char of str.toLowerCase()){
//     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u" ){
//        vowelsFinded += 1
//     }
//   }
//   return vowelsFinded

//*Second solution
// let counter=0
// let checker= ["a","e","i","o","u"]
//  for(let char of str.toLowerCase()){
//     if(checker.includes(char)){
//         counter += 1
//     }
//  }
//  return counter

//*third solution

  const matches = str.match(/[aeiou]/gi)
  return matches? matches.length:0
}
console.log(vowels(" los amigos iii"))
module.exports = vowels;
