// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
     let vector =Array.from({length:n},()=>Array(n).fill(0))
     let value= 1;
     let startCol= 0;
     let endCol= n - 1;
     let startRow= 0;
     let endRow= n - 1;

     while(startCol<=endCol&&startRow<=endRow){
          for (let col = startCol; col <= endCol; col++) {
                vector[startRow][col]=value++;
               
          }
          startRow++
          for (let row = startRow; row <=endRow ; row++) {
               vector[row][endCol]=value++
               
          }
          endCol--
          for (let col = endCol; col >=startCol;  col--) {
               vector[endRow][col]=value++
               
          }
          endRow--
          for (let row = endRow; row >= startRow; row--) {
              vector[row][startCol]=value++
               
          }
          startCol++
     }
     return vector


     
}


console.table(matrix(5)) 
module.exports = matrix;
