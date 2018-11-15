function ABCheck(str) {

  // code goes here
  strArray = str.split("");
  return (strArray.indexOf('b')- strArray.indexOf('a'));
  //if ((strArray.indexOf('b')- strArray.indexOf('a'))==3){return true;}else return false;

}

// keep this function call here
ABCheck(readline());
