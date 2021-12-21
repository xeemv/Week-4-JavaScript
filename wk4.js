var x = 10;
{ 
    let x = 2;
}
// from line 2 - 4, this is considered a block.
// out side of this section, the x is still equal to 10
// the 2 is only in existance inside the block
// let = allows us to say w/in this block, x is equal to 2 
    // this does not impact the x outside of that block

// var x = 10;
// { 
//     x = 2;
// }
/* if you took out the let, then the x would still be considered 2 outside of that section
*/

// var x = 10;
// { 
//    var x = 2;
// }
// if we used the keyword var
    // that would change the original variable's value
    // meaning var x = 10 is the original value
    // therefore, using var would make this variable 2 and no longer 10


// var x = 10;
// { 
//    var x = 2;
// }
// constant = we cannot change the value of a variable once it is set this is useful for when we have 