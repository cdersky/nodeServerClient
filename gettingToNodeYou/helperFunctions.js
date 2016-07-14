'use strict'
module.exports.grabFlagValue = function(flag){
  // returns the value printed after a specified flag
  var terminalItems = process.argv; // array of items
  var result;
  for(let i = 0; i < terminalItems.length-1; i++){
    if(terminalItems[i] === flag){
      result = terminalItems[i+1];
      break;
    }
  }
  return result;
}