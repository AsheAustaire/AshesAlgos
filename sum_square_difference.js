function sumOfSquares(range) {

  function sumOfSquaresRange(range) {
    
    let sum = 0;
    
    for(let i = 1; i <= range; i++) {
    
      sum += square(i);
      
    }

    return sum
 
  }

  function squareofSumRange(range) {

    let sum = 0;

    for (let i = 1; i <= range; i++) {

      sum += i;

    }
    
    return square(sum);

  }

  function square(num) {
    return num * num;
  }

  return squareofSumRange(range) - sumOfSquaresRange(range);

}

console.log(sumOfSquares(100));
