function FirstFactorial(num) {

  // code goes here
  var result =1;
  for(i=1; i<=num;i++){
      result *= i;
   }
    return result;
}

// keep this function call here
FirstFactorial(readline());

function FirstFactorial(num) {

  if (num === 0 || num === 1) {
    return 1;
  }
  else {
   	return num * FirstFactorial(num - 1);
  }
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
