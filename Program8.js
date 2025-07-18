let originalNumber = 12222; 
let tempNumber = originalNumber;
let reversedNumber = 0;

while (tempNumber > 0) {
    let digit = tempNumber % 10; 
    reversedNumber = reversedNumber * 10 + digit;
    tempNumber = Math.floor(tempNumber / 10);
}

if (originalNumber === reversedNumber) {
    console.log(`${originalNumber} is a palindrome.`);
} else {
    console.log(`${originalNumber} is not a palindrome.`);
}