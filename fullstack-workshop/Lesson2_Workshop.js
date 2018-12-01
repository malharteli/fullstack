// onlyOdds
function onlyOdds(num){
  var ansArr = [];
  if (num<=0){
    return 0
  };
  for (i=1;i<num;i++){
    if (i%2!===0){
      ansArr.push(i);
    }
  }
  return ansArr.reduce((a,b)=>a+b);
}

// crazyCaps
function crazyCaps(str){
  var strArr = str.split('');
  for(i=0;i<strArr.length;i++){
    if (i%2===0){
      strArr[i] = strArr[i].toLowerCase();
    }else strArr[i]= strArr[i].toUpperCase();
  }
  return strArr.join('');
}
// bacteriaTime
function bacteriaTime(numStart, numEnd){
  var tempStart = numStart;
  var counter = 0;
  if (numEnd<numStart){
    return "targetNum must be larger than currentNum";
  }
  for(;tempStart<numEnd;){
    counter++;
    tempStart*=2;
  }
  return counter*20;
}
// exponentiate
function exponentiate(base, power){
  var ansBase = base;
  if (power===0){
    return 1;
  }
  for(count=1;count<power; count++){
      ansBase*=base;
  }
  return ansBase;
}
// mySlice
function mySlice(originalString, startIdx, endIdx){
  if (startIdx==null){
    startIdx = 0;
  }
  if (endIdx==null){
    endIdx = originalString.length;
  }
  var strArr = originalString.split('');
  if (endIdx < strArr.length){
    strArr.splice(endIdx, strArr.length);
  }
  if (startIdx > 0){
    strArr.splice(0,startIdx)
  }
  return strArr.join('')
}
// myIndexOf
function myIndexOf(source, searchValue, strIdx){
  if (strIdx > 0){
    source = source.substring(strIdx, source.length)
  } else strIdx = 0
  var count;
  var searchReg = new RegExp(searchValue, "i");
  return source.search(searchReg) + strIdx;
}
// mostVowels
function mostVowels(str){
  var strArr= str.split(" ");
  var vowArr= strArr.map((c)=>c.toLowerCase().match(/[a,e,i,o,u]/gi))
  var mostIdx=0;
  for(i=0;i<strArr.length;i++){
    if (vowArr[i]!==null){
      if (vowArr[i].length>vowArr[mostIdx].length){
        mostIdx=i;
      }
    }
  }
  if (vowArr[mostIdx]!==null){
    return strArr[mostIdx].replace(/[\.\,\?!\s]/g, "");
  }else return "";
}



describe('onlyOdds', () => {

  it('is a function', () => {
    expect(typeof onlyOdds).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = onlyOdds(6);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of all odd nums between the provided argument and 0', () => {
    let returnedValue = onlyOdds(10);
    expect(returnedValue).toEqual(9 + 7 + 5 + 3 + 1);
  });

  it('returns 0 if inputted argument is less than 1', () => {
    let returnedValue = onlyOdds(-5);
    expect(returnedValue).toEqual(0);
  });

});
describe('crazyCaps', () => {

  it('is a function', () => {
    expect(typeof crazyCaps).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = crazyCaps('any value');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a string with alternating lower-case and upper-case letters', () => {
    let returnedValue = crazyCaps('this is crazy');
    expect(returnedValue).toEqual('tHiS Is cRaZy');
  });

});
describe('bacteriaTime', () => {

  it('is a function', () => {
    expect(typeof bacteriaTime).toEqual('function');
  });

  it('returns the number of minutes required to reach the target', () => {
    let returnedValue = bacteriaTime(1, 8);
    expect(returnedValue).toEqual(60);
  });

  it('returns the number of minutes required to reach a large target', () => {
    let returnedValue = bacteriaTime(3, 6000);
    expect(returnedValue).toEqual(220);
  });

  it('returns a string warning if the targetNum is invalid', () => {
    let returnedValue = bacteriaTime(100, 50);
    expect(returnedValue).toEqual('targetNum must be larger than currentNum');
  });

});
describe('exponentiate', () => {

  it('is a function', () => {
    expect(typeof exponentiate).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = exponentiate(1, 1);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the value of the first num raised to the second', () => {
    let returnedValue = exponentiate(3, 6);
    expect(returnedValue).toEqual(Math.pow(3, 6));
  });

  it('returns 1 if the power is 0', () => {
    let returnedValue = exponentiate(20, 0);
    expect(returnedValue).toEqual(1);
  });

});
describe('mySlice', () => {

  it('is a function', () => {
    expect(typeof mySlice).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = mySlice('a piece of pie');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a new string starting at the startIdx', () => {
    let returnedValue = mySlice('a piece of pie', 2);
    expect(returnedValue).toEqual('piece of pie');
  });

  it('returns a new string with the correct starting and ending indices', () => {
    let returnedValue = mySlice('a piece of pie', 2, 7);
    expect(returnedValue).toEqual('piece');
  });

  it('returns the original string if no indices are inputted', () => {
    let returnedValue = mySlice('a piece of pie');
    expect(returnedValue).toEqual('a piece of pie');
  });

});

describe('mostVowels', () => {

  it('is a function', () => {
    expect(typeof mostVowels).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the word with the most vowels', () => {
    let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
    expect(returnedValue).toEqual('measure');
  });

  it('returns the word with the most vowels even if it\'s the last string in the sentence', () => {
    let returnedValue = mostVowels('Give her hell from us, Peeves.');
    expect(returnedValue).toEqual('Peeves');
  });

  it('returns an empty string if none of the inputted words have vowels', () => {
    let returnedValue = mostVowels('why dry my sly lynx?');
    expect(returnedValue).toEqual('');
  });

});
