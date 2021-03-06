// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

// Rows:


// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

// Columns:


// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

// Regions


// A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

// Valid board example:


// For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/


function doneOrNot(board){
  
    const sorted = JSON.stringify([1,2,3,4,5,6,7,8,9]);
    
    function checkRows(b){
      let valid = b.reduce((result,el)=>{
        return result&&(JSON.stringify([...el].sort())===(sorted));  
      })
      return valid;
    }
    
    function checkCollums(b){
      let valid = true;
      let b2=[];
      for(let j=0;j<b.length;j++){
        for(let i=0;i<b.length;i++){
          b2.push(b[i][j]);
        }
        valid=valid&&(JSON.stringify([...b2].sort())===sorted);
        b2=[];
      }
    return valid;
    }
    
    function checkRegions(b){
      let valid = true;
      
      function checkZone(initI,initJ){ 
        let b2=[];
        for(let i=initI;i<initI+3;i++){
          for(let j=initJ;j<initJ+3;j++){
            b2.push(b[i][j]);      
          }
        }
        let res = JSON.stringify([...b2].sort());
        return res===sorted;
      }
      
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          valid=valid&&checkZone(i*3,j*3);   
        }
      }
      return valid;
    }
    return checkRows([...board])&&checkCollums([...board])&&checkRegions([...board])?'Finished!':'Try again!';
  }