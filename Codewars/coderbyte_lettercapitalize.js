function LetterCapitalize(str) {

  // code goes here
  //Break into array of string by space
  strArray = str.split(" ");
  //break each element of strArray into its own array
  for (i=0;i<strArray.length;i++)
  {
    strSplit = strArray[i].split("");
    strSplit[0] = strSplit[0].toUpperCase();
    strArray[i] = strSplit.join('');
  }
  return strArray.join(' ');

  //captilize first element of element array

}

// keep this function call here
LetterCapitalize(readline());
