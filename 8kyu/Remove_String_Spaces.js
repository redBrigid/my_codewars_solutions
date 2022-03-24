// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    newString='';
      for(let i=0;i<x.length;i++){
        newString+=x[i]!=' '?x[i]:'';
      }
    return newString;
  }