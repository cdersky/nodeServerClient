'use strict'

// returns the value printed after a specified flag
module.exports.grabFlagValue = function(flag){
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

// ask questions in terminal
module.exports.ask = function(idx){
  var fortunes = [`things are looking up`, `you will go far`, `try again`];
  process.stdout.write(fortunes[idx]);
}