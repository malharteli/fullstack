// YOUR CODE BELOW
function everyWhichWay(numA, numB, numC){
  var sumAB = numA + numB;
  var difAB = numA - numB;
  var prodAB = numA * numB;
  var fracAB = numA/numB;
  switch(numC){
    case sumAB:
      return "sum";
    case difAB:
      return "difference";
    case prodAB:
      return "product";
    case fracAB:
      return "fraction";
    default:
      return null;
  }
}
