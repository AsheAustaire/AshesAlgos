
function smallestMultuple(range) {

  for(let i = 2; i <= Infinity; i++) {
  
    for(let i2 = 1; i2 <= range; i2++) {
  
      if(i % i2 === 0) {
        if(i2 === range) {return i}
        continue
      } else { break }
  
    }

  }

}
console.log(smallestMultuple(20));

