// YOUR CODE BELOW
function taxCalculator(num, state){
  var taxNY = num*1.04;
  var taxNJ= num*1.06625;
  switch(state){
    case 'NY':
      return taxNY;
    case 'NJ':
      return taxNJ;
    }
  }
