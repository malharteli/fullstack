// styleMePretty
function styleMePretty() {
    let truth = '';
    function innerBeauty(count) {
      let result = '';
      while(count > 0) {
        count--;
        if(count===2) {
          result += 'Unformatted code';
        }
      }
      result += ' is difficult to parse';
      return result;
    }
  truth += innerBeauty(5);
  truth += ' for humans if not for machines';
  return truth;
}

// justInCamelCase
function justInCamelCase(undername) {
  let camelCaseOutput = "";
    let foundUnder = false;
    for(let i = 0; i<undername.length; i++) {
      if (undername[i] === "_") {
        foundUnder = true;
        } else {
            if (foundUnder) {
              camelCaseOutput += undername[i].toUpperCase();
              foundUnder = false;
            } else {
              camelCaseOutput += undername[i];
            }
          }
      }
      return camelCaseOutput;
}

// getMax
function getMax(f, s, a) {
  if (f > s) {
    if (f > a) {
      return f;
    }
    return a;
  } else if (s > a) {
    return s;
  } else {
    return a;
  }
}



describe('styleMePretty', function() {

  it('is a function', function() {
    expect(typeof styleMePretty).toEqual('function');
  });

  it('returns a string', function() {
    let returnedValue = styleMePretty();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct message', function() {
    let returnedValue = styleMePretty();
    expect(returnedValue).toEqual(
      'Unformatted code is difficult to parse for humans if not for machines'
    );
  });

});
describe('justInCamelCase', function() {

  it('is a function', function() {
    expect(typeof justInCamelCase).toEqual('function');
  });

  it('returns a string', function() {
    let returnedValue = justInCamelCase('any string value');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a camelCased string given a string with one underscore', function() {
    let returnedValue = justInCamelCase('snake_case');
    expect(returnedValue).toEqual('snakeCase');
  });

  it('returns a camelCased string given a string with two underscores', function() {
    let returnedValue = justInCamelCase('underscore_the_point');
    expect(returnedValue).toEqual('underscoreThePoint');
  });

  it('returns the inputted string unchanged given a lower-case string with no underscores', function() {
    let returnedValue = justInCamelCase('lowercase');
    expect(returnedValue).toEqual('lowercase');
  });

});
describe("getMax", function() {

  it("is a function", function() {
    expect(typeof getMax).toEqual('function');
  });

  it("returns a number", function() {
    let result = getMax(1, 2, 3);
    expect(typeof result).toEqual('number');
  });

  it("returns the first number if it is the largest", function () {
    let result = getMax(30, 20, 10);
  	expect(result).toEqual(30);
  });

  it("returns the second number if it is the largest", function () {
    let result = getMax(20, 60, 40);
    expect(result).toEqual(60);
  });

  it("returns the third number if it is the largest", function () {
    let result = getMax(-300, -200, -100);
    expect(result).toEqual(-100);
  });

});
