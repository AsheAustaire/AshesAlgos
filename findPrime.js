
function findPrime(num) {
  
  let count = 0;


  for( let i = 1; i < Infinity; i++) {
    
    if ( i === 2 ) { 
      count += 1;
      if (num === 1) {return 2}
      else {continue;}
    }
    if( i % 2 != 0 ){ 
      
      for(let i2 = 2; i2 < i; i2++ ) {
        if(i % i2 === 0 ) { break }
        

        if(i2 === i - 1) {
          count += 1;   
          if (count === num) { return i }
        }
        
        
      }

    }
    
  }  

}

console.log(findPrime(10001));


