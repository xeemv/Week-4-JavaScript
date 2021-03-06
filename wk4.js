// ES6: Const and Let section --- video 1

var x = 10;
{ 
    let x = 2;
}
/* from line 2 - 4, this is considered a block. 
- Outside of this section, the x is still equal to 10.
- the 2 is only in existence inside the block.
- let = allows us to say w/in this block, x is equal to 2. 
- this does not impact the x outside of that block.

var x = 10;
{ 
    x = 2;
}
if you took out the let, then the x would still be considered 2 outside of that section
*/

/* var x = 10;
{ 
   var x = 2;
}
if we used the keyword var
   - that would change the original variable's value meaning var x = 10 (the original value) would now equal 2 and no longer 10 by using var x = 2 */


/* var x = 10;
{ 
   var x = 2;
}
constant = we cannot change the value of a variable once it is set. This is useful for when we have values that we want to give a name and then never change that value*/

const pi = 3.14159

console.log(pi);

// pi = 6; //this is where we were trying to change the variable

// console.log(pi);
/* this section from line 36 - line 38 will result in an error on the console.log:
----> "Uncaught SyntaxError: unterminated comment.... wk4.js:43 (this is the error line on our js file)"
This is because const does not allow us to change the value (reference line 30). */



//ES6: Template Literals:

// to start template literals are declared just like strings but instead of using single or double quotes; we wrap our text in backticks

let myString = `Hello
world
my name
is Xee.`; //still need a semicolon

// the template literal will take into account the spaces in here the new lines

console.log(myString);

// this will literally print the myString in the same way it looks from line 51 - 54


let anotherString = "Hello\nworld\nmy name\nis Xee.";

console.log(anotherString);
/* 
- what we used to have to do (line 63)
- we would have to use \n = it's an escape character for a new line.
- Once printed to the console.log, it would look identical to code myString's example above.
- this will literally print the myString in the same way it looks from line 51 - 54.
- code line 63 is more difficult to read in vscode or similar programs where as code lin 51-54 is much easier to read w/ the \n.
*/

let anotherString2 = "Hello" +
    '\nworld' +
    '\nmy name' +
    '\nis Xee.';

console.log(anotherString2);

/*
- due to difficulty reading code line 63
- ppl would concatenate the code like line 74 - 77
    - this is a lot of work and a lot of additional charactes
- this will literally print the myString in the same way it looks from line 51 - 54.
*/

/* interpolate = is just a fancy word for saying execute code inside a string or in a different language.
    - we can use interpolation in our template literals by wrapping any JavaScript we want to execute in curly braces preceded by a dollar sign.*/


console.log(`Six times five = ${5 * 6}`); 
/* 
- make sure to use backticks aka template literals!!!!
- the 5 * 6 is actual javascript
- the result should be: Six times five = 30
** very useful for anytime you have a string and you need to perform some kind of operation in there to make that string more dynamic hence the term template literals
** you can create templates that can then take some variables or code and make them dynamic.
*/


/* ES6: Arrow Functions section -- (=>) the fat arrow function
- definition/purpose: it also adds the additional functionality of binding the current scope to the function 

******
- the first part of an arrow function is we have to assign it to a variable.
- we don't have to assign it to a variable but if it's going to be a 
standalone we're going to assign it to a variable.
- we don't have to do the concatenation because that space is part of this template literal 
*/

let createFullName = (firstName, lastName) => firstName + ' ' + lastName;
console.log(createFullName("Xee", "Vang"));
// --> invoke just like a normal function



let createFullNames = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullNames("Messa", "Vang"));
/* 
- or using template literals, change code to line 117
- we don't have to do the concatenation because that space is part of this template literal 
- both of these are alot less verbose then writting a function
- In this example:
    - we omit the function keyword
    - got rid of the curly braces 
    - we got rid of the return symbol
- if the code looks like line 111 or 117, it is one line:
    - you do not need the curly brace or return keyword
    - **it is implicitly return**
*/


/*
- ****now there are a few rules with this: ****
- if you have multiple lines or curly braces are needed because you have multiple lines if we know if we want to return something 
    - then the return keyword would be needed anytime you have the curly braces or the multiple lines. 
*/

let someFunction = (a, b) => {
    let result = ' '; // this is blank string
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};
console.log(someFunction("Messa", 3));

/*
- in this example 135 - 145:
    - since there are multiple lines, we need to have curly braces
    - since we have a return value due to multiple lines, we need a return key word
    - this sample will return:
        - MessaMessaMessa ---> like the coding assignment question during wk 3
*/



/*
- another roll of the arrow function is if you just have one parameter then you don't need any parentheses you could just have a or whatever the name of your parameter is. 
    - See sample code on line 162 - 169.


let someFunction = (a) => {
    let result = ' '; // this is blank string
    for (let i = 0; i < a; i++) {
        result += a;
    }
    return result;
};
console.log(someFunction("Messa", 3));

*/

/*
- So no parentheses needed if you have zero parameters
    - then you do need the parentheses just blank parentheses 
    - See sample code on line 162 - 169.


let someFunction = (a) => {
    let result = ' '; // this is blank string
    for (let i = 0; i < a; i++) {
        result += a;
    }
    return result;
};
console.log(someFunction("Messa", 3));

*/


// ES6: Callbacks section

let userName = sentHttpRequest('getUser'); // made up function to get userName
console.log(userName);

