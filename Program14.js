const char = 'E'; 


const lowerChar = char.toLowerCase();

if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
  console.log(`${char} is a vowel.`);
} else if (lowerChar >= 'a' && lowerChar <= 'z') { 
  console.log(`${char} is a consonant.`);
} else {
  console.log(`${char} is not an alphabet.`);
}