/* 

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2

For example, 3SQ + 4SQ = 5SQ

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

const mainLoop = 10000

function specialPythTrip(sum) {
  
  for(let c = 1; c <= mainLoop; c++) {
    for(let a = 1; a < c; a++) {      
      for(let b = 1; b < c; b++) {
        if (tripletCheck(a, b, c) && a < b) {
          if(a + b + c === 1000) {
            console.log(a,b,c,tripletCheck(a, b, c));        
          }
        }
      }
    }
  }

  function tripletCheck(a, b, c) {
    return (a * a) + (b * b) === (c * c)
  } 
  
  return 

} 

console.log(specialPythTrip(1000));
