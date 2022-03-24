// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    const collectedOdd = []; 
    let newArray=[];
    for(let i=0;i<array.length;i++){
      if(array[i]%2){
        collectedOdd.push(array[i]);
      }
    }
    
   function mySort(arr){
     const sortedArray=[];
     for(let i=0;i<arr.length;i++){
       let theSmallest=arr[i];
       for(let j=i;j<arr.length;j++){
         if(arr[i]>arr[j]){
           let temp=arr[j];
           arr[j]=arr[i];
           arr[i]=temp;
           }
       }
       sortedArray.push(arr[i]);
     }
     return sortedArray;
   }
    
    const sortedCollectedOdd=mySort(collectedOdd);
    let index=0;
    for(let i=0;i<array.length;i++){
      if(array[i]%2){
        newArray.push(sortedCollectedOdd[index]);
        index++;
      }else{
        newArray.push(array[i]);
      }
    }
    return newArray;
  }