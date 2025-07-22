const numberToCheck = 15351; 

let originalNumber = numberToCheck;
let sumOfPowers = 0;


let tempNumberForDigits = originalNumber;
let numberOfDigits = 0;
while (tempNumberForDigits > 0) {
    tempNumberForDigits = Math.floor(tempNumberForDigits / 10);
    numberOfDigits++;
}


let tempNumberForSum = originalNumber;
while (tempNumberForSum > 0) {
    let digit = tempNumberForSum % 10;
    sumOfPowers += Math.pow(digit, numberOfDigits);
    tempNumberForSum = Math.floor(tempNumberForSum / 10);
}


if (sumOfPowers === originalNumber) {
    console.log(`${originalNumber} is an Armstrong number.`);
} else {
    console.log(`${originalNumber} is not an Armstrong number.`);
}