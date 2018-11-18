function FormattedDivision(num1,num2) {

  // code goes here
  return (num1/num2).toFixed(4);

}

// keep this function call here
function myAge(){
  return (10+5)*2/3+20-8/2;
}

function greeting(name){
  if (name==null){return "Hello!"}
  else return "Hello " + name + "!";
}

function doYouPlayTheTheremin(name){
  if (name.toLowerCase().startsWith("s")){
    return true;
  }else return false;
}

// YOUR CODE BELOW
function lastCharacter(strA, strB){
  if (strA.endsWith(strB.charAt(strB.length-1))){
    return true;
  }else return false;
}

// YOUR CODE BELOW
function maxOfThree(numA, numB, numC){
  var numArr = [numA, numB, numC];
  var sortedArr = numArr.sort((a,b)=>b-a);
  return sortedArr[0];
}

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

describe('greeting', () => {

  it('is a function', () => {
    expect(typeof greeting).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = greeting();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a personalized greeting, given a name', () => {
    let returnedValue = greeting('Layla');
    expect(returnedValue).toEqual('Hello Layla!');
  });

  it('returns an anonymous greeting if no name is provided', () => {
    let returnedValue = greeting();
    expect(returnedValue).toEqual('Hello!');
  });

});

describe('doYouPlayTheTheremin', () => {

  it('is a function', () => {
    expect(typeof doYouPlayTheTheremin).toEqual('function');
  });

  it('returns an boolean', () => {
    let returnedValue = doYouPlayTheTheremin('Mark');
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if the first letter of the name starts with s', () => {
    let returnedValue = doYouPlayTheTheremin('sarah');
    expect(returnedValue).toEqual(true);
  });

  it('returns true if the first letter of the name starts with S', () => {
    let returnedValue = doYouPlayTheTheremin('Sarah');
    expect(returnedValue).toEqual(true);
  });

  it('returns false given any other input', () => {
    let returnedValue = doYouPlayTheTheremin('Frank');
    expect(returnedValue).toEqual(false);
  });

});


describe('lastCharacter', () => {

  it('is a function', () => {
    expect(typeof lastCharacter).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = lastCharacter('happy string1', 'happy string2');
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if both strings end with the same character', () => {
    let returnedValue = lastCharacter('funiful', 'wonderful');
    expect(returnedValue).toEqual(true);
  });

  it('returns false if the strings end with different characters', () => {
    let returnedValue = lastCharacter('happy', 'sad');
    expect(returnedValue).toEqual(false);
  });

});

describe('maxOfThree', () => {

  it('is a function', () => {
    expect(typeof maxOfThree).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = maxOfThree(1, 2, 3);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the first number if it is the largest', () => {
    let returnedValue = maxOfThree(10, 8, 6);
    expect(returnedValue).toEqual(10);
  });

  it('returns the second number if it is the largest', () => {
    let returnedValue = maxOfThree(20, 40, 10);
    expect(returnedValue).toEqual(40);
  });

  it('returns the third number if it is the largest', () => {
    let returnedValue = maxOfThree(3, 6, 9);
    expect(returnedValue).toEqual(9);
  });

});

describe('everyWhichWay', () => {

  it('is a function', () => {
    expect(typeof everyWhichWay).toEqual('function');
  });

  it('returns "sum" if the sum of the first two numbers equals the third', () => {
    let returnedValue = everyWhichWay(1, 2, 3);
    expect(returnedValue).toEqual('sum');
  });

  it('return "difference" if the first number minus the second equals the third', () => {
    let returnedValue = everyWhichWay(10, 9, 1);
    expect(returnedValue).toEqual('difference');
  });

  it('returns "product" if the product of the first two numbers equals the third', () => {
    let returnedValue = everyWhichWay(10, 5, 50);
    expect(returnedValue).toEqual('product');
  });

  it('returns "fraction" if the first number divided by the second equals the third', () => {
    let returnedValue = everyWhichWay(30, 3, 10);
    expect(returnedValue).toEqual('fraction');
  });

  it('returns if none of the other conditions are true', () => {
    let returnedValue = everyWhichWay(124, 2345, 1);
    expect(returnedValue).toEqual(null);
  });

});
