// YOUR CODE BELOW
function lastCharacter(strA, strB){
  if (strA.endsWith(strB.charAt(strB.length-1))){
    return true;
  }else return false;
}
