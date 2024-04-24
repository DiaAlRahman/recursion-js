let power = require('./power.js');


// Test case 1: Exponent is 0
console.log(power(2, 0)); // Expected output: 1

// Test case 2: Exponent is 1
console.log(power(2, 1)); // Expected output: 2

// Test case 3: Exponent is a positive number
console.log(power(2, 3)); // Expected output: 8

// Test case 4: Exponent is a negative number
console.log(power(2, -2)); // Expected output: 0.25

// Test case 5: Base is a negative number
console.log(power(-2, 4)); // Expected output: 16

// Test case 6: Base is 0
console.log(power(0, 5)); // Expected output: 0const power = require('./power');

// Test case 1: Exponent is 0
console.log(power(2, 0)); // Expected output: 1

// Test case 2: Exponent is 1
console.log(power(2, 1)); // Expected output: 2

// Test case 3: Exponent is a positive number
console.log(power(2, 3)); // Expected output: 8

// Test case 4: Exponent is a negative number
console.log(power(2, -2)); // Expected output: 0.25

// Test case 5: Base is a negative number
console.log(power(-2, 4)); // Expected output: 16

// Test case 6: Base is 0
console.log(power(0, 5)); // Expected output: 0

// Test case 7: Base and exponent are both 0
console.log(power(0, 0)); // Expected output: 1

// Test case 8: Base is a decimal number
console.log(power(1.5, 2)); // Expected output: 2.25

// Test case 9: Exponent is a decimal number
console.log(power(2, 0.5)); // Expected output: 1.4142135623730951