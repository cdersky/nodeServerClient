'use strict'
var fxn = require('./helperFunctions');

//////////////////////////////////////////////////////////
//                                reserved word: __dirname
//////////////////////////////////////////////////////////
// node allow you to your absolute path with reserved word: __dirname
console.log(`your current file path is: ${__dirname}`)


//////////////////////////////////////////////////////////
//                                      the process object
//////////////////////////////////////////////////////////
/* from the docs: The process object is a global that provides 
information about, and control over, the current Node.js process. 
As a global, it is always available to Node.js applications 
without using require().*/

/// 1. collect information from the terminal
/////// a. type `node intro.js` into the terminal to run the script on the following line
console.log(`process.argv: ${process.argv}`); 
/////// a. (continued) this lists the file paths of the elements typed in the terminal 
/////// printed to the terminal: /usr/local/bin/node,/Users/CBhome/code/projects/gettingToNodeYou/intro.js
/////// a. (continued) if you just print the variable like so:
console.log(process.argv) 
// this prints an array of the file paths of the elements typed in the terminal
/////// printed to the terminal: [ '/usr/local/bin/node', '/Users/CBhome/code/projects/gettingToNodeYou/intro.js' ]
/* Lets digest this. The first thing typed in the terminal is `node`. The first element in the process.argv is '/usr/local/bin/node', aka the path to the node file on your local machine. The second thing typed in the terminal is `intro.js`. The second element in the process.argv is '/Users/CBhome/code/projects/gettingToNodeYou/intro.js', aka the path to the file you ran node on.
**/

/////// b. type `node intro.js -a flagOne -b flagTwo` into the terminal to run the script on the following line
/////// printed to the terminal: 
/*
[ '/usr/local/bin/node',
  '/Users/CBhome/code/projects/gettingToNodeYou/intro.js',
  '-a',
  'flagOne',
  '-b',
  'flagTwo' ]
*/
/////// this prints all the items typed in the terminal
/* 
SUMMARY, the process.argv variable contains all the items typed in the terminal. If a the item is a script, the process.argv will store the file path.
*/

var var1 = fxn.grabFlagValue('-a');
var var2 = fxn.grabFlagValue('-b');
if(var1 || var2){
  console.log(var1, var2)
}
