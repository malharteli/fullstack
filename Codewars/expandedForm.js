/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!*/

function expandedForm(num) {
  var numString= '';
  var numArray = num.toString().split('').map(Number).reverse().map(function(c, i){return c *=Math.pow(10,i);});
  var n;
  for (n = (numArray.length -1); n >= 0; n--){
  { if (numArray[n]!==0){
    if (n == 0){
      numString= numString.concat(numArray[n].toString());
    } else
      numString= numString.concat(numArray[n].toString() + ' + ');
    } else if (numString.length>0 ){
      numString = numString.slice(0, -3);
    };
    }
  }
  return numString;


}
