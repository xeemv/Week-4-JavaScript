/* 

12/22/2021 - class lecture   

*/

/* 1-one-email.js 
Working with one email */

const emailFromNatalie = {
    author: "Natalie",
    to: "Calvin",
    message: "Heyyyy",
    read: false
}

alert(emailFromNatalie.message)


/* 
2-array-of-emails.js 
- Working with an array of emails (this variable and the array inside is used in the later examples)
*/

const emailList = [
    {
        id: 234, // id's are great incase you have lots of objects from the same person/item
        author: "Natalie",
        to: "Calvin",
        message: "Heyyyy",
        read: false
    },
    {
        id: 1654,
        author: "Xee",
        to: "Calvin",
        message: "What's up?",
        read: true
    },
    {
        id: 474,
        author: "Dylan",
        to: "Calvin",
        message: "Good day",
        read: false
    }
]

alert( emailList[0].message )


/*
3-for-loop-email-list-string.js
- Making a nice alert of the emails using a for loop
- !! Uses the emailList variable in array-of-emails.js !!
*/

let emailListString = "";
for(let i = 0; i < emailList.length; i++) {
    emailListString += emailList[i].author + ": " + emailList[i].message + "\n"; // \n = a new line
}
alert(emailListString)


/*
4-for-each-email-list-string.js
- Making a nice alert of the emails using for each
- !! Uses the emailList variable in array-of-emails.js !!
*/

let emailListString = "";
function addToListString(email) {
    emailListString += email.author + ": " + email.message + "\n"; // \n = a new line
}
emailList.forEach(addToListString);


/*
5-converting-from-normal-to-arrow.js
- The process of converting the normal function way into the more commonly used arrow function way
- !! Uses the emailList variable in array-of-emails.js !!
*/

// Normal
function addToListString(email) {
    emailListString += email.author + ": " + email.message + "\n"; // \n = a new line
}
emailList.forEach(addToListString);

/* CAN BE CONVERTED TO */

// Arrow
const addToListString = (email) => {
    emailListString += email.author + ": " + email.message + "\n"; // \n = a new line
}
emailList.forEach(addToListString);

/* CAN BE CONVERTED TO */

// No curly brackets
const addToListString = (email) => emailListString += email.author + ": " + email.message + "\n"; // \n = a new line
emailList.forEach(addToListString);

/* CAN BE CONVERTED TO */

// No parenthesis
const addToListString = email => emailListString += email.author + ": " + email.message + "\n"; // \n = a new line
emailList.forEach(addToListString);

/* CAN BE CONVERTED TO */

// Passing in the function itself
// This is the way experienced developers tend to do it
emailList.forEach( email => emailListString += email.author + ": " + email.message + "\n" ); // \n = a new line

/*
6-map-email-list-string.js
- Making a nice alert of the emails using map
- !! Uses the emailList variable in array-of-emails.js !!
*/

const emailStringList = emailList.map( e => e.author + ": " + e.message );
alert( emailStringList.join("\n\n") ); // \n\n = 2 new lines between the 2 return results

/*
7-find-email.js
- Finds an email with a particular id (or you could find it by author or whatever)
- !! Uses the emailList variable in array-of-emails.js !!
*/

const emailFromNatalie = emailList.find( email => email.id === 1654 )
alert( emailFromNatalie.message );


/*
8-filter-emails.js
- Filters emails and gives only the unread ones, then marks them all as read, then filters for unread again
- !! Uses the emailList variable in array-of-emails.js !!
*/

let unreadEmails = emailList.filter( e => !e.read ) //!e = the opposite of true
alert("You have " + unreadEmails.length + " unread emails");

// Set all emails as read
emailList.forEach( email => email.read = true );

unreadEmails = emailList.filter( e => !e.read )