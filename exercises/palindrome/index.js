// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    console.log(str.split("").join("") )
    console.log(str.split("").reverse().join("") )
    //*first solution
    // return (str === str.split("").reduce((rev,char)=>{
    //     return rev = char +rev 
    // }))
    

    //*Second solution
    // let reversed=""
    // for (let i = str.length-1; i >= 0; i--) {
    //     reversed= reversed + str[i]
        
    // }
    // console.log("here reversed", reversed)
    // return reversed === str

    //* third solution
    // this method make double comparison so it´s not eficient but is a valid solution
    return str.split("").every((char,i)=>{
        return char === str[str.length-1-i]  
    })
}
const str= "aba aba"
console.log(palindrome(str))
module.exports = palindrome;
