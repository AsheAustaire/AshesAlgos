function primeFactors(n) {

  while (n % 2 === 0) {
    console.log(n);
    n = n / 2;
  }

  for(let i = 3; i <= Math.sqrt(n); i+= 2) {

 while(n % i === 0) {
      console.log(i);
      n = n / i
    }

  }
  console.log(n);
}

primeFactors(600851475143)
