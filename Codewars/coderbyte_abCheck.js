function ABCheck(str) {

  // code goes here
  var abSub = str.substring((str.indexOf("a")+1), str.indexOf("b"));
  function aCheck(str){
    if (str.includes('a')){
        return aCheck(str.substring((str.indexOf("a")+1), str.length));

    }else return str;
  }
  function bCheck(str){
    if (str.includes('b')){
        return aCheck(str.substring(0, str.indexOf("b")));

    }else return str;
  }
if(bCheck(aCheck(abSub)).length == 3) {return true} else return false;

}

// keep this function call here
ABCheck(readline());


function ABCheck(str) {

  patt = /(a...b|b...a)/

    return patt.test(str);

}

function ABCheck(str) {
  return str.match(/[ab](...)[ab]/g) !== null;
}

// keep this function call here
ABCheck(readline());
