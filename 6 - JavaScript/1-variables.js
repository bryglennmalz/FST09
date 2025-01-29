// JavaScript is a programming language. 

// This is a single-line comment.
/* 
This is a 
multi-line 
comment.
*/

console.log("Hello world!"); 

/*
Ways to create a variable:
1. let: The variable is mutable/changeable. This is a block scope.
2. var: The variable is mutable/changeable. This is a global scope.
3. const: The variable is not mutable. This is a block scope.
*/

let firstName = "John";
console.log("Firstname: ", firstName);
firstName = "Jane";
console.log("Firstname: ", firstName);

var lastName = "Doe";
console.log("Lastname:",lastName);
lastName = "Smith";
console.log("Lastname:",lastName);

// {} = Code Block
{
    var email = "janesmith@example.com";
    let username = "janesmith40";
    console.log("Username:", username);
}
console.log("Email: ", email);

const birthday = "01-24-1999";
console.log("Birthday:", birthday);
// birthday = "01-25-1999"; TypeError: Assignment to constant variable.

