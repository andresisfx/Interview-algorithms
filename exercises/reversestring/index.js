// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let arr=str.split("").reverse().join("")
    // return arr
    // let reversed= "";
    // for(char of str){
    //   reversed = char + reversed;
    // }
    // return reversed

  return str.split("").reduce((rev,char)=>{
    return rev =  char + rev 
  },"")
    
}

console.log(reverse('malajunta'))

module.exports = reverse;