function maxOfTwoNumbers(num1 , num2){
  if(num1 > num2){
    return num1;
}else if (num2 > num1){
  return num2;
}
}


function findLongestWord(arr){

  if(arr.length == 0){
    return null;
  }
  let longest = "";
  
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > longest.length){
     
	    longest = arr[i];
    }
  }
  return longest;
}


const sumNumbers=(arr) => {
    
    if (arr.length == 0) {
      return 0;
      let sum = 0;
     for ( let i = 0; i< arr.length ; i++ ) {
         sum = sum + arr[i] 
  }
}
     return sum;
   }

   function sum(arr) {
    let sum = 0;
  
    
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum += arr[i];
      } else if (typeof arr[i] === "string") {
        sum +=arr[i].length;
      } else if (typeof arr[i] === "boolean") {
        sum += arr[i];
      } else {
        throw new Error("Unsupported data type sir or ma'am");
      }
    }
  
    return sum; 
  }

function averageNumbers(arr){
 
 if (arr.length == 0){
   return 0;
 }
 let sum = 0;
 for ( let i = 0; i< arr.length ; i++ ) {
    sum =sum + arr[i];
}
return sum/arr.length
}

function averageWordLength (arr) {
  if (arr.length == 0){
    return null;
  }
  let sum = 0;
  for ( let i = 0; i< arr.length ; i++ ) {
     sum =sum + arr[i];
 }
 return sum/arr.length
 }

 function avg(arr) {
  let average = 0; 
  
  if (arr.length === 0) {
    return null; 
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      average += arr[i];
    } else if (typeof arr[i] === "string") {
      average += arr[i].length;
    } else if (typeof arr[i] === "boolean") {
      average += arr[i];
    }
  }

  average = average / arr.length; 
  average = parseFloat(average.toFixed(2)); 

  return average; 
}

function uniquifyArray(arr){

let uniqueArr = [ ];
if (arr.length == 0){
  return null;
}

for(let i = 0; i<arr.length; i++){
  let word = arr[i];
    if (uniqueArr.indexOf(word) < 0) {
      uniqueArr.push(word);
    }
}
return uniqueArr;
}


function doesWordExist(arr,str){
  if (arr.length == 0){
    return null;
  }
  for (let  i = 0 ; i < arr.length; i++) { 
      if (arr[i] == str) {
            //some code
            return true;
         }
      } 
       return false
     }
    


function howManyTimes(arr,str){
  if (arr.length == 0){
    return 0;
  }
  let count = 0;
  for (let  i = 0 ; i < arr.length; i++) { 
      if (arr[i] == str) {
            count ++
         }
      } 
      return count;
    }



    function greatestProduct(matrix) {
      let greatest = 0;
      
      let horizontal = 0;
      let vertical = 0;
      let diagonal = 0;
      let inverseDiagonal = 0
      
      for (let ver = 0; ver < matrix.length - 3; ver++) {
        for (let hor = 0; hor < matrix.length - 3; hor++) {
          horizontal = matrix[ver][hor] * matrix[ver][hor+1] * matrix[ver][hor+2] * matrix[ver][hor+3]
          if (horizontal > greatest) { greatest = horizontal}
          
          vertical = matrix[ver][hor] * matrix[ver+1][hor] * matrix[ver+2][hor] * matrix[ver+3][hor]
          if (vertical > greatest) { greatest = vertical}
          
          diagonal = matrix[ver][hor] * matrix[ver+1][hor+1] * matrix[ver+2][hor+2] * matrix[ver+3][hor+3]
          if (diagonal > greatest) { greatest = diagonal}
          
          inverseDiagonal = matrix[ver][hor+3] * matrix[ver+1][hor+2] * matrix[ver+2][hor+1] * matrix[ver+3][hor]
          if (inverseDiagonal > greatest) { greatest = inverseDiagonal}
          
          // first iteration:  ver 0 hor 0
          // horizontal:       0 0 * 0 1 * 0 2 * 0 3
          // vertical:         0 0 * 1 0 * 2 0 * 3 0
          // diagonal:         0 0 * 1 1 * 2 2 * 3 3
          // inverseDiagonal:  0 3 * 1 2 * 2 1 * 3 0
          
        }
      }
      return greatest
    }