function largestPalindromeFactor() {

  let currentGreatest = 0;

  for(let i = 100; i <= 999; i++) {
    for( let i2 = 100; i2 <= 999; i2++) {
      if ( checkPalindrome((i * i2)) ) {
        if (currentGreatest < i * i2) {
          currentGreatest = i * i2;
        }
      }
      
    }
  }

  return currentGreatest

  function checkPalindrome(num) {

    let numString = String(num);
    let checkArr = [];
    let newString = ""

    for( let i = 0; i < numString.length; i++) {

      checkArr.unshift(numString[i]);

    }

    newString = checkArr.join("");
    
    if (newString === numString) { return true }
    else {return false}
    
  }
  
  function returnGreater(num, num2) {

    let greatestNum = num > num2 ? num : num2;
    return greatestNum;
    
  }
  
}

console.log(largestPalindromeFactor());


