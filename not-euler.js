// a = 5;
// b = 10;

// No other variables, no methods, switch the values of a and b

// a = 00000000000000000000000000000101
// b = 00000000000000000000000000001010

// Setup
a = 5;
b = 10;
console.log("a = " + a);
console.log("b = " + b);
// Answer
// Bitwise
// a = b ^ a;
// b = b ^ a;
// a = b ^ a;
// Math
a += b;
b = a - b;
a -= b;
// Result
console.log("a = " + a);
console.log("b = " + b);