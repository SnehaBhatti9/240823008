let number = 2345;
let digitCount = 0;

if (number === 0) {
  digitCount = 1;
} else {
 
  let tempNumber = Math.abs(number); 
  while (tempNumber > 0) {
    tempNumber = Math.floor(tempNumber / 10); 
    digitCount++;
  }
}

console.log(`The number ${number} has ${digitCount} digits.`);