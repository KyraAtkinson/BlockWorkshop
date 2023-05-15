// Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";
//


// if (String) {
//     console.log(true)
// } else{
//     console.log(false)
// }



// let the string be true 
// let the statement be "I am string"
// create a statemnt that will print true if "I am a sting" is a truthy statement.

let userString = 'true';
let statementName;
if (userString){
    statementName = userString;
} else {
    statementName = 'I am a string';
}
console.log(statementName);

// let the boolean value be false 
// let the statement determine if the value "false" is considered falsy (set it equal to eachother)
// if this is true the statement will print out "the boolean value false is falsy"

let boolean = 'The boolean value false is falsy';
let booleanName;
if (boolean){
    booleanName = boolean;
} else {
    booleanName = 'false';
}
console.log(booleanName);


// create an if/else statement
//if "null" is considered  false statement 
// the statement will output "the null value is falsy"
// set the nullValue = to null to determine if null is a falsy value. 

let nullValue = 'The null value is falsy';
let nullName;
if (nullValue){
    nullName = nullValue;
} else {
    nullName = 'null';
}
console.log(nullName);


// create an if/else statement
//if "undefined" is considered  falsy value 
// the statement will output "undefined is falsy"
// set the undeValue = to undefined to determine if undefined is a falsy value. 

let undeValue = 'undefined is falsy';
let undeName;
if (undeValue){
    undeName = undeValue;
} else {
    undeName = 'undefined';
}
console.log(undeName);


// create an if/else statement
//if "0" is considered  falsy value 
// the statement will output "The number 0 is falsy (the only falsy number)"
// set the numValue = to 0 to determine if 0 is a falsy value. 

let numValue = 'The number 0 is falsy (the only falsy number)';
let numName;
if (numValue){
    numName = numValue;
} else {
    numName = 0;
}
console.log(numName);


// create an if/else statement
//if "" is considered a falsy value 
// the statement will output "The empty string is falsy (the only falsy string)"
// set the empValue = to "" to determine if "" is a falsy value. 


let empValue = 'The empty string is falsy (the only falsy string)';
let empName;
if (empValue){
    empName = empValue;
} else {
    empName = "";
}
console.log(empName);