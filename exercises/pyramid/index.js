// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
    //*First solution 
//     for (let row = 0; row < n; row++) {
//        let stair=""
      
//         for (let column = 1; column < (n*2); column++) {
//             let middle= Math.ceil(((n*2)-1) /2)
            
//             if(column < (middle - row) ||column > (middle + row)){
//                 stair+= " "
//             }else{
//                 stair +="#"
//             }

//         }
//      console.log(stair)
//    }
//}
  //*recusion solution 
 function pyramid(n,row=0,stair="") {
    if( n === row){
        return
    }

    if( stair.length===((n * 2)-1 ) ){
       console.log(stair)
       return pyramid(n,row + 1)
    }
    const middle= Math.ceil(((n*2)/2)-1)
    // console.log(middle)
    if( stair.length< middle - row || stair.length > middle + row ) {
        stair += "-"
    }else{
        stair += "#"
    }
    pyramid(n,row,stair)

 }

pyramid(2)
module.exports = pyramid;
