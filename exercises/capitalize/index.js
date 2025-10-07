// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
//     const arrStr= str.split(" ");
//    const modifiedArr= arrStr.map(element => {
//        return element= element.replace(element[0],element[0].toUpperCase())
//     });

    
//     return modifiedArr.join(" ")

//* Second option

  const words=[]
  for (let word of str.split(" ")){
   
    words.push(word[0].toUpperCase()+ word.slice(1))
  }
  return words.join(" ")
}
console.log(capitalize("esta es mi string"))
module.exports = capitalize;
