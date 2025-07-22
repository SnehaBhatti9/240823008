const n = 10; 

let a = 0;
let b = 1;
let nextTerm;

console.log('Fibonacci Series:');


if (n >= 1) {
  console.log(a);
}
if (n >= 2) {
  console.log(b);
}


for (let i = 3; i <= n; i++) {
  nextTerm = a + b;
  console.log(nextTerm);
  a = b;
  b = nextTerm;
}