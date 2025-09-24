// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const keys= new Map()
    for(let char of str){

        if(keys.has(char)){
            keys.set(char,keys.get(char)+1)
        }else{
            keys.set(char,1)
        }
    }
    let maxValueArr= []
    for(let [key,value] of keys.entries()){
      maxValueArr.push(value)
    }

    const sortedArr= maxValueArr.sort((a,b)=>a-b);

    const maxNumberFound= sortedArr[sortedArr.length-1]


   const findKey=(value)=>{

    
      for(let [key,val] of keys.entries()){

        if(val===value){
            return key
        }
      }
      
   }
   return findKey(maxNumberFound)
  
}
console.log(maxChar("eeoufddfg22222222222"))

module.exports = maxChar;
