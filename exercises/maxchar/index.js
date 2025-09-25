// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
//     const map= new Map()
//     for(let char of str){

//         if(map.has(char)){
//             map.set(char,map.get(char)+1)
//         }else{
//             map.set(char,1)
//         }
//     }
//     let maxValueArr= [];
//     for(let [key,value] of map.entries()){
//       maxValueArr.push(value)
//     }

//     const sortedArr= maxValueArr.sort((a,b)=>a-b);

//     const maxNumberFound= sortedArr[sortedArr.length-1]


//    const findKey=(value)=>{

    
//       for(let [key,val] of map.entries()){

//         if(val===value){
//             return key
//         }
//       }
      
//    }
//    return findKey(maxNumberFound)

 const map = {};
 let max=0 ;
 let maxChar;
 for ( let char of str){
    if(map[char]){
        map[char]=map[char]+1
    }else{
        map[char]=1
    }
 }
  
 for(let key in map){
    if(map[key]>max){
        max=map[key];
        maxChar=key
    }
    // console.log(max,maxChar)
 }
 return maxChar
}
console.log(maxChar("eeoufddfg22565555"))

module.exports = maxChar;
