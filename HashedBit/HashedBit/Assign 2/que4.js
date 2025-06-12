/*
 Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding
  digits. So, for a number n1= 06 and n2 = 34,
   you'll do (6*4)+(0*3) = 24.
*/
function sumOfDigitProducts(n1, n2) {
  let sum = 0;

  while (n1 > 0 || n2 > 0) {
    let digit1 = n1 % 10;
    let digit2 = n2 % 10;

    sum += digit1 * digit2;

    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}


console.log(sumOfDigitProducts(6, 34));       //  24
console.log(sumOfDigitProducts(123, 456));    //  (3*6)+(2*5)+(1*4) = 18 + 10 + 4 = 32
console.log(sumOfDigitProducts(89, 7));       //  (9*7)+(8*0) = 63 + 0 = 63
