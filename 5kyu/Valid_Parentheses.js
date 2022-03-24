// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens){
    if(!parens) return true;
    if(parens.length<2) return false;
    let check=0;
    for(let i=0;i<parens.length;i++){
      parens[i]=='('?check++:check--;
      if(check<0)return false;
    }
    return (check===0)?true:false;
  }