
var a = 20, b = 28, gcd;
for (i = 1; i <= a && i <= b; i++)
{
    if (a % i == 0 && b % i == 0) 
    {
        gcd = i;
    }
}
console.log(gcd);