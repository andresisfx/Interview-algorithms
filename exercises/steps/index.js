// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
  //* this solution doesnt pass the test
    // let str=""
    // for(let i = 0;i<n;i++){
    //     str=str+" ";
    //   for(let j =0;j<=i;j++){
    //     str= str+"#";
    //   }
    //   for(let k =n-1;k>i;k--){
    //     str= str+"-";
    //   }
    //   str= str + "\n"
    // }
    // console.log(str)

    //*second solution
    // for (let row = 0; row < n; row++) {
      
    //   let stair=''
    //   for (let column = 0; column < n; column++) {
    //     if(column<=row){
    //       stair+="#"
    //     }else{
    //       stair+="-"
    //     }
        
    //   }
    //   console.log(stair)
    // }
  
   

// }


//*recurtion solution
function steps(n,row=0,stair="") {
  if(n===row){
    return
  }

  if(n===stair.length){
    console.log(stair)
    return steps(n,row + 1)
  }
  
  if(stair.length <= row){
    stair  += "#"
  }else{
    stair += " "
  }

  steps(n,row,stair)

}
steps(3)
module.exports = steps;
