// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
    if (names.length<1){
      return '';
    }
    if (names.length===1){
      return names[0].name;
    }
    let result ='';
    for(let i=0;i<names.length-1;i++){
      result+=names[i].name+(i===names.length-2?'':', ');
    }
    result+=' & '+names[names.length-1].name;
    return result;
  }