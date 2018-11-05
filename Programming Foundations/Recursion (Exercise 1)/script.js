console.log("yeah this works.")

/*
  Make a function that computes the factorial recursively.
  A Factorial is when you take a number n and multiply it by each preceding integer until you hit one.
   ie n * (n-1) * (n-2)... 3 * 2 * 1

   call the function factorial

  */

function factorial(n){
  if (n  < 2) return 1;
  return n * factorial(n-1);
};


describe('factorial', function(){
  it ('factorials', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});
