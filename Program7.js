let originalNumber = 12345;
let reversedNumber = 0;


while (originalNumber > 0) {
  let digit = originalNumber % 10; 
  reversedNumber = (reversedNumber * 10) + digit; 
  originalNumber = Math.floor(originalNumber / 10); 
}

console.log(reversedNumber); 