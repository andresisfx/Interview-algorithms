// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n , arr=[0,1]) {
    // let arr=[0]
    // for (let i = 0; i <= n ;i++) {
    //     let count=0
    //     let next= arr[i-1]?arr[i-1] + arr[i]:1
    //     arr.push(next)
        

    // }
    // return arr[n]

    //*rRecursion solution
    // if(n<2){
    //     return n
    // }
    // else if(arr.length > n){
    //     console.log("entreé al if")
    //     return 
    // }else{
    //     const newFib= n >= 1?arr[arr.length-1]+arr[arr.length-2]:1
    //     console.log("aquí new",newFib)
    //     arr.push(newFib)
    //    fib(n,arr)
    // }

    
    // return arr[n]

    //*Short solution 
    // if(n<2){
    //     return n
    // }

    // return fib(n-1)+ fib(n-2)
// }
    //*Memoization solution 
   function memoize(fn){
     
    const cache={}
    return function (...args){
       if(cache[args]){
        return cache[args]
       }
       const result= fn.apply(this,args);
       cache[args]=result

       return result 
    }

      
    }
    
    function slowFib (n){

        if(n<2){
            return n
        }
         //! here we are calling the memoized version
        return fib(n-1)+ fib(n-2)
    }
     
    const fib= memoize(slowFib)


console.log(fib(1))

module.exports = fib;
