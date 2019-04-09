/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
THE CONTAINERS: VARIABLES, CONSTANTS, AND LETS
A. There exist three containers for storing data. Variables, constants, and lets. 
To understand the difference between container types, we must first understand their 
properties. Below is a general definition of a few properties followed by a comparison
and contrast of container types. */

//  1. Mutability, Hoisting, and Scope 
//   a. Mutability: the property determining whether or not a variable can be re-assigned 
// after declaration. 
var weather = "rainy";
var weather = "sunny";
console.log(weather) // prints "sunny"


    // b. Hoisting: the property determining whether or not declarations of 
// containers of code (variables, fx's, lets) will be 'lifted' to the top of
// the code before the program is executed.

console.log(str);  // will only print "undefined"
var str = "will not throw RFNC ERR above"; 
console.log(str);  // will print the value 
             // vs
console.log(str2);  // will result in Reference Error
const str2 = "will throw RFNC ERR above";
console.log(str2);  // will print the value 

// If a declaration type is hoistable, your code will not produce a REFERENCE ERROR
//if they are referenced before they're declared, because, the delcaration (it's name) 
//is being lifted to the top of the code before the program reads a single line of code.


    // c.Scope: defines the accesibility of a declared variable outside of the code block
//(function code blocks, if statements, for loops) according to the type of container 
//and the type of code block within which it's been declared.
    
if (apple === orange){
    var gala = "clementine";
    let granny = "satsuma";
    const fiji = "navel";
}
// OUTSIDE the if statement code block...
console.log( gala, granny, fiji);
// var gala IS accessible, the but let and const granny/fiji are not. 

// Scope will be covered more in depth later. 
    

/*
2. OTHER CONTAINER TYPES & THEIR PROPERTIES*/

//  a. Constants: containers whose values can never change (ie IMMUTABLE). They are block scoped,
// and not hoisted. Contstants MUST be assigned a value on the same line it's declared. 

const name = "Evan";
const name = "Bergeron";
console.log(name); //prints "Evan"

function (recipe){
    console.log(ingr); // throws error, ingr is a constant and code-blocked to the "if" below
    if(food !== seasoned){
        console.log(ingr); // error, const IS NOT hoistable
        const  ingr= "add salt";
        console.log(ingr); // prints "add salt" 
    } else {
        console.log(ingr); // throws error, ingr is now a const of a seperate code block (else) and is not hoistable
        const ingr= "dig in"
        console.log(ingr); //prints "dig in"
    }
    console.log(ingr); // error, const ingr is code block-scoped to the if-else chain.
}

console.log(const); // error, const can't be reached out of its block scope. 



// b. Let: containers for reassignable values. Let is a variable that doesn't have 
// to be initialized when it's declareed. Let is block-limited in scope and ONLY 
// hoisted within the code block it's been called.

console.log(aVariable);  // prints undefined, this var is hoisted, but its value isn't 
console.log(aLet); // error. Let's aren't accessible outside of the scope in which they're called. 

const VEGGIE = "parsnip"
if VEGGIE === "parsnip"){
    console.log(aLet); //prints undefined, LET is hoisted only to here. 
    
    var (aVariable) = "not a parsnip";
    let (aLet) = "a bitter and pale carrot";
}


/* 3. A summary of Containers and Their Properties: 

  1. VARIABLES:
  mutable: yes
  hoisted: yes
  scoped to function: yes (called in f(x) ? : available in f(x) only)
  scoped to if block: no (called in if block? : not available outside if)
  scoped to loop block: no
  
  2. LETS:
  mutable: yes
  hoisted: no (only to code block?)
  scoped to functions: yes
  scoped to if blocks: yes
  scoped to loops blocks: yes
  
  3: CONSTANTS:
  mutable: no
  hoisted: no
  scoped to functions: yes
  scoped to if blocks: yes
  scoped to loop blocks: yes
*/