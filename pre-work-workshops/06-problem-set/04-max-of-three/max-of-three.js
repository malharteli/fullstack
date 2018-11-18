// YOUR CODE BELOW
function maxOfThree(numA, numB, numC){
  var numArr = [numA, numB, numC];
  var sortedArr = numArr.sort((a,b)=>b-a);
  return sortedArr[0];
}
