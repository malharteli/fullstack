// fullstackHQ
let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('New York State');

    function innerFunction(state) {
      city = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}
let counter = 0;

// incrementalChange
function incrementalChange(num){
  counter+=num;
  return counter;
}

//sumThingsWrong
function sumThingsWrong(num1, num2) {
  let sum = 0;
  sum += num1;
  sum += num2;

  return sum;
}

// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = 'test suceeding';

function testOne() {
  return testOneMessage;
}


// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = 'test failing';

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc(a) {
  testTwoMessage = 'test succeeding';
  return a;
}


// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = 'test failing';

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = 'test succeeding';
  }

  let msg = getMessage(a);
  return msg;

  function getMessage(value) {
    if (value) {
      return testThreeMessage;
    }

    return 'test failing';
  }
}


// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = 'test succeeding';

function testFour(msg) {
  function innerFunc(msg) {
    msg = msg

    function doubleInner(ms) {
      testFourMessage  msg;
      return testFourMessage;
    }

    testFourMessage = doubleInner('test failing')
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}


describe('fullstackHQ', () => {

  it('is a function', () => {
    expect(typeof fullstackHQ).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = fullstackHQ();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct string', () => {
    let returnedValue = fullstackHQ();
    expect(returnedValue).toEqual('Fullstack HQ is at Planet Earth, United States, New York State, New York City');
  });

});
describe('incrementalChange', () => {

  // set the global counter variable to 0 before each test
  beforeEach(() => {
    counter = 0;
  });

  it('is a function', () => {
    expect(typeof incrementalChange).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = incrementalChange(1);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the current value of the counter', () => {
    let returnedValue1 = incrementalChange(10);
    expect(returnedValue1).toEqual(counter);

    let returnedValue2 = incrementalChange(20);
    expect(returnedValue2).toEqual(counter);
  });

  it('updates the global counter variable', () => {
    incrementalChange(100);
    incrementalChange(-50);
    expect(counter).toEqual(50);
  });

});

describe('testOne', () => {

  it('returns test succeeding', () => {
    let returnedValue = testOne('test succeeding');
    expect(returnedValue).toEqual('test succeeding');
  });

});


describe('testTwo', () => {

  it('returns test succeeding', () => {
    let returnedValue = testTwo();
    expect(returnedValue).toEqual('test succeeding');
  });

});


describe('testThree', () => {

  it('returns test succeeding', () => {
    let returnedValue = testThree(true);
    expect(returnedValue).toEqual('test succeeding');
  });

});


describe('testFour', () => {

  it('returns test succeeding', () => {
    let returnedValue = testFour('test failing');
    expect(returnedValue).toEqual('test succeeding');
  });

});
