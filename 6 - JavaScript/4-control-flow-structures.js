// Control Flow Structures
// 1. Conditional Statements: Allows us to execute different blocks of code based on a conditions.
// 2. Looping Statements:

// 1. Conditional Statements
// Allow us to execute different blocks of code based on a condition.
// if, else if, else statement
// {} - Code Block
// () - Conditional Block

/* 
let temperature = -2;
if (temperature < 0) {
  console.log("It's freezing!");
  console.log("Stay indoors and drink hot chocolate.");
}
*/

/*
let temperature = 15;
if (temperature < 0) {
  console.log("It's freezing!");
  console.log("Stay indoors and drink hot chocolate.");
} else if (temperature >= 0 && temperature <= 19) {
  // Range: 0 - 19
  console.log("It's cool outside.");
}
*/

let temperature = 22;
if (temperature < 0) {
  console.log("It's freezing!");
  console.log("Stay indoors and drink hot chocolate.");
} else if (temperature >= 0 && temperature <= 19) {
  // Range: 0 - 19
  console.log("It's cool outside.");
} else {
  console.log("It's warm outside.");
}

// For Loop
/*
    1st: Vaariaable Initialization.
    2nd: CVondition Expression.
    3rd: Increment/Decrement.
*/
for (let i = 1; i <= 3; i++) {
    console.log("For Loop Count:", i);
}

// While Loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}