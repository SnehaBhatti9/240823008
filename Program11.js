let number = 12345; 
let sumOfDigits = 0;


let tempNumber = Math.abs(number); 

while (tempNumber > 0) {
    let lastDigit = tempNumber % 10; 
    sumOfDigits += lastDigit;      
    tempNumber = Math.floor(tempNumber / 10); 
}

console.log(`The sum of digits in ${number} is: ${sumOfDigits}`);