/*
- code on line 195:
   - it is basically sending a request to get a username 
   - if we run a function like that and it reaches out to a different server to get the username
   - then we try to log user name on line 196 
        - what would happen in this situation is username would be undefined even though it looks like it should be defined 
        - it would be logged undefined = because this hasn't returned yet
        - the username hasn't come back in this line (169) of code executed 
        - before username had the value that would come back from that request to overcome this issue 
*/


/*
 - callback: is when we pass a function into another function to be executed after that code is complete 
    - so that doesn't cause a delay 
    - in JavaScript functions or objects = we can pass them into other functions as arguments
    - this will cause us to write our code a little differently

- 218 is the usual way we write the code:

let userName = sentHttpRequest('getUser'); // made up function to get userName
console.log(userName);
- might look more like line 223
*/

function logUserName(user) {
    console.log(user);
}
sendHttpRequest('getUser', logUserName); // this line is the argument 
/*
- how this works is: 
- the log username function is passed into the send HTTP request function as an argument 
- the send HTTP request function does everything it needs
- then the last line of code in that function would be a call to our log username function 
    - where it passes the username that it grabbed in as an argument
    - then this function logs it out
- you can also declare functions as arguments inside the function call anonymously rather than giving the function a name and passing it in 
*/


/* 
for example: line 241
*/
sendHttpRequest('getUser', user => console.log(userName)); // an argument

/* 
- using our arrow function:
    - this creates a function ----> "user => console.log(userName)""
    - it's anonymous because it doesn't have a name 
    - we didn't assign a name to this function 
    - it's just being used as an argument in this one call now 


- if we were going to reuse this functionality over and over again 
    - we'd want to give it a name: "logUserName" on line 254
    
    function logUserName(user) {
    console.log(user);
}
sendHttpRequest('getUser', logUserName);
    - then pass the name in like in line 257 
*/




/*
- one mistake to avoid: line 267
- w/ the paranetheses - we are so using to calling and invoking w/ the paranetheses there
*/
sendHttpRequest('getUser', logUserName());

/*
- if we put the parentheses, here (line 268):
    - what happens is this line of code is running
    - this says call my function 
    - so it will call the function 
    - then it won't work because we're not passing in an argument here 
- what we want to do is do not invoke it 
- just pass the name of the function in
    - the name of the function is referring to that function 
    - it's just like a variable name that refers to a value we're passing in the function itself 
    - not the invocation of the function 
    - so that when this send HTTP request gets to the end of what it's doing
    - it has that username, it can then call this function itself and pass in the user 
    
    
- we don't call the function when we pass it in as a 
callback 
- the function we're passing it into will call it 
- so don't put the parentheses there 
*/


/* Promises section */

/* 
- a promise = solves the same problem as a callback except they are much cleaner to write and produce code that is easier to read 
- a promise is an object that represents the eventual completion or failure of an asynchronous operation 
*/

/* */

doSomethingThatReturnsAPromise() // pretend this is a function
    .then((value) =>{           //doing this anonymously. Basically when it returns, we should receive a value, then log it out from line 303.
        console.log(value)
    }); .catch((err) => {       // however, if it fails, we will get an error 
        console.log(err)        // this will log out the error
    });

/*
- doSomethingThatReturnsAPromise() ====> calling a function to return a promise w/ different libraries
    - documentation will show which functions return promises
- this is basically like a try - catch block    
*/


function handleEvent(value) {  // names for function
    console.log(value);
}

/*
doSomethingThatReturnsAPromise()
    .then((value) =>{  
        console.log(value)
    }); .catch((err) => { 
        console.log(err)
    });
*/

/* 
- both of these two are the same kind of function (315-317 and 320-325)
- however, if you are using it multiple times, you can give it a name in the .then section see code line 335-340
 */


/*
function handleEvent(value) {  
    console.log(value);
}

function handleError(err) {
    console.log(err);
}

doSomethingThatReturnsAPromise()
    .then(handleEvent)
    .catch(handleError);
*/


/* how to print objects during wk4 class lecture */

const email = {
    author: "Natalie",
    to: "Calvin",
    message: "Heyyyy",
    read: false
}
email.message

const emailList = [
    {
        author: "Natalie",
        to: "Calvin",
        message: "Heyyyy",
        read: false,
    },
    {
        author: "Xee",
        to: "Calvin",
        message: "What's up?",
        read: true
    }
]

/* how to print all the objects to look like a string */

let emailListString = "";
for (let i =0; i < emailList.length; i++) {
    emailListString += emailList[1] + "\n";
}

alert(emailListString);


/* 
let emailListString = "";
for (let i =0; i < emailList.length; i++) {
    emailListString += emailList[1].author + "\n";
}

- .author would pull out that index array object value

let emailListString = "";
for (let i =0; i < emailList.length; i++) {
    emailListString += emailList[1].author + " : " + emailList[1].message + "\n";
}


- normal code below:
function addToListString(email) {
    emailListString += email.author + " : " + email.message + "\n"
}

- it this a good line but not what professionals would use



- arrow code below:
const addToListString(email) => {
    emailListString += email.author + " : " + email.message + "\n"
}



- no curly brackets below:
const addToListString = (email) => {
    emailListString += email.author + " : " + email.message + "\n"
}


-




emailList.forEach(addToListString);



*/